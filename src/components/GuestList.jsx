import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";

const GuestList = ({ guests, addGuest, removeGuest, toggleOvernight, onNameChange }) => {
  return (
    <div style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} className="p-4 rounded shadow mb-6 border-2 max-w-3xl w-full mx-auto">
      <h2 style={{ color: 'var(--color-text)' }} className="text-xl font-semibold mb-2">Guests</h2>
      <ul className="mb-4">
        {guests.map((guest, idx) => (
          <li key={guest.id} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-2 gap-2 sm:gap-0">
            <input
              className="mr-2 px-2 py-1 rounded border-2 focus:border-[var(--color-accent)] w-full sm:w-auto"
              style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }}
              value={guest.name}
              onChange={e => onNameChange(guest.id, e.target.value)}
            />
            <span
              className={"inline-block w-44 sm:w-44 px-2 font-semibold flex justify-center items-center text-center gap-1 whitespace-nowrap"}
              style={{ color: guest.overnight ? 'var(--color-accent)' : 'var(--color-primary)' }}
            >
              {guest.overnight ? "Sleeping Over" : "Day Stay"  }
            </span>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                className="px-2 py-1 text-xs rounded border-2 transition-colors w-1/2 sm:w-auto flex items-center justify-center gap-1"
                style={{ background: 'var(--color-primary)', color: 'var(--color-background)', borderColor: 'var(--color-secondary)' }}
                onClick={() => toggleOvernight(guest.id)}
                aria-label={guest.overnight ? "Switch to Day Stay" : "Switch to Sleeping Over"}
              >
                {guest.overnight ? <GiNightSleep size={16} /> : <WiDayCloudy size={18} /> }
              </button>
              <button
                className="px-2 py-1 text-xs rounded border-2 transition-colors w-1/2 sm:w-auto"
                style={{ background: 'var(--color-accent)', color: 'var(--color-background)', borderColor: 'var(--color-secondary)' }}
                onClick={() => removeGuest(guest.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="px-4 py-2 rounded border-2 font-semibold transition-colors w-full sm:w-auto"
        style={{ background: 'var(--color-secondary)', color: 'var(--color-text)', borderColor: 'var(--color-accent)' }}
        onClick={addGuest}
      >
        Add Guest
      </button>
    </div>
  );
};

export default GuestList; 