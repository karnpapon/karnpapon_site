import { 
  FETCH_SELECTED_WORK, 
  SET_SCROLL_TO, 
  SET_SCROLL_TO_TRUE, 
  SET_SCROLL_TO_FALSE } from "./actions.type";
import { dataWorks } from "../data/works"
import { 
  FETCH_START, 
  FETCH_END,
  SET_WORK,
  SET_SCROLL,
  SET_SCROLL_FUNCTION
} from "./mutations.type";

const state = {
  listData: [],
  isLoading: true,
  workDetail: "",
  isSetScroll: false,
  setScroll: () => {}
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  getListData(state) {
    return state.listData;
  },
  getWorkDetail(state){
    return state.workDetail
  },
  getSetScroll(state){
    return state.isSetScroll
  },
  getSetScrollFunction(state){
    return state.setScroll
  }
};

const actions = {
  [FETCH_SELECTED_WORK]({ commit }, workTarget) {
    const work = dataWorks.filter( work => work.slug == workTarget )
    commit(SET_WORK, work[0]);
  },
  [SET_SCROLL_TO]({commit}, setter){
    commit(SET_SCROLL_FUNCTION, setter);
  },
  [SET_SCROLL_TO_TRUE]({commit}){
    commit(SET_SCROLL, true);
  },
  [SET_SCROLL_TO_FALSE]({commit}){
    commit(SET_SCROLL, false);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, response) {
    state.isLoading = false;
    state.listData = response
  },
  [SET_WORK](state, work){
    state.workDetail = work
  },
  [SET_SCROLL](state, scrollState){
    state.isSetScroll = scrollState
  },
  [SET_SCROLL_FUNCTION](state, setter){
    state.setScroll = setter
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
