// component/successModal/successModal.js
Component({
  properties: {
    modalHidden: {
      type: Boolean,
      value: true
    }, //这里定义了modalHidden属性，属性值可以在组件使用时指定.写法为modal-hidden  
    modalIcon: {
      type: String,
      value: ' ',
    },
    modalTitle: {
      type: String,
      value: ' ',
    },
    modalDesc: {
      type: String,
      value: ' ',
    }
  },
  data: {
    // 这里是一些组件内部数据  
  },
  methods: {
    // 这里放置自定义方法   
  }
}) 