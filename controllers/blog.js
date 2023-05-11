import express from "express";
import { Blog } from "../models/blog.js";
import ErrorHandler from "../middlewares/error.js";

export const newPost = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const blog = await Blog.create({
      title,
      description,
    });
    console.log(blog);
    res.status(201).json({
      success: true,
      message: "blog added successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    console.log(blogs);
    res.status(200).json({
      success: true,
      blogs: blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePost =async (req, res, next) =>{
  try {
    const { title, description } = req.body;
    const blog = await Blog.findByIdAndUpdate(req.params.id, {
      title,
      description,
    });
    console.log(blog);
    res.status(200).json({
      success: true,
      message: "blog updated successfully",
    });
  } catch (error) {
    next(error);
  }
}

export const deletePost = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    console.log(blog);
    res.status(200).json({
      success: true,
      message: "blog deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}