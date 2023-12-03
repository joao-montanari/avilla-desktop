import { ButtonHTMLAttributes } from "react";
import './floatActionButton.sass'

interface FloatActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label : string;
    backgraund : string;
    shadowColor : string;
    textColor : string;
    borderRadius : number;
    onClick : any;
}

function FloatActionButton({label, backgraund, shadowColor, textColor, borderRadius, onClick} : FloatActionButtonProps) {
    return(
        <button id="buttonComponent" onClick={onClick} style={{
            backgroundColor : backgraund,
            color : textColor,
            borderRadius : borderRadius,
            boxShadow : `4px 4px ${shadowColor}`
        }} >
            {label}
        </button>
    )
}

export default FloatActionButton;