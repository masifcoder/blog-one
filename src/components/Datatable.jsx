import React from 'react'
import { Table } from 'antd';


const Datatable = ({data}) => {
    
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',

          filters: [
            {
              text: 'Published',
              value: 'published',
            },
            {
              text: 'Darft',
              value: 'draft',
            },
          ],

          filterSearch: true,
          onFilter: (value, record) => record.title.includes(value),
          width: '30%',
        },
        {
          title: 'Published Status',
          dataIndex: 'isPublished',
          sorter: (a, b) => a.isPublished - b.isPublished,
        }
      ];

      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

  return (
    <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
    </div>
  )
}

export default Datatable