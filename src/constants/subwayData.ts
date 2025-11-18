// src/constants/subwayData.ts

export type SubwayLine = {
	name: string; // 호선 이름
	group: string; // CommandList 그룹 이름(heading)
	suffix: string; // CSS 변수 접미사
	display: string; // Badge에 표시할 텍스트
	iconText: string; // 아이콘에 표시할 텍스트
};

export const ALL_LINES_DATA: SubwayLine[] = [
	// 서울 도시철도
	{
		name: "1호선",
		group: "서울 도시철도",
		suffix: "1",
		display: "1호선",
		iconText: "1",
	},
	{
		name: "2호선",
		group: "서울 도시철도",
		suffix: "2",
		display: "2호선",
		iconText: "2",
	},
	{
		name: "3호선",
		group: "서울 도시철도",
		suffix: "3",
		display: "3호선",
		iconText: "3",
	},
	{
		name: "4호선",
		group: "서울 도시철도",
		suffix: "4",
		display: "4호선",
		iconText: "4",
	},
	{
		name: "5호선",
		group: "서울 도시철도",
		suffix: "5",
		display: "5호선",
		iconText: "5",
	},
	{
		name: "6호선",
		group: "서울 도시철도",
		suffix: "6",
		display: "6호선",
		iconText: "6",
	},
	{
		name: "7호선",
		group: "서울 도시철도",
		suffix: "7",
		display: "7호선",
		iconText: "7",
	},
	{
		name: "8호선",
		group: "서울 도시철도",
		suffix: "8",
		display: "8호선",
		iconText: "8",
	},
	{
		name: "9호선",
		group: "서울 도시철도",
		suffix: "9",
		display: "9호선",
		iconText: "9",
	},
	// 수도권 도시철도
	{
		name: "공항철도",
		group: "수도권 도시철도",
		suffix: "airport-railroad",
		display: "공항철도",
		iconText: "공",
	},
	{
		name: "인천1호선",
		group: "수도권 도시철도",
		suffix: "Incheon-line-1",
		display: "인천1호선",
		iconText: "인",
	},
	{
		name: "인천2호선",
		group: "수도권 도시철도",
		suffix: "Incheon-line-2",
		display: "인천2호선",
		iconText: "인",
	},
	{
		name: "경의중앙선",
		group: "수도권 도시철도",
		suffix: "gyeongui-jungang",
		display: "경의중앙선",
		iconText: "경",
	},
	{
		name: "수인분당선",
		group: "수도권 도시철도",
		suffix: "suin-bundang",
		display: "수인분당선",
		iconText: "수",
	},
	{
		name: "신분당선",
		group: "수도권 도시철도",
		suffix: "shinbundang",
		display: "신분당선",
		iconText: "신",
	},
	{
		name: "의정부경전철",
		group: "수도권 도시철도",
		suffix: "uijeongbu-lrt",
		display: "의정부경전철",
		iconText: "의",
	},
	{
		name: "용인에버라인",
		group: "수도권 도시철도",
		suffix: "yongin-everline",
		display: "용인에버라인",
		iconText: "용",
	},
	{
		name: "우이신설선",
		group: "수도권 도시철도",
		suffix: "ui-sinseol",
		display: "우이신설선",
		iconText: "우",
	},
	{
		name: "김포골드라인",
		group: "수도권 도시철도",
		suffix: "gimpo-goldline",
		display: "김포골드라인",
		iconText: "김",
	},
	{
		name: "신림선",
		group: "수도권 도시철도",
		suffix: "sillim",
		display: "신림선",
		iconText: "신",
	},
	{
		name: "수도권광역급행철도A선(GTX-A)",
		group: "수도권 도시철도",
		suffix: "gtx-a",
		display: "GTX-A",
		iconText: "G",
	},
	// 광역철도
	{
		name: "경강선",
		group: "광역철도",
		suffix: "gyenggang",
		display: "경강선",
		iconText: "경",
	},
	{
		name: "경춘선",
		group: "광역철도",
		suffix: "gyengchun",
		display: "경춘선",
		iconText: "경",
	},
	{
		name: "서해선",
		group: "광역철도",
		suffix: "seohae",
		display: "서해선",
		iconText: "서",
	},
];

export const lineGroups = [
	{
		heading: "서울 도시철도",
		lines: ALL_LINES_DATA.filter(line => line.group === "서울 도시철도"),
	},
	{
		heading: "수도권 도시철도",
		lines: ALL_LINES_DATA.filter(line => line.group === "수도권 도시철도"),
	},
	{
		heading: "광역철도",
		lines: ALL_LINES_DATA.filter(line => line.group === "광역철도"),
	},
];
