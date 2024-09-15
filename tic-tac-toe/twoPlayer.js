var flag = 1;

function checkWin() {
    var b1 = document.getElementById("d1").value;
    var b2 = document.getElementById("d2").value;
    var b3 = document.getElementById("d3").value;
    var b4 = document.getElementById("d4").value;
    var b5 = document.getElementById("d5").value;
    var b6 = document.getElementById("d6").value;
    var b7 = document.getElementById("d7").value;
    var b8 = document.getElementById("d8").value;
    var b9 = document.getElementById("d9").value;

    var but1 = document.getElementById("d1");
    var but2 = document.getElementById("d2");
    var but3 = document.getElementById("d3");
    var but4 = document.getElementById("d4");
    var but5 = document.getElementById("d5");
    var but6 = document.getElementById("d6");
    var but7 = document.getElementById("d7");
    var but8 = document.getElementById("d8");
    var but9 = document.getElementById("d9");

    if ((b1 == 'X' || b1 == 'x') && (b2 == 'X' || b2 == 'x') && (b3 == 'X' || b3 == 'x')) {
        declareWinner("Player X", but1, but2, but3);
    }
    else if ((b4 == 'X' || b4 == 'x') && (b5 == 'X' || b5 == 'x') && (b6 == 'X' || b6 == 'x')) {
        declareWinner("Player X", but4, but5, but6);
    }
    else if ((b7 == 'X' || b7 == 'x') && (b8 == 'X' || b8 == 'x') && (b9 == 'X' || b9 == 'x')) {
        declareWinner("Player X", but7, but8, but9);
    }
    else if ((b1 == 'X' || b1 == 'x') && (b4 == 'X' || b4 == 'x') && (b7 == 'X' || b7 == 'x')) {
        declareWinner("Player X", but1, but4, but7);
    }
    else if ((b2 == 'X' || b2 == 'x') && (b5 == 'X' || b5 == 'x') && (b8 == 'X' || b8 == 'x')) {
        declareWinner("Player X", but2, but5, but8);
    }
    else if ((b3 == 'X' || b3 == 'x') && (b6 == 'X' || b6 == 'x') && (b9 == 'X' || b9 == 'x')) {
        declareWinner("Player X", but3, but6, but9);
    }
    else if ((b1 == 'X' || b1 == 'x') && (b5 == 'X' || b5 == 'x') && (b9 == 'X' || b9 == 'x')) {
        declareWinner("Player X", but1, but5, but9);
    }
    else if ((b3 == 'X' || b3 == 'x') && (b5 == 'X' || b5 == 'x') && (b7 == 'X' || b7 == 'x')) {
        declareWinner("Player X", but3, but5, but7);
    }
    else if ((b1 == 'O' || b1 == 'o') && (b2 == 'O' || b2 == 'o') && (b3 == 'O' || b3 == 'o')) {
        declareWinner("Player O", but1, but2, but3);
    }
    else if ((b4 == 'O' || b4 == 'o') && (b5 == 'O' || b5 == 'o') && (b6 == 'O' || b6 == 'o')) {
        declareWinner("Player O", but4, but5, but6);
    }
    else if ((b7 == 'O' || b7 == 'o') && (b8 == 'O' || b8 == 'o') && (b9 == 'O' || b9 == 'o')) {
        declareWinner("Player O", but7, but8, but9);
    }
    else if ((b1 == 'O' || b1 == 'o') && (b4 == 'O' || b4 == 'o') && (b7 == 'O' || b7 == 'o')) {
        declareWinner("Player O", but1, but4, but7);
    }
    else if ((b2 == 'O' || b2 == 'o') && (b5 == 'O' || b5 == 'o') && (b8 == 'O' || b8 == 'o')) {
        declareWinner("Player O", but2, but5, but8);
    }
    else if ((b3 == 'O' || b3 == 'o') && (b6 == 'O' || b6 == 'o') && (b9 == 'O' || b9 == 'o')) {
        declareWinner("Player O", but3, but6, but9);
    }
    else if ((b1 == 'O' || b1 == 'o') && (b5 == 'O' || b5 == 'o') && (b9 == 'O' || b9 == 'o')) {
        declareWinner("Player O", but1, but5, but9);
    }
    else if ((b3 == 'O' || b3 == 'o') && (b5 == 'O' || b5 == 'o') && (b7 == 'O' || b7 == 'o')) {
        declareWinner("Player O", but3, but5, but7);
    }

    else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
        document.getElementById("h3").innerHTML = "Match tie";
        disableAllButtons();
    }
    else {
        document.getElementById("h3").innerHTML = flag == 1 ? "Player X's turn" : "Player O's turn";
    }
}

function declareWinner(player, btn1, btn2, btn3) {
    document.getElementById("h3").innerHTML = player + " won";
    btn1.style.color = "red";
    btn2.style.color = "red";
    btn3.style.color = "red";
    disableAllButtons();
}

function disableAllButtons() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
    document.getElementById("reset").disabled=false;
}

function reset() {
    location.reload();
}

function buttonClick(id) {
    var button = document.getElementById(id);
    if (flag == 1) {
        button.value = 'X';
        flag = 0;
    } else {
        button.value = 'O';
        flag = 1;
    }
    button.disabled = true;
    checkWin();
}

