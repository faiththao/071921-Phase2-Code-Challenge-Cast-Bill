import React from 'react';

function SortBar({ bills, sortBy, setSortBy }) {
    function handleSort(e) {
        setSortBy(e.target.value)
    }
    return (
        <div>
            <strong>Sort by: </strong>
            <label>
                <input
                    type="radio"
                    value="rating"
                    name="sort"
                    defaultChecked={true}
                    checked={sortBy === "rating"}
                    onChange={handleSort}
                />
                Rating (high-low)
                <input
                    type="radio"
                    value="salary"
                    name="sort"
                    defaultChecked={true}
                    checked={sortBy === "salary"}
                    onChange={handleSort}
                />
                Salary (low-high)
            </label>
        </div>

    )
}

export default SortBar;