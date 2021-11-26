import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';

export const router = Router();
export const path = '/auth';

router.post('/cadastro', AuthController.cadastro);
router.post('/login', AuthController.login);