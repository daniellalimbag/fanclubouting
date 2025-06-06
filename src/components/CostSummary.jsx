import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";

const CostSummary = ({ guests, guestCosts, totalCost, costPerDay, baseGuests, extraCharges, totalWithExtras }) => {
  return (
    <div style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} className="p-6 rounded shadow border-2 max-w-3xl w-full mx-auto">
      <h2 style={{ color: 'var(--color-text)' }} className="text-xl font-semibold mb-4">Cost Summary</h2>
      <div className="mb-6">
        <div style={{ color: 'var(--color-accent)' }} className="text-xl font-bold">
          Total Cost: {totalCost.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
        </div>
        <div style={{ color: 'var(--color-primary)' }} className="text-lg">
          Cost per day: {costPerDay.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mb-4 min-w-[350px]">
          <thead>
            <tr>
              <th style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)' }} className="text-left">Name</th>
              <th style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)' }}>Status</th>
              <th style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)' }}>Days</th>
              <th style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-secondary)' }}>Cost</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest, idx) => (
              <tr key={guest.id}>
                <td style={{ color: 'var(--color-text)' }}>{guest.name}</td>
                <td style={{ color: guest.overnight ? 'var(--color-accent)' : 'var(--color-primary)' }}>
                  {guest.overnight ? <GiNightSleep size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> : <WiDayCloudy size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />}
                  {guest.overnight ? ' Sleeping Over' : ' Day Stay'}
                </td>
                <td style={{ color: 'var(--color-text)', textAlign: 'center' }}>
                  {guest.overnight ? '2' : '1'}
                </td>
                <td style={{ color: 'var(--color-text)', textAlign: 'right' }}>
                  {guestCosts ? guestCosts[idx].toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CostSummary; 