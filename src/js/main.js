var friends = ['steve', 'samantha', 'billy', 'andrea', 'zach', 'audrey', 'joe', 'wiley', 'terry', 'barnaby', 'jessica', 'kathy'];
var hobbies = ['tapdancing', 'baseball', 'dancing', 'swimming', 'music', 'cleaning', 'sunbathing', 'wine', 'eating', 'sprinting', 'sleeping'];

var numberNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

var profileDescriptions = ["Bill Murray Movies. Adventures. Fancy Cheese. If you like any of these three things, we’ll get along great. If you like all three, you could just be the love of my life. Either way, I’m a fun-loving person who’s new to the city and looking to meet some nice people. If you’d like to get together sometime, send me your favorite Bill Murray quote and we can start chatting",
    "I like my artsy with a little bit of fartsy. I love Sundays spent drinking massive amounts of coffee and lingering over newspapers and comics (yes, I read comics). And my Friday nights? Well you’ll just have to wait and see won’t you? Favorite Movie: An American Tale: Fievel Goes West. What can I say? I love that damn mouse and always had a thing for cowboys. Favorite Place: The fort I made in my basement when I was 11. My parents let me keep that thing up for a full eight  months and it was magic. Favorite Food: Cheetos. Puffs. I don’t know what y’all are thinking with that crunchy crap.",
    "You know that person in your group of friends who is always planning something but maybe gets a little too crazy about it sometimes? Well, that’s me. I’m an event planner by trade and love everything about it. Putting together experiences for people is great, but I like to create my own too! Perfect dates are going for a hike, followed by a visit to a new local brewery or trying a new dinner spot and taking a walk nearby. I work hard during the week, fill my weekends with activities, and definitely can be a big ball of energy at times. I’m looking for a person who can keep up and keep me on my toes.",
    "Shiny things distract me, people-watching is a favorite pastime, I live for the moments you can’t put into words, and few things transcend a cup of coffee and someone to share it with. On the weekends you can usually find me in a friend’s backyard, drinking a beer and waiting for something good to come off the grill but I love to use my Sundays to get out and exercise and get ready for the week ahead too.",
    "I’m an outgoing lady who loves nightlife, weekend adventures, dancing, karaoke (I do an amazing Carrie Underwood), getting out on the lake, and meeting new people. I probably change my mind about a thousand times a day and will keep you on your toes, but I like to think I’m worth it. For one, I’m an amazing cook if I do say so myself, and love to try out new recipes. There’s just nothing better then getting creative and making something that you can also eat. It’s the best kind of art.",
    "Just a small town person, living in a lonely world…  That’s right, I’m a local person. Born and raised. I moved away to the city for a while for work but couldn’t be happier to be back in town with a new gig and a bit more experience behind me. I absolutely love sports and am happiest when I’m outside making myself tired. Whether it’s playing in a softball league, going for a morning run, playing soccer in the backyard with my two boys, or tossing the football around, I’m all about it.",
    "About me huh…  Well, I’d probably smile and say hi to you if we were strangers passing on the street. I believe in kindness, empathy, holding open doors, putting your phone away at dinner, and always making time to listen to a friend. And to throw you a loop… I’m really into the worst kind of horror movies, just the really really bad ones. Guts. Gore. All of it. If you’ve ever heard of Suspiria, please message me right now because we need to talk.",
    "Sometimes I feel like I’m an amature everything. I cook, road bike, paint occasionally, blog even less often, love snow sports, and am always looking to try new things and learn new things… but I never really master anything! I like to think that makes my resume diverse, but you can give me a hard time about it if you’d like. If you can quote Neil Gaiman, keep up with me on a road bike, and show me something I haven’t tried before you should definitely message me.",
    "You should probably know that I somehow manage to spill guacamole on myself every time I eat it, which is often. If you can get past that, you’ll probably enjoy getting to know me. I’m a nurse practitioner and I absolutely love my job and my patients. It’s hard work, but I bring a lot of energy to what I do and always have some leftover to get into trouble on the weekends at my fav. local bar. (If you play your cards right, maybe we can meet there.)",
    "Lately I’ve been really into Paulo Coelho novels. I read The Alchemist when I was in college but I’m excited to find that his other stuff is amazing too. If you have any book recommendations, send them my way. I’m a voracious reader and love talking books. Currently, working on my master’s in education and living downtown, which I love. Live music is one of my other weaknesses. I’ll see just about anyone but lately I’ve been checking out the free Thursday shows at Greyson’s.",
    "I’ve been traveling throughout South America for the past three years, after working for Americorp teaching English. Getting to know so many other people and cultures has been a truly amazing experience but… I missed home! So now I’m back with more stories to tell and a whole lot of decisions to make about what I want to do next. It’s an exciting time and I’m stoked to soak up more experiences and get to know more people. Plus, I cannot tell you how much I missed a good burger. Delicious!"
]



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
    this.name = name;
    this.friends = [];
    this.hobbies = [];
    this.potentialfriends = [];
    this.crushes = [];
}

