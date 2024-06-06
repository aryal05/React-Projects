import React from 'react'
import PageHeader from '../components/PageHeader';


const blog = () => { 
  return (
    <div>
    <PageHeader title="Our Blog Page" curPage="Blogs"></PageHeader>

  
    <article>
          <div className='shop-title d-flex flex-warp justify-content-between'>
          <p>{showResults}</p>
          <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
            <a className='grid' onClick={()=> setGridList(!GridList)}>
            <i className='icofont-ghost'></i>
            </a>
           
          </div>
          </div>

        </article>

    </div>
   
   
  )
}

export default blog;