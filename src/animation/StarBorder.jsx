// src/components/StarBorder.jsx
import React from "react";

const StarBorder = ({
    as: Tag = "div", // default wrapper div hoga
    className = "",
    color = "cyan",
    speed = "3s",
    children,
    ...props
}) => {
    return (
        <Tag
            className={`relative inline-block p-[2px] rounded-lg overflow-hidden ${className}`}
            {...props}
        >
            {/* Animated border */}
            <span
                className="absolute inset-0 rounded-lg animate-spin-slow"
                style={{
                    background: `conic-gradient(${color}, transparent 60%)`,
                    animationDuration: speed,
                }}
            />
            {/* Inner content */}
            <span className="relative block bg-black text-white rounded-lg px-4 py-2">
                {children}
            </span>
        </Tag>
    );
};

export default StarBorder;
