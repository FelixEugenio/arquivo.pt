import { Router } from "express";

import { RegisterRateLimit } from "../middlewares/RegisterRateLimit";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { UserController } from "../controllers/UserController";
import { AuthLimiter } from "../middlewares/AuthRateLimit";
import { ArchiveService } from "../services/archiveService";

const router = Router()

const userController = new UserController()
const archiveController = new ArchiveService()

router.post('/users', RegisterRateLimit, userController.add)
router.post('/session', AuthLimiter, userController.auth)
router.put('/users/:id', isAuthenticated, userController.update)
router.get('/me', isAuthenticated, userController.getById)

router.post('/response', isAuthenticated, archiveController.add)
router.get('/response', isAuthenticated, archiveController.getAll)
router.delete('/response/:id', isAuthenticated, archiveController.removeById)

export { router }
