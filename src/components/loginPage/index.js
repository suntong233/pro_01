import React from 'react';
import Styles from './style.css';
import { Menu, Icon } from 'antd';

class loginPage extends React.Component{
    render(){
        const {example,current,handleClick} = this.props;
        return(
            <div>
                <Menu
                    mode="horizontal"
                    onClick={handleClick}
                    selectedKeys={[current]}
                >
                    <Menu.Item className={Styles.homePageMenuItem} key="homePage">
                        <Icon type="home" theme="twoTone"/>主页
                    </Menu.Item>
                    <Menu.Item className={Styles.homePageMenuItem} key="staticPage">
                        <Icon type="code" theme="twoTone"/>静态页面
                    </Menu.Item>
                    <Menu.Item className={Styles.homePageMenuItem} key="dynamicPage">
                        <Icon type="box-plot" theme="twoTone"/>crud
                    </Menu.Item>
                    <Menu.Item className={Styles.homePageMenuItem} key="undoPage">
                        <Icon type="fund" theme="twoTone"/>undo
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default loginPage;