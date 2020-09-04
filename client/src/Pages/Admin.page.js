import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { deleteArticle } from '../Store/action';
import Button from '../Components/Button.component';
import swal from 'sweetalert';
import Navbar from '../Components/Navbar.component';
import '../Styles/admin.style.css';


function Admin(){
  const [page,setPage] = useState(1);
  const contentPerPage = 5;
  const indexLast = page * contentPerPage ;
  const indexFirst = indexLast - contentPerPage ;
  const dispatch = useDispatch()
  const history = useHistory()
  const listArticle = useSelector(state=>state.reducer.article);
  listArticle.sort(function(a, b){return b.id-a.id});
  const currentListArticle = listArticle.slice(indexFirst,indexLast);

  const handlePrevious = () => {
    setPage( page - 1 );
  }

  const handleNext = () => {
    setPage( page + 1 );
  }

  function handleDelete(id){
    swal({
      title: "Are you sure want to delete",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deleteArticle(Number(id)))
        history.push('/admin')
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
          <h1 className='admin-title'>Welcome Back, Contributors !</h1>
        </div>
        <div className="table-container">
          <div className="top-button-container">
            <Link to='/add'>
                <Button
                className='btn--primary'
                buttonStyle='btn--outline'
                buttonSize='btn--small'
                onClick={handlePrevious}
              >
                Create
            </Button>
            </Link>
          </div>
          <table className='table table-sm'>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {currentListArticle.map((element)=>{
                return  <tr>
                  <th>{element.id}</th>
                  <td>{(element.title).substring(0,20)+"..."}</td>
                  <td>{(element.body).substring(0,20)+"..."}</td>
                  <td>{<Link to={`/edit/${element.id}`}><i class='far fa-edit' /></Link>}</td>
                  <td>{<i class='far fa-trash-alt' onClick={() => handleDelete(element.id)} />}</td>
                </tr>
              })}
            </tbody>
          </table>
          <div className="button-container">
            { page > 1 ? 
              <Button
                className='btn--primary'
                buttonStyle='btn--outline'
                buttonSize='btn--small'
                onClick={handlePrevious}
              >
                Previous
              </Button> :
              <div></div>
            }
            <h3 className='pagination-text'>
              Page {page} of {Math.floor(listArticle.length/contentPerPage)}
            </h3>
            { page < 20 ? 
              <Button
                className='btn--primary'
                buttonStyle='btn--outline'
                buttonSize='btn--small'
                onClick={handleNext}
              >
                Next
              </Button> :
              <div></div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin