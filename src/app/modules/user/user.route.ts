import express from "express";
import { createUser, getAdminUsers, getUserById, getUsers} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.post("/create", createUser);
router.post("/:id", getUserById);

export default router;
