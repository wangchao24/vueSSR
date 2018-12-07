import Vue from "vue"
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

export default function createStore() {
    let store = new Vuex.Store({
        state: () => {
            return {
                homeInfo: 'asdasd',
            }
        },
        mutations: {
            setHomeinfo(state, res) {
                state.homeInfo = res;
                console.log(state)
            }
        },
        actions: {
            getHomeInfo({ commit }) {
                return axios.get('http://localhost:8888/api/getHomeInfo', {}).then((res) => {
                    console.log(res.data)
                    commit("setHomeinfo", res.data);
                })
            }
        }
    })

    return store
}
