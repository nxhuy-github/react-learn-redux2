export const userAction = (value) => {
  return {
    type: 'USER_ACTION',
    payload: {
      user: value
    }
  }
}

export const productsAction = () => {
  return {
    type: 'PRODUCTS_ACTION',
    payload: {
      products: [
        {name: 'samsung'}
      ]
    }
  }
}