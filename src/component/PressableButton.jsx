import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PressableButton = ({ otherStyles, children, onClick }) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<button
			onClick={onClick}
			className={`transition-transform duration-150 ease-in-out transform ${
				isPressed ? "scale-90" : "scale-100"
			} cursor-pointer ${otherStyles}`}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onTouchStart={() => setIsPressed(true)}
			onTouchEnd={() => setIsPressed(false)}
		>
			{children}
		</button>
	);
};

export default PressableButton;
