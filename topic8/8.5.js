class User {
    #password;
    constructor (username, password){
        this.username = username;
        this.#password = password;
    }

    #updatePassword (newPassword){
        this.#password = newPassword;
    }

    resetPassword (newPassword){
        this.#updatePassword(newPassword);
        console.log('Пароль обновлен');
    }
}

class Admin extends User{
    constructor(username, password){
        super(username, password);
        this.isAdmin = true;
    }

    deleteUser(userToDelete){
        return `Пользователь ${userToDelete} был удален.`
    }
}

const testUser = new User("user1", "12345");
const testAdmin = new Admin("admin1", "admin1");

const result = [testUser, testAdmin];

console.log(result);
