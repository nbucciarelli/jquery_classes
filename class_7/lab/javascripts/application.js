$(document).ready( function() {
  $('.information_dialog').dialog({modal: true, autoOpen: false, title: "Help Text"})
  
  $('.information').click( function() {
    $('.information_dialog').dialog('open')
  })
  
  $('.create_datepicker').click( function() {
    $('.datepicker').datepicker({
      altFormat: 'mm-dd-yy',
      altField: ".hidden_datepicker",
      constrainInput: true,
      onClose: function(dateText, inst) {
        var date = new Date(dateText)
        var currentDate = new Date()
        if(date > currentDate){
         console.log("You chose a future date") }
      }
    })
    $('.datepicker').attr('readonly', true)    
    $('.hidden_datepicker').attr('readonly', true)    
  })
  
  $('.destroy_datepicker').click( function() {
    $('.datepicker').datepicker('destroy')
    $('.datepicker').removeAttr('readonly')    
    $('.hidden_datepicker').removeAttr('readonly')    
  })
  
  $('.movies_list').accordion({
    collapsible: true, 
    change: function(event, ui) {
      console.log("You changed movies")
    }
  })
  
  $('.tabs').tabs({
    select: function(event, ui) {
      console.log("YOu changed tabs!")
    }
  })
  
  source = ["Finding Nemo", "Mary Poppins", "The Lion King", "Aladdin", "Beauty and the Beast", "The Little Mermaid", "Mulan", "Sleeping Beauty", "Cinderella", "Snow White and the Seven Dwarves", "Aristocats", "The Jungle Book", "Toy Story", "Cars", "Wall-E", "Pinoccio", "Bambi", "Fantasia", "Peter Pan", "Alice in Wonderland", "The Sword in the Stone", "One Hundred and One Dalmatians", "Robin Hood"]
  $('.movie_autocomplete').autocomplete({
    minLength: 3,
    source: source
  })
  
  source = [{label: "Finding Nemo", value: "finding_nemo"}, {label: "Mary Poppins", value: "mary_poppins"}, {label: "The Lion King", value: "the_lion_king"}, {label: "Aladdin", value: "aladdin"}, {label: "Beauty and the Beast", value: "beauty_and_the_beast"}, {label: "The Little Mermaid", value: "the_little_mermaid"}, {label: "Mulan", value: "mulan"}, {label: "Sleeping Beauty", value: "sleeping_beauty"}, {label: "Cinderella", value: "cinderella"}, {label: "Snow White and the Seven Dwarves", value: "snow_white_and_the_seven_dwarves"}, {label: "Aristocats", value: "aristocats"}, {label: "The Jungle Book", value: "the_jungle_book"}, {label: "Toy Story", value: "toy_story"}, {label: "Cars", value: "cars"}, {label: "Wall-E", value: "wall_e"}, {label: "Pinoccio", value: "pinoccio"}, {label: "Bambi", value: "bambi"}, {label: "Fantasia", value: "fantasia"}, {label: "Peter Pan", value: "peter_pan"}, {label: "Alice in Wonderland", value: "alice_in_wonderland"}, {label: "The Sword in the Stone", value: "the_sword_in_the_stone"}, {label: "One Hundred and One Dalmatians", value: "one_hundred_and_one_dalmatians"}, {label: "Robin Hood", value: "robin_hood"}]
  $('.movie_autocomplete_2').autocomplete({
    minLength: 3,
    source: source
  })
})