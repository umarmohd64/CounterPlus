import React, { useEffect, useRef } from 'react'

const CounterDisplay = React.memo(({ value }) => {
  const ref = useRef(null)

  // brief pop animation when value updates
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.remove('pop')
    // force reflow to restart animation
    void el.offsetWidth
    el.classList.add('pop')
  }, [value])

  return (
    <div className="counter-display mt-3" aria-live="polite">
      <div ref={ref} className="count-number" role="status">
        {value}
      </div>
    </div>
  )
})

CounterDisplay.displayName = 'CounterDisplay'
export default CounterDisplay