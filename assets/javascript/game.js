(function() {

    //reset counter
    let resetButton = document.querySelector("#reset-button");
    let countOfResets = document.querySelector("#num-resets");
    
    resetButton.addEventListener("click", function() {
        let resets = countOfResets.innerHTML;
        let addReset = parseInt(resets) +1;
        countOfResets.innerHTML = addReset;

        team1ShotsTaken.innerHTML = 0;
        team2ShotsTaken.innerHTML = 0;
        team1Goals.innerHTML = 0;
        team2Goals.innerHTML = 0;

    })

    //team one count shots
    let team1ShootButton = document.querySelector("#teamone-shoot-button");
    let team1ShotsTaken = document.querySelector("#teamone-numshots");
    let team1Goals = document.querySelector("#teamone-numgoals");

    team1ShootButton.addEventListener("click", function() {
        let team1Shoot = team1ShotsTaken.innerHTML;
        let team1AddShot = parseInt(team1Shoot)+1;
        team1ShotsTaken.innerHTML = team1AddShot;

    //team one goals math random
    let team1Score = 0;
    let team1GoalCount = team1Goals.innerHTML;
    let team1ScoreGoal = parseInt(team1GoalCount)+1;
    
    if(Math.floor(Math.random()*3) == team1Score) {
        team1Goals.innerHTML = team1ScoreGoal;
        alert("Team Green SCORE!!!!!");
    }
    })

    //team two count shots
    let team2ShootButton = document.querySelector("#teamtwo-shoot-button");
    let team2ShotsTaken = document.querySelector("#teamtwo-numshots");
    let team2Goals = document.querySelector("#teamtwo-numgoals");

    team2ShootButton.addEventListener("click", function() {
        let team2Shoot = team2ShotsTaken.innerHTML;
        let team2AddShot = parseInt(team2Shoot)+1;
        team2ShotsTaken.innerHTML = team2AddShot;

    //team two goals math random
    let team2Score = 0;
    let team2GoalCount = team2Goals.innerHTML;
    let team2ScoreGoal = parseInt(team2GoalCount)+1;
    
    if(Math.floor(Math.random()*3) == team2Score) {
        team2Goals.innerHTML = team2ScoreGoal;
        alert("Team Blue SCORE!!!!!");
    }
    })
   
})()