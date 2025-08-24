import React from 'react';

const colorList = ['#000000', '#e63946', '#457b9d', '#2a9d8f', '#f4a261', '#f7b801', '#8338ec', '#ff006e'];

function ColorButton({ onSelect }) {
    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            {colorList.map((color, idx) => (
                <button
                    key={idx}
                    type="button"
                    onClick={() => onSelect(color)}
                    style={{
                        width: '24px',
                        height: '24px',
                        background: color,
                        border: '2px solid #fff',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.10)'
                    }}
                    aria-label={`Select color ${color}`}
                />
            ))}
        </div>
    );
}
export default ColorButton;