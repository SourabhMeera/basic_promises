const posts = [];
let lastUserActivityTime = null;

// Function to simulate updating the user's last activity time
function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastUserActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

// Do not touch these functions below
function createPost(postTitle) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push({ title: postTitle });
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

// Call the functions in the desired sequence
createPost('Post 1')
    .then(() => updateLastUserActivityTime())
    .then(() => createPost('Post 2'))
    .then(() => updateLastUserActivityTime())
    .then(() => createPost('Post 3'))
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log("All posts:", posts);
        console.log("Last user activity time:", lastUserActivityTime);

        return deleteLastPost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    })
    .catch((error) => {
        console.log(error);
    });
