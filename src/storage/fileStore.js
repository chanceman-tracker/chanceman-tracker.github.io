const DB_NAME = "chanceman";
const STORE_NAME = "files";

let memory = {
    rolled: null,
    unlocked: null,
};

// ---- IndexedDB helpers ----
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = function () {
            request.result.createObjectStore(STORE_NAME);
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function saveToDB(key, data) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(data, key);
    return tx.complete;
}

async function loadFromDB(key) {
    const db = await openDB();
    return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, "readonly");
        const req = tx.objectStore(STORE_NAME).get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
    });
}

// ---- Public API ----
export const fileStore = {
    rolled: null,
    unlocked: null,
    items: null,

    async ensureItemsLoaded() {
        if (!this.items) {
            this.items = await fetch("/data/items.json").then(r => r.json());
        }
    },

    async init() {
        memory.rolled = await loadFromDB("rolled");
        memory.unlocked = await loadFromDB("unlocked");
    },

    async setRolled(json) {
        memory.rolled = json;
        await saveToDB("rolled", json);
    },

    async setUnlocked(json) {
        memory.unlocked = json;
        await saveToDB("unlocked", json);
    },

    get rolled() {
        return memory.rolled;
    },

    get unlocked() {
        return memory.unlocked;
    },
};
