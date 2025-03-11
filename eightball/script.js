function answer() {
    // Debugging line
    console.log("Yep, you clicked the check button.");
    
    document.querySelector(".actual_eball").style.transition = "none";
    document.querySelector(".actual_eball").style.animation = "none";    

    void document.querySelector(".actual_eball").offsetHeight;
    
    document.querySelector(".actual_eball").style.transition = "transform 1s";
    document.querySelector(".actual_eball").style.animation = "shake 0.5s";    
    // Generate a random answer
    let chanceAnswer = Math.floor(Math.random() * 10);
    
    if (chanceAnswer == 1) {
        document.querySelector(".answer_text").innerHTML = "YES <br> DEFINITELY";
    } else if (chanceAnswer == 2) {
        document.querySelector(".answer_text").innerHTML = "IT IS <br> DECIDEDLY <br> NO";
    } else if (chanceAnswer == 3) {
        document.querySelector(".answer_text").innerHTML = "WITHOUT A <br> DOUBT";
    } else if (chanceAnswer == 4) {
        document.querySelector(".answer_text").innerHTML = "REPLY HAZY, <br> TRY AGAIN";
    } else if (chanceAnswer == 5) {
        document.querySelector(".answer_text").innerHTML = "BETTER NOT <br> TELL YOU <br> NOW";
    } else if (chanceAnswer == 6) {
        document.querySelector(".answer_text").innerHTML = "MY SOURCES <br> SAY NO";
    } else if (chanceAnswer == 7) {
        document.querySelector(".answer_text").innerHTML = "OUTLOOK NOT <br> SO GOOD";
    } else if (chanceAnswer == 8) {
        document.querySelector(".answer_text").innerHTML = "VERY <br> DOUBTFUL";
    } else if (chanceAnswer == 9) {
        document.querySelector(".answer_text").innerHTML = "ASK AGAIN <br> LATER";
    }
}
