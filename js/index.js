$(document).ready(function() {
  // Typewriter effect for intro
  var win = $(window),
        foo = $(".typer");

  foo.typer(["<a href='app/'><img src='img/CollabDraw.svg'></a><br><a class='launch' href='app/'>Launch</a>"], {
      endless: false
  });
  
  // Adjust font-size when browser resizes for responsive typography
  win.on('load resize', function() {
    var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));

    $("body").css({
      fontSize: fontSize * .5 + "px"
    });
  }).resize();
});
