import { Router } from "express";
import { CreateUserController } from "../controllers/Users/CreateUserController";
import { AuthUserController } from "../controllers/Users/AuthUserController";
const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/session',new AuthUserController().handle)

export {router}