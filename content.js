function applySpeed(rate) {
    const video = document.querySelector("video");
    if (video) {
        video.playbackRate = rate;
        console.log("Speed set to", rate);
    }
}

// Add custom buttons into YouTube player
function addButtons() {
    if (document.getElementById("speed25btn")) return;

    const container = document.querySelector(".ytp-right-controls");
    if (!container) return;

    const b1 = document.createElement("button");
    b1.innerText = "2.5x";
    b1.id = "speed25btn";
    b1.className = "ytp-button";
    b1.onclick = () => applySpeed(2.5);

    const b2 = document.createElement("button");
    b2.innerText = "3x";
    b2.id = "speed3btn";
    b2.className = "ytp-button";
    b2.onclick = () => applySpeed(3);

    container.prepend(b2);
    container.prepend(b1);
}

// YouTube reloads its video DOM whenever you change videos.
// Observe and re-inject buttons every time.
const obs = new MutationObserver(() => {
    addButtons();
});
obs.observe(document.body, {
    childList: true,
    subtree: true
});

// Try initial injection
addButtons();
