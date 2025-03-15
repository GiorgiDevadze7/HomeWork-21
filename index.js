// Initial power levels
let gandalfPower = 100;
let dumbledorePower = 100;

// Update the visual representation of power levels
function updatePowerLevels() {
    document.getElementById('gandalf-power').style.width = gandalfPower + '%';
    document.getElementById('gandalf-power-text').textContent = gandalfPower;
    
    document.getElementById('dumbledore-power').style.width = dumbledorePower + '%';
    document.getElementById('dumbledore-power-text').textContent = dumbledorePower;
}

// Initialize power levels
updatePowerLevels();

// Add event listener to the duel button
document.getElementById('duel-button').addEventListener('click', function() {
    // Boost Gandalf's magic and weaken Dumbledore slightly
    gandalfPower += 15;
    dumbledorePower -= 5;
    
    // Update the visual representation
    updatePowerLevels();
    
    // Compare and determine who is stronger
    let resultMessage = "";
    if (gandalfPower > dumbledorePower) {
        resultMessage = "Gandalf the Grey is stronger!";
    } else if (dumbledorePower > gandalfPower) {
        resultMessage = "Dumbledore is stronger!";
    } else {
        resultMessage = "Their powers are equal!";
    }
    
    // Display the result
    document.getElementById('result').textContent = resultMessage;
});

