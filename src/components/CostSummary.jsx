import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";

const CostSummary = ({ guests, overnightCost, nonOvernightCost, totalCost }) => {
  return (
    <div style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} className="p-6 rounded shadow border-2 max-w-3xl w-full mx-auto">
      <h2 style={{ color: 'var(--color-text)' }} className="text-xl font-semibold mb-2">Cost Summary</h2>
      <div className="overflow-x-auto">
        <table className="w-full mb-4 min-w-[350px]">
          <thead>
            <tr>
              <th style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)' }} className="text-left">Name</th>
              <th style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)' }}>Status</th>
              <th style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)' }}>Cost</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id}>
                <td style={{ color: 'var(--color-text)' }}>{guest.name}</td>
                <td style={{ color: guest.overnight ? 'var(--color-accent)' : 'var(--color-primary)' }}>
                  {guest.overnight ? <GiNightSleep size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> : <WiDayCloudy size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />}
                  {guest.overnight ? ' Sleeping Over' : ' Day Stay'}
                </td>
                <td style={{ color: 'var(--color-text)' }}>
                  {guest.overnight ? overnightCost.toLocaleString() : nonOvernightCost.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ color: 'var(--color-accent)' }} className="font-bold">Total Collected: {totalCost.toLocaleString()}</div>
    </div>
  );
};

export default CostSummary; 