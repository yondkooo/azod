// Хувьсагчид
let button = document.getElementById('rollButton');
let resultDiv = document.getElementById('result');

// Толгойн дэлгэц бэлэн болсны дараа үүсгэх listener
button.addEventListener('click', rollDice);

function rollDice() {
    // Сонголт, бооцоо унших
    const betChoice = document.getElementById("choice").value;
    const betAmount = parseInt(document.getElementById("betAmount").value, 10);

    // Бооцоо шалгах
    if (!betAmount || betAmount < 1) {
        resultDiv.textContent = "Бооцоогоо 1-с их тоогоор оруулна уу.";
        resultDiv.style.color = "salmon";
        return;
    }

    // Шоо шидэх
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    // Зургуудыг солих
    document.querySelector('.display1').style.backgroundImage = `url('${roll1}_dice.png')`;
    document.querySelector('.display2').style.backgroundImage = `url('${roll2}_dice.png')`;

    // Ялагчийг тодорхойлох
    let winner;
    if (roll1 === roll2) winner = "ijil";
    else if (roll1 > roll2) winner = "az";
    else winner = "od";

    // Үр дүнг харуулах
    if (betChoice === winner) {
        resultDiv.textContent = `Та яллаа! ₮${betAmount * 2} хожлоо. 🎉`;
        resultDiv.style.color = "lightgreen";
    } else {
        resultDiv.textContent = `Та ялагдлаа. ₮${betAmount} алдав. 😢`;
        resultDiv.style.color = "salmon";
    }
}
