$(document).ready(function () {
    "use strict";

    $(document).ready(function () {
        $(".dots_moreOption").hide();
    
        $(".moreOptionsIcon").on("click", function () {
          $(".dots_moreOption").slideToggle("600");
          $(".dots_moreOption").css("visibility", "visible").css("opacity", "1");
        });
      });
});
