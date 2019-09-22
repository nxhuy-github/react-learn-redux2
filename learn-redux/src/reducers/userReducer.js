export const userReducer = (state='', action) => {
  switch (action.type) {
    case "USER_ACTION":
      return action.payload.user
    case "API_SHOW_ERROR":
      return action.payload.api_error
    default:
      return state
  }
}
