// src/api/stations/index.ts

import { Station } from "@/types/station";

// API 응답 전체에 대한 타입 정의
interface ApiResponse {
	success: boolean;
	message: string | null;
	data: Station[];
	errorCode: string | null;
	statusCode: number;
	timestamp: string;
}

// 특정 호선의 모든 역 데이터를 가져오는 함수
export async function fetchStations(lineName: string): Promise<Station[]> {
	// Next.js의 fetch는 기본적으로 캐싱을 사용
	// 실시간 데이터를 원할 경우 { cache: 'no-store' } 옵션 추가
	const response = await fetch(
		// 배포 시 환경에 맞게 URL 수정 필요
		`http://localhost:8080/api/stations?line=${encodeURIComponent(lineName)}`
	);

	if (!response.ok) {
		// 가장 가까운 error.js Error Boundary를 활성화
		throw new Error("Failed to fetch station data");
	}

	const result: ApiResponse = await response.json();

	return result.data; // 실제 역 목록은 'data' 필드에 존재
}
