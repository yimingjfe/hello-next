var Swiper = require('swiper')
(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.Swipe = factory();
    }
}(this, function(){
  return function MySwiper(selector, options){
    return new Swiper()
  }
})
