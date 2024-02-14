import React from "react";
import * as FaIcons from "react-icons/fa6";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const sidebarData =[
    {
        title: 'Home',
        path:'/',
        icon:<RiIcons.RiHome2Fill/>,
        cName: 'nav-text'
    },
    {
        title: 'COMPUTER&OFFICE',
        path:'/computers',
        icon:<FaIcons.FaComputer/>,
        cName: 'nav-text'
    },
    {
        title: 'APPLIANCES',
        path:'/appliances',
        icon:<GiIcons.GiWashingMachine/>,
        cName: 'nav-text'
    },
    {
        title: 'TV,SOUNDS&SMART HOME',
        path:'/tv_sound_home',
        icon:<RiIcons.RiComputerFill/>,
        cName: 'nav-text'
    },
    {
        title: 'GAMING',
        path:'/game',
        icon:<IoIcons.IoLogoGameControllerB/>,
        cName: 'nav-text'
    },
]