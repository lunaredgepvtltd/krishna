import express from 'express'
import { Login } from '../controller/users/Login.js';
import { Logout } from '../controller/users/Logout.js';
import { Register } from '../controller/users/Register.js';
import { authToken } from '../middleware/authToken.js';
import {userDetails} from '../controller/users/usesrDetails.js'
const router = express.Router();

router.post('/login',Login);
router.post('/register',Register);
router.get('/userdetails',authToken,userDetails)
router.get('/logout',Logout)

export default router