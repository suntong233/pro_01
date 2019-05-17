import React from 'react';
import { Table, Button, Popconfirm, Input } from 'antd';
import Styles from './style.css';

const TryPageList = ({onDelete,tryList,onhandleSearch}) => {
    const columns = [
        {
            title: '食品',
            dataIndex: 'food',
            key: 'food',
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '行为',
            key: 'action',
            render: (record) => (
                <span>
                    <Button style={{marginRight:'10px'}}>编辑</Button>
                    <Popconfirm title="删除吗" onConfirm={()=>onDelete(record.index)}>
                        <Button>删除</Button>
                    </Popconfirm>  
                </span>
            ),
        },
    ];

    return (
        <div className={Styles.Table__Odiv}>
            {/* 顶部查询与新增 */}
            <div>
                <div className={Styles.Table__Search}>
                    <Input.Search placeholder="输入食品名" enterButton onSearch={value => onhandleSearch(value)}/>
                </div>
                <div className={Styles.Table__addBtn}>
                    <Button>添加</Button>
                </div>
            </div>
            {/* 表格 */}
            <div className={Styles.Table__Container}>
                <Table
                    columns={columns}
                    dataSource={tryList.tableData}
                />
            </div>
            
        </div>
    )
}

export default TryPageList;