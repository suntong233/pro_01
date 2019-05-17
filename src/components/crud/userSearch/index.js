import React from 'react';
import Styles from './style.css';
import {Input} from 'antd';

class userSearch extends React.Component{
    render(){
        const {handleSearch,crudModel} = this.props;
        console.log(crudModel.searchData);
        return(
            <div>
                <div>
                    <Input.Search onSearch={value => handleSearch(value)} placeholder="输入姓名搜索" enterButton style={{width:'20%',marginLeft:'10px'}}/>
                    <span>
                        当前信息：姓名:{crudModel.searchData[0].name}&nbsp;
                        年龄:{crudModel.searchData[0].age}&nbsp;
                        地址:{crudModel.searchData[0].address}
                    </span>
                </div>
            </div>
        );
    }
}

export default userSearch;