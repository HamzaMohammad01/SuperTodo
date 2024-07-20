import { PiPaperPlaneRightFill } from "react-icons/pi";
import PressableButton from "./PressableButton";
import { useState } from "react";
import { setItem } from "../utils/storage";

const PostModal = ({ modalOpen = true, setModalOpen, getTasks }) => {
	const handleSave = () => {
		setItem(text);
		setText("");
		setModalOpen(false);
		getTasks();
	};
	const [text, setText] = useState("");

	if (!modalOpen) return null;
	else
		return (
			<div className="fixed inset-0 z-50 bg-black opacity-50 p-5 transition-all flex flex-col">
				<div
					className="h-full w-full"
					onClick={() => setModalOpen(false)}
				/>
				{/* Input */}
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSave();
					}}
					className="w-full space-x-5 mt-auto flex"
				>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						autoFocus
						className="h-10 w-full flex flex-col items-center bg-black text-white border-primary border-b-2 text-2xl focus:outline-none"
					/>
					{/* Send Button */}
					<PressableButton
						otherStyles={
							"bg-primary w-20 h-auto flex items-center justify-center rounded-full"
						}
					>
						<PiPaperPlaneRightFill
							className="text-white size-7"
							onClick={handleSave}
						/>
					</PressableButton>
				</form>
			</div>
		);
};

export default PostModal;
