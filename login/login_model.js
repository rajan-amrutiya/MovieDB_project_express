const client = require("../connectionPG");

function userExistance(userName){
    let query = `select user_name, user_password, role from users where user_name = $1`;
    return client.query(query, [userName]);
}

module.exports = {userExistance};