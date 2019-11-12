// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-sleep").on("click", function(event) {
      var id = $(this).data("id");
      var newOrder = $(this).data("newOrder");
  
      var newOrderState = {
        reorder: newOrder
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newOrderState
      }).then(
        function() {
          console.log("changed sleep to", newOrder);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        name: $("#ca").val().trim(),
        reorder: $("[name=reorder]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  