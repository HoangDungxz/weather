import React from 'react'
import SideBarWeather from './SideBarWeather';
import SiderBarNav from './SiderBarNav';

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <>
            <div className="side-nav">
                <div className="title">
                    <div>Wea<span>ther</span></div>
                </div>
                <div className="side-nav__devider"></div>
                <ul>
                    <SiderBarNav />
                    <SideBarWeather />
                </ul>

            </div>
        </>
    )
}
export default Sidebar;