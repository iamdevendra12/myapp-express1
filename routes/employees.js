const express=require("express")
const router=express.Router();
const db=require("../db")
const utils=require('../utils')
router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from employee`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })

})
router.post('/',(request,response)=>{
    const {name,address,email}=request.body
    const connection=db.connect()
    const statement=`insert into employee(name,email,address) values('${name}','${email}','${address}')`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })

})
router.put('/:id',(request,response)=>{
    const id=request.params.id
    const {name,address,email}=request.body
    const connection=db.connect()
    const statement=`update employee set name='${name}',email='${email}',address='${address}'where id=${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })

})
router.delete('/:id',(request,response)=>{
    const id=request.params.id
   
    const connection=db.connect()
    const statement=`delete from employee where id=${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result=utils.createResult(error,data)
        response.send(result)
    })

})
module.exports=router