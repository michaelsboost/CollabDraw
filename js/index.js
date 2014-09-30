$(document).ready(function() {
  // Typewriter effect for intro
  var win = $(window),
        foo = $(".typer");

  foo.typer(["Collaborative drawing...", "Is no longer...", "Platform dependant!", "<h1>CollabDraw</h1><img src='img/CollabDraw.svg'><br><a class='launch' href='app/'>Launch</a> <a class='launch' href='https://github.com/mikethedj4/CollabDraw' target='_blank'>Download</a>"], {
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
