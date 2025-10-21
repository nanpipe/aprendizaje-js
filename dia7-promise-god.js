const fetchPost = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.json();
};


const fetchUser = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}`);
    return response.json();
}

const fetchComments = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`);
    return response.json();
}

let post, comments, user

const fetchPostWithDetails = async (postId) => {
    // YOUR TASK:
    // 1. Fetch post, comments, and user (3 API calls) simultaneously
    try {
        [post, comments, user] = await Promise.allSettled([
            fetchPost(postId), fetchComments(postId), fetchUser(postId)
        ])

        if (post.status === 'fulfilled' && comments.status === 'fulfilled' && user.status === 'fulfilled') {
            return { post: post.value, comments: comments.value, user: user.value }
        }

        return null
    } catch (error) {
        return null
    }

}

// 2. If ANY of them fail, return null instead of crashing
// 3. Return combined object: { post, comments, user }



const postIds = [1, 2, 9999];

const allResults = await Promise.allSettled(postIds.map((id) => fetchPostWithDetails(id)))

// Filter out nulls and extract values
const successfulPosts = allResults
    .filter(result => result.status === 'fulfilled' && result.value !== null)
    .map(result => result.value);

console.log("Successful posts:", successfulPosts);
console.log(`Fetched ${successfulPosts.length} out of ${postIds.length} posts`);