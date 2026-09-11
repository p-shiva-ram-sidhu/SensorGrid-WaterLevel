const sensorForm = document.getElementById("sensorForm");

const sensorId = document.getElementById("sensorId");
const sensorType = document.getElementById("sensorType");
const locationInput = document.getElementById("location");
const threshold = document.getElementById("threshold");

const sensorContainer = document.getElementById("sensorContainer");
const message = document.getElementById("message");


sensorForm.addEventListener("submit", function(event) {

    // Stop page refresh
    event.preventDefault();

    // Get values
    const id = sensorId.value.trim();
    const type = sensorType.value;
    const location = locationInput.value.trim();
    const limit = threshold.value;

    // Validation
    if (id === "") {
        message.textContent = "Please enter Sensor ID.";
        message.style.color = "red";
        return;
    }

    if (type === "") {
        message.textContent = "Please select Sensor Type.";
        message.style.color = "red";
        return;
    }

    if (location === "") {
        message.textContent = "Please enter Location.";
        message.style.color = "red";
        return;
    }

    if (limit === "" || Number(limit) <= 0) {
        message.textContent = "Please enter a valid Threshold.";
        message.style.color = "red";
        return;
    }

    // Create new sensor card
    const card = document.createElement("div");

    card.className = "sensor-card";

    card.innerHTML = `
        <h3>${id}</h3>

        <p><strong>Type:</strong> ${type}</p>

        <p><strong>Location:</strong> ${location}</p>

        <p><strong>Threshold:</strong> ${limit}</p>

        <span class="status">Normal</span>
    `;

    // Add card to dashboard
    sensorContainer.appendChild(card);

    // Success message
    message.textContent = "Sensor added successfully!";
    message.style.color = "green";

    // Clear form
    sensorForm.reset();

});