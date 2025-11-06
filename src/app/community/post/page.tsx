// src/app/community/post/page.tsx

"use client";

import { Image as ImageIcon, ClipboardPen, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import { HiXMark } from "react-icons/hi2";

import { ActionDrawer } from "@/components/ActionDrawer";
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

// 이미지 파일과 미리보기 URL을 저장할 인터페이스
interface PreviewImage {
	file: File;
	url: string;
}

export default function CommunityPost() {
	// 라우팅 제어
	const router = useRouter();

	// 텍스트 입력 위한 state
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	// 게시글 완료 버튼 활성화 조건
	const isFormValid = title.trim().length > 0 && content.trim().length > 0;

	// 여러 이미지를 관리하기 위한 상태
	const [selectedImages, setSelectedImages] = useState<PreviewImage[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	// 이미지 파일 선택 핸들러
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const files = Array.from(e.target.files);

			const newImages: PreviewImage[] = files.map(file => ({
				file,
				url: URL.createObjectURL(file),
			}));

			setSelectedImages(prevImages => [...prevImages, ...newImages]);

			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
		}
	};

	// 이미지 미리보기 제거 핸들러
	const handleRemoveImage = (urlToRemove: string) => {
		setSelectedImages(prevImages =>
			prevImages.filter(image => image.url !== urlToRemove)
		);
		URL.revokeObjectURL(urlToRemove);
	};

	// 임시저장 모달(Drawer) 관리하기 위한 상태
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	// 커뮤니티 게시글 작성 취소 클릭 핸들러
	// 제목/내용 입력된 경우 임시저장 모달 띄우고 아닌 경우 이전 페이지로 이동
	const handleCancelClick = () => {
		if (title.trim().length > 0 || content.trim().length > 0) {
			setIsDrawerOpen(true);
		} else {
			router.back();
		}
	};

	// 임시저장 모달에서 사용할 액션 목록
	const cancelActions = [
		{
			label: "삭제",
			variant: "ghost" as const,
			icon: <Trash2 className="h-5 w-5 text-red-500" />,
			onClick: () => {
				console.log("삭제 로직 실행");
				router.back();
			},
			className: "h-14 text-lg justify-start text-red-500 hover:text-red-500",
		},
		{
			label: "임시저장",
			variant: "ghost" as const,
			icon: <ClipboardPen className="h-5 w-5 text-gray-500" />,
			onClick: () => {
				console.log("임시저장 로직 실행");
				router.back();
			},
			className: "h-14 text-lg justify-start text-black",
		},
	];

	return (
		<div className="flex h-full w-full flex-col">
			{/* 상단 헤더 */}
			<div className="flex items-center justify-between p-2">
				<Button variant="ghost" size="icon" onClick={handleCancelClick}>
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

			{/* 이미지 미리보기 영역 */}
			{selectedImages.length > 0 && (
				<div className="flex w-full flex-row gap-2 overflow-x-auto p-4">
					{selectedImages.map(image => (
						<div
							key={image.url}
							className="relative aspect-square w-16 shrink-0"
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={image.url}
								alt="미리보기"
								className="h-full w-full rounded-md object-cover"
							/>
							<Button
								variant="ghost"
								size="icon"
								className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-black/50 text-white hover:bg-black/70"
								onClick={() => handleRemoveImage(image.url)}
							>
								<HiXMark className="h-4 w-4" />
							</Button>
						</div>
					))}
				</div>
			)}

			{/* 하단 기능 버튼 (모바일 키보드 위에 올라와야 함) */}
			<div className="overscroll-contain">
				<Separator />
				<div className="flex items-center px-4 py-2">
					{/* 이미지 첨부 버튼 */}
					<Button asChild variant="ghost" className="h-auto p-2">
						<label
							htmlFor="imageUpload"
							className="flex cursor-pointer items-center gap-1 text-gray-600 hover:text-gray-900"
						>
							<ImageIcon className="h-5 w-5" aria-hidden="true" />
							<span>{TEXTS.attachImage}</span>
						</label>
					</Button>
					<input
						type="file"
						id="imageUpload"
						ref={fileInputRef}
						className="sr-only"
						accept="image/*"
						onChange={handleFileChange}
						multiple // 여러 파일 선택 허용
					/>
				</div>
			</div>

			<ActionDrawer
				isOpen={isDrawerOpen}
				onOpenChange={setIsDrawerOpen}
				actions={cancelActions}
			/>
		</div>
	);
}
