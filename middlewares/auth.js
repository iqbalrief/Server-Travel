const isLogin = (req, res, next) => {
    if(req.session.user === null || req.session.user == undefined) {
        req.flash('alertMessage', 'Session Has Ended, Please Login Again')
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/signin')
    } else {
        next();
    }
}

module.exports = isLogin;