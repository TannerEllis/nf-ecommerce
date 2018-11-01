const initialState = {
    cart: []
}

const UPDATE_CART = 'UPDATE_CART'

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case UPDATE_CART:
            return Object.assign({}, state, { cart: action.payload })

            default: return state;
    }
}

export function updateCart(newCart) {
    return {
        type: UPDATE_CART,
        payload: newCart
    }
}
