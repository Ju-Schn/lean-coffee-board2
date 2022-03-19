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
    <>
      <h1>Lean Coffee Board</h1>
      <EntryList role="list">
        {entries
          ? entries.map(({ text, author, _id, color, tempId, created }) => (
              <li key={_id ?? tempId}>
                <Entry
                  text={text}
                  author={author}
                  color={color}
                  created={created}
                  _id={_id}
                  onClick={() => handleDeleteEntry(_id)}
                />
              </li>
            ))
          : '... loading ...'}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </>
  ) : (
    <CreateAuthor onSubmit={handleAuthorInput} />
  );

  function handleAuthorInput(author, color) {
    setAuthorName(author);
    setAuthorColor(color);
  }

  async function handleNewEntry(text) {
    let now = dayjs();
    const newEntry = {
      text,
      author: authorName,
      color: authorColor,
      tempId: Math.random(),
      created: now.format('D.MM.YY,' + ' HH:mm'),
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
    await fetch('/api/entries/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
  }
}

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
