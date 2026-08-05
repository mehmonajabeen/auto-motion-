// Elements
const promptInput = document.getElementById("prompt");
const styleSelect = document.getElementById("style");
const imageInput = document.getElementById("image");
const statusText = document.getElementById("status");
const videoPlayer = document.getElementById("videoPlayer");

// Image Preview Status
imageInput.addEventListener("change", () => {

    if (imageInput.files.length > 0) {
        statusText.innerHTML = "📷 Image Selected: " + imageInput.files[0].name;
    }

});

// Generate Video
async function generate() {

    const prompt = promptInput.value.trim();

    if (!prompt) {
        alert("Please enter a prompt.");
        return;
    }

    statusText.innerHTML = "⏳ Generating video... Please wait.";

    const formData = new FormData();

    formData.append("prompt", prompt);
    formData.append("style", styleSelect.value);

    if (imageInput.files.length > 0) {
        formData.append("image", imageInput.files[0]);
    }

    try {

        const response = await fetch("/generate-video", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {

            statusText.innerHTML =
                "✅ Request sent successfully! Task ID: " + data.taskId;

            // Future: Poll Runway API until finished
            console.log(data);

        } else {

            statusText.innerHTML = "❌ " + data.error;

        }

    } catch (err) {

        console.error(err);
        statusText.innerHTML = "❌ Failed to connect to server.";

    }

}

// Logout
function logout() {

    if (confirm("Do you want to logout?")) {
        window.location.href = "login.html";
    }

}