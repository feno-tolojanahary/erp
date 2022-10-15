import React, { useRef } from "react";
import photoUpload from "@assets/images/photo.png";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Control, Controller, FieldValues } from "react-hook-form";

type propsType = {
    control: Control<FieldValues, object>
}

const UploadPhoto = (props: propsType) => {
    const {
        control
    } = props;

    let inputFileRef = useRef<HTMLInputElement>(null); 

    const triggerChoose = () => {
        inputFileRef.current?.click();
    }

    return (
        <div className="w-64 relative">
            <Controller
                name="file"
                control={control}
                defaultValue=""
                render={({ field: { name, value, onChange, onBlur } }) => 
                    <>
                        <div className='w-64 h-8 absolute bg-sky-600/75 none justify-between items-center hover:flex'>
                            <EditRoundedIcon onClick={triggerChoose} fontSize="small" />
                            <DeleteForeverRoundedIcon fontSize="small" />
                        </div>
                        <img 
                            src={photoUpload}
                            className="w-full" 
                            alt=''
                        />
                        <input 
                            type="file" 
                            ref={inputFileRef}
                            className="none"
                            name={name}  
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    </>
                }
            />
        </div>
    )
}

export default UploadPhoto;