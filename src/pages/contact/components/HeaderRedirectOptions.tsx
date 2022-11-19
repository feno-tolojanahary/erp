import React from "react";
import { OptionHeader, HeaderRedirectOption } from "@interfaces/contact/index";
import { getHeaderRedirectOptions } from "@helpers/contact/components/headerRedirectOption.helper";
import Option from "./components/HeaderRedirectOption";

const HeaderRedirectOptions = (props: HeaderRedirectOption) => {
    const optionsType: OptionHeader[] = getHeaderRedirectOptions(props);

    return (
        <div className="w-full border border-stone-200 relative text-xs flex items-end">
            {
                optionsType.map(optionType => <Option {...optionType} />)
            }
        </div>
    )
}

export default HeaderRedirectOptions;