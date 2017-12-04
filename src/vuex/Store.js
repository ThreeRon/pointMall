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
    goodsData: [], // 第一页的商品数据
    total: 0,
    page: 1,
    pageSize: 2,  
    downdata: [],  // 加载的商品的数据
    loading: false // 当前正加载（get_goodsData）的状态
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
      if (page === 1) {
        state.goodsData = [data.list]
      } else {
        state.downdata.push(data.list)
      }
      state.total = data.total
      state.pageSize = data.pageSize
    },
    update_page (state, data) {
      state.page = data
    },
    update_loading (state, data) {
      state.loading = data
    },
    update_goodsItem(state, goodsItem) {
      let newGoodsData = state.goodsData.map(itemArr => {
        return itemArr.map(item => {
          if (item.id === goodsItem.id) {
            item.surplusNum--
          }
          return item
        })
      })
      state.goodsData = newGoodsData
      let newdownData = state.downdata.map(itemArr => {
        return itemArr.map(item => {
          if (item.id === goodsItem.id) {
            item.surplusNum--
          }
          return item
        })
      })
      state.downdata = newdownData
    }
  },
  actions: {
    get_goodsData (context, params) {

      return new Promise((resolve, reject) => {
        getGoods(params).then((res) => {
          if (res.data.code !== 0) {
            reject(res.data.msg);
          }
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
