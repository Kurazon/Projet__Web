let randomNumber = Math.floor(Math.random() * 100) + 1;
        const guessInput = document.getElementById('guessInput');
        const guessButton = document.getElementById('guessButton');
        const message = document.getElementById('message');

        guessButton.addEventListener('click', () => {
            const userGuess = parseInt(guessInput.value);
            if (isNaN(userGuess)) {
                message.textContent = 'Veuillez entrer un nombre valide.';
                message.style.color = 'red';
                return;
            }

            if (userGuess < randomNumber) {
                message.textContent = 'Trop bas ! Essayez encore.';
                message.style.color = 'orange';
            } else if (userGuess > randomNumber) {
                message.textContent = 'Trop haut ! Essayez encore.';
                message.style.color = 'orange';
            } else {
                message.textContent = `Félicitations ! Vous avez deviné le nombre ${randomNumber}.`;
                message.style.color = 'green';
                guessButton.disabled = true;
            }
        });