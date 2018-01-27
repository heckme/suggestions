const express = require('express');
const suggestion = require('./../models/suggestion');
const multer = require('multer');
const router = express.Router();
const appConfig = require('./../config.js');

/* ------------------------------------------------------ */
// File upload Configurations
/* ------------------------------------------------------ */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appConfig.paths.public+'/'+appConfig.paths.uploads)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const storeFields = multer({ storage: storage });



/* ------------------------------------------------------ */
// API Routing configuration:
/* ------------------------------------------------------ */

router.use(function timeLog(req, res, next) {
    console.log('called api routing: ' + Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('ask me something...');
});


/* ------------------------------------------------------ */
// API for Suggestions
/* ------------------------------------------------------ */

router.get('/suggestion/get', suggestion.list);
router.get('/suggestion/get/:id', suggestion.get);
router.post('/suggestion/update', storeFields.single('image'), suggestion.update);
router.post('/suggestion/delete', storeFields.any(), suggestion.delete);
router.post('/suggestion/create', storeFields.single('image'), suggestion.create);


module.exports = router;

