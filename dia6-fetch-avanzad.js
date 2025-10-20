async function getPostAndComments(postId) {

    const postURL = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

    try {
        const response = await fetch(postURL)

        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status} - Could not find the post.`);

        }
        const post = await response.json();
         
        // For comments 
        const responseComments = await fetch(commentsURL)

        if (!responseComments.ok) {
            throw new Error(`HTTP Error Status: ${responseComments.status} - Could not find the comments.`);

        }
        const comments= await responseComments.json()
         return ({post,comments})
        

    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
        throw error;

    }
}

// Función para envolver la lógica de prueba (usando la función que sea)
async function runTest(fetchFunction, postId) {
    try {
        console.log(`\n--- Starting Test for Post ${postId} ---`);
        const data = await fetchFunction(postId); // Llama a la función y espera el resultado

        // Esto solo se ejecuta si la promesa se resolvió (éxito)
        console.log("Success! Combined Data Received:");
        console.log(`Post Title: ${data.post.title}`);
        console.log(`Total Comments: ${data.comments.length}`);
    } catch (error) {
        // El error ya fue impreso en la función fetchFunction, 
        // pero este catch garantiza que el proceso no se detenga.
    }
}


await runTest(getPostAndComments,2)
await runTest(getPostAndComments,2)
await runTest(getPostAndComments,9999)
