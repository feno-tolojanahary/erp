import React, { useEffect } from 'react';
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
import Address from "./components/Address";
import { useAppDispatch, useAppSelector } from '../../store/app/hooks';
import { updateNavAction } from '../../store/slices/navAction';

type propsType = {

}

const CreateContactPage : React.FC<propsType> = (props: propsType) => {
    const navAction = useAppSelector((state) => state.navAction);
    const dispatch = useAppDispatch();

    const changeActionState = () => {
        console.log("principal value: ", navAction);
        dispatch(updateNavAction({
            button: "listing",
            page: 'newContact'
        }))
    }

    useEffect(() => {
        console.log("nav action change: ", navAction);
    }, [navAction])

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
                        className='w-full flex flex-col'
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
                                <FormControl fullWidth>
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
                                </FormControl>
                            </div>
                        </div>
                    </Box>
                    <Button
                        onClick={changeActionState}
                    >
                        Change Action state
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CreateContactPage;