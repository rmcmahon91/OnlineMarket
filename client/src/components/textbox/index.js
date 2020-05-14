import React from "react"
export default function ({search,handleChange}) {
    return (
        <div>
            Search <input value={search}
                onChange={handleChange}
                className="mb-5 form-control" type="text" />
        </div>
    )
}