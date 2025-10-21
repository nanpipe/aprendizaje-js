const fetchPost = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.json();
};

const fetchUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
};

let post, user

try {
    [post, user] = await Promise.all([
        fetchPost(1), fetchUser(1)

    ])


 

} catch (error) {
    console.log(error.message)
}

console.log(`Successfully pull?`);
const data = {
    post: post,
    user: user
}

   console.log(data)
