import { Router } from "express";
import { adminEventAdd, adminEventDelete, adminEventEdit, adminLogin } from "../controllers/adminControllers.js";

const adminRouter = Router();

adminRouter.post("/login", adminLogin);
adminRouter.post("/add-event-admin", adminEventAdd);
adminRouter.put("/add-event-admin", adminEventEdit);
adminRouter.delete("/add-event-admin", adminEventDelete);


export default adminRouter