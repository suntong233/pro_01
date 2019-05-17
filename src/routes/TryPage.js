import React from 'react';
import {connect} from 'dva';
import TryPage from '../components/tryPage';

class MyTryPage extends React.Component{
    handleDelete=(index)=>{
        const {dispatch,tryList} = this.props;
        const newtableData = tryList.tableData;
        const newindex = index-1; 
        console.log(index);
        console.log(newtableData);
        tryList.tableData.splice(newindex,1);
        dispatch({
            type:'tryList/upDataHandleDele',
            payload:{
                tableData: newtableData,
            }
        })
    };
    onhandleSearch=(value)=>{
        console.log(value);
        const {dispatch,tryList} = this.props;
        console.log(tryList.tableData);
    };
    render(){
        const {dispatch,tryList} = this.props;
        const { test } = tryList;
        
        return(
            <div>
                <TryPage onhandleSearch={this.onhandleSearch} onDelete={this.handleDelete} tryList={tryList}/>
            </div>
        );
    }
}

export default connect(({tryList})=>({tryList}))(MyTryPage);