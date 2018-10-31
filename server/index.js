const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const app = express();
const controller = require('./controller');
const session = require('express-session');
require('dotenv').config();

massive(process.env.CONNECTION_STRING)
.then((db)=> {
    console.log('database connected')
    app.set('db', db)
}).catch(err => console.log(err))


app.use(bodyParser.json());



const {
  SERVER_PORT,
  SESSION_SECRET,
  REACT_APP_DOMAIN,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  NODE_ENV
} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000000
    }
  }));

  app.use((req, res, next) => {
    if(NODE_ENV === 'development') {
        req.session.user = {
            users_id: 1,
            first_name: 'Tanner',
            last_name: 'Ellis',
            auth_id: 'google-oauth2|114478872167194293967'
        }
    }
    next()
  })


  app.get('/auth/callback', async (req, res) => {
    //code ---> req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }

    //post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)

    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

    const db = req.app.get('db');
    const { name, sub } = userRes.data;

    username = name.split(' ')
    firstName = username[0] 
    lastName = username[1]

    let existingUser = await db.check_user([sub])

    if (existingUser[0]) {
        req.session.user = existingUser[0]
    } else {
        let createdUser = await db.create_user([firstName, lastName, sub])
        req.session.user = createdUser[0]
    }
    res.redirect('http://localhost:3000/#/home');
})

app.get('/api/display/merch', controller.displayMerch)
app.get('/api/shoppingcart', controller.getCart)

app.post('/api/addtocart', controller.addToCart)
app.post('/api/buy/album', controller.purchaseAlbum)

app.put('/api/editquantity', controller.editQuantity)
app.put('/api/editsize', controller.editSize)

app.delete('/api/removeitem/:id', controller.removeItem)

app.listen(SERVER_PORT, () => console.log(` Server running on port ${SERVER_PORT}`))