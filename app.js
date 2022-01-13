const express=require('express')
const bodyParser = require ('body-parser')
const fetch = require('node-fetch')


const app=express()
const port= process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json())






//get all types of crypto coins in

app.get('/list',async(req,res)=>{
  const api_url=`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`;
  const fetch_response = await fetch(api_url);
  const json =  await fetch_response.json();
  res.json(json);


})


//get data of crypto depending on currency
app.get('/currency/:currency',async(req,res)=>{
    const currency=req.params.currency
    const api_url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const fetch_response = await fetch(api_url);
    const json =  await fetch_response.json();
    res.json(json);
  
  
  })


  //get data of each crypto currency
  
  app.get('/crypto/:id',async(req,res)=>{
    const id=req.params.id
    const api_url=`https://api.coingecko.com/api/v3/coins/${id}`;
    const fetch_response = await fetch(api_url);
    const json =  await fetch_response.json();
    res.json(json);
  
  
  })

  
  //get data of days 
  
  app.get('/chart/:crypto/:currency/:days',async(req,res)=>{
    const crypto=req.params.crypto
    const currency = req.params.currency
    const days= req.params.days
    const api_url=`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${days}&per_page=100`;
    const fetch_response = await fetch(api_url);
    const json =  await fetch_response.json();
    res.json(json);
    

  
  
  })


  
  




// //search by id 

// app.get('/:id',(req,res)=>{

//     pool.getConnection((err,connection)=>{
//             if(err) throw err
//             console.log(`connection as id  ${connection.threadId}`)
 
//             connection.query('SELECT * from user WHERE id=?',[req.params.id],(err,rows)=>{
//                connection.release() //return the connection to pool
               
//                if(!err){
//                    res.send(rows)
//                }else{
//                    console.log(err)
//                }
//             })
//     })
//  })


 
// //Delete a individual id 

// app.delete('/:id',(req,res)=>{

//     pool.getConnection((err,connection)=>{
//             if(err) throw err
//             console.log(`connection as id  ${connection.threadId}`)
 
//             connection.query('DELETE from user WHERE id=?',[req.params.id],(err,rows)=>{
//                connection.release() //return the connection to pool
               
//                if(!err){
//                    res.send(`ID: ${req.params.id} id deleted!`)
//                }else{
//                    console.log(err)
//                }
//             })
//     })
//  })

//  //add a user 
//  app.post('/',(req,res)=>{
//      pool.getConnection((err,connection)=>{
//         if(err) throw err
//         console.log(`connection as id  ${connection.threadId}`)

//         const params=req.body

//         connection.query('INSERT INTO user SET ?',params,(err,rows)=>{
//             connection.release()
            
//             if(!err){
//                 res.send(`${params.name} is added!`)
//             }else{
//                 console.log(err)
//             }
//         })

//         console.log(req.body)
//      })
//  })





//app listening port 
app.listen(port,()=>{
    console.log(`listen to port ${port}`)
})


