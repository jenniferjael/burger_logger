// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("arroz");
$(function () {
    $("#addBtn").on("click", function (event) {
      event.preventDefault();
  
      console.log("click");
  
      let addburger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: 0,
      };
      console.log(addburger);
  
      $.ajax("/api/burgers/", {
        type: "POST",
        data: addburger,
      }).then(function () {
        console.log(addburger);
        location.reload();
      });
    });
  
    $(".eatBurger").on("click", function (event) {
      event.preventDefault();
      let id = $(this).data("id");
      console.log(id);
      let devouredBurger = $(this).data("devouredBurger");
      console.log(devouredBurger);
  
      if ((devouredBurger === true)) {
        devouredBurger = false;
      } else {
        devouredBurger = true;
      }
      
      let devouredState = {
        devoured: devouredBurger,
      };
      console.log(devouredState);
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState,
      }).then(function () {
        console.log("Burger devoured!");
        location.reload();
      });
    });
  
    $(".delete-button").on("click", function (event) {
      event.preventDefault();
      //console.log(event.target);
      let id = $(this).data("id");
      
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(function () {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  })