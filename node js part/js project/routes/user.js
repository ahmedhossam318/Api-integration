var express = require('express')
var employee = require("../models/user");
var router = express.Router()
var bodyParser = require('body-parser');
var auth = require('../middleware/auth')
const {index} = require("../controllers/usercontroller");
const user_controller = require('../controllers/usercontroller');
const admin = require('../middleware/admin');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


router.get('/' ,user_controller.index)
router.post('/register',user_controller.create_user )
router.get('/profile',[auth,admin] , user_controller.user_profile)
router.post('/login',user_controller.login)

module.exports = router