import React, { useState } from "react";

const Form = ({ addFood }) => {
	const [name, setName] = useState("");
	const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const food = { name, calories, image};
		// console.log(contact);
		addFood(food);
		setCalories("");
		setImage("");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="name">name</label>
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor="calories">calories</label>
			<input
				type="text"
				name="calories"
				id="calories"
				value={calories}
				onChange={(e) => setCalories(e.target.value)}
			/>
            <label htmlFor="image">image</label>
			<input
				type="text"
				name="image"
				id="image"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>

			<button>Add this food</button>
		</form>
	);
};

export default Form;