import React, { useRef, useState } from "react";
import { getImageUrl } from "@helpers/general";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Control, Controller, FieldValues, UseFormReset, UseFormGetValues } from "react-hook-form";

type propsType = {
    control: Control<FieldValues, object>,
    reset: UseFormReset<FieldValues>,
    getValues: UseFormGetValues<FieldValues>
}

const UploadPhoto = (props: propsType) => {
    const {
        control,
        reset,
        getValues
    } = props;

    let inputFileRef = useRef<HTMLInputElement>(null); 
    const [imageUrl, setImageUrl] = useState<string>();

    const triggerChoose = () => {
        inputFileRef.current?.click();
    }

    const handleUploadedFile = (e: React.FormEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const file: Blob = e.currentTarget?.files?.[0] as Blob;
        reader.readAsDataURL(file);
        reader.onloadend = (_) => {
            setImageUrl(reader.result as string);
        }
    }

    const removeSelected = (_e: any) => {
        setImageUrl(getImageUrl(null));
        reset({
            file: null
        });
    }

    return (
        <div className="w-64 relative">
            <Controller
                name="file"
                control={control}
                defaultValue=""
                render={({ field: { name, value, onBlur } }) => 
                    <>
                        <div className='w-64 h-8 absolute bg-sky-600/75 none justify-between items-center hover:flex'>
                            <EditRoundedIcon onClick={triggerChoose} fontSize="small" />
                            <DeleteForeverRoundedIcon fontSize="small" onClick={removeSelected} />
                        </div>
                        <img 
                            src={imageUrl ?? getValues('imageUrl')}
                            className="w-full" 
                            alt=''
                        />
                        <input 
                            type="file" 
                            ref={inputFileRef}
                            className="none"
                            accept="image/*"
                            name={name}  
                            value={value}
                            onChange={handleUploadedFile}
                            onBlur={onBlur}
                        />
                    </>
                }
            />
        </div>
    )
}

export default UploadPhoto;