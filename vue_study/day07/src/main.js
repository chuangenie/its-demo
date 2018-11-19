// import $ from 'jquery'


// import './css/index.css'
// import './css/index.less'
// import './css/index.scss'

import Vue from 'vue'

import app from './app.vue'

// .vue
const vm = new Vue({
    el: '#app',
    data: {
        msg: 'xxx'
    },
    // render: function (createElements) {  
    //   return createElements(app)
    // }
    render: c => c(app)
})



// $(function() {
//     $('li:odd').css('backgroundColor', 'pink')
//     $('li:even').css('backgroundColor', function() {
//         return '#' + 'D97834'
//     })
// })