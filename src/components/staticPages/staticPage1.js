import React from 'react';
import { Button, Breadcrumb, Icon, Calendar, Menu, DatePicker } from 'antd';
import moment from 'moment';
import styles from './staticPage1.css';

class staticPage1 extends React.Component{
    

    render(){
        const { mypro } = this.props;
        const { mytest } = mypro; 
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        const dateFormat = 'YYYY/MM/DD';
        console.log(mytest);
        return(
            <div>
                <div className={styles.testDiv}>
                    <div className={styles.topDiv}>
                        <div className={styles.cutTopDiv1}>
                            <div className={styles.item_left_1}>服务宝</div>
                            <div className={styles.item_left_2}>产品体验平台</div>
                            <div className={styles.item_right_1}>体验首页</div>
                            <div className={styles.item_right_2}>实时监控</div>
                            <div className={styles.item_right_3}>我的地盘</div>
                        </div>
                        <div className={styles.cutTopDiv2}>
                            <div>信息</div>
                            <div>other</div>
                            <img src="./images/head.png"></img>
                        </div>
                    </div>
                    <div className={styles.divBox1}>
                        <div className={styles.menuBox1}>
                            <Menu mode="horizontal">
                                <Menu.Item>共创建</Menu.Item>
                                <Menu.Item>共收到</Menu.Item>
                            </Menu>
                            <div className={styles.menuContent}>
                                <Icon className={styles.menuIcon} spin type="smile" theme="twoTone" twoToneColor="#eb2f96" />
                                <div><font color='brow'><font size='6' color='brow'>0</font><br />预告预警（次）</font></div>
                            </div>
                            <div className={styles.menuContent}>
                                <Icon className={styles.menuIcon} type="project" theme="twoTone" twoToneColor="red" />
                                <div><font color='brow'><font size='6' color='brow'>1</font><br />异常报告（件）</font></div>
                            </div>
                            <div className={styles.menuContent}>
                                <Icon className={styles.menuIcon} type="rest" theme="twoTone" twoToneColor="#eb2f96" />
                                <div><font color='brow'><font size='6' color='brow'>0</font><br />体验报告（件）</font></div>
                            </div>
                            <div className={styles.menuContent}>
                                <Icon className={styles.menuIcon} type="fund" theme="twoTone" twoToneColor="orange" />
                                <div><font color='brow'><font size='6' color='brow'>1</font><br />体检问题（个）</font></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divBox2}>
                        <div className={styles.divBox3}>
                            <div className={styles.divTopBox}>产品日志</div>
                            <div>
                                <div className={styles.divBox3Icon1}></div><div style={{ float: 'left' }}>异常</div>
                                <div className={styles.divBox3Icon2}></div><div style={{ float: 'left' }}>优化</div>
                                <div className={styles.divBox3Icon3}></div><div>预告</div>
                            </div>
                            <div className={styles.calenarDiv}>
                                <Calendar fullscreen={false} />
                            </div>
                        </div>
                        <div className={styles.divBox4}>
                            <div className={styles.divTopBox}>
                                <div className={styles.divTopBox_left}>工作成果</div>
                                <div className={styles.divTopBox_right}>
                                    <DatePicker inherit style={{ width: '100%' }} className={styles.divTopBoxDatePicker} defaultValue={moment('2015/12/1')} format={dateFormat} />
                                </div>
                            </div>
                            <div className={styles.divTopBox4Content1}>
                                <Menu mode="horizontal">
                                    <Menu.Item>预告总览</Menu.Item>
                                    <Menu.Item>预警总览</Menu.Item>
                                </Menu>
                            </div>
                            <div className={styles.divTopBox4Content2}>
                                <br />
                                <div><font size="5">预告总览</font></div>
                                <div><font color="gray">成功率0%</font></div><br /><br />
                                <div><font>0</font>次</div>
                                <div><font color="gray">近30天报告</font></div><br /><br />
                                <div>
                                    <div>预告准确，发生异常0次</div>
                                    <div>预告准确，成功拦截0次</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.divBox5}>
                            <div className={styles.divBox6}>
                                <div className={styles.divTopBox}><div></div>我的任务</div>
                                <div className={styles.divTopBox4Content1}>
                                    <Menu mode="horizontal">
                                        <Menu.Item>个人欺诈风险</Menu.Item>
                                    </Menu>
                                </div>
                                <div className={styles.divTopBox4Content1}>测试</div>
                                <div className={styles.divBox6Button}>
                                    <Button>查看个人欺诈风险</Button>
                                </div>
                            </div>
                            <div className={styles.divBox7}>
                                <div className={styles.divTopBox}>
                                    <div></div>我关注的产品
                                    <a href='https://www.baidu.com' className={styles.divTopBoxA}>关注更多产品</a>
                                </div>
                                <div className={styles.divTopBox7Content}>
                                    <div>aa收款</div><div>交易记录</div><div>储蓄卡快捷支付</div>
                                    <div>nfc</div><div>中间人欺诈风险</div><div>wap支付管理</div>
                                    <div>12306购火车票</div><div>会员保障管理</div><div>0元购机</div>
                                    <div>亲密付</div><div>转账到卡</div><div>付款码支付</div>
                                    <div>代充</div><div>商户欺诈风险</div><div>聚划算</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default staticPage1;