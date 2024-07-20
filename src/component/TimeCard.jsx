import { useEffect, useState } from "react";

const TimeCard = ({ tasks }) => {
	const date = new Date();

	const [stats, setStats] = useState({ allTasks: 0, completedTasks: 0 });
	useEffect(() => {
		const allTasks = tasks.length;
		const completedTasks = tasks.filter(
			(task) => task.status === true
		).length;
		setStats({ allTasks, completedTasks });
	}, [tasks]);

	return (
		<div className="h-44 w-full bg-secondary-100 rounded-2xl p-5 flex flex-col justify-between font-primary">
			{/*Today Text  */}
			<div>
				<span className="text-3xl font-bold">
					{date.toLocaleString("default", { weekday: "long" })},{" "}
				</span>
				<span className="text-3xl">{`${date.getDate()} ${date.toLocaleString(
					"default",
					{ month: "long" }
				)}`}</span>
			</div>

			{/* tasks stats */}
			<div className="flex justify-between">
				<div>
					<div className="text-3xl">{stats.allTasks}</div>
					<div>Created Tasks</div>
				</div>
				<div>
					<div className="text-3xl">{stats.completedTasks}</div>
					<div>Completed Tasks</div>
				</div>
			</div>
		</div>
	);
};

export default TimeCard;
