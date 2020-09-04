const initialState = {
    article : [],
    detailArticle : [],
    token : null,
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case "GET_ARTICLE":
      return{...state, article : action.payload.articles};
    case "ADD_ARTICLE":
      let newArticle = state.article.concat(action.payload.articles);
      return {...state, article: newArticle}
    case "DETAIL_ARTICLE":
      let newDetailArticle = state.article.filter(obj => {
        return obj.id === Number(action.payload.id.id)
      });
      return {...state, detailArticle: newDetailArticle}
    case "EDIT_ARTICLE":
      let newEditedArticle = state.article.map(obj=>action.payload.articles.find(o=>o.id === obj.id)||obj);
      return {...state, article: newEditedArticle}
    case "DELETE_ARTICLE":
      let afterDeletedArticle = state.article.filter(function(el){
        return el.id !== action.payload.id;
      })
      return {...state, article: afterDeletedArticle}
    case "ADD_TOKEN":
      return{...state, token: action.payload.token }
    case "DELETE_TOKEN":
      return{...state, token: null}
    default:
      return state
  }
}

export default reducer