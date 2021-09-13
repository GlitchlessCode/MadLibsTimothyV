// Madlibs by Timothy Veugelers

// Give Button Event Listener
document.getElementById("madLib").addEventListener("click", madLib);

function madLib() {
    // Input Fields Are Read
    let friendName = document.getElementById("friendName").value;
    let adj = document.getElementById("adj").value;
    let plurNoun = document.getElementById("plurNoun").value;

    // Inputs Processed To String

    let outputLib = '“Yesterday, ' + friendName + ' went shopping and bought some ' + adj + ' ' + plurNoun + '."';

    // Output To Field

    document.getElementById("result").innerHTML = outputLib
}