import React from 'react';
import { Input, Button } from 'antd';
import Styles from './style.css';

class userModal extends React.Component{
    render(){
        const { newname, newage, newaddress, changeA, changeB, changeC, addBtn} = this.props;
        
        
        return(
            
            <div>
                <div>
                    <Input placeholder="请输入姓名" value={newname} className={Styles.addIpt} onChange={(e)=>{changeA(e)}}/>
                    <Input placeholder="请输入年龄" value={newage} className={Styles.addIpt} onChange={(e)=>{changeB(e)}}/>
                    <Input placeholder="请输入住址" value={newaddress} className={Styles.addIpt} onChange={(e)=>{changeC(e)}}/>
                    <Button type='primary' onClick={addBtn}>添加</Button>
                </div>
            </div>
        );
    }
}

export default userModal;