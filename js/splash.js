setTimeout(() => {
    var splahScreen = document.getElementById('align');
    splahScreen.style.opacity = '0';

}, 5000);



setTimeout(() => {

    var getName = localStorage.getItem('User Name');

    if (!getName) {

        var welcomeCard2 = document.getElementById('welcome-card-2').id = 'not';
    } else {

        var getRead = localStorage.getItem('Read');

        if (!getRead) {
            var welcomeCard = document.getElementById('welcome-card');
            welcomeCard.style.opacity = '5';
        } else {

            welcomeCard3 = document.getElementById('welcome-card-3').id = 'menu';
        }

    }
}, 6000);

function closeCard() {
    closee = document.getElementById('close-spinner');
    closee.style.opacity = '5';
    closee.className = 'close-spinner';

    setTimeout(() => {
        closee.classList.remove('close-spinner');
        var welcomeCard = document.getElementById('welcome-card');
        welcomeCard.style.opacity = '0';
    }, 1000);

    setTimeout(() => {
        localStorage.setItem('Read', 'Read');
        var fetchData = localStorage.getItem('User');
        if (!fetchData) {
            document.getElementById('two').id = 'empty';
            document.getElementById('three').id = 'four';
            welcomeCard3 = document.getElementById('welcome-card-3').id = 'menu';
        } else {
            document.getElementById('empty').id = 'two';
            document.getElementById('four').id = 'three';
            var continueGame = document.getElementById('two');
            continueGame.style.opacity = "5"
            welcomeCard3 = document.getElementById('welcome-card-3').id = 'menu';
        }

    }, 2000);


}



function formFill() {


    if (document.getElementById('sub').value.trim() == "") {
        someIssue = document.getElementById('tostr').id = 'show-me';
        var showError = document.getElementById('show-me');
        showError.style.opacity = '5';

        setTimeout(() => {
            loadanimation = document.getElementById('message-loading');
            loadanimation.className = 'load-message';

        }, 2000);
        setTimeout(() => {
            loadanimation.classList.remove('load-message');
            showError.style.opacity = '0';
            someIssue = document.getElementById('show-me').id = 'tostr';
        }, 4000);

    } else {

        setTimeout(() => {
            var name = document.getElementById('sub').value;
            localStorage.setItem('User Name', name);
            var welcomeCard2 = document.getElementById('not').id = 'tostr';
            var welcomeCard = document.getElementById('welcome-card');
            welcomeCard.style.opacity = '5';
        }, 1000);


    }


}


function newGame() {

    var change = document.getElementById('topbar').id = 'youtubebar';

    setTimeout(() => {
        var change = document.getElementById('youtubebar').id = 'topbar';
        location.replace("./game.html")
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('9');
        localStorage.removeItem('computer one');
        localStorage.removeItem('computer two');
        localStorage.removeItem('computer three');
        localStorage.removeItem('computer four');
        localStorage.removeItem('computer five');
        localStorage.removeItem('computer six');
        localStorage.removeItem('computer seven');
        localStorage.removeItem('computer eight');
        localStorage.removeItem('computer nine');
        localStorage.removeItem('Win one');
        localStorage.removeItem('Win two');
        localStorage.removeItem('Win three');
        localStorage.removeItem('Win four');
        localStorage.removeItem('Win five');
        localStorage.removeItem('Win six');
        localStorage.removeItem('Win seven');
        localStorage.removeItem('Win eight');
        localStorage.removeItem('Win nine');
        localStorage.removeItem('button one');
        localStorage.removeItem('button two');
        localStorage.removeItem('button three');
        localStorage.removeItem('button four');
        localStorage.removeItem('button five');
        localStorage.removeItem('button six');
        localStorage.removeItem('button seven');
        localStorage.removeItem('button eight');
        localStorage.removeItem('button nine');
        localStorage.removeItem('turn');
        localStorage.removeItem('warning');
        welcomeCard3 = document.getElementById('menu').id = 'welcome-card-3';
    }, 1000);


}


function continueGame() {
    var change = document.getElementById('topbar').id = 'youtubebar';

    setTimeout(() => {
        var change = document.getElementById('youtubebar').id = 'topbar';
        location.replace("./game.html")
        welcomeCard3 = document.getElementById('menu').id = 'welcome-card-3';
    }, 1000);

}


function newAccount() {
    localStorage.clear();
    window.location.reload(true);

}