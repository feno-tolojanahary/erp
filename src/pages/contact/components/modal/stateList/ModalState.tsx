import React, { useEffect, useRef, useState } from 'react'
import TableState from "./TableState";
import ModalBase from "@components/ModalBase"
import { 
  Button
} from '@mui/material';
import ModalCreateState from '../createState/ModalCreateState';
import { State } from "@interfaces/general";

type Props = {
  isOpen: boolean,
  setIsOpenModal: (isOpen: boolean) => void,
  onSelected: (row: State) => void,
  states: State[],
  getStates: () => void
}

export default function MyModal({
    isOpen,
    setIsOpenModal,
    onSelected,
    states,
    getStates
}: Props) {

  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  let completeButtonRef = useRef<HTMLButtonElement>(null);

  return (
      <>
        <ModalBase
            isOpen={isOpen}
            setIsOpenModal={setIsOpenModal}
            title='Search: State'
          >
            <TableState 
              rows={states}
              onSelected={onSelected}
            />

            <div className="mt-4 w-48 m-2 flex justify-items-end justify-between">
              <Button 
                  ref={completeButtonRef}
                  className="flex" 
                  variant="contained"
                  onClick={() => setIsOpenModalCreate(true)}
                  >
                      Create
              </Button>
              <Button 
                  variant="outlined"
                  onClick={() => setIsOpenModal(false)}
              >
                  Cancel
              </Button>
            </div>
        </ModalBase>
        <ModalCreateState 
          refreshStates={getStates}
          isOpen={isOpenModalCreate}
          setIsOpenModal={setIsOpenModalCreate}
        />
      </>
  )
}
