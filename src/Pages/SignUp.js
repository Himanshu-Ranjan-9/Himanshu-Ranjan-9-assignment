import React from 'react'
import google_icon from "../Assets/icons8-google-48.png"
import fb_icon from "../Assets/icons8-facebook-48.png"
import cross from '../Assets/icons8-x-24.png'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <>

<section className="vh-100" style={{backgroundColor: "#eee"}}>

  <div className="container pt-4" >
  <div className='d-flex justify-content-end'>
    <div  className=' p-2 ' style={{background:"#DCDCDC",borderRadius:"50%"}}>
       <Link to={'/'}><img src={cross} alt="" /></Link> 
    </div>
    </div>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
        <div>
    <p style={{background:"#ECFFDC",color:"	#228B22" , padding:"4px", fontWeight:"bold",borderTopLeftRadius:"25px",borderTopRightRadius:"25px"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now</p>
</div>
          <div className="card-body ">
            <div className="row justify-content-center">
              <div className=" col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">Create Account</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" placeholder='First Name'/>
                    </div>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" placeholder='Last Name'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" placeholder='Email'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" placeholder='Password' />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" placeholder='Confirm Password'/>
                    </div>
                  </div>
                  <div>
                    <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                  </div>
                 <div className="d-flex justify-content-center mb-lg-4">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg "style={{paddingLeft:"125px", paddingRight:"125px",borderRadius:"25px"}}>Create Account</button>

                  </div>
                  <div  >

                    <div style={{border:"2px solid black",borderRadius:"25px"  }} className='d-flex w-10 py-1 gap-2 align-items-center justify-content-center '>
                    <img src={google_icon} style={{width:"30px" ,height:"30px"}}/>
                    <p className='mb-0'>SignUp with Google</p>
                    </div>

                    <div style={{border:"2px solid black",borderRadius:"25px"  }} className='d-flex w-10 py-1 gap-2 mt-2 align-items-center justify-content-center '>
                    <img src={fb_icon} style={{width:"30px" ,height:"30px"}}/>
                    <p className='mb-0'>SignUp with Facebook</p>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5 mt-2 ">
                     <p> Allready have an Account <Link to={'/SignIn'}>Login</Link></p>
                    
                  </div>
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </>
  )
}

export default SignUp