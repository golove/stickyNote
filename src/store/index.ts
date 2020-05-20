import Vue from 'vue';
import Vuex from 'vuex'
import ActionHelper from './ActionHelper';
import RemoteHelper from './remoteHelper';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showInput: false,
        actionHelper: new ActionHelper(),
        remoteHelper: new RemoteHelper(),
        transItem: null,
        filterId: -1,//筛选分类id
    },
    mutations: {
        showInput(state) {
            state.showInput = !state.showInput
        },
        setTransItem(state, item) {
            state.transItem = item
            state.showInput = true
        },
        setFilterId(state, id) {
            state.filterId = id
        }
    }
})

export default store;