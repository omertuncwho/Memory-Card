    const symbols = ['♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢'];

    function createGameBoard(size) {
      const gameBoard = document.getElementById('gameBoard');
      gameBoard.innerHTML = '';

      const cards = symbols.slice(0, size / 2).concat(symbols.slice(0, size / 2));
      cards.sort(() => Math.random() - 0.5);

      cards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = symbol;
        card.addEventListener('click', () => handleCardClick(card, symbol));
        gameBoard.appendChild(card);
      });
    }

    let flippedCards = [];
    let matchedPairs = 0;

    function handleCardClick(card, symbol) {
      if (flippedCards.length < 2 && !flippedCards.includes(card)) {
        card.textContent = symbol;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          if (flippedCards[0].textContent === flippedCards[1].textContent) {
            flippedCards.forEach(card => card.classList.add('matched'));
            matchedPairs++;
            if (matchedPairs === symbols.length / 2) {
              setTimeout(() => alert('Congratulations, you won!'), 500);
            }
          } else {
            setTimeout(() => {
              flippedCards.forEach(card => card.textContent = '');
            }, 1000);
          }
          flippedCards = [];
        }
      }
    }

    createGameBoard(8);
