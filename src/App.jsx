import { useState, useEffect } from 'react'
import Header from './components/Header'
import RatesForm from './components/RatesForm'
import GuestList from './components/GuestList'
import CostSummary from './components/CostSummary'
import { RiResetLeftLine } from 'react-icons/ri'
import './App.css'
import './index.css'

const INITIAL_TOTAL_COST = 6000
const INITIAL_OVERNIGHT_RATE = 500
const INITIAL_NONOVERNIGHT_RATE = 200
const INITIAL_BASE_GUESTS = 10
const INITIAL_GUESTS = [
  { id: 1, name: 'Guest 1', overnight: true },
  { id: 2, name: 'Guest 2', overnight: true },
  { id: 3, name: 'Guest 3', overnight: true },
]
const INITIAL_GUEST_ID_COUNTER = 4

function App() {
  // Default values
  const [totalCost, setTotalCost] = useState(INITIAL_TOTAL_COST)
  const [overnightRate, setOvernightRate] = useState(INITIAL_OVERNIGHT_RATE)
  const [nonOvernightRate, setNonOvernightRate] = useState(INITIAL_NONOVERNIGHT_RATE)
  const [baseGuests, setBaseGuests] = useState(INITIAL_BASE_GUESTS)
  const [guests, setGuests] = useState([...INITIAL_GUESTS])
  const [guestIdCounter, setGuestIdCounter] = useState(INITIAL_GUEST_ID_COUNTER)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('fanclubOutingData')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (typeof data.totalCost === 'number') setTotalCost(data.totalCost)
        if (typeof data.overnightRate === 'number') setOvernightRate(data.overnightRate)
        if (typeof data.nonOvernightRate === 'number') setNonOvernightRate(data.nonOvernightRate)
        if (typeof data.baseGuests === 'number') setBaseGuests(data.baseGuests)
        if (Array.isArray(data.guests)) setGuests(data.guests)
        if (typeof data.guestIdCounter === 'number') setGuestIdCounter(data.guestIdCounter)
      } catch (e) {
        // ignore parse errors
      }
    }
  }, [])

  // Save to localStorage whenever relevant state changes
  useEffect(() => {
    const data = {
      totalCost,
      overnightRate,
      nonOvernightRate,
      baseGuests,
      guests,
      guestIdCounter,
    }
    localStorage.setItem('fanclubOutingData', JSON.stringify(data))
  }, [totalCost, overnightRate, nonOvernightRate, baseGuests, guests, guestIdCounter])

  // Add a new guest
  const addGuest = () => {
    setGuests([
      ...guests,
      { id: guestIdCounter, name: `Guest ${guestIdCounter}`, overnight: true },
    ])
    setGuestIdCounter(guestIdCounter + 1)
  }

  // Remove a guest
  const removeGuest = (id) => {
    setGuests(guests.filter((g) => g.id !== id))
  }

  // Toggle overnight status
  const toggleOvernight = (id) => {
    setGuests(
      guests.map((g) =>
        g.id === id ? { ...g, overnight: !g.overnight } : g
      )
    )
  }

  // Edit guest name
  const onNameChange = (id, name) => {
    setGuests(
      guests.map((g) =>
        g.id === id ? { ...g, name } : g
      )
    )
  }

  // Reset all state
  const resetAll = () => {
    setTotalCost(INITIAL_TOTAL_COST)
    setOvernightRate(INITIAL_OVERNIGHT_RATE)
    setNonOvernightRate(INITIAL_NONOVERNIGHT_RATE)
    setBaseGuests(INITIAL_BASE_GUESTS)
    setGuests([...INITIAL_GUESTS])
    setGuestIdCounter(INITIAL_GUEST_ID_COUNTER)
    localStorage.removeItem('fanclubOutingData')
  }

  // Calculate costs
  const overnightCount = guests.filter((g) => g.overnight).length
  const nonOvernightCount = guests.length - overnightCount

  // Calculate base cost per overnight guest
  // Overnight guests pay 2x non-overnight guests
  // Let x = non-overnight cost, 2x = overnight cost
  // total = (overnightCount * 2x) + (nonOvernightCount * x)
  // x = total / (overnightCount*2 + nonOvernightCount)
  const denominator = overnightCount * 2 + nonOvernightCount
  const basePerUnit = denominator > 0 ? totalCost / denominator : 0
  const overnightCost = Math.round(basePerUnit * 2)
  const nonOvernightCost = Math.round(basePerUnit)

  // Add extra charges for additional guests
  const extraOvernight = Math.max(overnightCount - baseGuests, 0) * overnightRate
  const extraNonOvernight = nonOvernightCount * nonOvernightRate
  const totalCollected = overnightCount * overnightCost + nonOvernightCount * nonOvernightCost + extraOvernight + extraNonOvernight

  return (
    <div style={{ background: 'var(--color-background)', color: 'var(--color-text)' }} className="min-h-screen p-4 mt-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <div style={{ color: 'var(--color-primary)' }} className="text-center mb-8 text-lg">
          Hey gang, Dani here. Please use this site to calculate your share at the AirBnB (ASAP pls Tin is tweaking)
        </div>
        <RatesForm
          totalCost={totalCost}
          setTotalCost={setTotalCost}
          overnightRate={overnightRate}
          setOvernightRate={setOvernightRate}
          nonOvernightRate={nonOvernightRate}
          setNonOvernightRate={setNonOvernightRate}
          baseGuests={baseGuests}
          setBaseGuests={setBaseGuests}
        />
        <GuestList
          guests={guests}
          addGuest={addGuest}
          removeGuest={removeGuest}
          toggleOvernight={toggleOvernight}
          onNameChange={onNameChange}
        />
        <CostSummary
          guests={guests}
          overnightCost={overnightCost + (overnightCount > baseGuests ? overnightRate : 0)}
          nonOvernightCost={nonOvernightCost + nonOvernightRate}
          totalCost={totalCollected}
        />
        <div className="flex justify-center mt-8 mb-4">
          <button
            style={{ background: 'var(--color-primary)', color: 'var(--color-background)', borderColor: 'var(--color-secondary)' }}
            className="flex items-center gap-2 px-4 py-2 rounded shadow border-2 hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            onClick={resetAll}
          >
            <RiResetLeftLine size={20} />
            Reset All
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
