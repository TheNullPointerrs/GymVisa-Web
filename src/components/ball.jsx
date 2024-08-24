import React from 'react';

const GradientBall = (right) => {
    const circleStyle = {
        width: '100px', // Adjust the size as needed
        height: '100px',
        borderRadius: '50%', // This makes the shape a circle
        background: 'linear-gradient(to right, #B3FF11, #000000)', // Gradient colors
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        position:'fixed',
        zIndex:-100,
        top:'70%',
        right:right
    };

    return (
        <div style={circleStyle}>
        </div>
    );
};

export default GradientBall;
