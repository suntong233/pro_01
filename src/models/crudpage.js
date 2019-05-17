// import { hashHistory } from 'dva/router';
// import request from '../utils/request';
// import qs from 'qs';
// async function query(params){
//     return request()
// }

export default {
    namespace: 'crudModel',
    state: {
        current: 'dynamicPage',
        hashName: '#/CrudPage',
        pageHash: { homePage: '#/', staticPage: '#/MyPage', dynamicPage: '#/CrudPage', undoPage: '#/' },
        //以下是用户数据
        total: 3,
        usecurrent: 1,
        loading: false,
        dataSource: [
            {
                name: '张三',
                age: 23,
                address: '成都',
            },
            {
                name: '李四',
                age: 24,
                address: '杭州',
            },
            {
                name: '王五',
                age: 25,
                address: '上海',
            },
        ],
        //新增的数据
        newname: '',
        newage: '',
        newaddress:'',
        //编辑数据
        ifedit: false,   //是否编辑数据
        //查询
        searchData: [{name:'',age:'',address:''}],
    },
    subscriptions: {
        //     setup({dispatch,history}){
        //         history.listen(location=>{
        //             if(location.pathname === '/CrudPage'){
        //                 dispatch({
        //                     type:'querySuccess',
        //                     payload: {}
        //                 });
        //             }
        //         });
        //     }
    },

    effects: {

    },

    reducers: {
        upDataHandleClick(state, action) {
            return ({ ...state, ...action.payload })
        },
        // querySuccess(state){   
        //     const mock = {
        //         total: 3,
        //         usecurrent: 1,
        //         loading: false,
        //         dataSource: [
        //         {
        //             name: '张三',
        //             age: 23,
        //             address: '成都',
        //         },
        //         {
        //             name: '李四',
        //             age: 24,
        //             address: '杭州',
        //         },
        //         {
        //             name: '王五',
        //             age: 25,
        //             address: '上海',
        //         },
        //         ],
        //     };
        //     return {...state,...mock,loading:false};
        // },
    },

};
