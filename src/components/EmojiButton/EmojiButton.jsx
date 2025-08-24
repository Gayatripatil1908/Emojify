import React from 'react';

const emojiList = ['😊', '😂', '😍', '😎', '👍', '🎉', '🔥', '🥳', '😢', '🤔'];

function EmojiButton({ onSelect }) {
    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            {emojiList.map((emoji, idx) => (
                <button
                    key={idx}
                    type="button"
                    onClick={() => onSelect(emoji)}
                    style={{
                        fontSize: '1.5rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px'
                    }}
                    aria-label={`Insert ${emoji}`}
                >
                    {emoji}
                </button>
            ))}
        </div>
    );
}


export default EmojiButton;