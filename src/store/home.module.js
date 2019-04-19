import { FETCH_SELECTED_WORK } from "./actions.type";
import { dataWorks } from "../data/works"
import { 
    FETCH_START, 
    FETCH_END,
    SET_WORK
} from "./mutations.type";

const state = {
  listData: [],
  isLoading: true,
  workDetail: ""
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
  }
};

const actions = {
  [FETCH_SELECTED_WORK]({ commit }, workTarget) {
    const work = dataWorks.filter( work => work.slug == workTarget )
    commit(SET_WORK, work[0]);
  },
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
