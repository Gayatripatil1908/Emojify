

import { useState } from 'react'
import "./Home.css";
import EmojiButton from '../components/EmojiButton/EmojiButton';
import ColorButton from '../components/ColorButton/ColorButton';

function Home() {
    const [text, setText] = useState('');
    const [selectedEmoji, setSelectedEmoji] = useState('😊');
    const [color, setColor] = useState('#000000');

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
        setText(text + emoji);
    };

    const handleColorChange = (newColor) => {
        setColor(newColor);
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <div className="home-bg"></div>
            <div className="home-container">
                <h1 className='header'>
                    Emojify
                </h1>
                <textarea
                    className="emoji-textarea"
                    value={text}
                    onChange={handleInputChange}
                    style={{ color: color }}
                    rows={4}
                    placeholder="Type your text here..."
                />
                <div className="emoji-toolbar">
                    <EmojiButton onSelect={handleEmojiClick} />
                    <div style={{ marginTop: '12px' }}>
                        <ColorButton onSelect={handleColorChange} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;