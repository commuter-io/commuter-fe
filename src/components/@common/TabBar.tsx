// src/components/@common/TabBar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	HiHome,
	HiExclamationTriangle,
	HiMegaphone,
	HiChatBubbleOvalLeftEllipsis,
	HiUserCircle,
} from "react-icons/hi2";

const TABS = [
	{
		title: "홈",
		href: "/",
		icon: <HiHome className="size-6" />,
		activeIcon: <HiHome className="size-6" />,
	},
	{
		title: "교통이슈",
		href: "/issue",
		icon: <HiExclamationTriangle className="size-6" />,
		activeIcon: <HiExclamationTriangle className="size-6" />,
	},
	{
		title: "커뮤니티",
		href: "/community",
		icon: <HiChatBubbleOvalLeftEllipsis className="size-6" />,
		activeIcon: <HiChatBubbleOvalLeftEllipsis className="size-6" />,
	},
	{
		title: "내 정보",
		href: "/mypage",
		icon: <HiUserCircle className="size-6" />,
		activeIcon: <HiUserCircle className="size-6" />,
	},
];

export default function TabBar() {
	const pathname = usePathname(); // 현재 경로를 가져옵니다.

	return (
		<nav
			className="pb-safe-bottom fixed bottom-0 z-10 flex h-16 w-full max-w-[400px] items-center justify-around rounded-t-2xl bg-white"
			style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}
		>
			{TABS.map(tab => {
				// 현재 경로와 탭의 href가 일치하는지 확인
				const isActive = pathname === tab.href;

				return (
					<Link
						key={tab.title}
						href={tab.href}
						// 활성화된 탭에 대해 다른 스타일 적용
						className={`mx-4 flex w-full flex-col items-center justify-center gap-1 ${
							isActive ? "font-bold text-(--commuter-color)" : "text-gray-400"
						}`}
					>
						{isActive ? tab.activeIcon : tab.icon}
						<span className="text-xs">{tab.title}</span>
					</Link>
				);
			})}
		</nav>
	);
}
