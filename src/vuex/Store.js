import  Vue from 'vue'
import  Vuex from  'vuex'

import {getUserInfo, getGoods, exchangeGoods, getSdkConfig, getArticles, getRecords} from '@/api/api'

const User = {
	state: {
		userData: {
			userId: '未登录',
			point: 0
		}
	},
	getters: {},
	mutations: {
		update_userData (state, data) {
			state.userData = data
		}
	},
	actions: {
		get_userData (context) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          if (res.data.code !== 0) {
            reject(res.data.msg);
          }
          context.commit('update_userData', res.data.data);
          resolve();
        });
      });
    }
	}
}

const Goods = {
  state: {
    goodsData: [],
		total: 0,
    page: 1,
    pageSize: 2,
    downdata: [],
    loading: false
  },
  getters: {
    totalPage (state) {
      return Math.ceil(state.total/state.pageSize)
    }
  },
  mutations: {
  		update_goodsData (state, params) {
  		  let data = params.data
        let page = params.page
        // if (data.list.length < 2) {
        //   data.list.push('')
        // }
  		    if (page === 1) {
          state.goodsData = [data.list]
        } else {
            // console.log('******')
            // data.list.forEach((item => {
  		       //  console.log(item.title)
            // }))
            // console.log('&&&&&&')
  		      state.downdata.push(data.list)
          // data.list.forEach((item => {
          //   state.downdata.push(item)
          //   console.log('downData:====== ',state.downdata.length)
          // }))
        }
        // console.log(JSON.stringify(state.downdata))
        // for(let i=0; i<state.downdata.length; i++) {
  		   //    let item = state.downdata[i]
        //   console.log('-------begin-------')
        //   for(let j=0; j<item.length; j++) {
  		   //      let v = item[j]
        //     console.log('记录数：',v.title, '页数：', page)
        //   }
        //   console.log('-------end-------')
        // }


        state.total = data.total
        state.pageSize = data.pageSize
    },
    update_page (state, data) {
  		  state.page = data
    },
    update_loading (state, data) {
      state.loading = data
      console.log(data,'-----------')
    }
	},
  actions: {
    get_goodsData (context, params) {
      // if (context.state.page == params.page) return

      return new Promise((resolve, reject) => {
        getGoods(params).then((res) => {
          if (res.data.code !== 0) {
            reject(res.data.msg);
          }
          // console.log('page:', params.page)
          // console.log(('data: ', res.data.data))
          context.commit('update_page', params.page);
          context.commit('update_loading', false);
          context.commit('update_goodsData', {data: res.data.data, page: params.page});
          resolve();
        });
      });
    }
  }
}

const Article = {
  state: {
    articleData: [],
    pointRule: {
      viewPoint: 10,
      sharePoint: 100
    }
  },
  getters: {},
  mutations: {
    update_articleData(state, data) {
      state.articleData = data.list
      state.pointRule = data.pointRule
    }
  },
  actions: {
    get_articleData (context) {
      return new Promise((resolve, reject) => {
        getArticles().then((res) => {
          if (res.data.code !== 0) {
            reject(res.data.msg);
          }
          context.commit('update_articleData', res.data.data);
          resolve();
        });
      });
    }
  }
}

const Record = {
  state: {
    recordData: []
  },
  getters: {},
  mutations: {
    update_recordData(state, data) {
      state.recordData = data
    }
  },
  actions: {
    get_recordData (context) {
      return new Promise((resolve, reject) => {
        getRecords().then((res) => {
          if (res.data.code !== 0) {
            reject(res.data.msg);
          }
          context.commit('update_recordData', res.data.data);
          resolve();
        });
      });
    }
  }
}

Vue.use(Vuex);
//创建 store 实例
export default new Vuex.Store({
	modules: {
		User,
    Goods,
    Article,
    Record
	}
})
