function rollDice() {
            
    const betChoice = document.getElementById("choice").value;
    const betAmount = parseInt(document.getElementById("betAmount").value, 10);
    const resultDiv = document.getElementById("result");

    
    if (!betAmount || betAmount < 1) {
        resultDiv.textContent = "Бооцоогоо 1-с их тоогоор оруулна уу.";
        resultDiv.style.color = "#ff6b6b";
        return;
    }

    
    resultDiv.textContent = "Шоо хаяж байна...";
    resultDiv.style.color = "white";

    
    const diceDisplays = document.querySelectorAll('.display1, .display2');
    diceDisplays.forEach(dice => {
        dice.style.animation = "shake 0.5s";
    });

    
    setTimeout(() => {
        diceDisplays.forEach(dice => {
            dice.style.animation = "";
        });

    
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

    
        document.querySelector('.display1').style.backgroundImage = `url('${roll1}_dice.png')`;
        document.querySelector('.display2').style.backgroundImage = `url('${roll2}_dice.png')`;

        
        let winner;
        if (roll1 === roll2) winner = "ijil";
        else if (roll1 > roll2) winner = "az";
        else winner = "od";

        
        if (betChoice === winner) {
            let winAmount = betAmount;
            if (winner === "ijil") winAmount = betAmount * 3; 
            else winAmount = betAmount * 2;
            
            resultDiv.textContent = `Та яллаа! ₮${winAmount} хожлоо. 🎉`;
            resultDiv.style.color = "#51cf66";
        } else {
            resultDiv.textContent = `Та ялагдлаа. ₮${betAmount} алдав. 😢`;
            resultDiv.style.color = "#ff6b6b";
        }
    }, 1000);
}