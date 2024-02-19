import { Router } from "express";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { AuthUserController } from "../controllers/User/AuthUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { Authlimiter } from "../shared/limit/AuthRateLimit";
import { RegisterRateLimit } from "../shared/limit/RegisterRateLimit";
import { SaveUserResponseController } from "../controllers/Response/SaveUserResponseController";
const router = Router()

router.post('/users',RegisterRateLimit, new CreateUserController().handle)
router.post('/session',Authlimiter,new AuthUserController().handle)
router.post('/response',new SaveUserResponseController().hadle)

export {router}
