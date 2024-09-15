var flag = 1;
        var Player = '';
        var computer = '';

        function reset() {
            location.reload();
        }

        function select() {
            var choice = document.querySelector("input[name='choice']:checked");
            if (choice) {
                Player = choice.value;
                computer = Player === "X" ? "O" : "X";
                document.getElementById("h3").innerHTML = "Your turn";
            } else {
                document.getElementById("h3").innerHTML = "Please select X or O";
            }
        }

        function winner() {
            var b1 = document.getElementById("d1").textContent;
            var b2 = document.getElementById("d2").textContent;
            var b3 = document.getElementById("d3").textContent;
            var b4 = document.getElementById("d4").textContent;
            var b5 = document.getElementById("d5").textContent;
            var b6 = document.getElementById("d6").textContent;
            var b7 = document.getElementById("d7").textContent;
            var b8 = document.getElementById("d8").textContent;
            var b9 = document.getElementById("d9").textContent;

            var but1 = document.getElementById("d1");
            var but2 = document.getElementById("d2");
            var but3 = document.getElementById("d3");
            var but4 = document.getElementById("d4");
            var but5 = document.getElementById("d5");
            var but6 = document.getElementById("d6");
            var but7 = document.getElementById("d7");
            var but8 = document.getElementById("d8");
            var but9 = document.getElementById("d9");

            // Check for Player win
            if ((b1 === Player && b2 === Player && b3 === Player) ||
                (b4 === Player && b5 === Player && b6 === Player) ||
                (b7 === Player && b8 === Player && b9 === Player) ||
                (b1 === Player && b4 === Player && b7 === Player) ||
                (b2 === Player && b5 === Player && b8 === Player) ||
                (b3 === Player && b6 === Player && b9 === Player) ||
                (b1 === Player && b5 === Player && b9 === Player) ||
                (b3 === Player && b5 === Player && b7 === Player)) {
                declareWinner(Player, but1, but2, but3);
                return;
            }

            // Check for Computer win
            if ((b1 === computer && b2 === computer && b3 === computer) ||
                (b4 === computer && b5 === computer && b6 === computer) ||
                (b7 === computer && b8 === computer && b9 === computer) ||
                (b1 === computer && b4 === computer && b7 === computer) ||
                (b2 === computer && b5 === computer && b8 === computer) ||
                (b3 === computer && b6 === computer && b9 === computer) ||
                (b1 === computer && b5 === computer && b9 === computer) ||
                (b3 === computer && b5 === computer && b7 === computer)) {
                declareWinner(computer, but1, but2, but3);
                return;
            }

            // Check for tie
            if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
                document.getElementById("h3").innerHTML = "Match tie";
                disableAllButtons();
                return;
            }

            if (flag === 0) {
                document.getElementById("h3").innerHTML = "Computer's turn";
                setTimeout(computerMove, 500); // Computer makes move after 500ms delay
            }
        }

        function declareWinner(winner, but1, but2, but3) {
            document.getElementById("h3").innerHTML = winner + " won";
            but1.style.color = "red";
            but2.style.color = "red";
            but3.style.color = "red";
            var buttons = document.querySelectorAll("button");
            buttons.forEach(button => button.disabled = true);
            document.getElementById("reset").disabled = false;
        }

        function buttonClick(id) {
            var button = document.getElementById(id);
            if (flag === 1) {
                button.textContent = Player;
                button.disabled = true;
                flag = 0;
                winner();
            }
        }

        function computerMove() {
            var availableButtons = [];
            for (var i = 1; i <= 9; i++) {
                var button = document.getElementById("d" + i);
                if (!button.textContent) {
                    availableButtons.push(button);
                }
            }
            if (availableButtons.length > 0) {
                var randomButton = availableButtons[Math.floor(Math.random() * availableButtons.length)];
                randomButton.textContent = computer;
                randomButton.disabled = true;
                flag = 1;
                winner();
            }
        }

        window.onload = function() {
            document.getElementById("reset").disabled = true;
        }
