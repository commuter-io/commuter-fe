// src/types/station.ts

export interface Station {
	stationCode: string;
	name: string;
	nameEng: string;
	nameJpn: string;
	lineNumber: string;
}

// API 전체 응답 타입
export interface StationApiResponse {
	success: boolean;
	data: Station[];
}
