import {useEffect} from 'react'

const useTitleCount = (count) => {
    useEffect(() => {
        if (count) {
            document.title = `Click Count (${count})`;
        }
        else {
            document.title = `Click Count`;
        }
    }, [count]); 
}

export default useTitleCount