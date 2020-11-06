import React from 'react'
import './pages.css'
export default function Pages(props) {
    
    function verifier(){
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
    function iconProvider(){
    if(props.media=='insta')
return (
    <div className="co">
    <i class="fa fa-instagram" aria-hidden="true"></i>
    </div>
)

else if(props.media=='utube')
return (
    <div className="co">
<i class="fa fa-youtube-play" aria-hidden="true"></i>
    </div>
)
else if(props.media=='fb')
return (
    <div className="co">
<i class="fa fa-facebook-square" aria-hidden="true"></i>
    </div>
)
else if(props.media=='tweet')
return (
    <div className="co">
<i class="fa fa-twitter-square" aria-hidden="true"></i>
    </div>
)
    }
    function usernameProvider(name){
return (
    <div className="co">
        {name}
</div>
)
    }

    return (
        <div className="main">
            <div className="flexer">
                
                    {verifier()}  
                    {usernameProvider(props.name)}
                    {iconProvider()}
                    

                
            </div>
        </div>
    )
}
