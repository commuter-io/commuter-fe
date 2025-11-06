// src/components/ActionDrawer.tsx

"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerFooter,
	DrawerClose,
	// DrawerTrigger,
} from "@/components/ui/drawer";

export interface Action {
	label: string;
	onClick: () => void;
	variant?: "destructive" | "outline" | "default" | "ghost";
	icon?: React.ReactNode;
	className?: string;
}

export interface ActionDrawerProps {
	isOpen: boolean;
	title?: string;
	description?: string;
	onOpenChange: (open: boolean) => void;
	actions: Action[];
}

export function ActionDrawer({
	isOpen,
	onOpenChange,
	title,
	description,
	actions,
}: ActionDrawerProps) {
	return (
		<Drawer
			open={isOpen}
			onOpenChange={onOpenChange}
			shouldScaleBackground={false}
		>
			<DrawerContent className="mx-auto max-w-[480px]">
				{/* title이나 description이 있을 때만 Header를 렌더링 */}
				{(title || description) && (
					<DrawerHeader>
						{title && <DrawerTitle>{title}</DrawerTitle>}
						{description && (
							<DrawerDescription>{description}</DrawerDescription>
						)}
					</DrawerHeader>
				)}

				{/* Action Buttons */}
				<div className="flex flex-col gap-2 p-4">
					{actions.map(action => (
						<Button
							key={action.label}
							variant={action.variant || "default"}
							className={`w-full ${action.className}`}
							onClick={() => {
								action.onClick();
								onOpenChange(false);
							}}
						>
							{action.icon}
							<span>{action.label}</span>{" "}
						</Button>
					))}
				</div>

				{/* Footer */}
				<DrawerFooter>
					<DrawerClose asChild>
						<Button
							variant="outline"
							size="default"
							className="rounded-full border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
						>
							취소
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>{" "}
		</Drawer>
	);
}
