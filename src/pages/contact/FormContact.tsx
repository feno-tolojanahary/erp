import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
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

type propsType = {
    setNavAction: Dispatch<SetStateAction<NavAction>>
}

const FormContact : React.FC<propsType> = (props: propsType) => {
    const formButtonRef = useRef<HTMLButtonElement | null>(null);
    const { control, handleSubmit } = useForm();

    useEffect(() => {
        props.setNavAction({
            button: "create",
            page: 'contact',
            prevUrl: '/contact',
            formButtonRef: formButtonRef
        })
    }, [formButtonRef])                             
    
    const onSubmit = (data: any) => {
        console.log("The form is submited: ", data)
    }

    return (
        <>
            
            <div className="w-full">
                <div className="container mx-auto ">
                    <div className="flex">
                        <FormControl>
                            <RadioGroup
                                row
                            >
                                <FormControlLabel value="individual" control={<Radio/>} label="Individual"/>
                                <FormControlLabel value="company" control={<Radio/>} label="Company"/>
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
                                        name="fullName"
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
                                    
                                    <Controller
                                        name="companyName"
                                        control={control}
                                        render={({ field }) => 
                                                    <TextField
                                                        id="outlined-required"
                                                        className='w-full'
                                                        label="Company name"
                                                        {...field}
                                                    />
                                
                                        }
                                    />
                                </div>
                                <div className='flex flex-row mt-10'>
                                    <div className="basis-1/2 pr-5">
                                        <Address/>
                                    </div>
                                    <div className="basis-1/2 pl-5">
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
                                        <SelectWithService 
                                            path="userTitles"
                                            label="Title"
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