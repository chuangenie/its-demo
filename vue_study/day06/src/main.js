import $ from 'jquery'


import './css/index.css'
import './css/index.less'



$(function() {
    $('li:odd').css('backgroundColor', 'yellow')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})