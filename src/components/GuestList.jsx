import React from "react";

const GuestList = ({ guests, addGuest, removeGuest, toggleOvernight, onNameChange }) => {
  return (
    <div style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} className="p-4 rounded shadow mb-6 border-2 max-w-3xl w-full mx-auto">
      <h2 style={{ color: 'var(--color-text)' }} className="text-xl font-semibold mb-2">Guests</h2>
      <ul className="mb-4">
        {guests.map((guest, idx) => (
          <li key={guest.id} className="flex items-center justify-between mb-2">
            <input
              className="mr-2 px-2 py-1 rounded border-2 focus:border-[var(--color-accent)]"
              style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }}
              value={guest.name}
              onChange={e => onNameChange(guest.id, e.target.value)}
            />
            <span
              className={"inline-block w-32 text-center px-2 font-semibold"}
              style={{ color: guest.overnight ? 'var(--color-accent)' : 'var(--color-primary)' }}
            >
              {guest.overnight ? "Overnight" : "Non-Overnight"}
            </span>
            <button
              className="ml-2 px-2 py-1 text-xs rounded border-2 transition-colors"
              style={{ background: 'var(--color-primary)', color: 'var(--color-background)', borderColor: 'var(--color-secondary)' }}
              onClick={() => toggleOvernight(guest.id)}
            >
              Toggle
            </button>
            <button
              className="ml-2 px-2 py-1 text-xs rounded border-2 transition-colors"
              style={{ background: 'var(--color-accent)', color: 'var(--color-background)', borderColor: 'var(--color-secondary)' }}
              onClick={() => removeGuest(guest.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="px-4 py-2 rounded border-2 font-semibold transition-colors"
        style={{ background: 'var(--color-secondary)', color: 'var(--color-text)', borderColor: 'var(--color-accent)' }}
        onClick={addGuest}
      >
        Add Guest
      </button>
    </div>
  );
};

export default GuestList; 