import Vuex from 'vuex';
import Vue from 'vue';
import wpx from './modules/wpx';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        wpx,
    }
})