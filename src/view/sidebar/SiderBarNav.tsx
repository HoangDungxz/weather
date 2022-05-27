import React from 'react'
import { NavLink } from 'react-router-dom'
type Props = {}

const SiderBarNav = (props: Props) => {
    return (
        <>
            <li>
                <NavLink to="/#" className={({ isActive }) => {
                    return !isActive ? 'side-menu' : 'side-menu side-menu--active'
                }}>
                    <div className="side-menu__title">Today</div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/week" className={({ isActive }) => {
                    return !isActive ? 'side-menu' : 'side-menu side-menu--active'
                }}>
                    <div className="side-menu__title">Week</div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/hour" className={({ isActive }) => {
                    return !isActive ? 'side-menu' : 'side-menu side-menu--active'
                }}>
                    <div className="side-menu__title">Hour</div>
                </NavLink>
            </li></>
    )
}

export default SiderBarNav