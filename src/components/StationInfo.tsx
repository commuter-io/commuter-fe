"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useStationNavigator } from "@/hooks/useStationNavigator";
import { Station } from "@/types/station";
import { getLineDisplay, getLineVarSuffix } from "@/utils/subway";
import { cn } from "@/utils/ui";

interface StationInfoProps {
	currentStationName: string;
	stations: Station[];
}

// 역 이름 길이에 따라 마퀴 또는 말줄임표를 처리하는 내부 컴포넌트
const StationNameDisplay: React.FC<{
	station: Station | null;
	isPrev?: boolean;
	isCurrentStationLong: boolean;
}> = ({ station, isPrev = false, isCurrentStationLong }) => {
	if (!station) return <div className="flex-1" />; // station이 없을 경우 공간을 차지하는 빈 div

	const isThisStationLong = station.name.length > 4;

	// 현재 역과 이전/다음 역 이름이 모두 길 경우에만 마퀴 효과 적용
	if (isThisStationLong && isCurrentStationLong) {
		return (
			<div className="overflow-hidden text-sm whitespace-nowrap">
				<span className="marquee">{station.name}</span>
			</div>
		);
	}

	// 그 외의 경우는 모두 말줄임표로 처리
	return (
		<span className={`w-full truncate text-sm ${isPrev ? "" : "text-right"}`}>
			{station.name}
		</span>
	);
};

export default function StationInfo({
	currentStationName,
	stations,
}: StationInfoProps) {
	const { getPrevNextStations } = useStationNavigator(stations);
	const { prevStation, currentStation, nextStation } =
		getPrevNextStations(currentStationName);

	if (!currentStation) {
		return <div>역 정보를 불러오는 중입니다...</div>;
	}

	const { lineNumber, name: currentStationNameText } = currentStation;
	const lineVarSuffix = getLineVarSuffix(lineNumber);
	const lineVar = `var(--line-color-${lineVarSuffix})`;
	const isShortStationName = currentStationNameText.length <= 3;
	const isCurrentStationLong = currentStationNameText.length > 5;

	return (
		<div className="mx-auto w-full max-w-md">
			<div
				className="flex h-7 items-center justify-between rounded-full px-1 text-white"
				style={{ backgroundColor: lineVar }}
			>
				{/* 이전 역 버튼 */}
				<button className="flex min-w-0 flex-1 items-center gap-1 text-left disabled:opacity-50">
					<ChevronLeft className="shrink-0 opacity-50" size={18} />
					<StationNameDisplay
						station={prevStation}
						isPrev={true}
						isCurrentStationLong={isCurrentStationLong}
					/>
				</button>

				{/* 현재 역 정보 */}
				<div
					className={cn(
						"mx-1 flex shrink-0 items-center justify-center gap-2 rounded-full border-4 bg-white px-3 py-1.5",
						{
							"w-28": isShortStationName,
						}
					)}
					style={{ borderColor: lineVar }}
				>
					<span
						className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white"
						style={{ backgroundColor: lineVar }}
					>
						{getLineDisplay(lineNumber)}
					</span>
					<span className="font-medium whitespace-nowrap text-gray-800">
						{currentStationNameText}
					</span>
				</div>

				{/* 다음 역 버튼 */}
				<button className="flex min-w-0 flex-1 items-center justify-end gap-1 text-right disabled:opacity-50">
					<StationNameDisplay
						station={nextStation}
						isCurrentStationLong={isCurrentStationLong}
					/>
					<ChevronRight className="shrink-0 opacity-50" size={18} />
				</button>
			</div>
		</div>
	);
}
