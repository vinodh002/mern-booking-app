import express from "express"
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel , countByType, getHotelRooms } from "../controllers/Hotel.js"
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"

import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"

const router = express.Router()

// create
router.post("/",verifyAdmin, createHotel)

// update

router.put("/:id",verifyAdmin, updateHotel)

// Delete
router.delete("/find/:id",verifyAdmin, deleteHotel)

// get

router.get("/find/:id", getHotel)


// get all

// const failed = true

// if (failed) return next(createError(401 , "not authenictaed"))

router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)




export default router;