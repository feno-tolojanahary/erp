import React, { useEffect, useState } from 'react';
import { 
    TextField
} from '@mui/material';
import { Controller, UseFormSetValue } from "react-hook-form";
import SelectWithService from '@components/SelectWithService';
import addressStateService from '@services/address/addressState.service';
import { State, Item } from "@interfaces/general";
import ModalState from './modal/stateList/ModalState';
import ListboxSimple from '@components/ListboxSimple2';
import { Control, FieldValues } from 'react-hook-form';
import { mapForListboxSimple } from "@helpers/general";
import { getValue } from '@testing-library/user-event/dist/utils';

type Props = {
    control: Control<FieldValues, object>,
    setValue: UseFormSetValue<FieldValues>,
    watch: UseFormSetValue<FieldValues>,
    address: any
}

const AddressForm = ({
    control,
    setValue,
    watch,
    address
}: Props) => {

    const [states, setStates] = useState<State[]>([]);
    const [stateOptionList, setStateOptionList] = useState<Item[]>([]);
    const [selectedStateItem, setSelectedStateItem] = useState<Item>();
    const watchStateChange = watch("address.stateId", 0);

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

    useEffect(() => {
        const selectedState = states?.find(state => state.id === ((watchStateChange as unknown) as number));
        if (selectedState) setValue('address.country', selectedState?.country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchStateChange])

    useEffect(() => {
        getStates();
    }, [])

    return (
        <div
            className='w-full flex flex-row justify-bet ween'
        >
            <div className="basis-1/3 pr-2">
                <Controller
                    name="address.typeId"
                    control={control}
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
                        render={({ field: { value, name, onChange } }) => 
                            <div className='m-[4px]'>
                                <ListboxSimple
                                    items={stateOptionList}
                                    additionalClass="min-w-[145px]"
                                    value={value}
                                    name={name}
                                    hasSearchMore
                                    ModalSearch={ModalState}
                                    modalAdditionalProps={{
                                        states,
                                        getStates
                                    }}
                                    setValue={setValue}
                                />
                            </div>
                        }
                    />
                    <Controller
                        name="address.zip"
                        control={control}
                        defaultValue=""
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
                    defaultValue=""
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