const terminal = document.getElementById("terminal-text");
const button = document.getElementById("deploy-button");
const finalMessage = document.getElementById("final-message");

const messages = [

    "PROJECT HERMES",
    "",
    "> Initializing...",
    "> Connecting to birthday server...",
    "> Checking recovered artifacts...",
    "",
    "[✓] Boots of Deployment",
    "[✓] Wallet of Infinite Budget",
    "[✓] Book of Knowledge",
    "[✓] Headphones of Deep Focus",
    "[✓] Final artifact",
    "",
    "5 / 5 ARTIFACTS RECOVERED",
    "",
    "ENGINEER VERIFIED.",
    "",
    "MISSION COMPLETE."

];

let index = 0;

function showNextLine() {

    if (index >= messages.length) {

        button.style.display = "block";

        return;
    }

    const line = document.createElement("div");

    line.className = "line";

    line.textContent = messages[index];

    terminal.appendChild(line);

    index++;

    setTimeout(showNextLine, 700);
}

showNextLine();


button.addEventListener("click", () => {

    button.style.display = "none";

    finalMessage.innerHTML = `
        <div class="line">
            > Deploying final reward...
        </div>

        <div class="line">
            > Running final procedure...
        </div>

        <div class="line">
            > Deployment successful.
        </div>

        <br>

        <div class="line">
            ❤️ FINAL REWARD UNLOCKED ❤️
        </div>

        <br>

        <div class="line">
            Go to the bedroom.
        </div>
    `;

});