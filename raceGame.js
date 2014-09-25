$(function() {
  //defining the Animal object with a constructor function
  $('div').hover(
    function() {
      $(this).addClass('highlight');
  }, function() {
      $(this).removeClass('highlight');
    }
  );

  function Racer(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0
    this.step = 0
    //method that allows the Animal object to change position
    this.move = function() {
      if((Math.floor(Math.random() * 10) + 1) < this.focus) {
        this.position += this.speed;
      }
      return this.position;
    }
    this.currentPosition = function() {
      return this.name + " has completed " + this.position + " laps!";
      }
    this.stepping = function() {
      if((Math.floor(Math.random() * 10) + 1) < this.focus) {
        this.step = this.speed;
    } else {
      this.step = 0
    }
      return this.step;
    }
  }

var move = function() {

}
    
  $('div').on('click', function() {
    $('h4').delay(12000).show(0);
    var mario = new Racer("Mario", 5, 5);
    var luigi = new Racer("Luigi", 6, 4);
    var bowser = new Racer("bowser", 4, 7);
    var toad = new Racer("Toad", 9, 4);
    var laps = 1000;
    var start=true;

    
    while (start) {
      console.log("mario: " + mario.position);
      console.log("luigi: " +luigi.position);
      console.log("boswer: " +bowser.position);
      console.log("toad: " +toad.position);
      mario.move();
      luigi.move();
      bowser.move();
      toad.move();
      mario.stepping();
      luigi.stepping();
      bowser.stepping();
      toad.stepping();
   
      if((mario.position >= laps && luigi.position >= laps) || (mario.position >= laps && bowser.position >= laps) || (mario.position >= laps && toad.position >= laps) || (luigi.position >= laps && bowser.position >= laps) || (luigi.position >= laps && toad.position >= laps) || (bowser.position >= laps && toad.position >= laps)) {
        setInterval(function(){$("h4").text("The race ended in a tie!")}, 2000);
        move();
        start = false;
      } else if(luigi.position >= laps) {
        setInterval(function(){$('h4').text("Luigi wins!")}, 2000);
        start = false;
        move();
      } else if(bowser.position >= laps) {
        setInterval(function(){$("h4").text("Bowser wins!")}, 2000);
        start = false;
        move();
      } else if(toad.position >= laps) {
        setInterval(function(){$("h4").text("Toad wins!")}, 2000);
        start = false;
        move();
      } else if(mario.position >= laps) {
        setInterval(function(){$('h4').text("Mario wins!")}, 2000);
        start = false;
        move();
      }
    };
      $('#marioImg').animate({
        left: '+=' + (mario.position) +'px'}, 1200);

      $('#luigiImg').animate({
        left: '+=' + (luigi.position) + 'px'}, 1200);
      $('#bowserImg').animate({
        left: '+=' + (bowser.position) + 'px'}, 1200);
      $('#toadImg').animate({
        left: '+=' + (toad.position) + 'px'}, 1200);
  });
});

