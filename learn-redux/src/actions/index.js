import $ from 'jquery'

export const apiShowErrorAction = () => {
  return {
    type: 'API_SHOW_ERROR',
    payload: {
      api_error: "FETCH-API-ERROR"
    }
  }
}

export const apiRequest = () => {
  return dispath => {
    $.ajax({
      url: 'https://google.com',
      success() {
        console.log("SUCCESS")
      },
      error() {
        console.log("ERROR")
        dispath(apiShowErrorAction())
      }
    })
  }
}


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