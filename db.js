const mysql =require('mysql')
function connect()
{
    const connection=mysql.createConnection({
      host:'localhost',
      user:'dac',
      password:'dac',
      database:'practice',
      port:3306  
    })
    connection.connect()
    return connection
}
module.exports={
    connect:connect
}