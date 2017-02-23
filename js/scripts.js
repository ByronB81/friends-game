//Business Logic
// var q1 =



//Front End Logic
$(document).ready(function(){
    $("#friends").submit(function(event) {
      var q1 = $("input:radio[name=q1]:checked").val();
      // console.log(q1);
      if (q1 === "yes1") {
        $('.joeyResult').show();
        $(".guntherResult").hide();
      } else {
        $('.guntherResult').show();
        $(".joeyResult").hide();

      }
    event.preventDefault();
    });
});
