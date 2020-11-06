import React from 'react'
import man from '../../Utils/man.jpg';
import './card.css'
export default function Card() {
    return (
        <div className=" main-card flex-col">
            <div className="flex-row">
                <div className="flex-row-card">
                        <div className="lady-img">
                            <img src={man} />
                        </div>
                        <div className="flex-col">
                            <div className="name">
                                Prayag Mukhi
                            </div>
                            <div className="prof">
                                Author
                            </div>
                        </div>

                </div>
                <div className="error">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </div>
            </div>
            <div>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>
            <div className="flex-row">
            <div className="right-margin flex-row" >
                    <div>
                    <i class="fa fa-instagram" aria-hidden="true"></i> 
                    </div>
                    <div>
                        RachnaRanade
                    </div>
                </div>
                            <div className="flex-gap">
                                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                        <i class="fa fa-university" aria-hidden="true"></i>
                            </div>
            </div>
        </div>
    )
}
