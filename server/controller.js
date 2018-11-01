module.exports = {
    displayMerch: (req, res) => {
        req.app.get('db').display_merch()
        .then((merch) => res.send(merch))
    },

    getCart: (req, res) => {
        let currentUser = req.session.user.users_id
        console.log(currentUser)
        req.app.get('db').get_cart([currentUser])
        .then((addedItems) => {
            res.status(200).send(addedItems)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    addToCart: (req, res) => {
        console.log(req.body)
        console.log(req.session.user, 'test')
        let currentUser = req.session.user.users_id
        let { product_id, selectSize, selectQuantity } = req.body
        req.app.get('db').add_to_cart([currentUser, product_id, selectQuantity, selectSize])
        .then((cart) => {
            res.status(200).send(cart)
        })
    },

    purchaseAlbum: (req, res) => {
        let currentUser = req.session.user.users_id
        let productId = req.body.id
        req.app.get('db').purchase_album([currentUser, productId])
        .then((album) => {
            res.status(200).send(album)
        })
    },

    removeItem: (req, res) => {
        let currentUser = req.session.user.users_id
        let productId = req.params.id
        req.app.get('db').remove_from_cart([currentUser, productId])
        .then(items => {
            res.status(200).send(items)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send(err)
          })
    }, 

    editQuantity: (req, res) => {
        let currentUser = req.session.user.users_id
        let {quantity, product_id} = req.body
        req.app.get('db').edit_quantity([currentUser, quantity, product_id])
        .then((newQuantity) => {
            res.send(newQuantity[0])
        })
    }

}