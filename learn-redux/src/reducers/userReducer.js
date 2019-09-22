export const userReducer = (state='', action) => {
  switch (action.type) {
    case "USER_ACTION":
      return action.payload.user
    default:
      return state
  }
}
