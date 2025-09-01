import React from "react";
import { Link } from "react-router";

const Error = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] px-2">
            <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 text-center">
                {/* Error Code */}
                <h1 className="text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-semibold text-white">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-2 text-slate-300">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <Link
                        to="/"
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium shadow-lg hover:scale-105 transition-transform"
                    >
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-5 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
                    >
                        Go Back
                    </button>
                </div>

                {/* Footer Hint */}
                <p className="mt-6 text-sm text-slate-400">
                    If you think this is a mistake, please{" "}
                    <span className="text-cyan-400">contact support</span>.
                </p>
            </div>
        </div>
    );
};

export default Error;
