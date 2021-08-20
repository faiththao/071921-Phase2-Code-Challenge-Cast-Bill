import React from 'react';

function SortBar({ bills, sortBy, setSortBy }) {


    function handleSort(e) {
        setSortBy(e.target.value)
    }
    return (
        <div>
            <div>
                <strong>Sort by: </strong>
                <label>
                    <input
                        type="checkbox" 
                        value="rating"
                        name="sort"
                        defaultChecked={true}
                        checked={sortBy === "rating"}
                        onChange={handleSort}
                    />
                    Rating
                </label>
            </div>
        </div>
    )
}

export default SortBar;