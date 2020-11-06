import React from 'react'
import './smallcard.css'

export default function Smallcard() {
    return (
        <div className="main-div">
            <div className="select-option">
            <select class="custom-select">
                    <option selected>Last week</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
            </select>
            </div>
        <div className="flex-rows">
            <div className="lady-img">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </div>
            <div className="flex-cols">
                <div className="name-div">
Errors                </div>
                <div className="prof-div">
                    128
                </div>
            </div>
        </div>
        <div className="flex-rows">
            <div className="lady-img">
            <i class="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <div className="flex-cols">
                <div className="name-div">
Hidden                </div>
                <div className="prof-div">
                    145
                </div>
            </div>
        </div>
        <div className="flex-rows">
            <div className="lady-img">
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
            </div>
            <div className="flex-cols">
                <div className="name-div">
Contacts                </div>
                <div className="prof-div">
                    458
                </div>
            </div>
        </div>
</div>
    )
}
