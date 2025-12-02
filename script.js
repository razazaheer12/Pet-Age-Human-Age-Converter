function convertAge() {
    let pet = document.getElementById("petType").value;
    let age = Number(document.getElementById("ageInput").value);
    let resultText = document.getElementById("resultText");
    let petPhoto = document.getElementById("petPhoto");
    let progressCircle = document.getElementById("progressCircle");

    if (!pet) { alert("Please select Dog or Cat!"); return; }
    if (isNaN(age) || age < 0) { alert("Enter a valid age!"); return; }

    // Pet Photos
    if (pet === "dog") petPhoto.src = "https://i.ibb.co/7NSjBnJL/Dog-png.png";
    if (pet === "cat") petPhoto.src = "https://i.ibb.co/KzRW77Br/Cat-png.png";
    petPhoto.style.display = "block";

    // Calculate age
    let humanAge = 0;

    if (pet === "dog") {
        if (age <= 2) humanAge = age * 10.5;
        else humanAge = 21 + (age - 2) * 4;
    }

    if (pet === "cat") {
        if (age === 0) humanAge = 0;
        else if (age === 1) humanAge = 15;
        else if (age === 2) humanAge = 24;
        else humanAge = 24 + (age - 2) * 4;
    }

    // Number counting animation
    let counter = 0;
    let target = humanAge;
    let interval = setInterval(() => {
        counter++;
        resultText.innerHTML = `<strong>${pet.toUpperCase()} = ${counter} human years</strong>`;
        if (counter >= target) clearInterval(interval);
    }, 20);

    resultText.style.display = "block";

    // Circle Gauge % (out of 100)
    let percent = Math.min(Math.round((humanAge / 100) * 100), 100);
    animateCircle(percent);

    progressCircle.style.display = "block";
}

function animateCircle(percent) {
    let circleValue = document.getElementById("circleValue");
    let fillFull = document.getElementById("fillFull");
    let fillHalf = document.getElementById("fillHalf");

    fillFull.style.transform = "rotate(0deg)";
    fillHalf.style.transform = "rotate(0deg)";

    let current = 0;
    let animation = setInterval(() => {
        current++;
        circleValue.textContent = current + "%";

        if (current <= 50) {
            fillHalf.style.transform = `rotate(${current * 3.6}deg)`;
        } else {
            fillHalf.style.transform = `rotate(180deg)`;
            fillFull.style.transform = `rotate(${(current * 3.6) - 180}deg)`;
        }

        if (current >= percent) clearInterval(animation);
    }, 10);
}

function resetAll() {
    document.getElementById("petType").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("resultText").style.display = "none";
    document.getElementById("progressCircle").style.display = "none";
    document.getElementById("petPhoto").style.display = "none";
}
