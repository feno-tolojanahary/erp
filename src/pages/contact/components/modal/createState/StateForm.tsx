import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { 
    TextField,
    Button,
    Box
} from '@mui/material';
import { stopPropagate } from '@helpers/general';
import ListboxSimple from '@components/ListboxSimple';
import ModalCountries from '../countries/ModalCountries';
import StaticService from "@services/static.service"
import addressStateService from '@services/address/addressState.service';
import { Country, Item } from "@interfaces/general";

type Props = {
    setIsOpenModal: (isOpen: boolean) => void,
    refreshStates: () => void
}

const StateForm = ({
    setIsOpenModal,
    refreshStates
}: Props) => {
    const { control, handleSubmit } = useForm();
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Item>();

    useEffect(() => {
        new StaticService().getAll('countries').then((res: any) => {
            setCountries(res);
          }).catch(err => console.error("Get countries: ", err))
    }, [])

    
    const handleTableSelectedCountry = (selected: Item): void => {
        setSelectedCountry(selected)
    }

    const onSubmit = (data: any) => {
        addressStateService.create(data)
            .then(_res => {
                refreshStates();
                setIsOpenModal(false);
            }).catch(err => {
                console.error("AddressState create: ", err)
            })
    }

    // const onChangeCountry = (value: string | string[]) => {
    //     console.log("onChangeCountry: ", value)
    // }

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
                                        items={countries.slice(0, 6)}
                                        selectedItem={selectedCountry}
                                        // onChange={onChangeCountry}
                                        onSelectedItem={handleTableSelectedCountry}
                                        {...field}
                                        hasSearchMore
                                        ModalSearch={ModalCountries}
                                        modalAdditionalProps={{
                                            countries
                                        }}
                                        attrVal="name"
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
