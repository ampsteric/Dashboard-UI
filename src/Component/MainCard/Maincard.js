import React from 'react'
import lady from '../../Utils/lady.jpg';
import doc from '../../Utils/doctor.jpg';
import './maincard.css'
import '../Card/card.css'

export default function Maincard() {
    return (
        <div className="main">
             <div className="flex-row">
                        <div className="lady-img">
                            <img src={lady} />
                        </div>
                        <div className="flex-col">
                            <div className="name">
                                Rachna Ranade
                            </div>
                            <div className="prof">
                                Writer
                            </div>
                        </div>
                </div>
                <div className="text">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>
                <div className="image">
                    <img src={doc} />
                </div>



<div className="flex-col">
                <div className="flex-row">
                                <div className="align-left flex-row">
                                        <div className="lady-img">
                                            <img src={lady} />
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
                <div className="flex-gap">
                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        <i class="fa fa-university" aria-hidden="true"></i>
                </div>
                </div>

                            <div className="text">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            </div>

                            <div className="flex-row">
                                <div className="left-aligned flex-row">
                                <i class="fa fa-smile-o" aria-hidden="true"></i>
                                <i class="fa fa-ban" aria-hidden="true"></i>

                                </div>
                <div className="flex-gap">
                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        <i class="fa fa-university" aria-hidden="true"></i>
                </div>
                </div>
        </div>
        </div>

    )
}
