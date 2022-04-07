console.log('hii')
// create server 
const express=require('express');
const server=express();

 const middleware1=(req,res,next)=>{
     console.log('midleware1')
     next() //use to block the flow and take it back to requested route
 }

 const middleware2=(req,res,next)=>{
    console.log('midleware2')
    next() //use to block the flow and take it back to requested route
}
server.use(middleware1)  //for all



server.get('/',(request,response)=>{
    response.send('<h1>Hello</h1>')

    //for object
    // response.send({
    //     name:'Meghana',
    //     city:'Amravati'
    // })
})


server.get('/user',middleware2,(request,response)=>{
    response.send('<h1>Hello world</h1>')
})

server.listen(3001, ()=>{
    console.log('server is running......')
})

//http method
//CURD:CREATE READ UPDATE DELETE
// get--()
// post--(reseve and save)
// put--(update)
// delete --(deleted)



//middlewares :-is a function 
// takes three parameters req,res,next.

// why middleware
//which wiil execute first befor any route get executed
//hoc in react  is component which wrap arount copmp
// hoc is execute first before maincomp 
// u can create multiple variables
