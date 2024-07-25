import { Store, install } from 'vuex';
import Vue from 'vue';
import setting from './setting';
import banner from './banner';
import about from './about';
import project from './project';

if (!window.Vuex) {
    install(Vue)
}

export default new Store({
    // 仓库配置对象
    modules: {
        setting,
        banner,
        about,
        project
    },
    strict: true
})
