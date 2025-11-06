// src/components/@common/Header.tsx

import Link from "next/link";
import { HiBell } from "react-icons/hi2";

export default function Header() {
	return (
		<header
			className={`pt-safe-top z-10 flex h-12 w-full justify-center border-b bg-white`}
		>
			<nav className="mx-4 flex w-full items-center justify-between">
				{/* 로고 생기면 교체 예정 */}
				<Link href="/" className="text-commuter text-lg font-bold">
					커뮤터
				</Link>
				<div className="flex items-center space-x-4">
					<button aria-label="알림">
						<HiBell className="size-6 text-gray-400" />
					</button>
				</div>
			</nav>
		</header>
	);
}
