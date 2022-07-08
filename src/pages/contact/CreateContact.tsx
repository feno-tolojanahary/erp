import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { 
    TextField,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button
} from '@mui/material';
import { useForm } from "react-hook-form";
import Address from "./components/Address";
import { ActionsContext, NavAction } from '../../context/actions';

type propsType = {
    setNavAction: Dispatch<SetStateAction<NavAction>>
}

const CreateContactPage : React.FC<propsType> = (props: propsType) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { handleSubmit } = useForm();

    useEffect(() => {
        props.setNavAction({
            button: "create",
            page: 'contact',
            prevUrl: '/contact',
            formRef: formRef
        })
    }, [formRef])                             
    
    const onSubmit = () => {
        console.log("The form is submited")
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
                    <Box
                        component="form"
                        sx={{
                            '& .MuiFormControl-root': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                        className='w-full flex flex-col'
                        ref={formRef}
                        >
                        <div className='w-[60%] mt-10'>
                            <TextField
                                required
                                id="outlined-required"
                                className='w-full'
                                label="e.g. Brandon Freeman"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                className='w-full'
                                label="Company name"
                            />

                        </div>
                        <div className='flex flex-row mt-10'>
                            <div className="basis-1/2 pr-5">
                                <Address/>
                            </div>
                            <div className="basis-1/2 pl-5">
                                <TextField
                                    required
                                    className='w-full'
                                    id="outlined-required"
                                    label="Job position"
                                />
                                <TextField
                                    required
                                    className='w-full'
                                    id="outlined-required"
                                    label="Phone"
                                />
                                <TextField
                                    required
                                    className='w-full'
                                    id="outlined-required"
                                    label="Mobile"
                                />
                                <TextField
                                    required
                                    className='w-full'
                                    id="outlined-required"
                                    label="Email"
                                />
                                <TextField
                                    required
                                    className='w-full'
                                    id="outlined-required"
                                    label="Website"
                                />
                                {/* <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Title"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Doctor</MenuItem>
                                        <MenuItem value={20}>Madam</MenuItem>
                                        <MenuItem value={30}>Miss</MenuItem>
                                    </Select>
                                </FormControl> */}
                            </div>
                        </div>
                    </Box>
                    <Button
                    >
                        Change Action state
                    </Button>
                </div>
            </div>
        </>
    )
}

export default function ContainerCreateContactPage() {
    return (
        <ActionsContext.Consumer>
            {({setNavAction}) => 
                <CreateContactPage setNavAction={setNavAction} />
            }
        </ActionsContext.Consumer>
    )
};