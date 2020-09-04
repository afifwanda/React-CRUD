export const getArticle = () =>{
  return async dispatch => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
    const articleResult = await result.json()
    dispatch({
        type: "GET_ARTICLE",
        payload: {
            articles: articleResult
        }
    })
  }
}

export const addArticle = (userId,id,title,body) =>({
  type: "ADD_ARTICLE",
  payload: {
    articles: {
      userId,
      id,
      title,
      body,
    }
  }
})

export const getSpecificArticle = (id) =>({
  type: "DETAIL_ARTICLE",
  payload: {
    id,
  }
})

export const editArticle = (userId,id,title,body) => ({
  type: "EDIT_ARTICLE",
  payload: {
    articles: [{
      userId,
      id,
      title,
      body,
    }]
  }
})

export const deleteArticle = (id) =>({
  type: "DELETE_ARTICLE",
  payload: {
    id,
  }
})

export const addToken = (token) => ({
  type: "ADD_TOKEN",
  payload: {
    token,
  }
})

export const deleteToken = () => ({
  type: "DELETE_TOKEN"
})