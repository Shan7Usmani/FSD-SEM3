// ================================
// API URL
// ================================

const baseURL = "https://jsonplaceholder.typicode.com/posts";


// ================================
// 1. GET — Fetch one post
// ================================

async function getPost() {

    const response = await fetch(`${baseURL}/1`);

    console.log("\n===== GET =====");
    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);
}


// ================================
// 2. POST — Create a new post
// ================================

async function createPost() {

    const response = await fetch(baseURL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: "My First API Post",
            body: "Learning POST requests",
            userId: 1
        })
    });

    console.log("\n===== POST =====");
    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);
}


// ================================
// 3. PUT — Update a post
// ================================

async function updatePost() {

    const response = await fetch(`${baseURL}/1`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "Updated body",
            userId: 1
        })
    });

    console.log("\n===== PUT =====");
    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);
}


// ================================
// 4. DELETE — Delete a post
// ================================

async function deletePost() {

    const response = await fetch(`${baseURL}/1`, {

        method: "DELETE"
    });

    console.log("\n===== DELETE =====");
    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);
}


// ================================
// RUN ALL
// ================================

async function main() {

    await getPost();

    await createPost();

    await updatePost();

    await deletePost();
}

main();