// // // init bunch of sounds
// ion.sound({
// // list of sound files you want to load
//     sounds: [{name: "door_bump"}],
// //
// // path to the folder where the cound files are
//     path: "ion.sound-3.0.7/sounds/",
// // starts loading before use
//     preload: true,
// // multi sound
//    multiplay: true,
// // 90%
//    volume: 0.9
//  });
//
// $(document).ready(function() {
//    $('#door_bump').OnClick(function () {
//   ion.sound.play('door_bump');
//   });
//  });
//
// // play sound
// ion.sound.play("beer_can_opening");
// id="door_bump"


$(window).load(function(){
$('.demo').easybg({
images: [ // an array of background images
'images/enter.jpg',
'images/creepy.jpg',
'images/fence.jpg',
'images/roller.jpg',
'images/splitframe.jpg',
'images/tracks.jpg',
'images/stoplight.jpg',
'images/broken.jpg'
],
interval: 10000,
speed : 5,
ignoreError : false,
changeMode : 'normal', // normal or random
initIndex : 0,
cloneClassId : null,
cloneClassName : 'easybgClone',
debug : false
  });
});
var submit;

$(document).ready(function() {
  function start() {
  $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
  submit = $('.my-submit').click(function (start) {

    var choice = $('.user-input').val();
     $('.user-input').val("");

    if (choice === 'clown') {
      clown();
    }
    else if (choice === 'girl') {
      girl();
    }
    else {
      return "Error";
    }
  });

}
start();

function clown() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("The clown's head spins backwards and he asks you to join him for a ride.");
    $(".typewriter2").html("What do you do?");
    $(".typewriter3").html("1. Say yes because this is totally normal behaviour.");
    $(".typewriter4").html("2. Say hell no and start slowly backing away.");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click(function (start) {

        var choice = $('.user-input').val();
        $('.user-input').val("");

    if ( choice === "1" ) {
      ride();
    }

    else if (choice === "2") {
      door();
    }

    else {
      return ('Error');
    }
  });
}

function girl() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("The girl reaches out her hand to you, it is covered in blood. She says come with me.");
    $(".typewriter2").html("What do you do?");
    $(".typewriter3").html("1. Take her hand because whats the worst that could happen going with this creepy bloody girl?");
    $(".typewriter4").html("2. Say no thank you because Im pretty sure you were in that movie The Ring and it did not end well.");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click(function (start) {

        var choice = $('.user-input').val();
        $('.user-input').val("");

    if ( choice == "1" ) {
      red_ruby();
    }

    else if (choice == "2") {
      madgirl();
}
    else {
      return ('Error');
    }
  });
}

 function ride() {

   var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
     $(".intro-text").html(text);
     $(".typewriter1").html("You get on the ferris wheel and it starts to spin really fast. The clown looks at you and screams You are never getting off of this ride!");
     $(".typewriter2").html("As the ferris wheel spins, you have two options jump from the lowest point or try to talk to the clown. What do you do?");
     $(".typewriter3").html("1. JUMP!");
     $(".typewriter4").html("2. Talk to the insane clown.");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click(function (start) {

          var choice = $('.user-input').val();
          $('.user-input').val("");

        if ( choice == "1" ) {
          door();
        }

        else if (choice == "2") {
          explore();
        }
        else {
          return ('Error');
      }
    });
  }

function door() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("As you back away the clown smiles and says, 'Watch out for the door behind you.' You fall through an open door into a dark room.");
    $(".typewriter2").html("You feel around the dark room and find a string, you pull it and a dull light glows. You see two paths. One has black water you must swim through but there is a light at the end of tunnel. The other is dimly lit but does not have a clear end. Which path do you take?");
    $(".typewriter3").html("1. Swim through!");
    $(".typewriter4").html("2. Go down the tunnel..");

      $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
        submit = $('.my-submit').click(function (start) {

            var choice = $('.user-input').val();
            $('.user-input').val("");

        if (choice == "1") {
          dead();
          }
      else if (choice == "2") {
          pennywise();
        }
      else {
        return ('Error');
      }
    });
  }


function red_ruby() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("The girl takes your hand and leads you into a dark tunnel. Waiting there is a man in a black cape. He thanks you for bringing his daughter back to him and hands you a red ruby.</p><p>The stone glows red in your palm and you suddenly feel a little bit stronger. As you stare at the ruby you see a vison of yourself wearing a red cape, eyes glowing red sitting next to the girl and her father. All around you is gold and beautiful stones. You shiver in excitment and fear.");
    $(".typewriter2").html("You hear a voice down the tunnel that says 'COME WITH US...' Do you continue with the girl or should you get away while you can?");
    $(".typewriter3").html("1. Stay with the girl");
    $(".typewriter4").html("2. Leave now, you dont want red eyes.");

      $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
        submit = $('.my-submit').click(function (start) {

            var choice = $('.user-input').val();
            $('.user-input').val("");

        if (choice == "1") {
          house();
        }
        else if (choice == "2") {
          exit();
        }
      else {
        return ('Error');
    }
  });
}


