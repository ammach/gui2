import React from 'react';
import { Button as ButtonAntd} from "antd";
import { useHistory,useLocation} from "react-router-dom";
import "./button.css";

export function Button({formnext,text,icon}) {
 
    const history = useHistory()  
    let location = useLocation();
    function goNext()
    {
    if(formnext !== undefined) 
        {
            formnext()
        }
    else
        {
            if(location.pathname === "/login"){
                history.push("/home")
            }
            else{
                history.push("/form")
            } 
        }
    }

    return<ButtonAntd className="custom-btn" shape="round" onClick={goNext}>
        {text && text} {icon && icon()}
        </ButtonAntd>
}
