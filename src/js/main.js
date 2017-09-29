var friends = ['steve', 'samantha', 'billy', 'andrea', 'zach', 'audrey', 'joe', 'wiley', 'terry', 'barnaby', 'nicholas', 'peter'];
var hobbies = ['tapdancing', 'baseball', 'dancing', 'swimming', 'music', 'cleaning', 'sunbathing', 'wine', 'eating', 'sprinting', 'sleeping'];

var numberNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function NoStartOver() {
    alert('alright, see you around soon.');
    localStorage.clear();
    location.reload();
}

function startOver() {
    localStorage.clear();
    location.reload();
}

function Contestant(age, name, friends, hobbies) {
    this.age = 25;
    this.name = name;
    this.friends = [];
    this.hobbies = [];
    this.potentialfriends = [];
}

var contestant = new Contestant();

function getPlayerName() {
    var name = prompt("Please enter your name", "Person Of Their Dreams");

    if (name != null) {

        localStorage.setItem('name', name);
        contestant.name = localStorage.getItem('name');
        document.getElementById("namebox").innerHTML =
           "<div class='bigQuestion'><span class='playerName'>" + name + ",</span> would you <i>really</i> like to make friends?</div><br><button onclick='selectHowManyFriends()' id='yes'>yes</button><button onclick='NoStartOver()' id='no'>no</button>";
    }


    document.getElementById("startOver").classList = 'startover';


}

var threeFriends = friends.sort(function() {
    return 0.5 - Math.random();
});

contestant.friends = friends;

function selectHowManyFriends() {

    document.getElementById('no').remove();
    document.getElementById('yes').remove();
    document.getElementById("friendSelect").classList = 'visible';

}

var select = document.querySelector('#sel');

select.addEventListener('change', function() {


    document.getElementById("selectionsTitle").classList = '';
    createContestants(select.value);
    document.getElementById("friendSelect").classList = 'visible fadeOut';
    listHobbies();

});

var createdContestants = [];

function createContestants(e) {

    for (var i = 0; i < e; ++i) {

        createdContestants[i] = new Contestant();
        createdContestants[i].name = contestant.friends[i];


        if (i % 2 == 0) {

            var chosenHobbies = hobbies.sort(function() {
                return 0.5 - Math.random()
            });

        } else {

            var chosenHobbies = hobbies.sort(function() {
                return 0.5 - Math.random()
            }).reverse();

        }

        createdContestants[i].hobbies.push(chosenHobbies[0]);
        createdContestants[i].hobbies.push(chosenHobbies[1]);
        createdContestants[i].hobbies.push(chosenHobbies[2]);


        chosenHobbies = [];

    }

}

function listHobbies() {

    document.getElementById("sel").classList = 'visible';

    var hobbieDiv = document.getElementById("hobbies");

    hobbieDiv.innerHTML = ' thats great to hear, ' + localStorage.getItem('name', name) + '.<br>Weve Picked ' + numberNames[createdContestants.length - 1] + ' potential friends for you:<br><br>';

    for (i = 0; i < createdContestants.length; i++) {
        hobbieDiv.innerHTML = hobbieDiv.innerHTML + '<div class="randomContestant"><i class="em em-cupid"></i><br>' + createdContestants[i].name + '</div>';
    }

    hobbieDiv.innerHTML = hobbieDiv.innerHTML + '<br><br><div>';




    for (i = 0; i < hobbies.length; i++) {

        hobbieDiv.innerHTML += '<button onclick="addHobby(' + hobbies[i] + ')" id="' + hobbies[i] + '">' + hobbies[i] + '</button>';
    }






    hobbieDiv.innerHTML = hobbieDiv.innerHTML + '<br><br><i class="em em-wink"></i><button onclick="checkCompatibility()">check compatibility!</button><i class="em  em-heart_decoration"></i><br>';
}

function addHobby(hobbyname) {
var yourSelections = document.getElementById("yourSelections");
yourSelections.innerHTML = "";
contestant.hobbies.push(hobbyname.getAttribute('id'));



yourSelections.innerHTML = "";
for(i=0;i<contestant.hobbies.length;i++){



// yourSelections.innerHTML = yourSelections.innerHTML + contestant.hobbies[i] + ' ';

var uniqueArray = contestant.hobbies.filter(function(item, pos) {
    return contestant.hobbies.indexOf(item) == pos;
});

}

contestant.hobbies = uniqueArray;

var formattedContestantHobbies = uniqueArray.map(function(x) {
  return " " + x;
});

yourSelections.innerHTML = formattedContestantHobbies;


}

function checkCompatibility() {

    compatibilityCenter = document.getElementById("compatibility-center");
    compatibilityCenter.innerHTML = "";

    for (i = 0; i < select.value; i++) {

      var formattedHobbies = createdContestants[i].hobbies.map(function(x) {
        return " " + x;
      });

        var letUsMatch = createdContestants[i].hobbies.filter((n) => contestant.hobbies.includes(n));


        var formattedMatches = letUsMatch.map(function(x) {
        return " " + x;
      });


        compatibilityCenter.innerHTML += '<div class="contestant-box"><div id="hobbiesincommon' + i + '">' + createdContestants[i].name + ':<br>' + formattedHobbies + '</div><br>hobbies in common with you:<br>' + formattedMatches + '<br></div>';

    }

}