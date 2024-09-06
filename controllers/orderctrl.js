//@desc Get all posts
//@route GET /api/orders

export const orders = [
    {id:1,productid: 1001,prodname:'cell phone', Quantity: 1},
    {id:2,productid: 1002,prodname:'pencil', Quantity: 10},
    {id:3,productid: 91001,prodname:'Dining Table', Quantity: 1},
];


export const getposts = (req,res)=>{
    //res.send("Welcome Home")
    res.json(orders);
}
//@desc Get post
//@route GET /api/orders/id
export const getpost = (req,res,next) =>{

    console.log(req.params.id)
    const id = parseInt(req.params.id)
    const post = orders.find((post)=> post.id=== id)
    if(!post)
    {
        // return res
        // .status(404)
        // .json({msg: `A post with the id of ${id} is not found`})
        const error = new Error(`A post with the id of ${id} is not found`)
        error.status = 404
        return next(error);
    }
        res.status(200).json(post);
    

}
//@desc create post
//@route POST /api/orders
export const createpost = (req,res,next)=>{
    //const { productid, prodname, Quantity } = req.body;
    console.log(req.body)
   // res.status(201).json(orders);

    const newpost = {
        id: orders.length +1,
        productid: req.body.productid,
        prodname: req.body.prodname,
        Quantity:req.body.Quantity
    };

    // Add the new order to the orders array
    if(!newpost.productid ||!newpost.prodname || !newpost.Quantity)
    {
       // return res.status(400).json({ msg: 'Plsadd the details of productid,prodname,Quantity'});
       const error = new Error(`Plsadd the details of productid,prodname,Quantity`)
        error.status = 400
        return next(error);
    }
    orders.push(newpost);
    res.status(201).json( orders);

}

//@desc update post
//@route PUT /api/orders/1
export const updatepost = (req,res) =>
    {
    const id = parseInt(req.params.id)
    const post = orders.find((post) =>  post.id === id);
    if(!post)
        {
            // return res
            // .status(404)
            // .json({msg: `A post with the id of ${id} is not found`})
            const error = new Error(`A post with the id of ${id} is not found`)
            error.status = 404
            return next(error);
        }
        post.productid = req.body.productid;
        post.prodname = req.body.prodname;
        post.Quantity = req.body.Quantity;
        res.status(200).json(orders)
    }

//@desc Delete Post
//@route Delete  /api/orders/1
export const deletepost = (req,res) =>
    {
    const id = parseInt(req.params.id)
    const post = orders.find((post) =>  post.id === id);
    if(!post)
        {
            // return res
            // .status(404)
            // .json({msg: `A post with the id of ${id} is not found`})
            const error = new Error(`A post with the id of ${id} is not found`)
            error.status = 404
           return next(error);
        }
       orders = orders.filter((post) => post.id !== id)
       res.status(200).json(orders)
    }


// export default orders;
