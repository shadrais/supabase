import React from 'react'
import LoaderSvg from '../assets/loader.svg'
const Loader = () => {
    return (
        <div className='grid place-items-center h-screen w-screen'>
            <img src={LoaderSvg} alt="loader" />
        </div>
    )
}

export default Loader