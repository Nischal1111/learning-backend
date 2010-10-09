
const express=require("express")
const { addBlogs, deleteBlogs, updateBlog, getBlogs, getSingleBlog } = require("../controllers/blogControllers")
const router=express.Router()


router.post("/add-blogs",addBlogs)
router.delete("/delete-blogs/:blogId",deleteBlogs)
router.patch("/update-blogs/:blogId",updateBlog)
router.get("/blogs",getBlogs)
router.get("/single-blog/:blogId",getSingleBlog)

module.exports=router