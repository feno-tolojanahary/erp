import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Contact } from '@services/contact.service';
import { Company } from '@services/company.service';
import { NavAction } from '../../context/actions';
import SelectWithService from '@components/SelectWithService';
import { CardMedia } from "@mui/material"
import { getImageUrl } from "@helpers/general";
import { ActionsContext } from '@context/actions';
import { useLoaderData } from 'react-router-dom';
import HeaderRedirectOptions from './components/HeaderRedirectOptions';
 
type propsType = {
    setNavAction: Dispatch<SetStateAction<NavAction>>
}

type propsTextCard = {
    label: string,
    value: string | undefined | null
}

type LoaderDataType = {
    address: any,
    contact: Contact,
    company: Company
}

const TextCard = ({label, value}: propsTextCard) => (
    <div className='flex'>
        <strong>{label}: </strong>
        <span>{value}</span>
    </div>
)

const handleChangeAddressType = () => {}

const ContactDetails : React.FC<propsType> = (props: propsType) => {
    const { contact, company, address } = useLoaderData() as LoaderDataType;
    const { street, street2, city, zip, country, state = {}, typeId: addressTypeId } = address || {};
    const { jobPosition, phone, mobile, email, website, title, tag } = contact || {}

    useEffect(() => {
        props.setNavAction({
            button: "viewDetail",
            page: 'contactViewDetail',
            prevUrl: '/contact',
            nextUrl: `/contact/edit/${contact.id}`
        })
    }, [])    

    return (
        <div>
            <div className="container mx-auto ">
                <HeaderRedirectOptions
                    invoicedCount={0}
                    meetingCount={0}
                    opportunitieCount={0}
                    saleCount={0}
                />
                <div className="flex">
                    <div className='flex flex-col w-1/2 px-2'>
                        <TextCard
                            label='Name'
                            value={contact.name}
                        />
                        <TextCard
                            label='Company name'
                            value={company?.name}
                        />
                        <div className='flex'>
                            <div className='flex w-1/2 px-1'>
                                <SelectWithService 
                                    path="addressTypes"
                                    label="Address type"
                                    defaultValue=''
                                    name="address.typeId"
                                    onChange={handleChangeAddressType}
                                    value={addressTypeId}
                                /> 
                            </div>
                            <div className='flex w-1/2'>
                                <TextCard
                                    label='Street'
                                    value={street}
                                />
                                <TextCard
                                    label='Street2'
                                    value={street2}
                                />
                                <TextCard
                                    label='City'
                                    value={city}
                                />
                                <TextCard
                                    label='State'
                                    value={state.name}
                                />
                                <TextCard
                                    label='Zip'
                                    value={zip}
                                />
                                <TextCard
                                    label='Country'
                                    value={country}
                                />
                            </div>
                                
                        </div>
                    </div>
                    <div className='flex flex-col w-1/2 px-4'>
                        <div className="w-full flex items-end">
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={getImageUrl(contact?.imageName)}
                                alt={contact.name}
                            />
                        </div>
                        <div className='w-full mt-1 flex flex-col'>
                            <TextCard
                                label="Job position"
                                value={jobPosition}
                            />
                            <TextCard
                                label="Phone"
                                value={phone}
                            />
                            <TextCard
                                label="Mobile"
                                value={mobile}
                            />
                            <TextCard
                                label="Email"
                                value={email}
                            />
                            <TextCard
                                label="Website"
                                value={website}
                            />
                            <TextCard
                                label="Title"
                                value={title?.name}
                            />
                            <TextCard
                                label="Tag"
                                value={tag?.name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContactDetailsContent = () => (
    <ActionsContext.Consumer>
            {({setNavAction}) => 
                <ContactDetails
                    setNavAction={setNavAction}
                />
            }

    </ActionsContext.Consumer>
)

export default ContactDetailsContent;