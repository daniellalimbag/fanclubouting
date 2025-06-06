import React from "react";

const RatesForm = ({ totalCost, setTotalCost, overnightRate, setOvernightRate, nonOvernightRate, setNonOvernightRate, baseGuests, setBaseGuests }) => (
  <div style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} className="p-4 rounded shadow mb-6 flex flex-wrap gap-4 justify-center border-2 max-w-3xl w-full mx-auto">
    <div className="w-full sm:w-auto">
      <label style={{ color: 'var(--color-primary)' }} className="block text-sm font-medium">Total Airbnb Cost</label>
      <input type="number" className="mt-1 block w-full sm:w-32 rounded p-1 border-2 focus:border-[var(--color-accent)]" style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} value={totalCost} min={0} onChange={e => setTotalCost(Number(e.target.value))} />
    </div>
    <div className="w-full sm:w-auto">
      <label style={{ color: 'var(--color-primary)' }} className="block text-sm font-medium">Base Guests Included</label>
      <input type="number" className="mt-1 block w-full sm:w-20 rounded p-1 border-2 focus:border-[var(--color-accent)]" style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} value={baseGuests} min={1} onChange={e => setBaseGuests(Number(e.target.value))} />
    </div>
    <div className="w-full sm:w-auto">
      <label style={{ color: 'var(--color-primary)' }} className="block text-sm font-medium">+ Overnight Guest Rate</label>
      <input type="number" className="mt-1 block w-full sm:w-24 rounded p-1 border-2 focus:border-[var(--color-accent)]" style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} value={overnightRate} min={0} onChange={e => setOvernightRate(Number(e.target.value))} />
    </div>
    <div className="w-full sm:w-auto">
      <label style={{ color: 'var(--color-primary)' }} className="block text-sm font-medium">+ Non-Overnight Guest Rate</label>
      <input type="number" className="mt-1 block w-full sm:w-24 rounded p-1 border-2 focus:border-[var(--color-accent)]" style={{ background: 'var(--color-background)', color: 'var(--color-text)', borderColor: 'var(--color-secondary)' }} value={nonOvernightRate} min={0} onChange={e => setNonOvernightRate(Number(e.target.value))} />
    </div>
  </div>
);

export default RatesForm; 