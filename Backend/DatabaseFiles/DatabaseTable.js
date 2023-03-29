// connection.query(`CREATE TABLE students (sid INT AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), verified BOOLEAN, username VARCHAR(255), PRIMARY KEY(sid))`, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Students Table created successfully!");
//     }
// });
// connection.query(`CREATE TABLE items (itemID INT AUTO_INCREMENT, sid INT, name VARCHAR(255), description VARCHAR(255), image VARCHAR(255), category VARCHAR(255), price VARCHAR(255), PRIMARY KEY(itemID), FOREIGN KEY(sid) REFERENCES Students(sid))`, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Items Table created successfully!");
//     }
// });

// connection.query(`CREATE TABLE images (itemID INT, image BLOB, FOREIGN KEY(itemID) REFERENCES Items(itemID))`, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Items Table created successfully!");
//     }
// });
// connection.query(`CREATE TABLE email (senderID INT, recieverID INT, message VARCHAR(255), FOREIGN KEY(senderID) REFERENCES Students(sid))`, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Items Table created successfully!");
//     }
// });

