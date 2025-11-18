// src/components/SubwayLineSelector.tsx

"use client";

import { PlusIcon, X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {
	ALL_LINES_DATA,
	lineGroups,
	type SubwayLine,
} from "@/constants/subwayData";
import { cn } from "@/utils/ui";

type LineCommandItemProps = {
	line: SubwayLine;
	isSelected: boolean;
	onSelect: () => void;
};

function LineCommandItem({ line, isSelected, onSelect }: LineCommandItemProps) {
	const { name, suffix, iconText } = line;

	return (
		<CommandItem
			key={name}
			onSelect={onSelect}
			className={cn(
				"rounded-lg",
				"data-[selected=true]:bg-amber-100/30",
				isSelected && "border border-amber-300 bg-amber-100/50 shadow-inner"
			)}
		>
			<div
				className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
				style={{
					backgroundColor: `var(--line-color-${suffix}, #e2e8f0)`,
					color: "white",
					fontSize: "10px",
					fontWeight: "bold",
				}}
			>
				{iconText}
			</div>
			{name}
		</CommandItem>
	);
}

// 메인 컴포넌트
export default function SubwayLineSelector() {
	const [isOpen, setIsOpen] = React.useState(false);
	const [selectedLine, setSelectedLine] = React.useState<string[]>([]);

	const handleSelectLine = (lineName: string) => {
		setSelectedLine(prev =>
			prev?.includes(lineName)
				? prev.filter(s => s !== lineName)
				: [...prev, lineName]
		);
	};

	const sortedLines = React.useMemo(
		() =>
			selectedLine
				.slice()
				.sort((a, b) => a.localeCompare(b, "ko", { numeric: true })),
		[selectedLine]
	);

	return (
		<>
			{/* 타이틀 및 관심 호선 추가 버튼 */}
			<div className="flex items-center gap-2">
				<span className="text-lg font-semibold">관심 호선</span>
				<Button
					variant="outline"
					className="flex items-center justify-center text-xs"
					onClick={() => setIsOpen(true)}
				>
					<PlusIcon className="h-3 w-3" />
				</Button>
			</div>

			{sortedLines.length === 0 ? (
				<div
					className="mt-2 flex h-10 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50/50 dark:border-gray-700 dark:bg-gray-900/50"
					role="button"
					tabIndex={0}
					// onClick={() => setIsOpen(true)} // 플레이스홀더 클릭 시에도 추가
					onKeyDown={e =>
						(e.key === "Enter" || e.key === " ") && setIsOpen(true)
					}
				>
					<p className="text-muted-foreground text-sm">
						즐겨찾기 노선을 추가해보세요.
					</p>
				</div>
			) : (
				<div className="relative w-full overflow-hidden">
					{/* 뱃지 스크롤 컨테이너 */}
					{/* 스크롤 적용 wrapper */}
					<div className="scrollbar-hide flex flex-nowrap items-center gap-2 overflow-x-auto py-3 pr-8">
						{sortedLines.map(lineName => {
							const line = ALL_LINES_DATA.find(l => l.name === lineName);
							if (!line) return null;
							return (
								<Badge
									key={line.name}
									style={{
										backgroundColor: `var(--line-color-${line.suffix})`,
										color: "white",
									}}
									className="flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 pr-1.5 shadow-md"
								>
									{line.display}
									<button
										onClick={() => handleSelectLine(line.name)}
										className="rounded-full p-0.5 text-inherit hover:bg-white/25"
										aria-label={`Remove ${line.name}`}
										style={{
											color: `var(--line-text-color-${line.suffix}, #020817)`,
										}}
									>
										<X className="h-3 w-3 text-white" />
									</button>
								</Badge>
							);
						})}
					</div>
					{/* <div className="dark:from-background pointer-events-none absolute top-0 right-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent" /> */}
				</div>
			)}

			<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
				<CommandInput placeholder="호선 검색..." />
				<CommandList>
					<CommandEmpty>호선을 찾을 수 없습니다.</CommandEmpty>
					{lineGroups.map((group, index) => (
						<React.Fragment key={group.heading}>
							{index > 0 && <CommandSeparator />}
							<CommandGroup heading={group.heading}>
								{group.lines.map(line => (
									<LineCommandItem
										key={line.name}
										line={line}
										isSelected={selectedLine.includes(line.name)}
										onSelect={() => handleSelectLine(line.name)}
									/>
								))}
							</CommandGroup>
						</React.Fragment>
					))}
				</CommandList>
			</CommandDialog>
		</>
	);
}
