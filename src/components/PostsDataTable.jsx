import React from 'react'
import DataTable from 'react-data-table-component';


const PostsDataTable = ({ posts, onDelete }) => {



    // delete call
    const handleDelete = (id) => {
        onDelete(id);
    }

    // handle edit
    const handleEdit = (id) => {

    }

    const columns = [
        {
            name: 'Image',
            selector: row => <img src={row.image} alt="User" width="50" height="50" style={{ borderRadius: '5px' }} />,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => (row.isPublished == true) ? <span className='bg-green-400 p-2 px-5 inline-block rounded-sm text-white'>Published</span> : <span className='px-4 inline-block rounded-sm bg-red-400 text-white p-2'>Draft</span>,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex space-x-1">
                    <button
                        onClick={() => handleEdit(row._id)}
                        className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(row._id)}
                        className="cursor-pointer px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            ),
        }
    ];


    return (
        <div>
            <DataTable
                columns={columns}
                data={posts}
                pagination={true}
                paginationPerPage={5}
            />
        </div>
    )
}

export default PostsDataTable