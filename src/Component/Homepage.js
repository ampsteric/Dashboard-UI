import React from 'react'
import img from '../Utils/wfh_1.svg'
import google from '../Utils/google-icon.svg'
import fb from '../Utils/../Utils/facebook.svg'
import './homepage.css'
export default function Homepage() {
    return (
        <div>
        <div className="row">
            <div className="col-md-6">
                <div className="header">
                    <h4>Rep<span>suite</span>.</h4>
                </div>
                <div className="welcome-text">
                    <h1>Hey There 👋</h1>
                    <h5> Welcome back to Rep<span>suite</span>.</h5>
                </div>
                         <div className="form">
                            <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                    <h6>New User? <a>signup instead</a> </h6>
                             </form>
                             <p>___________________or continue with_________________</p>
                             <img src={google}/>
                             <img src={fb}/>
                            </div>
            </div>
            <div className=" welcome-image col-md-6">
                <img src={img}  />
                <p>Fully automated comment moderation.</p>
                <p>Take a backseat while we automate your repo.</p>
                <p>Start with a free trial.</p>
                <p>Best SAAS in the industry.</p>
            </div>
        </div>
            
            
        </div>
    )
}
