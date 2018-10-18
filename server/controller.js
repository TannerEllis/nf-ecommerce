module.exports = {
    displayMerch: (req, res) => {
        req.app.get('db').display_merch()
        .then((merch) => res.send(merch))
    }
}