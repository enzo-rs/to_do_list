const db = require("../db");

class Liste {
    constructor(props) {
        const {name} = props;

        this.name = name;
    }

    
    static getAll(callback) {
        db.query("SELECT * FROM todolist", (error, result) => {
            if (error) {
                console.log("error: ", error);
                callback(error, null);
                return;
            }

            callback(null, result);
        })
    }

    static getOne(id, callback) {
        db.query(`SELECT id , name, description, date FROM tasks JOIN todolist ON todolist = id WHERE id = ${id};`, (error, result) => {
            if (error) {
                console.log("error: ", error);
                callback(error, null);
                return;
            }

            callback(null, result);
        })
    }

    
    static create (liste, callback) {
        db.query(`INSERT INTO todolist(name) VALUES ("${liste.name}")`, (error, result) => {
            if (error) {
                console.log("error: ", error);
                callback(error, null);
                return;
            }

            callback(null, result);
        })
    }
}

module.exports = Liste;