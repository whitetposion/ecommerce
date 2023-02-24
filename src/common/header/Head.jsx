import React from 'react'

const Head = () => {
  return (
    <>
          <section className= "head"> 
               <div className="container d_flex">
                    <div className= "left row">
                         <i className= "fa fa-phone" ></i>
                         <label htmlfor="" >+91 9082594876</label>
                         <i className= "fa fa-envelope"></i>
                         <label> example@gmail.com</label>
                    </div>
                    <div className= "right row RText">
                         <label>Theme FAQ's</label>
                         <label>Need Help</label>
                         <span>🏳️‍⚧️</span>
                         <label htmlfor=" ">EN</label>
                         <span>🏳️‍⚧️</span>
                         <label htmlfor= ''>USD</label>
                    </div>
               </div>
          </section>
    </>
  )
}

export default Head
