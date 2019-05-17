import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import styles from './MyPage.css';
import StaticPage1 from '../components/staticPages/staticPage1';
import StaticPage2 from '../components/staticPages/staticPage2';
import LoginPage from '../components/loginPage';

class MyPage extends React.Component {
    onTabChange = (key, type) => {
        const { dispatch } = this.props;
        console.log(key, type);  
        dispatch({
            type:'mypro/updateState',
            payload: {
                [type]: key
            }
        })
    };
    render() {
        const { dispatch,mypro } = this.props;
        const {mytest,tabList,key,page2Data,current,pageHash,hashName} = mypro;
        const handleClick=(e)=>{           
            dispatch({
                type: 'mypro/upDataHandleClick',
                payload: {
                    current: e.key,
                    hashName: pageHash[e.key]
                }
            })
            console.log(hashName);
            window.location.hash=(hashName);
        };
        const contentList = {
            tab1: <StaticPage1 mypro={mypro}/>,
            tab2: page2Data.map(item=>{
                    return <StaticPage2 key={item.id} data={item}/>
                }),
        };
        
        console.log();
        return (
            <div>
                <LoginPage current={current} handleClick={handleClick}/>
                <Card 
                    className={styles.topCard}
                    title="静态页面"
                    extra={<span>孙通</span>}
                    tabList={tabList}
                    activeTabKey={key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                >
                    {contentList[key]}
                </Card>
            </div>
        )
    }
}


export default connect(({mypro})=>({mypro}))(MyPage);

