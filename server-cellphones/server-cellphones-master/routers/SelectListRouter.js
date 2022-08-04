import express from "express";
import {
  createOptionByproperty,
  deleteSelectOption,
  getAllOptionByproperty,
  getSelectOptionById,
  UpdateSelectOption,
} from "../controllers/SelectListController.js";

const SelectListrouter = express.Router();

SelectListrouter.get("/", getAllOptionByproperty);
SelectListrouter.get("/detail/:id", getSelectOptionById);
SelectListrouter.delete("/delete/:id", deleteSelectOption);
SelectListrouter.post("/create", createOptionByproperty);
SelectListrouter.put("/update/:id", UpdateSelectOption);

export default SelectListrouter;
