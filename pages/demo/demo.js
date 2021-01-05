Page({
  data:{
    showCardChoose:false
  },
  onLoad(){

  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  chooseCard(){
    this.setData({
      showCardChoose:true
    })
  },
  onOk(e) {
    this.onCancel()
  },
  onCancel() {
    this.setData({
      showCardChoose: false
    })
  }
})