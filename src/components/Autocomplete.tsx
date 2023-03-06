import React, { FC, useState } from 'react';

import './style.css'

interface Props {
    value: string;
    handleChange: (value: string) => void;
    data?: Array<any>
}

export const Autocomplete:FC<Props> = ({ value, handleChange, data}) => {
    const [isPanelOpen, setIsOpen] = useState(false);

    const handleClick = (s: string) => {
        handleChange(s)
        setIsOpen(false)
    }

    return (
        <React.Fragment>
            <input 
                className='autocomplete-input' 
                value={value} placeholder='Type anything ...' 
                onChange={(e) => handleChange(e.target.value)} 
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
            />
            {isPanelOpen && !!value.length && (
            <div className='autocomplete-panel'>
                    {!!data && data.length ? data.map((item, index) => (
                        <span className='autocomplete-panel-item' key={item + index} onMouseDown={() => handleClick(item)}>{item}</span>
                    )) : 
                        <span>No data</span>
                    } 
            </div>)}
        </React.Fragment>
    )
}