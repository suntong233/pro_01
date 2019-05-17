
export default {

    namespace: 'mypro',

    state: {
        mytest: 'atest',
        key: 'tab1',
        tabList: [
            {
                key: 'tab1',
                tab: '页面1',
            },
            {
                key: 'tab2',
                tab: '页面2',
            },
        ],
        page2Data: [
            {
                id: 1,
                shop: "必胜客",
                picture: "./images/beefpizza.jpg",
                product: "炙烤澳洲牛肉披萨",
                price: '87.0',
                ifCommented: true
            },
            {
                id: 2,
                shop: "麦当劳",
                picture: "./images/children.jpg",
                product: "欢乐儿童餐",
                price: '55.0',
                ifCommented: true
            },
            {
                id: 3,
                shop: "毫克西餐厅",
                picture: "./images/noddle.JPG",
                product: "经典意式肉酱面",
                price: '35.0',
                ifCommented: true
            },
            {
                id: 4,
                shop: "肯德基",
                picture: "./images/ice.jpg",
                product: "火龙果脏脏冰沙",
                price: '26.0',
                ifCommented: true
            },
        ],
        current: 'staticPage',
        hashName: '#/MyPage',
        pageHash: {homePage: '#/',staticPage: '#/MyPage',dynamicPage: '#/CrudPage',undoPage: '#/'},   
    },

    subscriptions: {

    },

    effects: {

    },

    reducers: {
        updateState(state,action){
            return ({
                ...state,...action.payload
            })
        },
        upDataHandleClick(state,action){
            return ({...state,...action.payload})
        }
    },

};
