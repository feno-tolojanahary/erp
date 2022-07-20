import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { 
    TextField,
    Button,
    Box
} from '@mui/material';
import { stopPropagate } from '@helpers/general';
import ListboxSimple from '@components/ListboxSimple';
import ModalCountries from '../countries/ModalCountries';

const peoples = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

const StateForm = ({
    setIsOpenModal
}: any) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("The form is submited: ", data)
    }

    const selectedCountry = (selected: any) => {
        console.log("the selected country: ", selected)
    }

    const onChangeCountry = (value: string | string[]) => {
        console.log("onChangeCountry: ", value)
    }

    return (
        <div className="w-[36rem]">
            <form
                onSubmit={stopPropagate(handleSubmit(onSubmit))}
            >
                <Box
                    component="div"
                    sx={{
                        '& .MuiFormControl-root': { m: 1, width: '100%' },
                    }}
                    className='w-full flex flex-col'
                >
                    <Controller
                        name="stateName"
                        control={control}
                        render={({ field }) => 
                                    <TextField
                                    id="outlined-required"
                                    className='w-full'
                                    label="State Name"
                                    {...field}
                                />
                
                        }
                    />
                    <Controller
                        name="stateCode"
                        control={control}
                        render={({ field }) => 
                                    <TextField
                                    id="outlined-required"
                                    className='w-full'
                                    label="State Code"
                                    {...field}
                                />
                
                        }
                    />
                    <Controller
                        name="country"
                        control={control}
                        render={({ field }) => 
                                
                            <div className="MuiFormControl-root MuiTextField-root w-full css-1u3bzj6-MuiFormControl-root-MuiTextField-root">    
                                <ListboxSimple
                                    items={peoples}
                                    name='countries'
                                    onSelectedItem={selectedCountry}
                                    onChange={onChangeCountry}
                                />
                            </div>
                        }
                    />
                </Box>
                <div className="mt-4 w-48 m-2 flex justify-items-end justify-between">
                    <Button 
                        className="flex" 
                        variant="contained"
                        type='submit'
                        >
                            Save
                    </Button>
                    <Button 
                        variant="outlined"
                        onClick={() => setIsOpenModal(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default StateForm