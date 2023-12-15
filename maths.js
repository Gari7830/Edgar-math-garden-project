var answer;
var score = 0;
var backgroundImages = [];


function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random() * 6);;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function checkAnswer() {

    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct. Score: ${score}`);
        if (score <= 6) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert("Congratulations! You've won!");
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }

    } else {
        if (score != 0) {
            score--;
        }
        console.log(`Wrong! Score: ${score}`);
        alert("Wrong answer!")
        setTimeout(function () {
            last_item = backgroundImages.slice(-1);
            backgroundImages.splice(last_item, 1);
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }

}
