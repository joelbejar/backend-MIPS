const moment = require('moment');
const pool = require('../../config/database')
const DashboardServices = {};

DashboardServices.getStates = async (param) =>{
    const currentDate = moment(new Date()).format('YYYY-MM-DD');
    console.log("currentDate : ",currentDate)
    let query =  await pool.request()
    .query(`select sum(MIPS)/30 from dbo.Procesador where DATE = '2020-07-01'`)    
   pool.close();
   return query ;
   
}

module.exports = DashboardServices
