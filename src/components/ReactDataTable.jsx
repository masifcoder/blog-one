import React, { useState } from 'react'
import DataTable from "react-data-table-component";

const ReactDataTable = ({ data }) => {
    const [searchText, setSearchText] = useState("");
    const columns = [
        {
            name: 'Photo',
            cell: row => <img src={row.image} alt="User" width="50" height="50" style={{ borderRadius: '5px' }} />,
            sortable: false, // Optional: Disable sorting for images
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: "Published Status",
            selector: (row) => row.isPublished,
            sortable: true,
            cell: (row) => {
                return (
                    <span
                        className={`px-2 py-1 rounded-full text-white ${row.isPublished === true ? "bg-green-400" : "bg-red-400"
                            }`}
                    >
                        {row.isPublished === true ? "Published" : "Draft"}
                    </span>
                );
            },
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex space-x-1">
                    {/* Edit Button */}
                    <button
                        onClick={() => handleEdit(row._id)}
                        className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    {/* Delete Button */}
                    <button
                        onClick={() => handleDelete(row._id)}
                        className="cursor-pointer px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            ),
            ignoreRowClick: true, // Don't trigger row click when clicking on actions
            allowOverflow: true,
            button: true,
            width: "190px"
        },
    ];

    // Custom Styles for Table
    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "#96aac5", // Tailwind Gray-800
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
            },
        },
        rows: {
            style: {
                backgroundColor: "#F3F4F6", // Tailwind Gray-100
                "&:hover": {
                    backgroundColor: "#E5E7EB", // Tailwind Gray-200
                },
            },
        },
        pagination: {
            style: {
                backgroundColor: "#dbe3ee", // Tailwind Gray-800
                color: "white",
            },
        },
    };

    // Handle Title Search
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="mx-auto p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Styled Data Table</h2>

            {/* Search Input for Title */}
            <input
                type="text"
                placeholder="Search by title..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
            />

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                customStyles={customStyles}
                className="border border-gray-300 rounded-lg"
            />
        </div>
    )

}

export default ReactDataTable