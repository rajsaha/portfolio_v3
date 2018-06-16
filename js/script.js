$(document).ready(function() {
  var cards = document.getElementById('cards');
  var currentSection = 0;

  //Handling mouse wheel events
  window.addEventListener('wheel', function(e) {
    if(e.deltaY < 0) {
      //Scrolling Up
      $("[data-section='" + currentSection + "']>div").css("opacity","1");
      $("[data-section='" + currentSection + "']").removeClass("swipe_up");
      if(currentSection > 0) {
        $("[data-section='" + currentSection + "']").addClass("swipe_down");
      }
      if(currentSection > 0 && currentSection <= 6) {
        currentSection--;
      }
      console.log(currentSection);
    }

    if (e.deltaY > 0) {
      //Scrolling Down
      if(currentSection >= 0 && currentSection < 6) {
        currentSection++;
      }
      $("[data-section='" + currentSection + "']>div").css("opacity","1");
      $("[data-section='" + currentSection + "']").addClass("swipe_up");
      $("[data-section='" + currentSection + "']").removeClass("swipe_down");
      console.log(currentSection);
    }

    if(currentSection == 1) {
      $(".section-whoiam b").addClass("fadein-text");
      $(".square-box").addClass("fadein-line-vertical");
      $(".square-box:nth-of-type(2)").addClass("fadein-line-horizontal");
    }
  });

  //Handling touch events on smartphones
  var hammertime = new Hammer(cards);
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

  hammertime.on("swipeup", function(ev) {
    if(currentSection >= 0 && currentSection < 6) {
      currentSection++;
    }
    $("[data-section='" + currentSection + "']>div").css("opacity","1");
    $("[data-section='" + currentSection + "']").addClass("swipe_up");
    $("[data-section='" + currentSection + "']").removeClass("swipe_down");
  });

  hammertime.on("swipedown", function(ev) {
    $("[data-section='" + currentSection + "']>div").css("opacity","1");
      $("[data-section='" + currentSection + "']").removeClass("swipe_up");
      if(currentSection > 0) {
        $("[data-section='" + currentSection + "']").addClass("swipe_down");
      }
      if(currentSection > 0 && currentSection <= 6) {
        currentSection--;
      }

      if(currentSection == 1) {
        $(".section-whoiam b").addClass("fadein-text");
        $(".square-box").addClass("fadein-line-vertical");
        $(".square-box:nth-of-type(2)").addClass("fadein-line-horizontal");
      }
  });

  //Handling keyup and keydown events
  window.addEventListener("keydown", function(event) {
    if(event.keyCode == 40) {
      if(currentSection >= 0 && currentSection < 6) {
        currentSection++;
      }
      $("[data-section='" + currentSection + "']>div").css("opacity","1");
      $("[data-section='" + currentSection + "']").addClass("swipe_up");
      $("[data-section='" + currentSection + "']").removeClass("swipe_down");
      console.log(currentSection);
    } else if(event.keyCode == 38) {
      $("[data-section='" + currentSection + "']>div").css("opacity","1");
      $("[data-section='" + currentSection + "']").removeClass("swipe_up");
      if(currentSection > 0) {
        $("[data-section='" + currentSection + "']").addClass("swipe_down");
      }
      if(currentSection > 0 && currentSection <= 6) {
        currentSection--;
      }
      console.log(currentSection);
    }
  });
});
