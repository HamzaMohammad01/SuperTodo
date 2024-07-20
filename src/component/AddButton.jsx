import { FaPlus } from "react-icons/fa6";
import PressableButton from "./PressableButton";

const AddButton = ({ modalOpen, setModalOpen }) => {
	return (
		<PressableButton
			onClick={() => setModalOpen(!modalOpen)}
			otherStyles="flex flex-col bg-primary h-20 w-20 rounded-full p-5 fixed bottom-2 self-center"
		>
			<FaPlus className="size-full text-white" />
		</PressableButton>
	);
};

export default AddButton;
