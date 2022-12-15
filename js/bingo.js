$(function () {
  var max = 75;
  var bingo = [];
  for (var i = 1; i <= max; i++) {
    bingo.push(i);
  }

  var status = true;
  var timer;
  var random;
  $("#button").on("click", function () {
    if (status) {
      status = false;
      $(this).text("STOP");
      $("#startstop").text("STOPをおしてね！");

      timer = setInterval(function () {
        random = Math.floor(Math.random() * bingo.length);
        $("#result").text(bingo[random]);
      }, 10);
    } else {
      status = true;
      $(this).text("START");
      $("#startstop").text("STARTをおしてね！");

      clearInterval(timer);

      var result = bingo[random];
      bingo.splice(random, 1);

      $("#result").text(result);
      $("#history").prepend($("<li>").text(result));
      $("#history li").addClass("centering");
    }
    if (bingo.length === 0) {
      $(this).get(0).style.display = "none";
      $("#startstop").get(0).style.display = "none";
      $("#result").text("終了");
      $("#history").prepend($("<li>").text("終了"));
      $("#history li").addClass("centering");
    }
  });
});
