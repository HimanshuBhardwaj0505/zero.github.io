setTimeout(() => {

    if (localStorage.getItem('computer one') == 1) {
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
    } else if (localStorage.getItem('1') == 1) {
        var xone = document.getElementById('xone');
        xone.style.opacity = '5';
        var yone = document.getElementById('yone');
        yone.style.display = 'none';
    } else {
        var xone = document.getElementById('xone');
        xone.style.opacity = '0';
        var yone = document.getElementById('yone');
        yone.style.opacity = '0';
    }

}, 1000);

setTimeout(() => {

    if (localStorage.getItem('computer two') == 2) {
        var xtwo = document.getElementById('xtwo');
        xtwo.style.display = 'none';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.opacity = '5';
    } else if (localStorage.getItem('2') == 2) {
        var xtwo = document.getElementById('xtwo');
        xtwo.style.opacity = '5';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.display = '0';
    } else {
        var xtwo = document.getElementById('xtwo');
        xtwo.style.opacity = '0';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.display = '0';
    }

}, 1000);

setTimeout(() => {

    if (localStorage.getItem('computer three') == 3) {
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
    } else if (localStorage.getItem('3') == 3) {
        var xthree = document.getElementById('xthree');
        xthree.style.opacity = '5';
        var ythree = document.getElementById('ythree');
        ythree.style.display = 'none';
    } else {
        var xthree = document.getElementById('xthree');
        xthree.style.opacity = '0';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '0';
    }

}, 1000);

setTimeout(() => {

    if (localStorage.getItem('computer four') == 4) {
        var xfour = document.getElementById('xfour');
        xfour.style.display = 'none';
        var yfour = document.getElementById('yfour');
        yfour.style.opacity = '5';
    } else if (localStorage.getItem('4') == 4) {
        var xfour = document.getElementById('xfour');
        xfour.style.opacity = '5';
        var yfour = document.getElementById('yfour');
        yfour.style.display = 'none';
    } else {
        var xfour = document.getElementById('xfour');
        xfour.style.opacity = '0';
        var yfour = document.getElementById('yfour');
        yfour.style.opacity = '0';

    }

}, 1000);

setTimeout(() => {

    if (localStorage.getItem('computer five') == 5) {
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
    } else if (localStorage.getItem('5') == 5) {
        var xfive = document.getElementById('xfive');
        xfive.style.opacity = '5';
        var yfive = document.getElementById('yfive');
        yfive.style.display = 'none';
    } else {
        var xfive = document.getElementById('xfive');
        xfive.style.opacity = '0';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '0';
    }

}, 1000);

setTimeout(() => {

    if (localStorage.getItem('computer six') == 6) {
        var xsix = document.getElementById('xsix');
        xsix.style.display = 'none';
        var ysix = document.getElementById('ysix');
        ysix.style.opacity = '5';
    } else if (localStorage.getItem('6') == 6) {
        var xsix = document.getElementById('xsix');
        xsix.style.opacity = '5';
        var ysix = document.getElementById('ysix');
        ysix.style.display = 'none';
    } else {
        var xsix = document.getElementById('xsix');
        xsix.style.opacity = '0';
        var ysix = document.getElementById('ysix');
        ysix.style.opacity = '0';

    }

}, 1000);

setTimeout(() => {

    if (localStorage.getItem('computer seven') == 7) {
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
    } else if (localStorage.getItem('7') == 7) {
        var xseven = document.getElementById('xseven');
        xseven.style.opacity = '5';
        var yseven = document.getElementById('yseven');
        yseven.style.display = 'none';
    } else {
        var xseven = document.getElementById('xseven');
        xseven.style.opacity = '0';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '0';

    }

}, 1000);


setTimeout(() => {

    if (localStorage.getItem('computer eight') == 8) {
        var xeight = document.getElementById('xeight');
        xeight.style.display = 'none';
        var yeight = document.getElementById('yeight');
        yeight.style.opacity = '5';
    } else if (localStorage.getItem('8') == 8) {
        var xeight = document.getElementById('xeight');
        xeight.style.opacity = '5';
        var yeight = document.getElementById('yeight');
        yeight.style.display = 'none';
    } else {
        var xeight = document.getElementById('xeight');
        xeight.style.opacity = '0';
        var yeight = document.getElementById('yeight');
        yeight.style.opacity = '0';
    }

}, 1000);

setTimeout(() => {

    if (localStorage.getItem('computer nine') == 9) {
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
    } else if (localStorage.getItem('9') == 9) {
        var xnine = document.getElementById('xnine');
        xnine.style.opacity = '5';
        var ynine = document.getElementById('ynine');
        ynine.style.display = 'none';
    } else {
        var xnine = document.getElementById('xnine');
        xnine.style.opacity = '0';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '0';

    }

}, 1000);


