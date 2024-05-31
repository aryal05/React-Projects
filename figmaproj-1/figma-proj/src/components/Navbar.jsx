const Navbar =()=>{

     return(
          <>
          <div className="navigation">
               <h1>Hekto</h1>
               <ul className="list">
                 <li>Home</li>
                 <li>Pages</li>
                 <li>Products</li>
                 <li>Blog</li>
                 <li>Shop</li>
                 <li>Contact</li>
               </ul>
               <div className="search-bar">
          <input type="text" id="search-input" placeholder="Search..." />
          <button type="button" className="search-button">
            <img src="images/uil_search.png" alt="Search" />
          </button>
        </div>
           
          </div>
        

          </>
          

     )

}
export default Navbar;