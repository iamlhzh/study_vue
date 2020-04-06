import $ from 'jquery'

$(function(){
  $('li:odd').css('backgroundColor','yellow')
  $('li:even').css('backgrounColor',function(){
    return '#'+'D97654'
  })
})