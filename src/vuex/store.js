import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	count: 3
}

const mutations = {
	add(state, num) {
		state.count += num;
	},
	reduce(state) {
		state.count--;
	}
}

//计算过滤操作
const getters = {
	count: function(state) {
		return state.count += 100;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})