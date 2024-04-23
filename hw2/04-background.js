document.addEventListener("DOMContentLoaded", function () {
    let intervalId;
    let isRunning = false;
    let intervalSeconds = 3;
    const fixedColors = ['red', 'green', 'blue', 'yellow', 'purple', 'cyan'];
    let currentColorIndex = 0;

    function setBackgroundColor(color) {
        console.log(`Setting background color to ${color}`);
        document.body.style.backgroundColor = color;
    }

    function startBackgroundColorChange() {
        console.log("Starting background color change...");
        isRunning = true;
        intervalId = setInterval(() => {
            const color = fixedColors[currentColorIndex];
            setBackgroundColor(color);
            console.log(`Background color changed to ${color}`);
            currentColorIndex = (currentColorIndex + 1) % fixedColors.length; 
        }, intervalSeconds * 1000);
        document.getElementById("toggleButton").textContent = "Stop";
        document.getElementById("toggleButton").classList.remove("btn-primary");
        document.getElementById("toggleButton").classList.add("btn-danger");
    }

    function stopBackgroundColorChange() {
        console.log("Stopping background color change...");
        isRunning = false;
        clearInterval(intervalId);
        document.getElementById("toggleButton").textContent = "Start";
        document.getElementById("toggleButton").classList.remove("btn-danger");
        document.getElementById("toggleButton").classList.add("btn-primary");
    }

    document.getElementById("toggleButton").addEventListener("click", function () {
        console.log("Toggle button clicked");
        if (isRunning) {
            stopBackgroundColorChange();
        } else {
            startBackgroundColorChange();
        }
    });

    document.getElementById("intervalInput").addEventListener("change", function (event) {
        intervalSeconds = event.target.value;
        console.log(`Interval changed to ${intervalSeconds} seconds`);
        if (isRunning) {
            stopBackgroundColorChange();
            startBackgroundColorChange();
        }
    });

    startBackgroundColorChange();
});
