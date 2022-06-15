const router = require('express').Router();
const adminController = require('../controller/adminController')
const { uploadSingle, uploadMultiple } = require('../middlewares/multer')
const auth = require('../middlewares/auth');


router.get('/signin', adminController.viewSignin);
router.post('/signin', adminController.actionSignin);
router.use(auth);
router.get('/logout', adminController.actionLogout);
router.get('/dashboard', adminController.viewDashboard);

// ednpoint category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

// endpoint Bank
router.get('/bank', adminController.viewBank);
router.post('/bank', uploadSingle, adminController.addBank);
router.put('/bank', uploadSingle, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);

// endpoint item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// endpoint detail Item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);

// endpoint detail Item Feature
router.post('/item/add/feature', uploadSingle, adminController.addFeature);
router.put('/item/update/feature', uploadSingle, adminController.editFeature);
router.delete('/item/:itemId/feature/:id', adminController.deleteFeature);

// endpoint detail Item Activity
router.post('/item/add/activity', uploadSingle, adminController.addActivity);
router.put('/item/update/activity', uploadSingle, adminController.editActivity);
router.get('/booking', adminController.viewBooking);
router.delete('/item/:itemId/activity/:id', adminController.deleteActivity);

module.exports = router;  