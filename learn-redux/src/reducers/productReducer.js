export const productReducer = (state=[], action) => {
  switch (action.type) {
    case "PRODUCTS_ACTION":
      return [
        ...state,
        ...action.payload.products
      ]
    default:
      return state
  }
}