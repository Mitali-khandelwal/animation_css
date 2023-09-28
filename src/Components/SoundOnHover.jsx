import React from 'react';
import useSound from 'use-sound';
import sunflower from '../music/sunflower.mp3'; // Replace with the path to your sound file

const SoundOnHover = () => {
    const soundUrl = sunflower;
    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.5 }
    );

    const [isHovering, setIsHovering] = React.useState(
        false
    );


    return (
        <div>
            <h1>Hover for Sound</h1>
            <button
                onMouseEnter={() => {
                    setIsHovering(true);
                    play();
                }}
                onMouseLeave={() => {
                    setIsHovering(false);
                    stop();
                }}
            >
                <button isHovering={isHovering}>
                    Hover over me!
                </button>
            </button>
        </div>

    );
};

export default SoundOnHover;

// weatherappp-8atd5tnvd-mitali-khandelwal.vercel.app
// restro-6lropctqw-mitali-khandelwal.vercel.app