import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getSpecificArticle, editArticle } from '../Store/action';
import { useParams } from 'react-router-dom';
import { Link,useHistory } from 'react-router-dom';
import swal from 'sweetalert'

import Navbar from '../Components/Navbar.component';
import '../Styles/add.style.css'

function Edit(){
  const id = useParams()
  const userId = 1;
  let newTitle = '';
  let newBody = '';
	const [title,setTitle] = useState("");
	const [body,setBody] = useState("");

  const history = useHistory();
	const dispatch = useDispatch();
  const Article = useSelector(state=>state.reducer.detailArticle);
  
  let newArticle = Article.map((element)=>{
    newTitle = element.title;
    newBody = element.body;
  })

  useEffect(()=>{
  },[newArticle])
  
  useEffect(()=>{
    dispatch(getSpecificArticle(id))
  },dispatch);

  const handleEdit = () =>{
    swal({
      title: "Are you sure want to edit",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willEdit) => {
      if (willEdit) {
        dispatch(editArticle(userId,Number(id.id),title,body))
        history.push('/articles')
        swal("success!", {
          icon: "success",
        });
      } else {
        swal("canceled!");
      }
    });
  }


	return(
	<>
		<Navbar />
		<div className='big-container'>
			<div className='title-container'>
				<h1 className='add-title'>Edit Your Content</h1>
			</div>
			<div className='form-container'>
        <form>
					<div className="form-group">
						<label for="Title">Title</label>
						<input 
							type="title" 
							className="form-control" 
              id="title" 
              placeHolder={newTitle}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label for="content">Content</label>
						<textarea 
							className="form-control" 
              rows="3" 
              id="content" 
              placeHolder={newBody}
							onChange={(e) => setBody(e.target.value)}
						/>
					</div>
					<div className="button-container">
						<button type="button" className="btn btn-warning" onClick={handleEdit}>Edit</button>
						<Link to='/articles'><button type="button" className="btn btn-danger">Cancel</button></Link>
					</div>
				</form>
			</div>
		</div>
	</>
	)
}

export default Edit