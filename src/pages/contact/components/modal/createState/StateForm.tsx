import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { 
    TextField,
    Button,
    Box
} from '@mui/material';
import { stopPropagate } from '@helpers/general';
import SelectSimple from "@components/SelectSimple";
import ModalCountries from '../countries/ModalCountries';

const StateForm = ({
    setIsOpenModal
}: any) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("The form is submited: ", data)
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
                                <SelectSimple 
                                    optionList={[]}
                                    hasSearchMore
                                    modalSearch={ModalCountries}
                                />
                
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