import mongoose from "mongoose";
import EventAdd from "../models/AdminEventAdd.js";
import AdminCategory from "../models/AdminCategoryAdd.js";

export const adminLogin = (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email === "navas@gmail.com" && password === "12345")
      return res.status(200).json({ message: "Login Success full" });
  } catch (error) {
    next(error);
  }
};

export const adminEventAdd = async (req, res, next) => {
  try {
    const {
      eventName,
      eventPlace,
      eventDate,
      eventTime,
      eventDescription,
      eventVenue,
      eventCategory,
      eventSubCategory,
    } = req.body;
    if (
      !eventName ||
      !eventDate ||
      !eventTime ||
      !eventPlace ||
      !eventVenue ||
      !eventDescription ||
      !eventCategory ||
      !eventSubCategory
    )
      return res.status(400).json({ massage: "input not found" });
    const newEvent = new EventAdd({
      eventName,
      eventDate,
      eventTime,
      eventPlace,
      eventDescription,
      eventVenue,
      eventCategory,
      eventSubCategory,
    });
    await newEvent.save();
    res.status(201).json({ message: "Event Added Successfully" });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

export const adminEventGet = async (req, res, next) => {
  try {
    const allEvents = await EventAdd.find();
    if (!allEvents) return res.json({ msg: "no Events found" });

    return res.status(200).json({
      msg: "categories fetched successfully",
      allEvents: allEvents,
    });
  } catch (error) {
    next(error);
  }
};

export const adminEventEdit = async (req, res, next) => {
  try {
    const { id } = req.query;
    const eventEdit = req.body;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing ID in query" });
    }
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body cannot be empty" });
    }
    const updatedEvent = await EventAdd.findByIdAndUpdate(id, eventEdit, {
      new: true,
    });
    if (!updatedEvent) {
      return res.status(404).json({ msg: "Job not found" });
    }
    return res.status(200).json({ massage: "New Event added successfully" });
  } catch (error) {
    next(error);
  }
};

export const adminEventDelete = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ msg: "id required" });
    }
    const deleteEvent = await EventAdd.findByIdAndDelete({ _id: id });
    if (!deleteEvent) {
      return res.status(404).json({ message: "Job request not found" });
    }
    return res
      .status(200)
      .json({ message: "Job request deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const AdminCategoryAdd = async (req, res, next) => {
  try {
    const { category, subCategory } = req.body;
    if (!category || !subCategory)
      return res.status(404).json({ message: "No category" });
    const newCategory = new AdminCategory({
      category: category,
      subCategory: subCategory,
    });
    await newCategory.save();
    res.status(201).json({ message: "Categories Added Successfully" });
  } catch (error) {
    next(error);
  }
};

export const AdminCategoryGet = async (req, res, next) => {
  try {
    const category = await AdminCategory.find();
    if (!category)
      return res.status(404).json({ message: "category not found" });
    return res
      .status(200)
      .json({ message: "category get is successful", categories: category });
  } catch (error) {
    next(error);
  }
};

export const AdminCategoryEdit = async (req, res, next) => {
  try {
    const { id } = req.query;
    const category = req.body;
    if (!id || !category)
      return res.status(404).json({ message: "category not" });
    const updateCategory = await AdminCategory.findByIdAndUpdate(id, category, {
      new: true,
    });
    if (!updateCategory)
      return res.status(404).json({ message: "category not found" });
    return res
      .status(200)
      .json({
        message: "category updated successfully",
        category: updateCategory,
      });
  } catch (error) {
    next(error);
  }
};

export const AdminCategoryDelete = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ msg: "id required" });
    }
    const deleteCategory = await AdminCategory.findByIdAndDelete({ _id: id });
    if (!deleteCategory) {
      return res.status(404).json({ message: "Job request not found" });
    }
    return res
      .status(200)
      .json({ message: "Job request deleted successfully" });
  } catch (error) {
    next(error);
  }
};
