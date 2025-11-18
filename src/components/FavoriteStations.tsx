// src/components/FavoriteStations.tsx

"use client";

// favoriteStations (useState<Station[]>): 사용자가 추가한 '관심 역' 목록을 저장합니다.
// lineDataCache (useRef<Record<string, Station[]>>): StationInfo에 필요한 전체 노선 데이터를 캐시할 객체
// isSearchOpen (useState<boolean>): 역 검색 모달의 열림/닫힘 상태를 관리합니다.

// useEffect 사용해 컴포넌트 마운트 시 localStorage에서 '관심 역(favoriteStations)' 데이터를 불러옵니다.
// favoriteStations 상태가 변경될 때마다 localStorage에 저장하는 useEffect 추가.

// 관심 역이 favoriteStations 목록에 추가될 때 해당 역의 lineNumber가 lineDataCache에 있는지 확인
// 캐시에 없으면 /src/app/page.tsx의 fetchStations를 호출하여 해당 노선의 전체 역 데이터 가져온 후 lineDatadaCache에 저장

// 렌더링 로직
// favoriteStations 배열이 비어있으면 '관심 역을 추가해보세요!' placeholder와 추가 버튼 렌더링
// 추가버튼 클릭시 isSearchOpen 상태를 true로 설정하여 역 검색 모달 열기
// favoriteStations 배열에 항목이 있으면, 역이름과 호선 번호로 정렬(오름차순)
// sortedFavorites.map()을 사용하여 각 역 렌더링
// lineDataCache에서 현재 역의 lineNumber에 해당하는 전체 노선 데이터 찾기
// 데이터 로딩중이면 spinner 표시
// 데이터가 있으면 StationInfo 컴포넌트에 currentStationName={station.name}과 stations={lineStations} props로 전달하여 렌더링
