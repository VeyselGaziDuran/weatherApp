import React from 'react'
import './WatherApp.css'
import serch_icon from '../Assets/PhosphorIcons/cloud.png'

const WatherApp = () => {
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className='cityInput' placeholder='Search' />
            </div>
        </div>
    )
}
export default WatherApp