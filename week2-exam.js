// Create a user management object

const userManager = {
    users: [],

    addUser: function (name, email, role) {
        const newUser = {
            id: this.users.length,
            name: name,
            email: email,
            role: role,
            active: true
        }
        this.users.push(newUser)
        console.log(`the user ${newUser.name} has been created`)
    },

    deactivateUser: function (userId) {
       this.users[userId].active = false
    },

    getUsersByRole: function (role) {
        return this.users.filter((user) => user.role === role)
    },

    getTotalActiveUsers: function () {
        return this.users.reduce((total, acc) => {
            if (acc.active) {
                return total = total + 1
            }
            return total = total
        }, 0)
    }
};

// Test
userManager.addUser("Pipe", "pipe@example.com", "admin");
userManager.addUser("Maria", "maria@example.com", "user");
userManager.addUser("Carlos", "carlos@example.com", "admin");

//console.log(userManager.users)
console.log(userManager.getUsersByRole("admin")); //OK
console.log(userManager.getTotalActiveUsers());
userManager.deactivateUser(1);
console.log(userManager.getTotalActiveUsers());