import { Router } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { db } from "../lib/db";
import { user } from "../models/schema";

const router = Router()

router.get('/', async (_req, res) => {
    const users = await db.select().from(user)
   
    return res
        .status(200)
        .json(new ApiResponse(200, "System is Healthy :)", users))

})

export default router