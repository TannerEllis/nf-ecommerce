require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);


module.exports = {
    displayMerch: (req, res) => {
        req.app.get('db').display_merch()
            .then((merch) => res.send(merch))
    },

    getCart: (req, res) => {
        let currentUser = req.session.user.users_id
        req.app.get('db').get_cart([currentUser])
            .then((addedItems) => {
                res.status(200).send(addedItems)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },

    addToCart: (req, res) => {
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
                res.status(500).send(err)
            })
    },

    editQuantity: (req, res) => {
        let currentUser = req.session.user.users_id
        let { quantity, product_id } = req.body
        req.app.get('db').edit_quantity([currentUser, quantity, product_id])
            .then((newQuantity) => {
                res.send(newQuantity)
            })
    },

    editSize: (req, res) => {
        let currentUser = req.session.user.users_id
        let { size, product_id } = req.body
        req.app.get('db').edit_size([currentUser, size, product_id])
            .then((newSize) => {
                res.send(newSize)
            })
    },

    handlePayment: (req, res, next) => {
        // convert amount to pennies
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for (var i = 0; i < amountArray.length; i++) {
            if (amountArray[i] === ".") {
                if (typeof amountArray[i + 1] === "string") {
                    pennies.push(amountArray[i + 1]);
                } else {
                    pennies.push("0");
                }
                if (typeof amountArray[i + 2] === "string") {
                    pennies.push(amountArray[i + 2]);
                } else {
                    pennies.push("0");
                }
                break;
            } else {
                pennies.push(amountArray[i])
            }
        }
        const convertedAmt = parseInt(pennies.join(''));

        const charge = stripe.charges.create({
            amount: convertedAmt, // amount in cents, again
            currency: 'usd',
            source: req.body.token.id,
            description: 'Test charge from react app'
        }, function (err, charge) {
            if (err) return res.sendStatus(500)
            return res.sendStatus(200);
            // if (err && err.type === 'StripeCardError') {
            //   // The card has been declined
            // }
        });
    },

    checkout: (req, res) => {
        let currentUser = req.session.user.users_id
        req.app.get('db').checkout([currentUser])
            .then((items) => {
                res.status(200).send(items)
            })
    }

}