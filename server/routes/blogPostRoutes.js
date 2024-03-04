import express from "express";
const router = express.Router();
import { getPosts,getOnePost,createPost,updatePost,deletePost } from "../controllers/blogPostController.js";

router.get('/',getPosts);
router.get('/:id',getOnePost);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);

export default router;