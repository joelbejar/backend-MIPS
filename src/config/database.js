const sql = require('mssql')

const { database } = require('../keys')


let pool = sql.connect(database,(err)=>{
    if(err) console.log(err)

    /*let sqlRequest = new sql.Request();

    let sqlQuery = "select * from dbo.RMF70_PR_CPU_2020_7";
    
    sqlRequest.query(sqlQuery, (err,data)=>{
        if(err) console.log(err)
        console.log(data)
        sql.close();
    })
*/
    console.log("Connect SQL SERVER")
   
}) 

    

module.exports = pool