import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { 
    TextField,
    Box,
    FormControl,
    // InputLabel,
    // Select,
    // MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    // Button
} from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import Address from "./components/AddressForm";
import { ActionsContext, NavAction } from '../../context/actions';
import SelectWithService from '@components/SelectWithService';
import SelectSimple from '@components/SelectSimple';
import contactService from '@services/contact.service';
import companyService from '@services/company.service';
import { useNotification } from "@hooks/notification";

const TYPE_CONTACT = 'contacts';
const TYPE_COMPANY = 'companies';

type propsType = {
    setNavAction: Dispatch<SetStateAction<NavAction>>
}

const FormContact : React.FC<propsType> = (props: propsType) => {
    const formButtonRef = useRef<HTMLButtonElement | null>(null);
    const { control, handleSubmit, setValue } = useForm();
    const [formType, setFormType] = useState<string>(TYPE_CONTACT);
    const [companies, setCompanies] = useState([]);
    const { showSuccess, showError } = useNotification();

    useEffect(() => {
        props.setNavAction({
            button: "create",
            page: 'contact',
            prevUrl: '/contact',
            formButtonRef: formButtonRef
        })
    }, [formButtonRef])                             

    useEffect(() => {
        companyService.getAll().then((res: any) => {
            setCompanies(res || []);
        }).catch(err => console.log(err));
    }, [])
    
    const onSubmit = (data: any) => {
        const service = formType === TYPE_CONTACT ? contactService : companyService;
        data.address.targetType = formType;
        service.create(data)
            .then(res => {
                console.log("service created: ", res);
                showSuccess(`${formType === TYPE_CONTACT ? "Contact" : "Company"} created with success!`);
            })
            .catch(err => {
                console.log(err)
                showError("Something went wrong");
            })
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setFormType(value);
    }

    return (
        <>
            
            <div className="w-full">
                <div className="container mx-auto ">
                    <div className="flex">
                        <FormControl>
                            <RadioGroup
                                row
                                value={formType}
                                onChange={handleTypeChange}
                            >
                                <FormControlLabel value={TYPE_CONTACT} control={<Radio/>} label="Individual"/>
                                <FormControlLabel value={TYPE_COMPANY} control={<Radio/>} label="Company"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        >
                            <Box
                                component="div"
                                sx={{
                                    '& .MuiFormControl-root': { m: 1, width: '100%' },
                                }}
                                className='w-full flex flex-col'
                            >
                                <div className='w-[60%] mt-10'>
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({ field }) => 
                                                    <TextField
                                                    id="outlined-required"
                                                    className='w-full'
                                                    label="e.g. Brandon Freeman"
                                                    {...field}
                                                />
                                
                                        }
                                    />
                                    { formType === TYPE_CONTACT && 
                                        <Controller
                                            name="companyId"
                                            control={control}
                                            render={({ field }) => 
                                                    <SelectSimple
                                                        optionList={companies}
                                                        label="Company name"
                                                        {...field}
                                                    />
                                    
                                            }
                                        />
                                    }
                                </div>
                                <div className='flex flex-row mt-10'>
                                    <div className="basis-1/2 pr-5">
                                        <Address
                                            control={control}
                                            setValue={setValue}
                                        /> 
                                    </div>
                                    <div className="basis-1/2 pl-5">
                                        { formType === TYPE_CONTACT && 
                                            <Controller
                                                name="jobPosition"
                                                control={control}
                                                render={({ field }) => 
                                                            <TextField
                                                                id="outlined-required"
                                                                className='w-full'
                                                                label="Job position"
                                                                {...field}
                                                            />
                                        
                                                }
                                            />
                                        }
                                        <Controller
                                            name="phone"
                                            control={control}
                                            render={({ field }) => 
                                                        <TextField
                                                            id="outlined-required"
                                                            className='w-full'
                                                            label="Phone"
                                                            {...field}
                                                        />
                                    
                                            }
                                        />
                                        <Controller
                                            name="mobile"
                                            control={control}
                                            render={({ field }) => 
                                                        <TextField
                                                            id="outlined-required"
                                                            className='w-full'
                                                            label="Mobile"
                                                            {...field}
                                                        />
                                    
                                            }
                                        />
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => 
                                                        <TextField
                                                            id="outlined-required"
                                                            className='w-full'
                                                            label="Email"
                                                            {...field}
                                                        />
                                    
                                            }
                                        />
                                        <Controller
                                            name="website"
                                            control={control}
                                            render={({ field }) => 
                                                        <TextField
                                                            id="outlined-required"
                                                            className='w-full'
                                                            label="Website"
                                                            {...field}
                                                        />
                                    
                                            }
                                        />
                                        { formType === TYPE_CONTACT &&
                                            <Controller
                                                name="userTitles"
                                                control={control}
                                                render={({ field: { name, onChange, value } }) => 
                                                    <SelectWithService 
                                                        path="userTitles"
                                                        label="Title"
                                                        name={name}
                                                        onChange={onChange}
                                                        value={value}
                                                    />
                                                }
                                            />
                                        }
                                        <Controller
                                            name="tags"
                                            control={control}
                                            render={({ field: { name, onChange, value } }) => 
                                                <SelectWithService 
                                                    path="tags"
                                                    label="Tags"
                                                    name={name}
                                                    onChange={onChange}
                                                    value={value}
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            </Box>
                            <button type="submit" ref={formButtonRef} style={{display: 'none'}}> </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default function ContainerFormContact() {
    return (
        <ActionsContext.Consumer>
            {({setNavAction}) => 
                <FormContact setNavAction={setNavAction} />
            }
        </ActionsContext.Consumer>
    )
};