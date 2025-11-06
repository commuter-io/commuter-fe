// src/hooks/useAppHeight.ts

import { useState, useEffect } from "react";

export const useAppHeight = () => {
	const [height, setHeight] = useState("100vh");

	useEffect(() => {
		const vp = window.visualViewport;

		if (typeof window === "undefined" || !vp) {
			return;
		}

		const setViewportHeight = () => {
			setHeight(`${vp.height}px`);
		};

		setViewportHeight();

		vp.addEventListener("resize", setViewportHeight);

		return () => vp.removeEventListener("resize", setViewportHeight);
	}, []); // 컴포넌트 마운트 시 1회만 실행

	return height;
};
