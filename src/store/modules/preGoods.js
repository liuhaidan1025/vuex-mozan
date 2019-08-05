const preGoods = {
  state: {
    pre: {
      id: "11111",
      img: "https://github.com/shiyunhao/-/blob/master/lunbo1.jpg?raw=true",
      goodName: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
      price: "960",
      prePrice: "700",
      style: ["iPhone5", "iPhone6", "iPhone6+"],
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      salesTime: "2019-10-01T00:00:00"
    },
    sucGoods: {
      num: 1
      // id: "11111",
      // img: "https://github.com/shiyunhao/-/blob/master/lunbo1.jpg?raw=true",
      // goodName: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
      // price: "700",
      // style: "iPhone5",
      // size: "XXS",
      // num: 1
    },
    goods: {
      id: "222222",
      name: "龙之谷六周年限定礼包大Boss冰龙款...",
      price: "88.00",
      img: "https://github.com/shiyunhao/-/blob/master/shop1.jpg?raw=true"
    }
  },
  mutations: {
    addType(state, style) {
      state.sucGoods.style = style;
      console.log(state.sucGoods);
    },
    addSize(state, size) {
      state.sucGoods.size = size;
      console.log(state.sucGoods);
    },
    addNum(state, num) {
      state.sucGoods.num = num;
      console.log(state.sucGoods);
    },
    subNum(state, num) {
      state.sucGoods.num = num;
      console.log(state.sucGoods);
    },
    sucAccession(state, payload) {
      if (state.sucGoods.style && state.sucGoods.size) {
        (state.sucGoods.id = state.pre.id),
          (state.sucGoods.img = state.pre.img),
          (state.sucGoods.goodName = state.pre.goodName),
          (state.sucGoods.price = state.pre.prePrice),
          (state.sucGoods.checked = true),
          (state.sucGoods.tips = false);
        payload();
        console.log(state.sucGoods);
      } else {
        alert("请选择商品规格");
      }
    }
  },
  getters: {
    sucAccession(state) {
      const sucGoods = {
        id: state.pre.id,
        img: state.pre.id,
        goodName: state.pre.goodName,
        price: state.pre.prePrice,
        num: 1,
        style: style,
        size: size
      };
      return sucGoods;
    }
  }
};
export default preGoods;
