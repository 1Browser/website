import { m } from "framer-motion";
import React from "react";

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i: number) => {
		const delay = 1 + i * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

export const Arrow: React.FC = () => {
	return (
		<div className="relative hidden md:block">
			<m.svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 89.83773642923416 126.6305831280774"
				width="100"
				height="250"
				initial="hidden"
				animate="visible"
			>
				<m.g strokeLinecap="round">
					<m.g transform="translate(78.82015738259724 114.67242292214692) rotate(0 -34.36802174521472 -52.205367044976654)">
						<m.path
							d="M1.02 1.96 C-7.03 -1.41, -42.44 -10.24, -46.66 -22.54 C-50.88 -34.84, -20.61 -58.15, -24.3 -71.84 C-28 -85.53, -61.68 -99.39, -68.82 -104.67 M-1.87 0.55 C-10.44 -3.46, -44.93 -14.11, -48.93 -26.88 C-52.92 -39.66, -22.63 -63.53, -25.86 -76.08 C-29.09 -88.63, -60.97 -97.87, -68.28 -102.21"
							stroke="#eeeeee"
							strokeWidth="1"
							fill="none"
							custom={1}
							variants={draw}
						></m.path>
					</m.g>
					<m.g transform="translate(78.82015738259724 114.67242292214692) rotate(0 -34.36802174521472 -52.205367044976654)">
						<m.path
							d="M-41.94 -100.6 C-51.36 -100.73, -59.46 -101.71, -68.47 -101.05 M-42.86 -99.93 C-52.48 -100.76, -59.01 -100.74, -67.57 -101.83"
							stroke="#eeeeee"
							strokeWidth="1"
							fill="none"
							custom={2}
							variants={draw}
						></m.path>
					</m.g>
					<m.g transform="translate(78.82015738259724 114.67242292214692) rotate(0 -34.36802174521472 -52.205367044976654)">
						<m.path
							d="M-48.83 -84.95 C-55.66 -90.7, -61.3 -97.27, -68.47 -101.05 M-49.75 -84.28 C-56.95 -90.34, -61.2 -95.51, -67.57 -101.83"
							stroke="#eeeeee"
							strokeWidth="1"
							fill="none"
							custom={3}
							variants={draw}
						></m.path>
					</m.g>
				</m.g>
			</m.svg>

			<div className="absolute bottom-[0%] left-[0%]">
				<m.p
					initial={{ opacity: 0, x: 50, y: 10, scale: 0.5 }}
					animate={{ opacity: 1, x: 40, y: -10, scale: 1 }}
					transition={{ delay: 3, duration: 1, type: "spring" }}
					className="text-2xl italic w-[350px] text-center"
				>
					for open and intelligent <br /> information consumption
				</m.p>
			</div>
		</div>
	);
};
