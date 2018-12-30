const express = require('express')

const app = express()

const mysql = require('mysql')

const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'user'
    })
    // 查
    // const sqlStr1 = 'select * from user_info'
    // conn.query(sqlStr1, (err, result) => {
    //     if (err) return console.log('获取数据失败:'+ err.message)
    //     console.log(result)
    // })

// 增
// const user = { name: 'peiddd', gender: '男'}
// const sqlStr2 = 'insert into user_info set ?'
// conn.query(sqlStr2, user, (err, result) => {
//     if (err) return console.log('插入数据失败:'+ err.message)
//     console.log(result)
// })

// 改
// const user = { id: 6, name: 'ngddd', gender: '男'}
// const sqlStr3 = 'update user_info set ? where id = ?'
// conn.query(sqlStr3, [user, user.id], (err, result) => {
//     if (err) return console.log('修改数据失败:'+ err.message)
//     console.log(result)
// })

// 删
const sqlStr4 = 'delete from user_info where id = ?'
conn.query(sqlStr4, 16, (err, result) => {
    if (err) return console.log('删除数据失败:' + err.message)
    console.log(result)
})

app.listen(3000, () => {
    console.log('跳转: http://127.0.0.1:3000')
})