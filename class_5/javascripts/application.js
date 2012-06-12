$(document).ready( function() {
  console.log("sup")
  $.ajax({
    url: "http://127.0.0.1:3000/addresses",
    dataType: "jsonp",
    crossDomain: true,
    success: function(data){
      console.log(data)
    },
    error: function(xhr,error,responseText){
      console.log(xhr)
      console.log(error)
      console.log(responseText)
    }
  })
  // $.get('localhost:3000/addresses', function(data){
  //   console.log(data) }, 'jsonp')

})