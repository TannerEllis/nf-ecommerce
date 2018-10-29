const initialState = {
    productDescription: '',
    productDetails: '',
    productSize: '',
    productPrice: 0,
    productImage: '',
    quantity: 0
}
const PRODUCT_DESCRIPTION = 'PRODUCT_DESCRIPTION'
const PRODUCT_DETAILS = 'PRODUCT_DETAILS'
const PRODUCT_SIZE = 'PRODUCT_SIZE'
const PRODUCT_PRICE = 'PRODUCT_PRICE'
const PRODUCT_IMAGE = 'PRODUCT_IMAGE'
const QUANTITY = 'QUANTITY'

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case PRODUCT_DESCRIPTION:
            return Object.assign({}, state, { productDescription: action.payload })

        case PRODUCT_DETAILS:
            return Object.assign({}, state, { productDetails: action.payload })

        case PRODUCT_SIZE:
            return Object.assign({}, state, { productSize: action.payload })

        case PRODUCT_PRICE:
            return Object.assign({}, state, { productPrice: action.payload })

        case PRODUCT_IMAGE:
            return Object.assign({}, state, { productImage: action.payload })

        case QUANTITY:
            return Object.assign({}, state, { quantity: action.payload })

            default: return state;
    }
}

export function description(productDescription) {
    return {
        type: PRODUCT_DESCRIPTION,
        payload: productDescription
    }
}

export function details(productDetails) {
    return {
        type: PRODUCT_DETAILS,
        payload: productDetails
    }
}

export function size(productSize) {
    return {
        type: PRODUCT_SIZE,
        payload: productSize
    }
}

export function price(productPrice) {
    return {
        type: PRODUCT_PRICE,
        payload: productPrice
    }
}


export function image(productImage) {
    return {
        type: PRODUCT_IMAGE,
        payload: productImage
    }
}

export function updateQuantity (quantity) {
    return {
        type: QUANTITY,
        payload: quantity
    }
}


