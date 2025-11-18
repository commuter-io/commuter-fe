// src/utils/subway.ts

const lineSuffixMap: Record<string, string> = {
	"01호선": "1",
	"02호선": "2",
	"03호선": "3",
	"04호선": "4",
	"05호선": "5",
	"06호선": "6",
	"07호선": "7",
	"08호선": "8",
	"09호선": "9",
	경의선: "gyeongui-jungang", // 경의중앙선
	신분당선: "shinbundang",
	수인분당선: "suin-bundang",
	공항철도: "airport-railroad",
	인천선: "Incheon-line-1", // 인천1호선
	"GTX-A": "gtx-a",
	의정부경전철: "uijeongbu-lrt",
	우이신설경전철: "ui-sinseol", // 우이신설선
	김포도시철도: "gimpo-goldline", // 김포골드라인
	인천2호선: "Incheon-line-2",
	용인경전철: "yongin-everline", // 용인에버라인
	신림선: "sillim",
	경춘선: "gyengchun",
	경강선: "gyenggang",
	서해선: "seohae",
	default: "default",
};

/** 노선 번호에 해당하는 CSS 변수 이름의 접미사를 반환하는 함수 */
export const getLineVarSuffix = (lineNumber: string): string => {
	return lineSuffixMap[lineNumber] || lineSuffixMap.default;
};

/** 노선 번호 또는 이름에 따라 표시될 텍스트를 반환하는 함수 */
export const getLineDisplay = (lineNumber: string): string => {
	const numberedLineMatch = lineNumber.match(/^(\d+)호선$/);
	if (numberedLineMatch) {
		// `parseInt`를 사용하여 "05" 같은 문자열에서 앞의 0을 제거
		return String(parseInt(numberedLineMatch[1], 10));
	}
	return lineNumber.charAt(0);
};
