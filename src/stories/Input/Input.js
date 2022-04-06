import React from 'react'
import './Input.css'

function Input(props) {
    const { variant = 'primary', children, ...rest } = props
    return (
        <div>
            <button className={`input ${variant}`} {...rest}>
                {children}
            </button>
        </div>
    )
}

export default Input
