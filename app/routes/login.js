module.exports = function (app) {
    app.get('/logintest',function (req, res) {
        res.json({success:true});
    })
}