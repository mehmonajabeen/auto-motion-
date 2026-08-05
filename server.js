require("dotenv").config();

const express = require("express");
const multer = require("multer");
const RunwayML = require("@runwayml/sdk");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.static("public"));

const client = new RunwayML({
    apiKey: process.env.RUNWAYML_API_SECRET
});

app.post("/generate-video", upload.single("image"), async (req, res) => {

    try {

        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                error: "Prompt is required."
            });
        }

        const task = await client.textToVideo.create({
            model: "gen4.5",
            promptText: prompt
        });

        res.json({
            success: true,
            taskId: task.id,
            message: "Video generation started."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});