"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoaded(true), 3000);
	}, []);

	return (
		<div
			id="preloader"
			className={`fixed inset-0 flex items-center justify-center bg-white z-[9999999] transition-opacity duration-300 ${loaded ? "opacity-0 pointer-events-none" : ""}`}
		>
			<div className="relative text-center">
				<div className="w-36 h-36 border-4 border-gray-300 border-t-theme rounded-full animate-spin mb-6"></div>
				<div className="text-5xl font-bold tracking-widest flex gap-1">
					{["N", "E", "O", "N"].map((letter, index) => (
						<span
							key={index}
							className="text-theme relative"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							{letter}
							<span
								className="absolute top-[-3px] left-0 opacity-0 rotate-y-90"
								style={{ animation: "letters-loading 4s infinite" }}
							>
								{"HOTS"[index]}
							</span>
						</span>
					))}
				</div>
				<p className="text-sm font-semibold uppercase tracking-widest text-theme mt-2">
					Loading
				</p>
			</div>
			<div className="absolute inset-0 flex">
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className="w-1/4 bg-bg transition-all duration-700"
					></div>
				))}
			</div>
		</div>
	);
}
