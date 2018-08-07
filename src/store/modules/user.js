/* eslint-disable no-shadow */
import {
  USER_MESSAGE,
  USER_INFO,
} from '@/store/mutation-types';

const state = {
  user_info: {},
  message_list: [],
};

const mutations = {
  [USER_INFO]: (state) => {
    const obj = state;
    obj.user_info = {
      user_id: 520,
      nickname: '被女同事鄙视的垃圾码畜',
    };
  },
  [USER_MESSAGE]: () => {

  },
};

const actions = {
  getUserInfo({ commit }) {
    commit(USER_INFO);
  },
  getMessageList({ commit }) {
    commit(USER_MESSAGE);
  },
};

export default {
  state,
  mutations,
  actions,
};