function game(number) {
    localStorage.setItem('user', parseInt(number));
    var odd = localStorage.getItem('turn')

    if (localStorage.getItem('turn') == 'even' || !odd) {
        if (localStorage.getItem('user') == 1) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem(parseInt('1'), number);
            localStorage.setItem('button one', 'click');
            var xone = document.getElementById('xone');
            xone.style.opacity = '5';
            xone.style.cursor = 'not-allowed';
            var yone = document.getElementById('yone');
            yone.style.display = 'none';
            document.getElementById("btn-one").onclick = function() {
                this.disabled = true;
            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 2) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button two', 'click');
            localStorage.setItem(parseInt('2'), number);
            var xtwo = document.getElementById('xtwo');
            xtwo.style.opacity = '5';
            var ytwo = document.getElementById('ytwo');
            ytwo.style.display = 'none';
            document.getElementById("btn-two").onclick = function() {
                this.disabled = true;
            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 3) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button three', 'click');
            localStorage.setItem(parseInt('3'), number);
            var xthree = document.getElementById('xthree');
            xthree.style.opacity = '5';
            var ythree = document.getElementById('ythree');
            ythree.style.display = 'none';
            document.getElementById("btn-three").onclick = function() {
                this.disabled = true;
            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 4) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button four', 'click');
            localStorage.setItem(parseInt('4'), number);
            var xfour = document.getElementById('xfour');
            xfour.style.opacity = '5';
            var yfour = document.getElementById('yfour');
            yfour.style.display = 'none';
            document.getElementById("btn-four").onclick = function() {
                this.disabled = true;
            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 5) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button five', 'click');
            localStorage.setItem(parseInt('5'), number);
            var xfive = document.getElementById('xfive');
            xfive.style.opacity = '5';
            var yfive = document.getElementById('yfive');
            yfive.style.display = 'none';
            document.getElementById("btn-five").onclick = function() {
                this.disabled = true;
            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 6) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button six', 'click');
            localStorage.setItem(parseInt('6'), number);
            var xsix = document.getElementById('xsix');
            xsix.style.opacity = '5';
            var ysix = document.getElementById('ysix');
            ysix.style.display = 'none';
            document.getElementById("btn-six").onclick = function() {
                this.disabled = true;
            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 7) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button seven', 'click');
            localStorage.setItem(parseInt('7'), number);
            var xseven = document.getElementById('xseven');
            xseven.style.opacity = '5';
            var yseven = document.getElementById('yseven');
            yseven.style.display = 'none';
            document.getElementById("btn-seven").onclick = function() {
                this.disabled = true;
            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 8) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button eight', 'click');
            localStorage.setItem(parseInt('8'), number);
            var xeight = document.getElementById('xeight');
            xeight.style.opacity = '5';
            var yeight = document.getElementById('yeight');
            yeight.style.display = 'none';
            document.getElementById("btn-eight").onclick = function() {
                this.disabled = true;

            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        } else if (localStorage.getItem('user') == 9) {
            localStorage.setItem('turn', 'odd');
            localStorage.setItem('button nine', 'click');
            localStorage.setItem(parseInt('9'), number);
            var xnine = document.getElementById('xnine');
            xnine.style.opacity = '5';
            var ynine = document.getElementById('ynine');
            ynine.style.display = 'none';
            document.getElementById("btn-nine").onclick = function() {
                this.disabled = true;


            }
            setTimeout(() => {
                algorithmOne();
            }, 2000);
        }

    } else {
        var warningAlert = localStorage.getItem('warning')
        if (!warningAlert) {
            alert("Please wait for computer turn ottherwise Automate will block you")
            localStorage.setItem('warning', '1');

        } else if (localStorage.getItem('warning') == 1) {
            alert("Last Warning : Please wait for computer turn ottherwise Automate will block you")
            localStorage.setItem('warning', '2');

        } else if (localStorage.getItem('warning') == 2) {
            alert("sorry automate delete your account because you try to cut Automate turn")
            localStorage.clear();
            location.replace("./index.html")
        }
    }



    setTimeout(() => {
        checkWinner();
    }, 1000);



}



