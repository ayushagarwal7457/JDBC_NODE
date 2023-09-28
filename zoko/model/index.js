const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Ayush',
    database: 'user',
});

client.connect();

// client.query(`INSERT INTO login_details (ID,password) VALUES ('Wat','Wat123')`, (err, res) =>{
//     if (!err){
//         console.log(res);
//     } else {
//         console.log("Error", err)
//     }
// })

// client.query(`UPDATE COMPANY SET ADDRESS = 'Shikohabad' WHERE ID =2`, (err, res) =>{
//     if (!err){
//         console.log(res.rows);
//     } else {
//         console.log("E", err)
//     }
// });

// client.query(`Delete from COMPANY where id = 1`, (err, res) => {
//     if(!err) {
//         console.log("Sucessfully Deleted");
//     } else {
//         console.log("Error", err)
//     }
// })

// client.query('Select * from company', (err, res) =>{
//     if (!err){
//         console.log(res.rows);
//     } else {
//         console.log("Error", err)
//     }
// });

// const viewData = async () => {
//     try {
//         const data = await client.query('Select * from company');
//         console.log(data.rows);
//     } catch (err) {
//         console.log('Error in viewing data', err);
//     }
// }

const getIdPassword = async (id) => {
    try {
        const query = `Select * from login_details where id = '${id}'`;
        const data = await client.query(query);
        if (data.rows.length) {
            return { databaseId: data.rows[0].id, databasePassword: data.rows[0].password }
        }
        return { databaseId: null, databasePassword: null }
    } catch (err) {
        console.log('Error in fetching Id and Password', err);
    }
}

const getDashBoardDetails = async (employeeId) => {
    try {
        const query = `Select * from "Leave_Type" where "E_id" = '${employeeId}'`;
        console.log(query);
        const data = await client.query(query);
        console.log(data.rows);
        // if (data.rows.length) {
        //     return { databaseId: data.rows[0].id, databasePassword: data.rows[0].password }
        // }
        // return { databaseId: null, databasePassword: null }
    } catch (err) {
        console.log('Error in fetching Id and Password', err);
    }
}
const postSubmitForm = async (employeeId) => {
    try {
        const query = `Select * from "Leave_Type" where "E_id" = '${employeeId}'`;
        console.log(query);
        const data = await client.query(query);
        console.log(data.rows);
        // if (data.rows.length) {
        //     return { databaseId: data.rows[0].id, databasePassword: data.rows[0].password }
        // }
        // return { databaseId: null, databasePassword: null }
    } catch (err) {
        console.log('Error in fetching Id and Password', err);
    }
}

    
    const getleaveDetails = async (employeeId) => {
    try {
        const query = `Select * from "Leave_Table" where "M_id" = '${employeeId}'`;
        console.log(query);
        const data = await client.query(query);
        console.log(data.rows);
        // if (data.rows.length) {
        //     return { databaseId: data.rows[0].id, databasePassword: data.rows[0].password }
        // }
        // return { databaseId: null, databasePassword: null }
    } catch (err) {
        console.log('Error in fetching Id and Password', err);
    }
}

module.exports = {
    getIdPassword,
    getDashBoardDetails,
    postSubmitForm,
    getleaveDetails,
}


// viewData();
// insertData({insertField: ['id','name','loginid','password'],insertValue: ['8','ase','ase8','ase123' ], id: 1});
// viewData();
