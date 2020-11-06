import React from 'react'
import './status.css'
export default function Status(props) {
    function verifier()
    {
        if(props.done=='yes')
            return (
                <div className="co">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                </div>
            )

            return (
                <div className="co">
                    <i class="fa fa-circle-thin" aria-hidden="true"></i>
                </div>
            )
    }

        function usernameProvider(name)
        {
            return (
                <div className="co">
                    <p>{name}</p>
                </div>
            )
        }
    return (
        <div>
            <div className="flexer-status">
                {verifier()}  
                {usernameProvider(props.name)}                
        </div>
        </div>
    )
}
