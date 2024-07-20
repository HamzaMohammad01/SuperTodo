import { useEffect, useState } from "react";
import AddButton from "./component/AddButton";
import Task from "./component/Task";
import TimeCard from "./component/TimeCard";
import PostModal from "./component/PostModal";
import { getItem } from "./utils/storage";

const App = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [tasks, setTasks] = useState([]);

	const getTasks = () => {
		const items = getItem();
		if (items) setTasks(items);
		else localStorage.setItem("tasks", JSON.stringify([]));
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<div className="p-3 flex flex-col">
			<TimeCard tasks={tasks} />

			{/* Tasks Container */}
			<div className="mt-5">
				{tasks.map((e) => (
					<Task tasks={e} key={e.id} getTasks={getTasks} />
				))}
			</div>

			{/* add Button */}
			<AddButton modalOpen={modalOpen} setModalOpen={setModalOpen} />

			<PostModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				getTasks={getTasks}
			/>
		</div>
	);
};

export default App;
