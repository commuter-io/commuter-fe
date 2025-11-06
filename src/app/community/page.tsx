// src/app/community/page.tsx

import CommunityFAB from "@/components/CommunityFAB";

export default function Community() {
	return (
		<div className="relative h-full">
			커뮤니티
			<div className="fixed inset-x-0 bottom-0 mx-auto h-full max-w-[400px]">
				<CommunityFAB />
			</div>
		</div>
	);
}
