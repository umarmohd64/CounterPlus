import React, { useReducer, useCallback, useMemo } from 'react'
import CounterDisplay from './components/CounterDisplay'
import ControlButton from './components/ControlButton'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'reset':
      return { ...state, count: 0 }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // stable handlers to avoid passing new functions on every render
  const handleIncrement = useCallback(() => dispatch({ type: 'increment' }), [])
  const handleReset = useCallback(() => dispatch({ type: 'reset' }), [])

  // memoize derived representation of count (cheap here, but pattern is useful)
  const formattedCount = useMemo(() => state.count.toLocaleString('en-IN'), [state.count])

  return (
    <div className="app-container d-flex align-items-center justify-content-center vh-100">
      <div className="card counter-card text-center p-4 shadow-lg">
        <h1 className="display-6 mb-3">Counter Plus +</h1>

        <CounterDisplay value={formattedCount} />

        <div className="d-flex gap-3 justify-content-center mt-4">
          <ControlButton onClick={handleIncrement} variant="primary" aria-label="Increment counter">
            + Count
          </ControlButton>

          <ControlButton
            onClick={handleReset}
            variant="outline-danger"
            aria-label="Reset counter"
            disabled={state.count === 0}
          >
            Reset
          </ControlButton>
        </div>

        <p className="mt-3 text-muted small">Onboarding Training | Umar</p>
      </div>
    </div>
  )
}