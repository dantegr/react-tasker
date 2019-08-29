import {useState} from 'react'

const useModal = () => {
    const [appears,setAppears] = useState(false);

    const toggle = () => {
        setAppears(!appears)
    }

    return{
        appears,
        toggle
    }
}

export default useModal;