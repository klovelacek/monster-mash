$('.nunImage').hide();
$('.priestImage').hide();
$('#fightSign').hide();
$('#btnAttack').hide();


// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.

 function Player(options){
   options = options || {};
   this.name = options.name;
 }

 function Monster(options){
   options = options || {};
   this.health = 500;
 }

// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();

var Nun = new Player({
  name:'Nun'
});

var Priest = new Player({
  name:'Priest'
});





// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };
// $('a').click(function(event){
//     event.preventDefault();
// });
// //
// var attackMode = function(Monster){
//   $('.Monster').click (function(score){
//
//
//     if counter == 0 {
//       return Monster.health +5;
//     }
//
//
//   else {alert ('Congratulations! You Won!');
//     message.prompt('Play Again?')
//
//     }
//   });
// };


var counter = 20;

function score(){
  counter--;
  $('#counter').text(counter);
  $('Monster').click();
};

// $('.#btnAttack').onClick(score);
// event.preventDefault();



$( '.nunPlayer' ).click(function() {
  event.preventDefault();
  $('.Player').hide();
  $('.nunImage').show();
  $(function() {
    $('#fightSign').show();
  });
