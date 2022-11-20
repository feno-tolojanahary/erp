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
    invoicedCount,
    contactId
}: HeaderRedirectOption): OptionHeader[] => {
    const redirectOptions: OptionHeader[] = [
        {
            icon: createElement(CalendarMonthIcon),
            title: "Meetings",
            countTitle: meetingCount,
            redirectTo: `/meetings/${contactId}`
        },
        {
            icon: createElement(StarIcon),
            title: "Opportunities",
            countTitle: opportunitieCount,
            redirectTo: `/opportunities/${contactId}`
        },
        {
            icon: createElement(AttachMoneyIcon),
            title: "Sales",
            countTitle: saleCount,
            redirectTo: `/sales/${contactId}`
        },
        {
            icon: createElement(SaveAsIcon),
            title: "Invoiced",
            countTitle: invoicedCount,
            redirectTo: `/invoiced/${contactId}`
        },
        {
            icon: createElement(PublicIcon),
            title: "Go to",
            countTitle: "Website",
            redirectTo: `/website/${contactId}`
        }
    ]
    return redirectOptions;
}