function algorithmOne() {
    var computerone = localStorage.getItem('computer one');
    var computertwo = localStorage.getItem('computer two');
    var computerthree = localStorage.getItem('computer three');
    var computerfour = localStorage.getItem('computer four');
    var computerfive = localStorage.getItem('computer five');
    var computersix = localStorage.getItem('computer six');
    var computerseven = localStorage.getItem('computer seven');
    var computereight = localStorage.getItem('computer eight');
    var computernine = localStorage.getItem('computer nine');
    var winone = localStorage.getItem('Win one');
    var wintwo = localStorage.getItem('Win two');
    var winthree = localStorage.getItem('Win three');
    var winfour = localStorage.getItem('Win four');
    var winfive = localStorage.getItem('Win five');
    var winsix = localStorage.getItem('Win six');
    var winseven = localStorage.getItem('Win seven');
    var wineight = localStorage.getItem('Win eight');
    var winnine = localStorage.getItem('Win nine');
    var one = localStorage.getItem('1');
    var two = localStorage.getItem('2');
    var three = localStorage.getItem('3');
    var four = localStorage.getItem('4');
    var five = localStorage.getItem('5');
    var six = localStorage.getItem('6');
    var seven = localStorage.getItem('7');
    var eight = localStorage.getItem('8');
    var nine = localStorage.getItem('9');

    if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer two') == 2 && !computerthree && !winthree && !three) {
        localStorage.setItem('computer three', '3');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('button three', 'click');
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
        document.getElementById("btn-three").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer two') == 2 && localStorage.getItem('computer three') == 3 && !computerone && !winone && !one) {
        localStorage.setItem('computer one', '1');
        localStorage.setItem('button one', 'click');
        localStorage.setItem('turn', 'even');
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
        document.getElementById("btn-one").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer three') == 3 && !computertwo && !wintwo && !two) {
        localStorage.setItem('computer two', '2');
        localStorage.setItem('button two', 'click');
        localStorage.setItem('turn', 'even');
        var xtwo = document.getElementById('xtwo');
        xtwo.style.display = 'none';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.opacity = '5';
        document.getElementById("btn-two").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer four') == 4 && localStorage.getItem('computer five') == 5 && !computersix && !winsix && !six) {
        localStorage.setItem('computer six', '6');
        localStorage.setItem('button six', 'click');
        localStorage.setItem('turn', 'even');
        var xsix = document.getElementById('xsix');
        xsix.style.display = 'none';
        var ysix = document.getElementById('ysix');
        ysix.style.opacity = '5';
        document.getElementById("btn-six").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer four') == 4 && localStorage.getItem('computer six') == 6 && !computerfive && !winfive && !six) {
        localStorage.setItem('computer five', '5');
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer five') == 5 && localStorage.getItem('computer six') == 6 && !computerfour && !winfour && !four) {
        localStorage.setItem('computer four', '4');
        localStorage.setItem('button four', 'click');
        localStorage.setItem('turn', 'even');
        var xfour = document.getElementById('xfour');
        xfour.style.display = 'none';
        var yfour = document.getElementById('yfour');
        yfour.style.opacity = '5';
        document.getElementById("btn-four").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer seven') == 7 && localStorage.getItem('computer eight') == 8 && !computernine && !winnine && !nine) {
        localStorage.setItem('computer nine', '9');
        localStorage.setItem('button nine', 'click');
        localStorage.setItem('turn', 'even');
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
        document.getElementById("btn-nine").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer seven') == 7 && localStorage.getItem('computer nine') == 9 && !computereight && !wineight && !eight) {
        localStorage.setItem('computer eight', '8');
        localStorage.setItem('button eight', 'click');
        localStorage.setItem('turn', 'even');
        var xeight = document.getElementById('xeight');
        xeight.style.display = 'none';
        var yeight = document.getElementById('yeight');
        yeight.style.opacity = '5';
        document.getElementById("btn-eight").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer eight') == 8 && localStorage.getItem('computer nine') == 9 && !computerseven && !winseven && !seven) {
        localStorage.setItem('computer seven', '7');
        localStorage.setItem('button seven', 'click');
        localStorage.setItem('turn', 'even');
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
        document.getElementById("btn-seven").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer four') == 4 && !computerseven && !winseven && !seven) {
        localStorage.setItem('computer seven', '7');
        localStorage.setItem('button seven', 'click');
        localStorage.setItem('turn', 'even');
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
        document.getElementById("btn-seven").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer seven') == 7 && !computerfour && !winfour && !four) {
        localStorage.setItem('computer four', '4');
        localStorage.setItem('button four', 'click');
        localStorage.setItem('turn', 'even');
        var xfour = document.getElementById('xfour');
        xfour.style.display = 'none';
        var yfour = document.getElementById('yfour');
        yfour.style.opacity = '5';
        document.getElementById("btn-four").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer seven') == 7 && localStorage.getItem('computer four') == 4 && !computerone && !winone && !one) {
        localStorage.setItem('computer one', '1');
        localStorage.setItem('button one', 'click');
        localStorage.setItem('turn', 'even');
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
        document.getElementById("btn-one").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer two') == 2 && localStorage.getItem('computer five') == 5 && !computereight && !wineight && !eight) {
        localStorage.setItem('computer eight', '8');
        localStorage.setItem('button eight', 'click');
        localStorage.setItem('turn', 'even');
        var xeight = document.getElementById('xeight');
        xeight.style.display = 'none';
        var yeight = document.getElementById('yeight');
        yeight.style.opacity = '5';
        document.getElementById("btn-eight").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer two') == 2 && localStorage.getItem('computer eight') == 8 && !computerfive && !winfive && !five) {
        localStorage.setItem('computer five', '5');
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer five') == 5 && localStorage.getItem('computer eight') == 8 && !computertwo && !wintwo && !two) {
        localStorage.setItem('computer two', '2');
        localStorage.setItem('button two', 'click');
        localStorage.setItem('turn', 'even');
        var xtwo = document.getElementById('xtwo');
        xtwo.style.display = 'none';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.opacity = '5';
        document.getElementById("btn-two").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer three') == 3 && localStorage.getItem('computer six') == 6 && !computernine && !winnine && !nine) {
        localStorage.setItem('computer nine', '9');
        localStorage.setItem('button nine', 'click');
        localStorage.setItem('turn', 'even');
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
        document.getElementById("btn-nine").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer three') == 3 && localStorage.getItem('computer nine') == 9 && !computersix && !winsix && !six) {
        localStorage.setItem('computer six', '6');
        localStorage.setItem('button six', 'click');
        localStorage.setItem('turn', 'even');
        var xsix = document.getElementById('xsix');
        xsix.style.display = 'none';
        var ysix = document.getElementById('ysix');
        ysix.style.opacity = '5';
        document.getElementById("btn-six").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer six') == 6 && localStorage.getItem('computer nine') == 9 && !computerthree && !winthree && !three) {
        localStorage.setItem('computer three', '3');
        localStorage.setItem('button three', 'click');
        localStorage.setItem('turn', 'even');
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
        document.getElementById("btn-three").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer five') == 5 && !computernine && !winnine && !nine) {
        localStorage.setItem('computer nine', '9');
        localStorage.setItem('button nine', 'click');
        localStorage.setItem('turn', 'even');
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
        document.getElementById("btn-nine").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer nine') == 9 && !computerfive && !winfive && !five) {
        localStorage.setItem('computer five', '5');
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer five') == 5 && localStorage.getItem('computer nine') == 9 && !computerone && !winone && !one) {
        localStorage.setItem('computer one', '1');
        localStorage.setItem('button one', 'click');
        localStorage.setItem('turn', 'even');
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
        document.getElementById("btn-one").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer three') == 3 && localStorage.getItem('computer five') == 5 && !computerseven && !winseven && !seven) {
        localStorage.setItem('computer seven', '7');
        localStorage.setItem('button seven', 'click');
        localStorage.setItem('turn', 'even');
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
        document.getElementById("btn-seven").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer three') == 3 && localStorage.getItem('computer seven') == 7 && !computerfive && !winfive && !five) {
        localStorage.setItem('computer five', '5');
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('computer five') == 5 && localStorage.getItem('computer seven') == 7 && !computerthree && !winthree && !three) {
        localStorage.setItem('computer three', '3');
        localStorage.setItem('button three', 'click');
        localStorage.setItem('turn', 'even');
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
        document.getElementById("btn-three").onclick = function() {
            this.disabled = true;
        }
    } else {
        setTimeout(() => {
            algorithmtwo()
        }, 1000)
    }

    setTimeout(() => {
        checkWinner();
    }, 2000);




}