function fun_house() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You jump from the ferris wheel, barely escaping the clowns icey grip. You land on your feet an sprint further into the park.");
    $(".typewriter2").html("On one side you see the girl still sitting on the bench on the other you see a gypsy tent. Do you approach the girl or head to the tent?");
    $(".typewriter3").html("1. Talk to the girl");
    $(".typewriter4").html("2. Check out the gypsy tent");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click(function (start) {

          var choice = $('.user-input').val();
          $('.user-input').val("");

  if ( choice == "1" ) {
    girl();
  }

  else if (choice == "2") {
    gypsy();
  }

  else {
    return ('Error');
    }
  });
}



function pennywise() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You start making your way down the tunnel, feeling your way along the walls.");
    $(".typewriter2").html("You hear footsteps behind you and look back to see the clown. What do you do?");
    $(".typewriter3").html("1. RUN!");
    $(".typewriter4").html("2. Stop and talk to the clown.");

  $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
    submit = $('.my-submit').click(function (start) {

        var choice = $('.user-input').val();
        $('.user-input').val("");

  if ( choice == "1" ) {
    exit();
  }

  else if (choice == "2") {
    explore();
  }

  else {
    return ('Error');
    }
  });
}

function explore() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("Deciding not to further anger the clown you try to get him talking. You ask him his name and the screaming stops..");
    $(".typewriter2").html("Pennywise' he replies and lets you go. He tells you that you can explore the park now, but he will be back for you later. What do you want to do now?");
    $(".typewriter3").html("1. Leave this park! Why am I here anyway!?");
    $(".typewriter4").html("2. Go exploring and take your chances..");

  $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
    submit = $('.my-submit').click(function (start) {

        var choice = $('.user-input').val();
        $('.user-input').val("");

      if ( choice == "1" ) {
        exit();
      }

      else if (choice == "2") {
        gypsy();
      }

      else {
        return ('Error');
          }
        });
      }

function madgirl() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You have insulted the girl and her father. They begin chasing you.");
    $(".typewriter2").html("You can either run to the gypsy tent or get on the ferris wheel with the clown. What do you do?");
    $(".typewriter3").html("1. Get on the ferris wheel with the clown");
    $(".typewriter4").html("2. Go to the gypsy tent.");

  $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
    submit = $('.my-submit').click(function (start) {

        var choice = $('.user-input').val();
        $('.user-input').val("");

      if ( choice == "1" ) {
        ride();
      }

      else if (choice == "2") {
        gypsy();
      }

      else {
        return ('Error');
          }
    });
}

function gypsy() {

  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You head to the gypsy tent. Inside is a fortune teller. You dont trust her but you let her tell you your future anyway because you are super smart.");
    $(".typewriter2").html("She says you have two options...");
    $(".typewriter3").html("1. Stay in the park and meet with the girl, who she says is your friend.");
    $(".typewriter4").html("2. Leave the park now or face what is ahead..");

  $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
    submit = $('.my-submit').click(function (start) {

        var choice = $('.user-input').val();
        $('.user-input').val("");

      if ( choice == "1" ) {
        girl();
      }

      else if (choice == "2") {
        exit();
      }

      else {
        return ('Error');
          }
    });
}

function house() {
  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You follow the voice of the girl and her father down the tunnel.");
    $(".typewriter2").html("As you exit you start climbing a hill to a large house that appears out of nowhere.");
    $(".typewriter3").html("You follow the girl and her father into the house where you become a vampire and live happily ever after.");
    $(".typewriter4").html("Hope you like the taste of blood!");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click;

}

function water() {
  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You wade into the black water only to realise the water is not what it seems..");
    $(".typewriter2").html("You wade through thick sludge and stuggle to move forward.");
    $(".typewriter3").html("Suddenly ice cold tentacles wrap around your ankles, you are pulled downward and the tentacles wrap around your body.");
    $(".typewriter4").html("You see a huge black octopus, that tightens its grip. Right before your last breath you hear the clown cackling.");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click;

}

function dead() {
  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You are dead dude.");
    $(".typewriter2").html("You shouldnt have come to the haunted swap-shop at night.");
    $(".typewriter3").html("Hey there are some positives here...");
    $(".typewriter4").html("You can be best friends with the clown and the bloody girl now.");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click;
  }
  //
function exit() {
  var text = '<p class="typewriter typewriter1"></p><p class="typewriter typewriter2"></p><p class="typewriter typewriter3"></p><p class="typewriter typewriter4"></p>';
    $(".intro-text").html(text);
    $(".typewriter1").html("You escaped Swap swap-shop!");
    $(".typewriter2").html("Maybe next time you should come during the day.");
    $(".typewriter3").html("Let's go get a drink after all that...");
    $(".typewriter4").html("...and hurry it up could have swore I just heard footsteps behind you.");

    $('.my-submit').replaceWith('<button class="btn btn-secondary btn-lg custom my-submit">Choose!</button>');
      submit = $('.my-submit').click;
}

});