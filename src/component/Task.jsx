import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import PressableButton from "./PressableButton";
import { getItemByIdAndDelete, getItemByIdAndUpdate } from "../utils/storage";

const Task = ({ tasks, getTasks }) => {
	let { name, status, id } = tasks;

	const handleCheckbox = () => {
		getItemByIdAndUpdate(id, { status: !status });
		getTasks();
	};
	return (
		<>
			<div className="flex items-center mb-5 ml-3">
				{/* checkbox */}
				<PressableButton
					otherStyles="mr-5 cursor-pointer"
					onClick={handleCheckbox}
				>
					{status ? (
						<FaRegCircleCheck
							className={`text-primary ${styles.icon}`}
						/>
					) : (
						<FaRegCircle className={`${styles.icon}`} />
					)}
				</PressableButton>

				<div className={status && "text-secondary-300"}>{name}</div>
				{status && (
					<PressableButton
						otherStyles={"ml-auto"}
						onClick={() => {
							getItemByIdAndDelete(id);
							getTasks();
						}}
					>
						<FaRegTrashCan
							className={"size-7 text-secondary-300"}
						/>
					</PressableButton>
				)}
			</div>
			<div className="border-[0.5px] mb-5 text-secondary-300"></div>
		</>
	);
};

export default Task;

const styles = {
	icon: "size-7",
};
