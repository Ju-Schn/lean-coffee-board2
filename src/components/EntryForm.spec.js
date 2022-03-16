import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm';

describe('EntryForm', () => {
  it('renders one input and one button', () => {
    render(<EntryForm />);

    const newEntryInput = screen.getByLabelText(/add entry/i);
    const submitButton = screen.getByRole('button', { name: /add entry/i });

    expect(newEntryInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
