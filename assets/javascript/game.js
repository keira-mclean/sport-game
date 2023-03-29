(function() {

    //reset counter
    let resetButton = document.querySelector("#reset-button");
    let countOfResets = document.querySelector("#num-resets");
    
    resetButton.addEventListener("click", function() {
        let resets = countOfResets.innerHTML;
        let addReset = parseInt(resets) +1;
        countOfResets.innerHTML = addReset;

    })

   
})()