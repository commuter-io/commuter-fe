// src/components/CommunityFAB.tsx

"use client";

import Link from "next/link";
import { HiPencil } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export default function CommunityFAB() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="default"
					size="iconLg"
					className="pointer-events-auto absolute right-6 bottom-20 z-50 rounded-full shadow-lg"
				>
					<HiPencil className="h-6 w-6" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="mb-2 w-auto p-2" side="top" align="end">
				<div className="flex flex-col space-y-1">
					<Link href="/community/report">
						<Button
							variant="ghost"
							className="flex w-full items-center justify-start space-x-2 px-4 py-2"
						>
							<span>제보하기</span>
						</Button>
					</Link>
					<Link href="/community/post">
						<Button
							variant="ghost"
							className="flex w-full items-center justify-start space-x-2 px-4 py-2"
						>
							<span>글쓰기</span>
						</Button>
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	);
}
