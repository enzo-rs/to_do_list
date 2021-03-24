// const list_item = document.querySelectorAll("li.list-item");

// const mysql = require("mysql2");

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "todolist"
// });

// list_item.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         let list_id = item.getAttribute('data-key');


//         db.query(`SELECT id as list, description, date FROM tasks JOIN todolist ON todolist = id WHERE id = ${list_id}`, (error, result) => {
//             if (error) {
//                 console.log("error: ", error);
//                 callback(error, null);
//                 return;
//             }

//             console.log(result);
//         })
//     })
// })