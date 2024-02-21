import { Router } from "express";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { AuthUserController } from "../controllers/User/AuthUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { Authlimiter } from "../shared/limit/AuthRateLimit";
import { RegisterRateLimit } from "../shared/limit/RegisterRateLimit";
import { SaveUserResponseController } from "../controllers/Response/SaveUserResponseController";
import { ListUserResponseController } from "../controllers/Response/ListUserResponseController";
import { RemoveUserResponseController } from "../controllers/Response/RemoveUserResponseController";
import { UpdateUserController } from "../controllers/User/UpdateUserController";
import { ListUserDetailsController } from "../controllers/User/ListUserDetailsController";
const router = Router()

router.post('/users',RegisterRateLimit, new CreateUserController().handle)
router.post('/session',Authlimiter,new AuthUserController().handle)
router.post('/response',isAuthenticated,new SaveUserResponseController().hadle)
router.get('/response',isAuthenticated,new ListUserResponseController().handle)
router.delete('/response/:id',isAuthenticated, new RemoveUserResponseController().handle)
router.put('/users/:id',isAuthenticated,new UpdateUserController().handle)
router.get('/me',isAuthenticated,new ListUserDetailsController().handle)

export {router}
