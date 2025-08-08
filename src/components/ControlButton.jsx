import React, { forwardRef } from 'react'

const ControlButton = React.memo(
  forwardRef(({ onClick, children, variant = 'primary', disabled = false, ...rest }, ref) => {
    // compose bootstrap classes; keep string stable (no inline style object)
    const base = 'btn btn-lg px-4 shadow-sm'
    const classes = `${base} btn-${variant}`

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
  })
)

ControlButton.displayName = 'ControlButton'
export default ControlButton