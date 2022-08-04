import expressAsyncHandler from "express-async-handler";
import { SelectListModel } from "../models/SelectListModel.js";
import cloudinary from "cloudinary";
import SelectListrouter from "../routers/SelectListRouter.js";

export const createOptionByproperty = expressAsyncHandler(async (req, res) => {
  const SelectListItem = new SelectListModel({
    name: req.body.name,
    property: req.body.property,
    options: req.body.options,
  });
  console.log(SelectListItem);
  await SelectListItem.save();
  res.send(SelectListItem);
});

export const getAllOptionByproperty = expressAsyncHandler(async (req, res) => {
  const SelectList = await SelectListModel.find({});
  if (SelectList) {
    res.send(SelectList);
  } else {
    res.send({ error: "no select list" });
  }
});

export const UpdateSelectOption = expressAsyncHandler(async (req, res) => {
  console.log("update", req.body);
  const UpdateSelect = await SelectListModel.findById({ _id: req.params.id });
  if (UpdateSelect) {
    UpdateSelect.name = req.body.name;
    UpdateSelect.property = req.body.property;
    UpdateSelect.options = req.body.options;
  }

  await UpdateSelect.save();
  res.send(UpdateSelect);
});

export const getSelectOptionById = expressAsyncHandler(async (req, res) => {
  const UpdateSelect = await SelectListModel.findById({ _id: req.params.id });
  if (UpdateSelect) {
    res.send(UpdateSelect);
  } else {
    res.send({ message: "no select " });
  }
});

export const deleteSelectOption = expressAsyncHandler(async (req, res) => {
  const UpdateSelect = await SelectListModel.findById({ _id: req.params.id });
  await UpdateSelect.remove();

  res.send({ msg: "deleted select" });
});
