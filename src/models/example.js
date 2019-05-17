
export default {

  namespace: 'example',

  state: {
    current: 'homePage',
    hashName: '',
    pageHash: {homePage: '#/',staticPage: '#/MyPage',dynamicPage: '#/CrudPage',undoPage: '#/'},   
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    upDataHandleClick(state,action){
      return ({...state,...action.payload})
    }
  },

};
