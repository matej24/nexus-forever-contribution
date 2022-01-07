import React from 'react'
import { Link } from 'react-router-dom'
import { FAQ_PAGE, HOME_PAGE } from '../../../Routing/RouteNames'

export default function HeaderComponent() {

    console.log(window.location)

    const checkIfActive = () => {

    }

    return (
        <div className='header-holder'>
            <div className='logo-holder'>
                LOGO
            </div>
            <div className='routes-holder'>
                <Link className="router-link-custom" to={HOME_PAGE}>
                    <div className='route-holder'>
                        <p className='route-name'>HOME</p>
                    </div>
                </Link>
                <Link className="router-link-custom" to={FAQ_PAGE}>
                    <div className='route-holder'>
                        <p className='route-name'>FAQ</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
