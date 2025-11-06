"use client";

import { usePathname } from "next/navigation";

import Header from "@/components/@common/Header";
import TabBar from "@/components/@common/TabBar";
import CommunityFAB from "@/components/CommunityFAB";
import { useAppHeight } from "@/hooks/useAppHeight";

const FULL_SCREEN_PATHS = [
	"/community/post",
	"/community/report",
	// 추가적인 전체 화면 경로가 있다면 여기에 추가
];

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const { isOpen, title, description, actions, closeModal } = useModalStore();
	const pathname = usePathname();

	// 화면 높이 계산 훅 사용
	const appHeight = useAppHeight();

	// 참고: 동적 라우팅(예: /community/edit/[id])을 처리해야 한다면
	// const isFullScreenPage = FULL_SCREEN_PATHS.some(path => pathname.startsWith(path));
	const isFullScreenPage = FULL_SCREEN_PATHS.includes(pathname);

	const showHeaderAndTabBar = !isFullScreenPage;

	return (
		<>
			<div
				className="relative mx-auto flex h-full max-w-[480px] flex-col overflow-hidden border-x"
				style={{ height: appHeight }}
			>
				{showHeaderAndTabBar && <Header />}

				<main className="flex-1 overflow-y-auto">
					<div className={!isFullScreenPage ? "px-4 py-4" : "h-full"}>
						{children}
					</div>
				</main>

				{pathname === "/community" && <CommunityFAB />}
				{showHeaderAndTabBar && <TabBar />}
			</div>
		</>
	);
}
