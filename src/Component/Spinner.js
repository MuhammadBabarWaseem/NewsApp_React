import React from 'react'
import loading from './Settings.gif'

const Spinner = () => {

    return (
        <div className='text-center my-5'>
            <img src={loading} alt="loading" srcSet="" />
        </div>
    )
}

export default Spinner