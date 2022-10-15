import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Contact } from '@services/contact.service';
import { Company } from '@services/company.service';
import { NavAction } from '../../context/actions';
import SelectWithService from '@components/SelectWithService';

type propsType = {
    setNavAction: Dispatch<SetStateAction<NavAction>>,
    contact: Contact,
    company: Company,
    address: any
}

type propsTextCard = {
    label: string,
    value: string | undefined | null
}

const TextCard = ({label, value}: propsTextCard) => (
    <div className='flex'>
        <strong>{label}: </strong>
        <span>{value}</span>
    </div>
)

const handleChangeAddressType = () => {}

const ContactDetails : React.FC<propsType> = (props: propsType) => {
    const { contact, company, address } = props;
    const { street, street2, city, zip, country, state = {}, typeId: addressTypeId } = address || {};
    const { jobPosition, phone, mobile, email, website, title, tag } = contact || {}

    useEffect(() => {
        props.setNavAction({
            button: "viewDetail",
            page: 'contactViewDetail',
            prevUrl: '/contact-list',
            nextUrl: `/contact/edit/${contact.id}`
        })
    }, [])    

    return (
        <div>
            <div className="container mx-auto ">
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
                    <div className='flex flex-col w-1/2 px-4 mt-10'>
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
    )
}

export default ContactDetails;