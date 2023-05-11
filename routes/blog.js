import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { newPost,getPost,updatePost,deletePost } from "../controllers/blog.js";

const router=express.Router();

router.post("/new",isAuthenticated, newPost);

router.get("/all",getPost);

router.put("/:id",isAuthenticated, updatePost);

router.delete("/:id",isAuthenticated, deletePost);

export default router;