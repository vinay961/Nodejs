const express = require('express')

const {createUser,getUser,deleteUser, editUser} = require('../controller/userController')

const router = express.Router();

router.post('/createUser',createUser);
router.get('/getUser',getUser);
router.delete('/deleteUser/:id',deleteUser);
router.put('/editUser/:id',editUser);

module.exports = router;