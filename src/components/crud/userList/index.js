import React from 'react';
import Styles from './style.css';
import { Table, Message, Popconfirm } from 'antd';

class userList extends React.Component{
    render(){
        const { total, usecurrent, loading, dataSource, handledelete, handleEdit} = this.props;
        // console.log(this.props);
        const columns= [
            {
                title:'姓名',
                dataIndex: 'name',
                key: 'name',
                render: (text)=><a href="http://localhost:8000/#/CrudPage">{text}</a>,
            },{
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },{
                title:'住址',
                dataIndex: 'address',
                key: 'address',
            },{
                title: '操作',
                key: 'operation',
                render: (record)=>(
                    <p>
                        <a onClick={()=>{handleEdit(record)}}>编辑</a>
                        &nbsp;
                        <Popconfirm title="确定要删除吗？" onConfirm={()=>{handledelete(record)}}>
                            <a>删除</a>
                        </Popconfirm>
                    </p>
                ),
            }
        ];

        //定义分页对象
        const pagination = {
            total,usecurrent,pageSize:10,onChange:()=>{},
        };
        return(
            <div>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                    rowKey={record => record.id}
                    pagination={pagination}
                />
            </div>
        );
    }
}

export default userList;