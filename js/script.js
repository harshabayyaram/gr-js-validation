document.addEventListener("DOMContentLoaded", function() {
    var datepicker = document.getElementById("datepicker");
    var displayDate = document.getElementById("displayDate");
  
    datepicker.addEventListener("input", function() {
      var selectedDate = datepicker.value;
      displayDate.textContent = selectedDate;

    });
  });
