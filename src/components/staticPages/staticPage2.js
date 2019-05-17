import React from 'react';
import styles from './staticPage2.css';

class staticPage2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editing: false, 
            starsScore: 0,
            comment: ''
        }
    }

    render(){
        const {
            product, shop, price, picture,ifCommented
        } = this.props.data;
        return(
            <div className={styles.pro02Item}>
                <div className={styles.pro02Item__picContainer}>
                    <img className={styles.pro02Item__pic} src={picture}/>
                </div>
                <div className={styles.pro02Item__content}>
                    <div className={styles.pro02Item__product}>{product}</div>
                    <div className={styles.pro02Item__shop}>{shop}</div>
                    <div className={styles.pro02Item__detail}>
                        <div className={styles.pro02Item__price}>价格：{price}</div>
                        <div>
                            {
                                ifCommented ? (
                                    <button className={styles.pro02Item__btn1} onClick={this.handleOpenEditArea}>评价</button>
                                ): (
                                    <button className={styles.pro02Item__btn2}>已评价</button>
                                )
                            }
                        </div>
                    </div>
                </div>
                {this.state.editing? this.renderEvalute() : null}
            </div>
        );
    }
    renderEvalute(){
        return (
            <div className={styles.pro02Item__commentContainer}>
                <textarea onChange={this.handleCommentChange} value={this.state.comment} className={styles.pro02Item__comment}/>
                {this.renderStars()}
                <button className={styles.pro02Item__btn1} onClick={this.handleSubmit}>提交</button>
                <button className={styles.pro02Item__btn1} onClick={this.handleCancel}>取消</button>
            </div>
        )
    }
    renderStars(){
        const { starsScore } = this.state;
        return (
            <div>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const light = starsScore >= item ?
                        "pro02Item__starlight" : "";
                        return (
                                <span key={index} onClick={this.handleClickStars.bind(this,item)}>★</span>         
                        )
                    })
                }       
            </div>
        );
    }

    handleOpenEditArea = () => {
        this.setState({
            editing: true
        })
    }
    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    handleClickStars = (starsScore) => {
        this.setState({
            starsScore: starsScore
        })
    }
    handleCancel = () => {
        this.setState({
            editing: false, 
            starsScore: 0,
            comment: ''
        })
    }
    handleSubmit = () => {
        this.setState({
            editing: false,
        })
    }
}

export default staticPage2;