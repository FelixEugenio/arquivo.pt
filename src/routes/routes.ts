import { Router } from "express";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { AuthUserController } from "../controllers/User/AuthUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { Authlimiter } from "../shared/limit/AuthRateLimit";
import { RegisterRateLimit } from "../shared/limit/RegisterRateLimit";
import { SaveUserResponseController } from "../controllers/Response/SaveUserResponseController";
import { ListUserResponseController } from "../controllers/Response/ListUserResponseController";
import { listenerCount } from "nodemailer/lib/xoauth2";
const router = Router()

router.post('/users',RegisterRateLimit, new CreateUserController().handle)
router.post('/session',Authlimiter,new AuthUserController().handle)
router.post('/response',isAuthenticated,new SaveUserResponseController().hadle)
router.get('/response',isAuthenticated,new ListUserResponseController().handle)

export {router}
