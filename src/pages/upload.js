import { fileStore } from "../storage/fileStore.js";

export default function UploadPage() {
    return `
        <h1>Chanceman Tracker Setup</h1>

        <p><strong>Upload your chanceman_rolled.json and chanceman_unlocked.json files.</strong></p>

        <p>Location:<br>
        C:\\Users\\[user]\\.runelite\\chanceman\\[osrs-account]\\chanceman_rolled.json<br>
        C:\\Users\\[user]\\.runelite\\chanceman\\[osrs-account]\\chanceman_unlocked.json
        </p>

        <label>
            Rolled:<br>
            <input type="file" id="rolledInput" accept=".json">
        </label>
        <br><br>

        <label>
            Unlocked:<br>
            <input type="file" id="unlockedInput" accept=".json">
        </label>

        <br><br>
        <button id="saveBtn">Save & Continue</button>

        <p id="status"></p>
    `;
}

document.addEventListener("click", async (e) => {
    if (e.target.id !== "saveBtn") return;

    const app = document.getElementById("app");

    const rolledInput = app.querySelector("#rolledInput");
    const unlockedInput = app.querySelector("#unlockedInput");
    const status = app.querySelector("#status");

    try {
        if (rolledInput.files[0]) {
            const json = JSON.parse(await rolledInput.files[0].text());
            await fileStore.setRolled(json);
        }

        if (unlockedInput.files[0]) {
            const json = JSON.parse(await unlockedInput.files[0].text());
            await fileStore.setUnlocked(json);
        }

        status.textContent = "Files saved! Redirecting...";

        // Redirect to items page
        window.location.hash = "/items";
        window.dispatchEvent(new PopStateEvent("popstate"));

    } catch (err) {
        console.error(err);
        status.textContent = "Error reading files!";
    }
});
