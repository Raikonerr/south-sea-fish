import {createStore} from "vuex";
import router from "../router/index"
const state={
    sideBarOpen: false
};
const getters={
    sideBarOpen: state => {
        return state.sideBarOpen
    }
};
const mutations={
    redirect(state,payload){
        router.push({name : payload});
    },
    toggleSidebar (state) {
        state.sideBarOpen = !state.sideBarOpen
    }
};
const actions={
    redirect({commit},payload){
        commit('redirect',payload.val);
    },
    toggleSidebar(context) {
        context.commit('toggleSidebar')
    }


    }

const modules={};
export default createStore({
    state,
    getters,
    mutations,
    actions,
    modules,
});