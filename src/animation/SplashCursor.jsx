// src/components/SplashCursor.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SplashCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX - 20,
                y: e.clientY - 20,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mix-blend-difference"
        ></div>
    );
};

export default SplashCursor;
