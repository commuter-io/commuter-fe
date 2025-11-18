// src/hooks/useStationNavigator.ts

import { useMemo } from "react";

import { Station } from "@/types/station";

export function useStationNavigator(stations: Station[]) {
	const sortedStations = useMemo(() => {
		return [...stations].sort((a, b) =>
			a.stationCode.localeCompare(b.stationCode)
		);
	}, [stations]);

	const getPrevNextStations = (targetStationName: string) => {
		const currentIndex = sortedStations.findIndex(
			station => station.name === targetStationName
		);

		// 역 못 찾았을 때
		if (currentIndex === -1) {
			return { prevStation: null, currentStation: null, nextStation: null };
		}

		// 예외처리(처음 또는 마지막 역)
		const currentStation = sortedStations[currentIndex];

		const prevStation =
			currentIndex > 0 ? sortedStations[currentIndex - 1] : null;

		const nextStation =
			currentIndex < sortedStations.length - 1
				? sortedStations[currentIndex + 1]
				: null;

		return { prevStation, currentStation, nextStation };
	};

	return { sortedStations, getPrevNextStations };
}
