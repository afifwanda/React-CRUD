import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Components/Button.component';

import '../Styles/articles.style.css'

import Navbar from '../Components/Navbar.component';
import Card from '../Components/Card.component';

function Articles(){
  const [page,setPage] = useState(1);
  const contentPerPage = 5;
  const indexLast = page * contentPerPage ;
  const indexFirst = indexLast - contentPerPage ;

  const listArticle = useSelector(state=>state.reducer.article);
  listArticle.sort(function(a, b){return b.id-a.id});
  const currentListArticle = listArticle.slice(indexFirst,indexLast);

  const handlePrevious = () => {
    setPage( page - 1 );
  }

  const handleNext = () => {
    setPage( page + 1 );
  }

  return(
    <>
    <Navbar />
    <div className="big-container">
      <div className="title-container">
      <h3 className="articles-title">Information, Redefined.</h3>
      </div>
      <div className="article-container">
        <div>
          {currentListArticle.map((element)=>{
            return <Card key={element.id} 
            title={element.title}
            body={(element.body).substring(0,70)+"..."}
            />
          })}
        </div>
        <div className="button-container">
          { page > 1 ? 
            <Button
              className='btn--primary'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
              onClick={handlePrevious}
            >
              Previous
            </Button> :
            <div></div>
          }
          { page < 20 ? 
            <Button
              className='btn--primary'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
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

export default Articles
