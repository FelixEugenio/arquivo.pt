import { Router } from "express";
import { CreateUserController } from "../controllers/Users/CreateUserController";
import { AuthUserController } from "../controllers/Users/AuthUserController";
import { SaveResponseController } from "../controllers/Response/SaveResponseController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/session',new AuthUserController().handle)
router.post('/response',isAuthenticated,new SaveResponseController().handle)

export {router}