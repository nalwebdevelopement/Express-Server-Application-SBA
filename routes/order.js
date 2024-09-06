import express from 'express'
import {
     createpost, getposts,getpost,updatepost,deletepost
     } from '../controllers/orderctrl.js'
const router = express.Router();


router.get('/',getposts)
router.get('/:id',getpost)
router.post('/',createpost)
router.put('/:id',updatepost)
router.delete('/:id',deletepost)

export default router;

// router.get('/',(req,res)=>{
//     //res.send("Welcome Home")
//     res.json(orders);
// })
// // // router.get('/home',(req,res)=>{
// // //     res.render('homepage')
// // // })
// // router.get('/api/orders',(req,res)=>
// //     {
// //         res.json(orders);
// //     });
// router.get('/:id', (req,res,next) =>{

//     console.log(req.params.id)
//     const id = parseInt(req.params.id)
//     const post = orders.find((post)=> post.id=== id)
//     if(!post)
//     {
//         // return res
//         // .status(404)
//         // .json({msg: `A post with the id of ${id} is not found`})
//         const error = new Error(`A post with the id of ${id} is not found`)
//         error.status = 404
//         return next(error);
//     }
//         res.status(200).json(post);
    

// });

// router.post('/',(req,res,next)=>{
//     //const { productid, prodname, Quantity } = req.body;
//     console.log(req.body)
//    // res.status(201).json(orders);

//     const newpost = {
//         id: orders.length +1,
//         productid: req.body.productid,
//         prodname: req.body.prodname,
//         Quantity:req.body.Quantity
//     };

//     // Add the new order to the orders array
//     if(!newpost.productid ||!newpost.prodname || !newpost.Quantity)
//     {
//        // return res.status(400).json({ msg: 'Plsadd the details of productid,prodname,Quantity'});
//        const error = new Error(`Plsadd the details of productid,prodname,Quantity`)
//         error.status = 400
//         return next(error);
//     }
//     orders.push(newpost);
//     res.status(201).json( orders);

// });

// router.put('/:id',(req,res) =>
// {
// const id = parseInt(req.params.id)
// const post = orders.find((post) =>  post.id === id);
// if(!post)
//     {
//         // return res
//         // .status(404)
//         // .json({msg: `A post with the id of ${id} is not found`})
//         const error = new Error(`A post with the id of ${id} is not found`)
//         error.status = 404
//         return next(error);
//     }
//     post.productid = req.body.productid;
//     post.prodname = req.body.prodname;
//     post.Quantity = req.body.Quantity;
//     res.status(200).json(orders)
// });

// //delete post

// router.delete('/:id',(req,res) =>
//     {
//     const id = parseInt(req.params.id)
//     const post = orders.find((post) =>  post.id === id);
//     if(!post)
//         {
//             // return res
//             // .status(404)
//             // .json({msg: `A post with the id of ${id} is not found`})
//             const error = new Error(`A post with the id of ${id} is not found`)
//             error.status = 404
//            return next(error);
//         }
//        orders = orders.filter((post) => post.id !== id)
//        res.status(200).json(orders)
//     });
    



