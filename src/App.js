import styled from 'styled-components';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';
import useSWR from 'swr';
import CreateAuthor from './components/CreateAuthor';
import { useState } from 'react';
import dayjs from 'dayjs';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const [authorName, setAuthorName] = useState('');
  const [authorColor, setAuthorColor] = useState('');
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  });

  if (entriesError) return <h1>Sorry, could not fetch.</h1>;

  return authorName ? (
    <Grid>
      <h1>Lean Coffee Board</h1>
      <EntryList role="list">
        {entries
          ? entries.map(({ text, author, _id, color, tempId, createdAt }) => (
              <li key={_id ?? tempId}>
                <Entry
                  text={text}
                  author={author}
                  color={color}
                  createdAt={createdAt}
                  _id={_id}
                  onDelete={() => handleDeleteEntry(_id)}
                  onCheck={() => handleCheck(_id)}
                />
              </li>
            ))
          : '... loading ...'}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </Grid>
  ) : (
    <CreateAuthor onSubmit={handleAuthorInput} />
  );

  function handleAuthorInput(author, color) {
    setAuthorName(author);
    setAuthorColor(color);
  }

  async function handleNewEntry(text) {
    const newEntry = {
      text,
      author: authorName,
      color: authorColor,
      tempId: Math.random(),
      isChecked: false,
    };

    mutateEntries([...entries, newEntry], false);

    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });

    mutateEntries();
  }

  async function handleDeleteEntry(_id) {
    const filteredEntries = entries.filter(entry => entry._id !== _id);
    mutateEntries(filteredEntries, false);
    await fetch('/api/entries/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });

    mutateEntries();
  }

  async function handleCheck(_id) {
    await fetch('/api/entries/mark-as-done', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });

    mutateEntries();
  }
}

const EntryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 15px;
  list-style: none;
  overflow-y: auto;
  padding: 12px;
`;

const Grid = styled.section`
  display: grid;
  height: 100vh;
  grid-template-rows: 40px auto 40px;
`;
