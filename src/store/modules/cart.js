const cart = {
  state: {
    cartGoods: [
      {
        id: "123",
        img: "https://github.com/shiyunhao/-/blob/master/lunbo1.jpg?raw=true",
        goodName: "龙之谷六周年限定礼包大Boss冰龙款男士T恤333",
        price: "79.00",
        style: "iPhone5",
        size: "XL",
        checked: false,
        num: 1,
        tips: false
      },
      {
        id: "456",
        img: "https://github.com/shiyunhao/-/blob/master/lunbo1.jpg?raw=true",
        goodName: "龙之谷六周年限定礼包大Boss冰龙款男士T恤222",
        price: "78.00",
        style: "iPhone5",
        size: "XL",
        checked: true,
        num: 3,
        tips: false
      },
      {
        id: "789",
        img: "https://github.com/shiyunhao/-/blob/master/lunbo1.jpg?raw=true",
        goodName: "龙之谷六周年限定礼包大Boss冰龙款男士T恤111",
        price: "78.00",
        style: "iPhone5",
        size: "XL",
        checked: true,
        num: 4,
        tips: false
      }
    ],
    users: {
      cover: false,
      login: false
      // name: "222"
    }
  },
  mutations: {
    addCart(state, payload) {
      state.cartGoods.push(payload);
    },
    checked(state, id) {
      state.cartGoods.find(
        item => item.id === id
      ).checked = !state.cartGoods.find(item => item.id === id).checked;
    },
    addCartNum(state, id) {
      state.cartGoods.find(item => item.id === id).num++;
      if (!state.cartGoods.find(item => item.id === id).checked) {
        state.cartGoods.find(item => item.id === id).checked = true;
      }
    },
    subCartNum(state, id) {
      if (state.cartGoods.find(item => item.id === id).num > 1) {
        state.cartGoods.find(item => item.id === id).num--;
      }
      if (!state.cartGoods.find(item => item.id === id).checked) {
        state.cartGoods.find(item => item.id === id).checked = true;
      }
    },
    showTips(state, id) {
      console.log("111");
      state.cartGoods.find(item => item.id === id).tips = !state.cartGoods.find(
        item => item.id === id
      ).tips;
      console.log(state.cartGoods.find(item => item.id === id).tips);
    },
    delCartGood(state, payload) {
      state.cartGoods = state.cartGoods.filter(item => item.id != payload.id);
    },
    delAll(state) {
      state.cartGoods = [];
    },
    allChecked(state, checkedNum) {
      if (state.cartGoods.length != checkedNum) {
        state.cartGoods = state.cartGoods.map(item => {
          return { ...item, checked: true };
        });
      } else {
        state.cartGoods = state.cartGoods.map(item => {
          return { ...item, checked: false };
        });
      }
    },
    loginShow(state, payload) {
      if (!state.users.name) {
        state.users.cover = true;
        state.users.login = true;
      } else {
        payload.jumpOrder();
      }
    },
    changeCover(state) {
      state.users.cover = false;
      state.users.login = false;
    },
    loginNew(state, payload) {
      const reUser = /^1[1]{4}1$/;
      const reYzm = /^hvdhn$/;
      if (
        reUser.test(payload.user) &&
        reUser.test(payload.password) &&
        reYzm.test(payload.yzm)
      ) {
        state.users.name = payload.user;
        state.users.password = payload.password;
        state.users.cover = false;
        state.users.login = false;
      } else if (!reUser.test(payload.user)) {
        alert("手机号错误");
      } else if (reUser.test(payload.user) && !reUser.test(payload.password)) {
        alert("密码错误");
      } else if (
        reUser.test(payload.user) &&
        reUser.test(payload.password) &&
        !reYzm.test(payload.yzm)
      ) {
        alert("验证码错误");
      }
      console.log(reUser.test(payload.user));
      console.log(reUser.test(payload.password));
      console.log(reYzm.test(payload.yzm));
    }
  },
  getters: {
    currentCart(state) {
      return [...state.cartGoods].reverse();
    },
    checkedNum(state) {
      return state.cartGoods.filter(item => item.checked).length;
    },
    totalMoney(state) {
      const checkedArr = state.cartGoods.filter(item => item.checked);
      return checkedArr
        .reduce((res, item) => {
          return res + item.price * item.num;
        }, 0)
        .toFixed(2);
    },
    checkedGoods(state) {
      return state.cartGoods.filter(item => item.checked);
    }
  }
};
export default cart;
