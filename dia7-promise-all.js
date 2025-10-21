 const post = await fetch(url1)
const comments = await fetch(url2)

const [postModern, commentsModern] = await Promise.all([fetch(url1), fetch(url2)])
 

const fetchUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json()
}

const [user1,user2,user3] = await Promise.all([
        fetchUser(1),fetchUser(2),fetchUser(3),
])

console.log(user1)
console.log(user2)
console.log(user3)



 const users = await Promise.all([
  fetchUser(1), 
  fetchUser(2), 
  fetchUser(3)
]);

users.forEach(user => console.log(user));




 const userIds = [1, 2, 3];
const usersMap = await Promise.all(
  userIds.map(id => fetchUser(id))
); 