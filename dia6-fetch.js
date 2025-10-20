async function getPosts() {
    //const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=5";
 const apiUrl = "https://jsonplaceholder.typicode.com/posts-fail?_limit=5"; // fails
    try {

        const response = await fetch(apiUrl)
        //console.log(response)
        if (!response.ok) {
            // Este es el punto donde capturas el 404
            throw new Error(`HTTP Error Status: ${response.status} - Could not find resource.`);
        }

        const posts = await response.json();
        console.log(`Successfully fetched posts: status: ${response.status}`);

        return posts

    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
        throw error;
    }
}


getPosts()
    .then(data => {
        console.log("SUCCESS! Data received and ready to use:", data);
    })
    .catch(error => {
        console.error("The whole process failed:", error);
    });


