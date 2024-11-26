import { Router } from "express";
import { AdminCategoryAdd, AdminCategoryDelete, AdminCategoryEdit, AdminCategoryGet, adminEventAdd, adminEventDelete, adminEventEdit, adminEventGet, adminLogin } from "../controllers/adminControllers.js";

const adminRouter = Router();

adminRouter.post("/login", adminLogin);

// event adding and editing and deleting 
adminRouter.post("/add-event-admin", adminEventAdd);
adminRouter.get("/get-event-admin",adminEventGet)
adminRouter.put("/edit-event-admin", adminEventEdit);
adminRouter.delete("/delete-event-admin", adminEventDelete);

// event category adding and sub category adding 
adminRouter.post("/add-category-admin",AdminCategoryAdd);
adminRouter.get("/get-category-admin",AdminCategoryGet);
adminRouter.put("/edit-category-admin",AdminCategoryEdit);
adminRouter.delete("/delete-category-admin",AdminCategoryDelete);


export default adminRouter