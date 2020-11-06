import React from 'react'
import { Progress } from "@chakra-ui/core";
import '../../App.css';
import '../Pages/pages.css';
export default function Preloader(props) {
    return (
        <div className="main">
        <div className="loader">
            <h6>{props.title}</h6>
            <Progress  size="sm" hasStripe isAnimated />
        </div>
        </div>
    )
}