var contestant = new Contestant();

var createdContestants = [];

createContestants(friends.length);

if (localStorage.getItem('contestant0')) {} else {
    startGame();
}


function getPlayerName() {

    document.getElementById("startGameButton").classList = 'hidden';

    if (localStorage.getItem('name')) {
        var name = localStorage.getItem('name');
        // alert(name);
        var welcomeback = 'Welcome back, ';
    } else {
        var name = prompt("Please enter your name", "Person Of Their Dreams");
        var welcomeback = '';
    }

    if (name != null) {

        localStorage.setItem('name', name);
        contestant.name = localStorage.getItem('name');
        document.getElementById("namebox").innerHTML =
            "<div id='bigQuestion' class='bigQuestion'>" + welcomeback + "<span class='playerName'>" + name + ",</span> would you <i>really</i> like to make friends?</div><br><button onclick='selectHowManyFriends()' id='yes'>yes</button><button onclick='NoStartOver()' id='no'>no</button>";
    }

    document.getElementById("startOver").classList = 'startover';


}

var threeFriends = friends.sort(function() {
    return 0.5 - Math.random();
});

contestant.friends = friends;

function selectHowManyFriends() {

    document.getElementById('bigQuestion').remove();
    document.getElementById('no').remove();
    document.getElementById('yes').remove();
    document.getElementById("friendSelect").classList = 'visible';

}




var select = document.querySelector('#sel');
select.addEventListener('change', function() {


    document.getElementById("selectionsTitle").classList = '';

    document.getElementById("friendSelect").classList = 'hidden';
    listHobbies(select.value);




});


function createContestants(e) {

    for (var i = 0; i < friends.length; ++i) {

        createdContestants[i] = new Contestant();
        createdContestants[i].name = friends[i];

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

        createdContestants[i].isCrush = false;


        chosenHobbies = [];

    }

    var selectedContestants = createdContestants.slice(0, e + 1);

}


function startGame() {

    for (i = 0; i < createdContestants.length; i++) {
        localStorage.setItem('contestant' + i, JSON.stringify(createdContestants[i]));
    }


}


function listHobbies(e) {


    var selectedContestants = createdContestants.slice(0, e);
    document.getElementById("sel").classList = 'visible';

    var hobbieDiv = document.getElementById("hobbies");
    var contestantDiv = document.getElementById("contestants");

    contestantDiv.innerHTML = '<h1>thats great to hear, ' + localStorage.getItem('name', name) + '.<br>Weve Picked some potential friends for you. Click on their box to view their profile!</h1><br><br>';




    for (i = 0; i < selectedContestants.length; i++) {
        contestantDiv.innerHTML = contestantDiv.innerHTML + '<div id="contestant' + i + '" onclick="showModal(' + i + ')" class="randomContestant"><img src="img/' + selectedContestants[i].name + '.png"><br><i class="em em-cupid"></i><br>' + selectedContestants[i].name + '</div>';
    }

    hobbieDiv.innerHTML = hobbieDiv.innerHTML + '<h1>want to narrow this attractive group down a bit? pick some of your favorite hobbies from this list and see who you could share a good time with!:</h1><br><br>';


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
    for (i = 0; i < contestant.hobbies.length; i++) {

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


        if (formattedMatches.length > 0) {
            compatibilityCenter.innerHTML += '<div class="contestant-box"><img class="modalUsr" src="img/' + createdContestants[i].name + '.png"><br><br><div id="hobbiesincommon' + i + '"><h3>' + createdContestants[i].name + ':</h3>' + formattedHobbies + '</div><br>hobbies you share:<br>' + formattedMatches + '<br><br><button onclick="showModal(' + i + ')">view their profile!</button></div>';
        }
    }
}

