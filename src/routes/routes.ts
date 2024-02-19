import { Router } from "express";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { AuthUserController } from "../controllers/User/AuthUserController";
import { SaveResponseController } from "../controllers/Response/SaveResponseController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/session',new AuthUserController().handle)
router.post('/response',isAuthenticated,new SaveResponseController().handle)

export {router}
