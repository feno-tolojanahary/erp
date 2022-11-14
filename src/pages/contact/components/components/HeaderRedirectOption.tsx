import React from "react";
import { propsOptionType } from "@interfaces/contact/index";

const Option = ({icon, title, countTitle}: propsOptionType) => {
    const Icon = React.cloneElement(icon, {
        sx: { fontSize: 30 }
    })
    return (
        <button className="w-36 h-11 border-x border-stone-200 bg-white">
            {Icon}
            <div className="flex flex-col text-left">
                <span>{countTitle}</span>
                <span>{title}</span>
            </div>
        </button>
    )
}

export default Option;