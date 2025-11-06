// src/app/community/post/page.tsx

"use client";

import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// 텍스트 객체 분리
const TEXTS = {
	categoryPlaceholder: "여기는 카테고리 선택 영역",
	titlePlaceholder: "제목을 입력해주세요.",
	contentPlaceholder: "내용을 입력해주세요.",
	attachImage: "사진",
	completeButton: "완료",
};

export default function CommunityPost() {
	// 텍스트 입력 위한 state
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	// 게시글 완료 버튼 활성화 조건
	const isFormValid = title.trim().length > 0 && content.trim().length > 0;

	return (
		<div className="flex h-full w-full flex-col">
			{/* 상단 헤더 */}
			<div className="flex items-center justify-between p-2">
				<Button variant="ghost" size="icon">
					<HiXMark className="h-6 w-6" />
				</Button>
				<Button
					variant="default"
					size="default"
					className="m-2 rounded-md"
					disabled={!isFormValid} // 유효성 검사 결과에 따라 활성화/비활성화
				>
					{TEXTS.completeButton}
				</Button>
			</div>

			<Separator />

			{/* 본문 영역 (스크롤) */}
			<div className="flex-1 space-y-1 overflow-y-auto px-4 py-2">
				{/* 카테고리 (현재는 임시 텍스트) */}
				<div className="text-gray-600 dark:text-gray-300">
					{TEXTS.categoryPlaceholder}
				</div>

				<Separator className="my-2" />

				{/* 제목 입력 필드 */}
				<input
					name="title"
					id="title"
					type="text"
					placeholder={TEXTS.titlePlaceholder}
					className="w-full border-none bg-transparent pb-2 text-lg font-bold placeholder:text-gray-400 focus:outline-none"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>

				{/* 본문 입력 필드 */}
				<textarea
					name="content"
					id="content"
					placeholder={TEXTS.contentPlaceholder}
					className="min-h-[200px] w-full grow resize-none border-none bg-transparent placeholder:text-gray-400 focus:outline-none"
					value={content}
					onChange={e => setContent(e.target.value)}
				></textarea>
			</div>
		</div>
	);
}
