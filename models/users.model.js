const {v4: uuidv4} = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "Sheikh Hasina",
        email: "sheikhhasina@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Khaleda Jia",
        email: "khaledajia@gmail.com"
    }
];

module.exports = users;