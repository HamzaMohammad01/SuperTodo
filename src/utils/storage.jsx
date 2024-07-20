const getItem = () => {
	return JSON.parse(localStorage.getItem("tasks"));
};

const setItem = (item) => {
	const allItems = getItem();

	item = {
		id: Date.now().toString(36) + Math.random().toString(36),
		name: item,
		status: false,
	};

	allItems.push(item);
	return localStorage.setItem("tasks", JSON.stringify(allItems));
};

const getItemByIdAndUpdate = (id, newData) => {
	// Check if newData is an object and has exactly one key
	if (
		typeof newData !== "object" ||
		newData === null ||
		Object.keys(newData).length !== 1
	) {
		return "Invalid data provided. Must be an object with exactly one key.";
	}

	// Update Data
	let allItems = getItem();
	const newAllItems = allItems.map((item) => {
		if (item.id === id) {
			let myItem = { ...item };
			myItem[Object.keys(newData)[0]] = newData[Object.keys(newData)[0]];
			return myItem;
		} else {
			return item;
		}
	});

	localStorage.setItem("tasks", JSON.stringify(newAllItems));
	return newAllItems;
};

const getItemByIdAndDelete = (id) => {
	const allItems = getItem();
	const filteredItems = allItems.filter((e) => e.id !== id);
	localStorage.setItem("tasks", JSON.stringify(filteredItems));
};

export { getItem, setItem, getItemByIdAndUpdate, getItemByIdAndDelete };
