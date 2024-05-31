const Header = () => {
     return (
       <div>
         <header className="heading">
           <div className="contact-info">
             <div className="logo">
               <img src="/images/uil_envelope-alt.png" alt="" />
               <p>mhhasanul@gmail.com</p>
             </div>
             <div className="phone">
               <img src="/images/bx_bx-phone-call.png" alt="logo" />
               <p>(12345)67890</p>
             </div>
           </div>
           <ul className="nav">
             <li><a href="#">English</a></li>
             <li><a href="#">USD</a></li>
             <li><a href="#">Login</a></li>
             <li><a href="#">Wishlist</a>
             </li>
             <img src="images\uil_heart-alt.png" alt="" />
             <div className="storelogo">
          <img className="store"src="images\fluent_cart-24-regular.png" alt="" />
          </div>
           </ul>
          
         </header>
       </div>
     );
   };
   
   export default Header;
   