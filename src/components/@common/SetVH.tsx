// src/components/@common/SetVH.tsx

"use client";

import { useEffect } from "react";

export default function SetVH() {
	useEffect(() => {
		// 화면 크기를 설정하는 함수
		const setScreenSize = () => {
			const vh = window.innerHeight * 0.01; // 뷰포트 높이의 1% 계산(주소표시줄과 같은 UI 요소를 제외한 값)
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};

		// 처음 마운트될 때와 화면 크기가 변경될 때마다 함수 실행
		setScreenSize();
		window.addEventListener("resize", setScreenSize);

		// 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
		return () => window.removeEventListener("resize", setScreenSize);
	}, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 함

	return null; // 이 컴포넌트는 UI를 렌더링하지 않으므로 null을 반환
}
