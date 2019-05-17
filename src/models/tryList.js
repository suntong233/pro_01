export default {
    namespace: 'tryList',
    state: {
        test: 'a',
        tableData: [
            {
                key: 1,
                food:'香菇肉末米粉',
                price:'10'
            },
            {
                key: 2,
                food:'黄焖鸡',
                price:'11'
            },
            {
                key: 3,
                food:'脆皮香肠',
                price:'5'
            },
            {
                key: 4,
                food:'煲仔饭',
                price:'13'
            },
            {
                key: 5,
                food:'麻辣香锅',
                price:'15'
            },
        ],
    },
    reducers: {
        upDataHandleDele(state,action){
            return ({...state,...action.payload})
        },
    },
    effects: {

    },
    subscriptions: {

    },
};