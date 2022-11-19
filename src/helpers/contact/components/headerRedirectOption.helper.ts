import { createElement } from "react";
import { OptionHeader, HeaderRedirectOption } from "@interfaces/contact/index";
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
}: HeaderRedirectOption): OptionHeader[] => {
    const redirectOptions: OptionHeader[] = [
        {
            icon: createElement(CalendarMonthIcon),
            title: "Meetings",
            countTitle: meetingCount,
            redirectTo: '/meetings'
        },
        {
            icon: createElement(StarIcon),
            title: "Opportunities",
            countTitle: opportunitieCount,
            redirectTo: '/opportunities'
        },
        {
            icon: createElement(AttachMoneyIcon),
            title: "Sales",
            countTitle: saleCount,
            redirectTo: '/sales'
        },
        {
            icon: createElement(SaveAsIcon),
            title: "Invoiced",
            countTitle: invoicedCount,
            redirectTo: '/invoiced'
        },
        {
            icon: createElement(PublicIcon),
            title: "Go to",
            countTitle: "Website",
            redirectTo: '/website'
        }
    ]
    return redirectOptions;
}