import { 
  FETCH_DATA,
  FETCH_WORKS,
  FETCH_WORKS_BY_YEAR,
  FETCH_SELECTED_WORK, 
  FETCH_NEXT_SUGGESTED,
  FETCH_ABOUT_DETAILS,
  FETCH_JOURNAL_DETAILS,
  SET_SCROLL_TO, 
  SET_SCROLL_TO_TRUE, 
  SET_SCROLL_TO_FALSE, 
  FETCH_SELECTED_JOURNAL} from "./actions.type";
import { dataWorks, workListsByYear } from "../data/works"
import { dataAbout } from "../data/about"
import { dataJournal } from "../data/journals"
import { 
  FETCH_START, 
  FETCH_END,
  SET_WORKS,
  SET_DATA,
  SET_WORKS_BY_YEAR,
  SET_SELECTED_WORK,
  SET_NEXT_SUGGESTED,
  SET_ABOUT,
  SET_JOURNAL,
  SET_SELECTED_JOURNAL,
  SET_SCROLL,
  SET_SCROLL_FUNCTION
} from "./mutations.type";

const state = {
  listData: [],
  isLoading: true,
  workData: "",
  worksByYearData:"",
  selectedWork: "",
  aboutDetails: "",
  journalDetails: "",
  selectedJournal: "",
  nextSuggested: "",
  isSetScroll: false,
  dataDetails:"",
  setScroll: () => {},
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  getListData(state) {
    return state.listData;
  },
  getSelectedWork(state){
    return state.selectedWork
  },
  getWorkData(state){
    return state.workData
  },
  getWorksByYear(state){
    return state.worksByYearData
  },
  getAboutDetail(state){
    return state.aboutDetails
  },
  getJournalDetails(state){
    return state.journalDetails
  },
  getSelectedJournal(state){
    return state.selectedJournal
  },
  getSetScroll(state){
    return state.isSetScroll
  },
  getSetScrollFunction(state){
    return state.setScroll
  },
  getNextSuggestedItem(state){
    return state.nextSuggested
  },
  getData(state){
    return state.dataDetails
  }
};

const actions = {
  [FETCH_DATA]({ commit}, payload){
    const { action, params} = payload
    let queryData = []
    if (action == FETCH_ABOUT_DETAILS ){
      queryData = dataAbout
    } else if (action == FETCH_SELECTED_WORK){
      queryData = dataWorks.filter(work => work.slug == params)
    } else if (action == FETCH_SELECTED_JOURNAL){
      queryData = dataJournal.filter(journal => journal.slug == params)
    } else {
      return  
    }
    commit( SET_DATA, queryData[0])
  },
  [FETCH_WORKS]({ commit}){
    const works = dataWorks
    commit( SET_WORKS, works)
  },
  [FETCH_WORKS_BY_YEAR]({ commit }){
    const works = workListsByYear
    commit(SET_WORKS_BY_YEAR, works)
  },
  [FETCH_SELECTED_WORK]({ commit }, workTarget) {
    const work = dataWorks.filter( work => work.slug == workTarget )
    commit(SET_SELECTED_WORK, work[0]);
  },
  [FETCH_ABOUT_DETAILS]({ commit }) {
    const about = dataAbout
    commit(SET_ABOUT, about);
  },
  [FETCH_SELECTED_JOURNAL]({ commit }, payload) {
    const { selected } = payload
    const jn = dataJournal.filter( item => item.slug == selected)
    commit(SET_SELECTED_JOURNAL, jn[0]);
  },
  [FETCH_JOURNAL_DETAILS]({ commit }) {
    const jn = dataJournal
    commit(SET_JOURNAL, jn);
  },
  [SET_SCROLL_TO]({commit}, setter){
    commit(SET_SCROLL_FUNCTION, setter);
  },
  [SET_SCROLL_TO_TRUE]({commit}){
    commit(SET_SCROLL, true);
  },
  [SET_SCROLL_TO_FALSE]({commit}){
    commit(SET_SCROLL, false);
  },
  [FETCH_NEXT_SUGGESTED]({commit}, payload){
    const { path, theme} = payload
    let length 
    let targetIndex, prevIndex
    const itemToShow = [1,2]
    let suggestedItem = [] 
    let exceptIndex 
    let _data = [] 

    if (theme == 'work'){
      _data = dataWorks
      length = dataWorks.length
    } else if (theme == 'journal'){
      _data = dataJournal 
      length = dataJournal.length
    } else if (theme == 'about'){
      _data = dataAbout
      length = dataAbout.length
    }

    _data.find( ( work, index ) => {
      if (work.slug == path){
        exceptIndex = index
      }
    })

    itemToShow.forEach(() => {
      while( suggestedItem.length !== 2){
        targetIndex = Math.floor(Math.random() * length) 
        if( targetIndex !== exceptIndex){
          while( prevIndex == targetIndex){
            return;
          } 
          prevIndex = targetIndex
          suggestedItem.push(_data[targetIndex])
        } 
      }
    })

    commit( SET_NEXT_SUGGESTED, suggestedItem)
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
  [SET_DATA](state, queryData){
    state.dataDetails = queryData
  },
  [SET_SELECTED_WORK](state, work){
    state.selectedWork = work
  },
  [SET_WORKS](state, work){
    state.workData = work
  },
  [SET_WORKS_BY_YEAR](state, work){
    state.worksByYearData = work
  },
  [SET_ABOUT](state, about){
    state.aboutDetails = about
  },
  [SET_JOURNAL](state, jn){
    state.journalDetails = jn
  },
  [SET_SELECTED_JOURNAL](state, jn){
    state.selectedJournal = jn
  },
  [SET_SCROLL](state, scrollState){
    state.isSetScroll = scrollState
  },
  [SET_SCROLL_FUNCTION](state, setter){
    state.setScroll = setter
  },
  [SET_NEXT_SUGGESTED](state, items){
    state.nextSuggested = items
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
