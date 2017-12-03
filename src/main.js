// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from '@/vuex/Store'



Vue.config.productionTip = false


// 拦截路由
router.beforeEach((to, from, next) => {
    console.log(to.path)
    if (to.path === '/' && store.state.User.userData.userId === '未登录') {
      store.dispatch('get_userData').then(() => {
        store.commit('update_loading', true);
        return store.dispatch('get_goodsData', {page: 1, pageSize:2});
      }).then(()=>{
        next();
      }).catch((err)=>{
        console.log(err);
      });
    }
    if (to.path === '/articles' && store.state.Article.articleData.length === 0) {
      store.dispatch('get_articleData').then(()=>{
        next();
      }).catch((err)=>{
        console.log(err);
      });
    }
    if (to.path === '/records' && store.state.Record.recordData.length === 0) {
      store.dispatch('get_recordData').then(()=>{
        next();
      }).catch((err)=>{
        console.log(err);
      });
    }
    else {
      next()
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

