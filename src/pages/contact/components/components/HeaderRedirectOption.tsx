import React from "react";
import { OptionHeader } from "@interfaces/contact/index";
import {
    Link
  } from "react-router-dom";

const Option = ({icon, title, countTitle, redirectTo}: OptionHeader) => {
    const Icon = React.cloneElement(icon, {
        sx: { fontSize: 30 }
    })
    return (
        <Link className="w-36 h-11 border-x border-stone-200 bg-white" to={redirectTo}>
            {Icon}
            <div className="flex flex-col text-left">
                <span>{countTitle}</span>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default Option;