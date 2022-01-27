import React from "react";

const Search = ({ searchedFood, callbackSearch }) => {
	return (
		<>
			<input
				type="text"
				placeholder="Search food by name"
				value={searchedFood}
				onChange={(e) => callbackSearch(e.target.value)}
			/>
		</>
	);
};

export default Search;