import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addArticle } from '../Store/action';

import Navbar from '../Components/Navbar.component';
import '../Styles/add.style.css'

function AddContent(){
	const userId = 1;
	const [id,setId] = useState(1)
	const [title,setTitle] = useState("");
	const [body,setBody] = useState("");

	const dispatch = useDispatch()

	const listArticle = useSelector(state=>state.reducer.article);

	useEffect(()=>{
		setId(listArticle.length + 1)
	},[listArticle]);

	return(
	<>
		<Navbar />
		<div className='big-container'>
			<div className='title-container'>
				<h1 className='add-title'>Create New Content</h1>
			</div>
			<div className='form-container'>
				<form>
					<div className="form-group">
						<label for="Title">Title</label>
						<input 
							type="title" 
							className="form-control" 
							id="title" 
							placeholder="Enter Title" 
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label for="content">Content</label>
						<textarea 
							className="form-control" 
							rows="3" id="content" 
							placeholder="Enter Content" 
							onChange={(e) => setBody(e.target.value)}
						/>
					</div>
					<div className="button-container">
						<button type="button" className="btn btn-warning" onClick={()=>dispatch(addArticle(userId,id,title,body))}>Submit</button>
						<Link to='/articles'><button type="button" className="btn btn-danger">Cancel</button></Link>
					</div>
				</form>
			</div>
		</div>
	</>
	)
}

export default AddContent