const initialState = {
    product: [],
    quantity: 0,
    productId
}

const PRODUCT = 'PRODUCT'
const QUANTITY = 'QUANTITY'
const PRODUCT_ID = 'PRODUCT_ID'

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case PRODUCT:
            return Object.assign({}, state, { product: action.payload })

        case QUANTITY:
            return Object.assign({}, state, { quantity: action.payload })

        case PRODUCT_ID:
            return Object.assign({}, state, { productId: action.payload })
        

            default: return state;
    }
}


export function getProduct(item) {
    return {
        type: PRODUCT,
        payload: item
    }
}

export function getQuantity(quantity) {
    return {
        type: QUANTITY,
        payload: quantity
    }
}

export function getProductId(id) {
    return {
        type: PRODUCT_ID,
        payload: id
    }
}