function showModal(i) {



    var crushModal = document.getElementById("crushModal");
    crushModal.classList = 'visible';
    crushModal.innerHTML = '<img class="modalUsr" src="img/' + createdContestants[i].name + '.png"><h1>' + createdContestants[i].name + '</h1>' + '<p><h3>hobbies:</h3><h2>' + createdContestants[i].hobbies + '</h2></p><p class="profileDescription">' + profileDescriptions[i] + '</p>';

    var contestantToQuery = 'contestant' + i;

    var determinesIfCrush = JSON.parse(localStorage.getItem(contestantToQuery)).isCrush;

    if (determinesIfCrush) {

        crushModal.innerHTML = crushModal.innerHTML + '<div class="alreadyCrushing"><i class="em em-blush"></i> you are already crushing <i class="em em-blush"></i></div>';

    } else {

        crushModal.innerHTML = crushModal.innerHTML + '<button onclick="friendCrush(' + i + ')">i think i have a friendCrush on ' + createdContestants[i].name + '</button>';

    }

    crushModal.innerHTML = crushModal.innerHTML + '<button onclick="closeModal()" class="close">x</button>';



}

function showCurrentCrushes() {
    var crushModal = document.getElementById("crushModal");
    crushModal.classList = 'visible';



    if (localStorage.getItem('crush')) {
        var crushlist = localStorage.getItem('crush').split(',');
    }




    if (localStorage.getItem('crush')) {

        crushModal.innerHTML = '<br><button onclick="closeModal()" class="close">x</button>';

        for (i = 0; i < crushlist.length; i++) {
            crushModal.innerHTML += '<div id="' + crushlist[i] + '" class="randomContestant pink"><img onclick="showModal(' + crushlist[i] + ')" src="img/' + createdContestants[crushlist[i]].name + '.png"><br><i class="em em-cupid"></i><br>' + createdContestants[crushlist[i]].name + '<button class="modalCrushes" onclick="nomorecrush(' + crushlist[i] + ')">the feeling is gone<i class="em em-confounded"></i></button></div>';
        }

        // for(i=0;i<crushlist.length;i++){
        //         crushModal.innerHTML = crushModal.innerHTML + '<div onclick="showModal(' + i + ')" class="randomContestant"><img src="img/'+ createdContestants[i].name  +'.png"><br><i class="em em-cupid"></i><br>' + createdContestants[i].name + '</div>';
        //     }


    } else {
        crushModal.innerHTML = 'you dont have any crushes yet!<br><button onclick="closeModal()" class="close">x</button>';
    }
}

function friendCrush(i) {

    if (localStorage.getItem('crush')) {

        var currentCrushes = localStorage.getItem('crush') + ',' + i;
        console.log(currentCrushes);
        var fixedCrushes = currentCrushes.split(',');
        var uniquedCrushes = fixedCrushes.filter(function(item, pos) {
            return fixedCrushes.indexOf(item) == pos;
        });

        console.log(uniquedCrushes);
        localStorage.setItem('crush', uniquedCrushes);

    } else {
        localStorage.setItem('crush', i);
    }

    document.getElementById('contestant' + i).classList = 'randomContestant pink';

    makeCrushTrue(i);




    closeModal();


}


function checkIfCrush(x) {


    var crushUpdate = JSON.parse(localStorage.getItem('contestant' + x));


    console.log(crushUpdate.isCrush);
    return crushUpdate.isCrush;

}

function makeCrushTrue(x) {
    var crushUpdate = JSON.parse(localStorage.getItem('contestant' + x));
    crushUpdate.isCrush = true;
    localStorage.setItem('contestant' + x, JSON.stringify(crushUpdate));
}

function makeCrushFalse(x) {
    var crushUpdate = JSON.parse(localStorage.getItem('contestant' + x));
    crushUpdate.isCrush = false;
    localStorage.setItem('contestant' + x, JSON.stringify(crushUpdate));
}




function closeModal() {
    document.getElementById("crushModal").innerHTML = '';
    document.getElementById("crushModal").classList = 'hidden';
}

function nomorecrush(i) {

    document.getElementById(i).className = "hidden";
    var crushEnder = localStorage.getItem('crush').split(',');

    var crushEnder = localStorage.getItem('crush').split(',').map(function(item) {
        return parseInt(item, 10);
    });

    var newCrushList = [];

    for (j = 0; j < crushEnder.length; j++) {

        if (crushEnder[j] !== i) {
            newCrushList.push(crushEnder[j]);
            console.log(newCrushList);
        }
    }

    if (newCrushList.length == 0) {
        document.getElementById("crushModal").innerHTML = 'you have no more crushes!<br><button onclick="closeModal()" class="close">x</button>';
    };

    var contestantToReset = 'contestant' + i;
    if (document.getElementById('contestants').innerHTML === "") {} else {
        document.getElementById(contestantToReset).classList = 'randomContestant';
    }
    makeCrushFalse(i);
    localStorage.setItem('crush', newCrushList);

}