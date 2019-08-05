const address = {
  state: {
    details: [
      {
        user: "阿不来提·阿不都热西提",
        id: "123456qwe",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团乎热郭木村9连5区13号",
        tel: "18611115149",
        default: false,
        mailAddress: false
      },
      {
        user: "买买提·艾力",
        id: "123456111qwr",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团乎热郭木村9连5区13号",
        tel: "15911111136",
        default: true,
        mailAddress: true
      },
      {
        user: "迪里木拉提",
        id: "123456222qret",
        address:
          "新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团乎热郭木村9连5区13号",
        tel: "18611110734",
        default: false,
        mailAddress: false
      }
    ],
    show: false
  },
  mutations: {
    changeDefault(state, id) {
      state.details.find(item => item.default).default = false;
      state.details.find(item => item.id === id).default = true;
    },
    changeMainAddress(state, id) {
      state.details.find(item => item.mailAddress).mailAddress = false;
      state.details.find(item => item.id === id).mailAddress = true;
      console.log(1111);
    },
    addNewAddress(state, payload) {
      const newAddress = {
        user: payload.user,
        id: payload.id,
        address: payload.address,
        tel: payload.tel,
        default: false,
        mailAddress: false
      };
      state.details.push(newAddress);
      state.show = false;
    },
    tanchuaddNewaddress(state) {
      state.show = true;
    }
  },
  getters: {
    cashierAddress(state) {
      return state.details.filter(item => item.mailAddress);
    }
  }
};
export default address;
