$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    let name = person1Input.toUpperCase()
    $(".person1").text(name);
   

    $("#story").show();

    
  
  });
});