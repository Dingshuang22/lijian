import Vuex from "vuex";
import Vue from 'vue';
import axios from './ajax'
Vue.use(Vuex);
import {type} from '../types'

import _ from 'lodash'

const store = new Vuex.Store({
    state: {
        loading:true,
        moive:[],
        moivePagination:{page:1,size:5,total:5}
    },
    actions: {

        getMoive({ commit }) {
            axios.get('/api/getMoive')
                .then(
                    res => {
                        console.log(res)
                        if(res){
                            commit(type.GETMOIVE,res.data.result)
                        }
                    }
                )
        }
    },
    mutations: {
        [type.GETMOIVE](state,data){
            state.moive = data
            console.log(data.length)
            state.moivePagination = {
                ...state.moivePagination,
                page:1,
                size:5,
                total:data.length
            }
            state.loading = false
        },
        [type.SETMOIVEPAGEIDX](state,val){
            state.moivePagination = {
                ...state.moivePagination,
                page:val
            }
        }
    },
    getters: {
        moiveList:state=>{
            let pg = state.moivePagination;
            return _.slice(state.moive,(pg.page-1)*pg.size,pg.page*pg.size)
        }
    }
})

export default store;