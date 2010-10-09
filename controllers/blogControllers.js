const blogs=require("../model/blog.modal")

const addBlogs=async(req,res)=>{
    try{
        const {username,blog}=req.body;

        const createBlog=await blogs.create({username,blog}) 

        if(!createBlog){
            res.status(404).json({message:"Blogs not added"})
        }
        
        res.status(200).json({createBlog,message:"Blogs added"})

    }catch(err){
        console.log(err)
    }
}

const getBlogs=async(req,res)=>{
    try{
        const getBlogs=await blogs.find({})

        if(!getBlogs){
            res.status(404).json({message:"Blogs not found"})
        }
        res.status(200).json({getBlogs,message:"Blogs",success:true})

    }catch(err){
        console.log(err)
    }
}

const getSingleBlog=async(req,res)=>{
    try{
        const blogId=req.params.blogId

        const singleBlog=await blogs.find({_id:blogId})

        if(!singleBlog){
            res.status(404).json({message:"Blog not found"})
        }

        res.status(200).json({singleBlog,message:"Single Blog",success:true})

    }catch(err){
        console.log(err)
    }
}

const deleteBlogs=async(req,res)=>{
    try{
        const blogId=req.params.blogId

        const deleteBlog=await blogs.findOneAndDelete({_id:blogId})

        if(!deleteBlog){
            res.status(404).json({message:"Blog not deleted"})
        }

        res.status(200).json({deleteBlog,message:"Blog deleted"})

    }catch(err){
        console.log(err)
    }
}

const updateBlog=async(req,res)=>{
    try{
        const blogId=req.params.blogId
        const {username,blog}=req.body

        const updateBlog= await blogs.findByIdAndUpdate(blogId,{
            new:true,
        },{
            username,
            blog
        })

        if(!blogId){
            res.status(404).json({message:"Blog not updated"})
        }

        res.status(200).json({updateBlog,message:"Blogs Updated"})

    }catch(err){
        console.log(err)
    }
}





module.exports={
    addBlogs,
    deleteBlogs,
    updateBlog,
    getBlogs,
    getSingleBlog
}



