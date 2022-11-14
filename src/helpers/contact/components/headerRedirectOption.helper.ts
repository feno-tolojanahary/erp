import { createElement } from "react";
import { propsOptionType, propsHeaderOptionType } from "@interfaces/contact/index";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PublicIcon from '@mui/icons-material/Public';

export const getHeaderRedirectOptions = ({
    meetingCount,
    opportunitieCount,
    saleCount,
    invoicedCount
}: propsHeaderOptionType): propsOptionType[] => {
    const redirectOptions: propsOptionType[] = [
        {
            icon: createElement(CalendarMonthIcon),
            title: "Meetings",
            countTitle: meetingCount
        },
        {
            icon: createElement(StarIcon),
            title: "Opportunities",
            countTitle: opportunitieCount
        },
        {
            icon: createElement(AttachMoneyIcon),
            title: "Sales",
            countTitle: saleCount
        },
        {
            icon: createElement(SaveAsIcon),
            title: "Invoiced",
            countTitle: invoicedCount
        },
        {
            icon: createElement(PublicIcon),
            title: "Go to",
            countTitle: "Website"
        }
    ]
    return redirectOptions;
}