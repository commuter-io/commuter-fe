// src/components/StationSearch.tsx

"use client";

// query(useState<string>): 검색어 입력 상태
// results(useState<Station[]>): 검색 결과 배열
// query 변경 시 API 호출 및 results 업데이트
// 결과 표시: results 배열을 lineNumber 기준 오름차순으로 정렬하여 리스트로 렌더링
// 각 항목 클릭하면 부모 컴포넌트(FavoriteStations)로 선택된 Station 객체 전달하는 콜백함수 실행
