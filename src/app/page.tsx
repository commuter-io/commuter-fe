// src/app/page.tsx

import { fetchStations } from "@/api/stations";
import StationInfo from "@/components/StationInfo";
import SubwayLineSelector from "@/components/SubwayLineSelector";

export default async function Home() {
	// 사용자 입력 값 가져다가 서버에 요청하는 방식으로 나중에 수정 필요
	const rawStations = await fetchStations("4호선");

	// stationCode를 기준으로 역 목록을 서버에서 미리 정렬
	const stations = [...rawStations].sort((a, b) =>
		a.stationCode.localeCompare(b.stationCode)
	);

	const currentStationName = "동대문역사문화공원";

	return (
		<div>
			{/* 관심 호선 */}
			<div className="flex flex-col text-left text-sm font-medium text-gray-800">
				<SubwayLineSelector />
			</div>
			{/* 이슈(관심 호선에 대한 이슈만) */}
			{/* 임시 확인용 span/div */}
			<span className="mt-6 mb-2 text-lg font-semibold">이슈</span>
			<div className="mt-2 h-24 rounded-lg border border-dashed border-gray-300 bg-gray-50/50 dark:border-gray-700"></div>
			<div className="mt-2 h-24 rounded-lg border border-dashed border-gray-300 bg-gray-50/50 dark:border-gray-700"></div>
			{/* 관심 역? */}
			<div className="mt-6 mb-2 flex items-center justify-between">
				<StationInfo
					currentStationName={currentStationName}
					stations={stations}
				/>
			</div>
		</div>
	);
}
