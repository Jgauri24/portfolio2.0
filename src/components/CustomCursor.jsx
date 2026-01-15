import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.skill-item-card') ||
                target.closest('.project-card') ||
                target.closest('.skills-category-card') ||
                target.closest('.social-circle') ||
                target.closest('.submit-btn-gradient');

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const cursorStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: isHovering ? 'var(--accent-main)' : 'white'
    };

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'hovered' : ''}`}
                style={cursorStyle}
            />
            <div
                className={`custom-cursor-outline ${isHovering ? 'hovered' : ''}`}
                style={cursorStyle}
            />
        </>
    );
};

export default CustomCursor;
