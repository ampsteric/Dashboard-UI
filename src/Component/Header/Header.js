import React from 'react';
import './header.css';
import lady from '../../Utils/lady.jpg';
export default function Header() {
    return (
        <div className="header-main-div">
                <div className="row flexi-row">
                <div className="col sm-3">
                <h4>Rep<span>suite</span>.</h4>
                </div>

                <div className="flexi-row-right">
                <i class="fa fa-bandcamp" aria-hidden="true"></i>
                <i class="fa fa-cog" aria-hidden="true"></i>
                <div className="flexi-row col sm-3">
                    <div ><img src={lady}/></div>
                    <div className="flexi-col-header">
                        <p>Profile</p>
                        <h6>Rachna Ranade</h6>
                    </div>
                </div>
                </div>
                </div> 
        </div>
        
    )
}