function algorithmtwo() {
    var winone = localStorage.getItem('Win one');
    var wintwo = localStorage.getItem('Win two');
    var winthree = localStorage.getItem('Win three');
    var winfour = localStorage.getItem('Win four');
    var winfive = localStorage.getItem('Win five');
    var winsix = localStorage.getItem('Win six');
    var winseven = localStorage.getItem('Win seven');
    var wineight = localStorage.getItem('Win eight');
    var winnine = localStorage.getItem('Win nine');
    if (localStorage.getItem('1') == 1 && localStorage.getItem('2') == 2 && !winthree) {
        localStorage.setItem('Win three', '3')
        localStorage.setItem('button three', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer three', '3')
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
        document.getElementById("btn-three").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('2') == 2 && localStorage.getItem('3') == 3 && !winone) {
        localStorage.setItem('Win one', '1')
        localStorage.setItem('button one', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer one', '1')
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
        document.getElementById("btn-one").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('1') == 1 && localStorage.getItem('3') == 3 && !wintwo) {
        localStorage.setItem('Win two', '2')
        localStorage.setItem('button two', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer two', '2')
        var xtwo = document.getElementById('xtwo');
        xtwo.style.display = 'none';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.opacity = '5';
        document.getElementById("btn-two").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('4') == 4 && localStorage.getItem('5') == 5 && !winsix) {
        localStorage.setItem('Win six', '6')
        localStorage.setItem('button six', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer six', '6')
        var xsix = document.getElementById('xsix');
        xsix.style.display = 'none';
        var ysix = document.getElementById('ysix');
        ysix.style.opacity = '5';
        document.getElementById("btn-six").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('4') == 4 && localStorage.getItem('6') == 6 && !winfive) {
        localStorage.setItem('Win five', '5')
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer five', '5')
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('5') == 5 && localStorage.getItem('6') == 6 && !winfour) {
        localStorage.setItem('Win four', '4')
        localStorage.setItem('button four', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer four', '4')
        var xfour = document.getElementById('xfour');
        xfour.style.display = 'none';
        var yfour = document.getElementById('yfour');
        yfour.style.opacity = '5';
        document.getElementById("btn-four").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('7') == 7 && localStorage.getItem('8') == 8 && !winnine) {
        localStorage.setItem('Win nine', '9')
        localStorage.setItem('button nine', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer nine', '9')
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
        document.getElementById("btn-nine").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('7') == 7 && localStorage.getItem('9') == 9 && !wineight) {
        localStorage.setItem('Win eight', '8')
        localStorage.setItem('button eight', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer eight', '8')
        var xeight = document.getElementById('xeight');
        xeight.style.display = 'none';
        var yeight = document.getElementById('yeight');
        yeight.style.opacity = '5';
        document.getElementById("btn-eight").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('8') == 8 && localStorage.getItem('9') == 9 && !winseven) {
        localStorage.setItem('Win seven', '7')
        localStorage.setItem('button seven', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer seven', '7')
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
        document.getElementById("btn-seven").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('1') == 1 && localStorage.getItem('4') == 4 && !winseven) {
        localStorage.setItem('Win seven', '7')
        localStorage.setItem('button seven', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer seven', '7')
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
        document.getElementById("btn-seven").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('1') == 1 && localStorage.getItem('7') == 7 && !winfour) {
        localStorage.setItem('Win four', '4')
        localStorage.setItem('button four', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer four', '4')
        var xfour = document.getElementById('xfour');
        xfour.style.display = 'none';
        var yfour = document.getElementById('yfour');
        yfour.style.opacity = '5';
        document.getElementById("btn-four").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('7') == 7 && localStorage.getItem('4') == 4 && !winone) {
        localStorage.setItem('Win one', '1')
        localStorage.setItem('button one', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer one', '1')
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
        document.getElementById("btn-one").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('2') == 2 && localStorage.getItem('5') == 5 && !wineight) {
        localStorage.setItem('Win eight', '8')
        localStorage.setItem('button eight', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer eight', '8')
        var xeight = document.getElementById('xeight');
        xeight.style.display = 'none';
        var yeight = document.getElementById('yeight');
        yeight.style.opacity = '5';
        document.getElementById("btn-eight").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('2') == 2 && localStorage.getItem('8') == 8 && !winfive) {
        localStorage.setItem('Win five', '5')
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer five', '5')
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('5') == 5 && localStorage.getItem('8') == 8 && !wintwo) {
        localStorage.setItem('Win two', '2')
        localStorage.setItem('button two', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer two', '2')
        var xtwo = document.getElementById('xtwo');
        xtwo.style.display = 'none';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.opacity = '5';
        document.getElementById("btn-two").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('3') == 3 && localStorage.getItem('6') == 6 && !winnine) {
        localStorage.setItem('Win nine', '9')
        localStorage.setItem('button nine', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer nine', '9')
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
        document.getElementById("btn-nine").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('3') == 3 && localStorage.getItem('9') == 9 && !winsix) {
        localStorage.setItem('Win six', '6')
        localStorage.setItem('button six', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer six', '6')
        var xsix = document.getElementById('xsix');
        xsix.style.display = 'none';
        var ysix = document.getElementById('ysix');
        ysix.style.opacity = '5';
        document.getElementById("btn-six").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('6') == 6 && localStorage.getItem('9') == 9 && !winthree) {
        localStorage.setItem('Win three', '3')
        localStorage.setItem('button three', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer three', '3')
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
        document.getElementById("btn-three").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('1') == 1 && localStorage.getItem('5') == 5 && !winnine) {
        localStorage.setItem('Win nine', '9')
        localStorage.setItem('button nine', 'click');
        localStorage.setItem('computer nine', '9')
        localStorage.setItem('turn', 'even');
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
        document.getElementById("btn-nine").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('1') == 1 && localStorage.getItem('9') == 9 && !winfive) {
        localStorage.setItem('Win five', '5')
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer five', '5')
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('5') == 5 && localStorage.getItem('9') == 9 && !winone) {
        localStorage.setItem('Win one', '1')
        localStorage.setItem('button one', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer one', '1')
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
        document.getElementById("btn-one").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('3') == 3 && localStorage.getItem('5') == 5 && !winseven) {
        localStorage.setItem('Win seven', '7')
        localStorage.setItem('button seven', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer seven', '7')
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
        document.getElementById("btn-seven").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('3') == 3 && localStorage.getItem('7') == 7 && !winfive) {
        localStorage.setItem('Win five', '5')
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer five', '5')
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (localStorage.getItem('5') == 5 && localStorage.getItem('7') == 7 && !winthree) {
        localStorage.setItem('Win three', '3')
        localStorage.setItem('button three', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer three', '3')
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
        document.getElementById("btn-three").onclick = function() {
            this.disabled = true;
        }
    } else {
        setTimeout(() => {
            algorithmthree()
        }, 1000)
    }

    setTimeout(() => {
        checkWinner();
    }, 2000);


}


function algorithmthree() {
    var one = localStorage.getItem('1');
    var two = localStorage.getItem('2');
    var three = localStorage.getItem('3');
    var four = localStorage.getItem('4');
    var five = localStorage.getItem('5');
    var six = localStorage.getItem('6');
    var seven = localStorage.getItem('7');
    var eight = localStorage.getItem('8');
    var nine = localStorage.getItem('9');
    var computerone = localStorage.getItem('computer one');
    var computertwo = localStorage.getItem('computer two');
    var computerthree = localStorage.getItem('computer three');
    var computerfour = localStorage.getItem('computer four');
    var computerfive = localStorage.getItem('computer five');
    var computersix = localStorage.getItem('computer six');
    var computerseven = localStorage.getItem('computer seven');
    var computereight = localStorage.getItem('computer eight');
    var computernine = localStorage.getItem('computer nine');
    var usedone = localStorage.getItem('used');


    var randomNumber = Math.floor(Math.random() * 9) + 1;



    if (!one && !computerone && randomNumber == 1) {
        localStorage.setItem('Win one', '1')
        localStorage.setItem('button one', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer one', randomNumber)
        var xone = document.getElementById('xone');
        xone.style.display = 'none';
        var yone = document.getElementById('yone');
        yone.style.opacity = '5';
        document.getElementById("btn-one").onclick = function() {
            this.disabled = true;
        }
    } else if (!two && !computertwo && randomNumber == 2) {
        localStorage.setItem('Win two', '2')
        localStorage.setItem('button two', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer two', randomNumber)
        var xtwo = document.getElementById('xtwo');
        xtwo.style.display = 'none';
        var ytwo = document.getElementById('ytwo');
        ytwo.style.opacity = '5';
        document.getElementById("btn-two").onclick = function() {
            this.disabled = true;
        }
    } else if (!three && !computerthree && randomNumber == 3) {
        localStorage.setItem('Win three', '3')
        localStorage.setItem('button three', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer three', randomNumber)
        var xthree = document.getElementById('xthree');
        xthree.style.display = 'none';
        var ythree = document.getElementById('ythree');
        ythree.style.opacity = '5';
        document.getElementById("btn-three").onclick = function() {
            this.disabled = true;
        }
    } else if (!four && !computerfour && randomNumber == 4) {
        localStorage.setItem('Win four', '4')
        localStorage.setItem('button four', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer four', randomNumber)
        var xfour = document.getElementById('xfour');
        xfour.style.display = 'none';
        var yfour = document.getElementById('yfour');
        yfour.style.opacity = '5';
        document.getElementById("btn-four").onclick = function() {
            this.disabled = true;
        }
    } else if (!five && !computerfive && randomNumber == 5) {
        localStorage.setItem('Win five', '5')
        localStorage.setItem('button five', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer five', randomNumber)
        var xfive = document.getElementById('xfive');
        xfive.style.display = 'none';
        var yfive = document.getElementById('yfive');
        yfive.style.opacity = '5';
        document.getElementById("btn-five").onclick = function() {
            this.disabled = true;
        }
    } else if (!six && !computersix && randomNumber == 6) {
        localStorage.setItem('Win six', '6')
        localStorage.setItem('button six', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer six', randomNumber)
        var xsix = document.getElementById('xsix');
        xsix.style.display = 'none';
        var ysix = document.getElementById('ysix');
        ysix.style.opacity = '5';
        document.getElementById("btn-six").onclick = function() {
            this.disabled = true;
        }
    } else if (!seven && !computerseven && randomNumber == 7) {
        localStorage.setItem('Win seven', '7')
        localStorage.setItem('button seven', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer seven', randomNumber)
        var xseven = document.getElementById('xseven');
        xseven.style.display = 'none';
        var yseven = document.getElementById('yseven');
        yseven.style.opacity = '5';
        document.getElementById("btn-seven").onclick = function() {
            this.disabled = true;
        }
    } else if (!eight && !computereight && randomNumber == 8) {
        localStorage.setItem('Win eight', '8')
        localStorage.setItem('button eight', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer eight', randomNumber)
        var xeight = document.getElementById('xeight');
        xeight.style.display = 'none';
        var yeight = document.getElementById('yeight');
        yeight.style.opacity = '5';
        document.getElementById("btn-eight").onclick = function() {
            this.disabled = true;
        }
    } else if (!nine && !computernine && randomNumber == 9) {
        localStorage.setItem('Win nine', '9')
        localStorage.setItem('button nine', 'click');
        localStorage.setItem('turn', 'even');
        localStorage.setItem('computer nine', randomNumber)
        var xnine = document.getElementById('xnine');
        xnine.style.display = 'none';
        var ynine = document.getElementById('ynine');
        ynine.style.opacity = '5';
        document.getElementById("btn-nine").onclick = function() {
            this.disabled = true;
        }
    } else {

        if (!one && !computerone) {
            localStorage.setItem('button one', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win one', '1')
            localStorage.setItem('computer one', '1')
            var xone = document.getElementById('xone');
            xone.style.display = 'none';
            var yone = document.getElementById('yone');
            yone.style.opacity = '5';
            document.getElementById("btn-one").onclick = function() {
                this.disabled = true;
            }
        } else if (!two && !computertwo) {
            localStorage.setItem('button two', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win two', '2')
            localStorage.setItem('computer two', '2')
            var xtwo = document.getElementById('xtwo');
            xtwo.style.display = 'none';
            var ytwo = document.getElementById('ytwo');
            ytwo.style.opacity = '5';
            document.getElementById("btn-two").onclick = function() {
                this.disabled = true;
            }
        } else if (!three && !computerthree) {
            localStorage.setItem('button three', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win three', '3')
            localStorage.setItem('computer three', '3')
            var xthree = document.getElementById('xthree');
            xthree.style.display = 'none';
            var ythree = document.getElementById('ythree');
            ythree.style.opacity = '5';
            document.getElementById("btn-three").onclick = function() {
                this.disabled = true;
            }
        } else if (!four && !computerfour) {
            localStorage.setItem('button four', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win four', '4')
            localStorage.setItem('computer four', '4')
            var xfour = document.getElementById('xfour');
            xfour.style.display = 'none';
            var yfour = document.getElementById('yfour');
            yfour.style.opacity = '5';
            document.getElementById("btn-four").onclick = function() {
                this.disabled = true;
            }
        } else if (!five && !computerfive) {
            localStorage.setItem('button five', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win five', '5')
            localStorage.setItem('computer five', '5')
            var xfive = document.getElementById('xfive');
            xfive.style.display = 'none';
            var yfive = document.getElementById('yfive');
            yfive.style.opacity = '5';
            document.getElementById("btn-five").onclick = function() {
                this.disabled = true;
            }
        } else if (!six && !computersix) {
            localStorage.setItem('button six', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win six', '6')
            localStorage.setItem('computer six', '6')
            var xsix = document.getElementById('xsix');
            xsix.style.display = 'none';
            var ysix = document.getElementById('ysix');
            ysix.style.opacity = '5';
            document.getElementById("btn-six").onclick = function() {
                this.disabled = true;
            }
        } else if (!seven && !computerseven) {
            localStorage.setItem('button seven', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win sevn', '7')
            localStorage.setItem('computer seven', '7')
            var xseven = document.getElementById('xseven');
            xseven.style.display = 'none';
            var yseven = document.getElementById('yseven');
            yseven.style.opacity = '5';
            document.getElementById("btn-seven").onclick = function() {
                this.disabled = true;
            }
        } else if (!eight && !computereight) {
            localStorage.setItem('button eight', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win eight', '8')
            localStorage.setItem('computer eight', '8')
            var xeight = document.getElementById('xeight');
            xeight.style.display = 'none';
            var yeight = document.getElementById('yeight');
            yeight.style.opacity = '5';
            document.getElementById("btn-eight").onclick = function() {
                this.disabled = true;
            }
        } else if (!nine && !computernine) {
            localStorage.setItem('button nine', 'click');
            localStorage.setItem('turn', 'even');
            localStorage.setItem('Win nine', '9')
            localStorage.setItem('computer nine', '9')
            var xnine = document.getElementById('xnine');
            xnine.style.display = 'none';
            var ynine = document.getElementById('ynine');
            ynine.style.opacity = '5';
            document.getElementById("btn-nine").onclick = function() {
                this.disabled = true;
            }
        }
    }




    setTimeout(() => {
        checkWinner();
    }, 2000);


}


function checkWinner() {

    if (localStorage.getItem('1') == 1 && localStorage.getItem('2') == 2 && localStorage.getItem('3') == 3) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('warning');
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
        window.location.reload(true);
    } else if (localStorage.getItem('4') == 4 && localStorage.getItem('5') == 5 && localStorage.getItem('6') == 6) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('turn');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('9');
        localStorage.removeItem('warning');
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
        window.location.reload(true);
    } else if (localStorage.getItem('7') == 7 && localStorage.getItem('8') == 8 && localStorage.getItem('9') == 9) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('turn');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('9');
        localStorage.removeItem('warning');
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
        window.location.reload(true);
    } else if (localStorage.getItem('1') == 1 && localStorage.getItem('4') == 4 && localStorage.getItem('7') == 7) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('warning');
        localStorage.removeItem('9');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('2') == 2 && localStorage.getItem('5') == 5 && localStorage.getItem('8') == 8) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('turn');
        localStorage.removeItem('8');
        localStorage.removeItem('9');
        localStorage.removeItem('warning');
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
        window.location.reload(true);
    } else if (localStorage.getItem('3') == 3 && localStorage.getItem('6') == 6 && localStorage.getItem('9') == 9) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('warning');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('1') == 1 && localStorage.getItem('5') == 5 && localStorage.getItem('9') == 9) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('warning');
        localStorage.removeItem('7');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('3') == 3 && localStorage.getItem('5') == 5 && localStorage.getItem('7') == 7) {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('turn');
        localStorage.removeItem('9');
        localStorage.removeItem('warning');
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
        window.location.reload(true);
    }
    if (localStorage.getItem('computer one') == 1 && localStorage.getItem('coputer two') == 2 && localStorage.getItem('computer three') == 3) {
        alert("computer" + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('warning');
        localStorage.removeItem('9');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('computer four') == 4 && localStorage.getItem('computer five') == 5 && localStorage.getItem('computer six') == 6) {
        alert("computer" + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('warning');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('9');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('computer seven') == 7 && localStorage.getItem('computer eight') == 8 && localStorage.getItem('computer nine') == 9) {
        alert("computer" + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('warning');
        localStorage.removeItem('8');
        localStorage.removeItem('9');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer four') == 4 && localStorage.getItem('computer seven') == 7) {
        alert("computer" + " Winner");
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
        localStorage.removeItem('turn');
        localStorage.removeItem('warning');
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
        window.location.reload(true);
    } else if (localStorage.getItem('computer two') == 2 && localStorage.getItem('computer five') == 5 && localStorage.getItem('computer eight') == 8) {
        alert("computer" + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('turn');
        localStorage.removeItem('warning');
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
        window.location.reload(true);
    } else if (localStorage.getItem('computer three') == 3 && localStorage.getItem('computer six') == 6 && localStorage.getItem('computer nine') == 9) {
        alert("computer" + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('8');
        localStorage.removeItem('warning');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('computer one') == 1 && localStorage.getItem('computer five') == 5 && localStorage.getItem('computer nine') == 9) {
        alert("computer" + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('warning');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    } else if (localStorage.getItem('computer three') == 3 && localStorage.getItem('computer five') == 5 && localStorage.getItem('computer seven') == 7) {
        alert("computer" + " Winner");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('7');
        localStorage.removeItem('warning');
        localStorage.removeItem('8');
        localStorage.removeItem('9');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    }

    if (localStorage.getItem('button one') == 'click' && localStorage.getItem('button two') == 'click' && localStorage.getItem('button three') == 'click' && localStorage.getItem('button four') == 'click' && localStorage.getItem('button five') == 'click' && localStorage.getItem('button five') == 'click' && localStorage.getItem('button six') == 'click' && localStorage.getItem('button seven') == 'click' && localStorage.getItem('button eight') == 'click' && localStorage.getItem('button nine') == 'click') {
        var userNmae = localStorage.getItem('User Name');
        alert(userNmae + " Match Draw");
        localStorage.removeItem('user');
        localStorage.removeItem('1');
        localStorage.removeItem('2');
        localStorage.removeItem('3');
        localStorage.removeItem('4');
        localStorage.removeItem('5');
        localStorage.removeItem('6');
        localStorage.removeItem('warning');
        localStorage.removeItem('turn');
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
        window.location.reload(true);
    }

}