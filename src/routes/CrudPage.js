import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Styles from './CrudPage.css';
import LoginPage from '../components/loginPage';
import UserList from '../components/crud/userList';
import UserModal from '../components/crud/userModal';
import UserSearch from '../components/crud/userSearch';

class CrudPage extends React.Component {
    handledelete = (record) => {
        const { dispatch, crudModel } = this.props;
        const { dataSource } = crudModel;
        const newdata = dataSource.filter(item => item != record);
        // console.log(record);
        // console.log(newdata);
        dispatch({
            type: 'crudModel/upDataHandleClick',
            payload: {
                dataSource: newdata
            }
        })
    };
    handleChangeA = (e) => {
        const { dispatch, crudModel } = this.props;
        dispatch({
            type: 'crudModel/upDataHandleClick',
            payload: {
                newname: e.target.value
            }
        })
    };
    handleChangeB = (e) => {
        const { dispatch, crudModel } = this.props;
        dispatch({
            type: 'crudModel/upDataHandleClick',
            payload: {
                newage: e.target.value
            }
        })
    };
    handleChangeC = (e) => {
        const { dispatch, crudModel } = this.props;
        dispatch({
            type: 'crudModel/upDataHandleClick',
            payload: {
                newaddress: e.target.value
            }
        })
    };
    handleAdd = () => {
        const { dispatch, crudModel } = this.props;
        const { newname, newage, newaddress } = crudModel;
        const newdata = { name: newname, age: newage, address: newaddress };
        const newdatasource = [...crudModel.dataSource, newdata];
        console.log(newdata);
        dispatch({
            type: 'crudModel/upDataHandleClick',
            payload: {
                dataSource: newdatasource,
                newname: '',
                newage: '',
                newaddress: '',
            }
        })
    };
    handleSearch=(value)=>{
        const { dispatch, crudModel } = this.props;
        const {dataSource} = crudModel; 
        const searchData = {name:value};
        console.log(searchData);
        const newData = dataSource.filter(item=>item.name===value);
        console.log(newData);
        dispatch({
            type: 'crudModel/upDataHandleClick',
            payload: {
                searchData:newData
            }
        })
    }
    handleEdit=(record)=>{
        
    }
    render() {
        const { dispatch, crudModel, location } = this.props;
        const { current, pageHash, hashName } = crudModel;  //取得导航相关操作的数据
        const { total, usecurrent, loading, dataSource, newname, newage, newaddress, ifedit } = crudModel; //取得用户操作相关的数据
        const handleClick = (e) => {
            dispatch({
                type: 'crudModel/upDataHandleClick',
                payload: {
                    current: e.key,
                    hashName: pageHash[e.key]
                }
            })
            console.log(hashName);
            window.location.hash = (hashName);
        };
        return (
            <div>
                {/* 顶部导航 */}
                <LoginPage current={current} handleClick={handleClick} />
                {/* 用户筛选搜索展示修改等 */}
                <UserSearch handleSearch={this.handleSearch} crudModel={crudModel}/><br />               
                <UserModal addBtn={this.handleAdd} newname={newname} newage={newage} newaddress={newaddress} changeA={this.handleChangeA} changeB={this.handleChangeB} changeC={this.handleChangeC} /><br></br>
                <UserList handleEdit={this.handleEdit} total={total} usecurrent={usecurrent} loading={loading} dataSource={dataSource} handledelete={this.handledelete} />
            </div>
        );
    }
}

export default connect(({ crudModel }) => ({ crudModel }))(CrudPage);