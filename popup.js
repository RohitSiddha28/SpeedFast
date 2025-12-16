function send(rate) {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {rate});
  });
}

document.getElementById("twofive").onclick = () => send(2.5);
document.getElementById("threex").onclick = () => send(3.0);
