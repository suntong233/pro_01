import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import LoginPage from '../components/loginPage';

class IndexPage extends React.Component {
    
    render(){
        const {dispatch,example} = this.props;
        const {current,pageHash,hashName} = example;
        const handleClick=(e)=>{           
            dispatch({
                type: 'example/upDataHandleClick',
                payload: {
                    current: e.key,
                    hashName: pageHash[e.key]
                }
            })
            // console.log(hashName);
            window.location.hash=(hashName);
        };
        return (
            <div className={styles.normal}>
                <LoginPage current={current} handleClick={handleClick}/>
            </div>
        );
    }
}

IndexPage.propTypes = {
};

export default connect(({example})=>({example}))(IndexPage);
