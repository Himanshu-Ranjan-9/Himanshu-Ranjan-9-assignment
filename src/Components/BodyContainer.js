import NewsContainer from "./NewsContainer"
import React, { useState } from 'react';

function BodyContainer() {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
        <div className="container2">
        <div className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top"
            style={{maxWidth: "1040px", height: "68px", background: "rgb(255, 255, 255)" ,borderTop: "1px solid rgba(0, 0, 0, 0.2)"}}>
            <ul className="nav my-2 nav-underline">
                <li className="nav-item"><a className="nav-link active" href="/">All Posts (32)</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Article</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Event</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Education</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Job</a></li>
            </ul>
            <div className="d-flex my-2 align-items-center"><button className="btn" aria-label="write-post"
                    style={{background: "rgb(242, 242, 242)"}}>Write Post<img
                        src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        alt="arrow down"/></button>
                      <button 
    className="btn btn-primary ms-2 gap-2 d-flex align-items-center"
    aria-label="Join group" 
    style={{
        border: "0.8px solid rgb(152, 152, 153)",
        backgroundColor: isClicked ? 'white' : '#007fff' ,
        color:isClicked ? "black" :'white' 

    }}
    onClick={handleClick}
>
    {isClicked ? '⬅️Leave Group' : '🙍🏻‍♂️Join Group'}
</button>


                        </div>
        </div>
    </div>
    <hr className="mx-auto mt-0" style={{maxWidth: "1040px"}}/>
    <NewsContainer isClicked={isClicked}/>
    </div>

  )
}
export default BodyContainer
