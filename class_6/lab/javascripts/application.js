$(document).ready( function() {
  $('.information').qtip({
    content: 'This is an example',
    show: 'mouseover',
    hide: 'mouseout'
    
  })

  $('.address_table').tablesorter({sortList: [[0,0], [1,0]]})
  
  console.log("hi")
  
})