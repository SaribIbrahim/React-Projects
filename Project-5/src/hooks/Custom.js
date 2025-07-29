import React from 'react'
import { useState } from 'react'
const useCustom = () => {

    const [isOpen,setOpen]=useState(false)

    const onOpen=()=>{
      setOpen(true)
    }

    const onClose=()=>{
      setOpen(false)
    }


  return {
    isOpen,onClose,onOpen
  }
}

export default useCustom