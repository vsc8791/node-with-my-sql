const dbConnect = require("../../config/dbConnection");

module.exports = {
    create: (data, callBack) => {
        dbConnect.query(
            `insert into registration(firstName, lastName, gender , email, password, number) values (?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ], (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};