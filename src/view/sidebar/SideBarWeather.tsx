import React from 'react'
import SideBarWeatherContent from '../../components/sidebar/SideBarWeatherContent'

type Props = {}

const SideBarWeather = (props: Props) => {
    return (
        <>
            <li className="sidebar-weather">
                <SideBarWeatherContent />
            </li>
        </>
    )
}

export default SideBarWeather