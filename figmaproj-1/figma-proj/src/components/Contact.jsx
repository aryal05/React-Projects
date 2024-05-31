const Contact =()=>{
     return(
          <>
          
          <div className="contact">
           <div className="info">
           <h1>Hekto</h1>
             
               <input type="text" id="search-input" placeholder="Enter Email Address" />
               <button type="button" className="but">
            Sign Up
          </button>
          <p className="top">Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
           </div>
         
               <ul className="pages">
                    <h1 className="care">Catagories</h1>
                 <li>Laptops & Computers</li>
                 <li>Cameras & Photography</li>
                 <li>Smart Phones & Tablets</li>
                 <li>Video Games & Consoles</li>
                 <li>Waterproof Headphones</li>
             
               </ul>

               <ul className="pages">
                    <h1 className="care">Customer Care</h1>
                 <li>My Account</li>
                 <li>Discount</li>
                 <li>Returns</li>
                 <li>Orders History</li>
                 <li>Order Tracking</li>
                 
               </ul>
               <ul className="pages">
                    <h1 className="care">Blog</h1>
                 <li>Browse the Shop</li>
                 <li>Category</li>
                 <li>Pre-Built Pages</li>
                 <li>Visual Composer Elements</li>
                 <li>WooCommerce Pages</li>
                
               </ul>
               
           
          </div>
          
     
          
          
          </>
     )
}
export default Contact;