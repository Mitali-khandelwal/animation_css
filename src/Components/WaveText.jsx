import React, { useState } from "react";
import './style.css'

const WaveText = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <>
        <h1>Bouncing Text on hover</h1>
            <div
                className={`logo ${isHovered ? 'is-animetion' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span>M</span>
                <span>S</span>
                <span>E</span>
                <span>E</span>
                <span>K</span>
            </div>
        </>
    )
}

export default WaveText;
