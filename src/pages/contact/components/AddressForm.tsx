import React, { useEffect, useState } from 'react';
import { 
    TextField
} from '@mui/material';
import { Controller, UseFormSetValue } from "react-hook-form";
import SelectWithService from '@components/SelectWithService';
import addressStateService from '@services/address/addressState.service';
import { State, Item } from "@interfaces/general";
import ModalState from './modal/stateList/ModalState';
import ListboxSimple from '@components/ListboxSimple';
import { Control, FieldValues } from 'react-hook-form';
import { mapForListboxSimple } from "@helpers/general";

type Props = {
    control: Control<FieldValues, object>,
    setValue: UseFormSetValue<FieldValues>
}

const AddressForm = ({
    control,
    setValue
}: Props) => {

    const [states, setStates] = useState<State[]>([]);
    const [stateOptionList, setStateOptionList] = useState<Item[]>([]);
    const [selectedStateItem, setSelectedStateItem] = useState<Item>();

    const getStates = () => {
        addressStateService.getByCompany(1)
        .then((res: any) => {
            const _states = res || [];
            setStates(_states);
            setStateOptionList(mapForListboxSimple(_states.slice(0, 6), "stateName"));
        }).catch(err => {
            console.log("AddressState getByCompany: ", err)
        })
    }

    const handleSelectedState = (selectedState: any) => {
        setSelectedStateItem({
            id: selectedState?.id,
            name: selectedState?.stateName
        });
    }

    const handleChangeState = (e: React.FormEvent<HTMLInputElement>) => {
        const _state = states?.find(state => state.id === parseInt(e.currentTarget.value));
        setValue('address.country', _state?.country);
    }

    useEffect(() => {
        getStates();
    }, [])

    return (
        <div
            className='w-full flex flex-row justify-between'
        >
            <div className="basis-1/3 pr-2">
                <Controller
                    name="address.typeId"
                    control={control}
                    render={({ field: { name, onChange, value } }) => 
                        <SelectWithService 
                            path="addressTypes"
                            label="Address type"
                            defaultValue=''
                            name={name}
                            onChange={onChange}
                            value={value}
                        />
                    }
                />
            </div>
            <div className="basis-2/3">
                <Controller
                    name="address.street"
                    control={control}
                    render={({ field }) => 
                                <TextField
                                id="outlined-required"
                                className='w-full'
                                label="Street"
                                {...field}
                            />
            
                    }
                />
                <Controller
                    name="address.street2"
                    control={control}
                    render={({ field }) => 
                                <TextField
                                id="outlined-required"
                                className='w-full'
                                label="Street 2"
                                {...field}
                            />
            
                    }
                />
                <div
                    className='w-full flex flex-roc xl:²w'
                >
                    <Controller
                        name="address.city"
                        control={control}
                        render={({ field }) => 
                                    <TextField
                                    id="outlined-required"
                                    className='w-full'
                                    label="City"
                                    {...field}
                                />
                
                        }
                    />
                    <Controller
                        name="address.stateId"
                        control={control}
                        render={({ field: { value, name, onChange } }) => 
                            <div className='m-[4px]'>
                                <ListboxSimple
                                    items={stateOptionList}
                                    additionalClass="min-w-[145px]"
                                    value={value}
                                    name={name}
                                    onSelectedItem={handleSelectedState}
                                    hasSearchMore
                                    selectedItem={selectedStateItem}
                                    onChange={(e) => {
                                        handleChangeState(e)
                                        onChange(e)
                                    }}
                                    ModalSearch={ModalState}
                                    modalAdditionalProps={{
                                        states,
                                        getStates
                                    }}
                                />
                            </div>
                        }
                    />
                    <Controller
                        name="address.zip"
                        control={control}
                        render={({ field }) => 
                                    <TextField
                                    id="outlined-required"
                                    className='w-full'
                                    label="Zip"
                                    {...field}
                                />
                
                        }
                    />
                </div>
                <Controller
                    name="address.country"
                    control={control}
                    render={({ field: { name, value, onChange, onBlur } }) => 
                                <TextField
                                    id="outlined-required"
                                    className='w-full'
                                    label="Country"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    name={name}
                                    value={value || ""}
                            />
            
                    }
                />
            </div>
        </div>
    )
}

export default AddressForm;