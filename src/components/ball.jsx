import React from 'react';

const GradientBall = ({ position, offset }) => {
    const circleStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%', // This makes the shape a circle
        background: 'linear-gradient(to right, #B3FF11, #000000)', // Gradient colors
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        position: 'fixed',
        zIndex: -100,
        ...position, // Spread the position prop
        top: offset === 'high' ? '15%' : '70%', // Adjust position based on offset
    };

    return (
        <div style={circleStyle}>
        </div>
    );
};

export default GradientBall;
