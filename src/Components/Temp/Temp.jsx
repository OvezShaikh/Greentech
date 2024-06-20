import React, { useState } from "react";
import logo from '../Navbar/logo.png'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import NavbarList from "./NavbarList";
import WaveSvg from "./WaveSvg"
import wave4 from '../../Assets/wave4.png'
// import wave from "../../Assets/wave.svg"
// import wave2 from "../../Assets/wave2.png"
import { Product } from '../Products/Products_api'
import Scurve from '../../Assets/scurves.png';

const navListMenuItemsSolution = [
    {
        title: "Solution",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
]

const navListMenuItemsSupport = [
    {
        title: "Support",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
]

const navListMenuItemsAbout = [
    {
        title: "Our Coorporate",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "Partner",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "Policy",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "Support",
        description: "",
        icon: SquaresPlusIcon,
    },
]

const navListMenuItems = [
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
    {
        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
    },
    {
        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
    },
    {
        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
    },
    {
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
    },
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: RectangleGroupIcon,
    },
    {
        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
    },
];

function NavListMenu({ navEle }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 font-semibold text-white text-lg shadow-transparent px-3 hover:bg-green-700"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            {navEle}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                {
                    navEle === 'Products' ?
                        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                                {/* {renderItems} */}
                                <NavbarList navListMenuItems={navListMenuItems} />
                            </ul>
                        </MenuList>
                        :
                        (
                            navEle === 'Solutions' ?
                                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                                        {/* {renderItems} */}
                                        <NavbarList navListMenuItems={navListMenuItemsSolution} />
                                    </ul>
                                </MenuList>

                                :
                                (navEle === 'Support' ? <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                                        {/* {renderItems} */}
                                        <NavbarList navListMenuItems={navListMenuItemsSupport} />
                                    </ul>
                                </MenuList> : <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                                        {/* {renderItems} */}
                                        <NavbarList navListMenuItems={navListMenuItemsAbout} />
                                    </ul>
                                </MenuList>)
                        )


                }
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    {
                        navEle === 'Products' ?
                            <NavbarList navListMenuItems={navListMenuItems} />
                            :
                            (
                                navEle === 'Solutions' ?
                                    <NavbarList navListMenuItems={navListMenuItemsSolution} />
                                    :
                                    (navEle === 'Support' ? <NavbarList navListMenuItems={navListMenuItemsSupport} />
                                        : <NavbarList navListMenuItems={navListMenuItemsAbout} />)
                            )
                    }
                </Collapse>
            </div>
        </>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            {/* <Typography
                as="a"
                href="#"
                variant="h6"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700">Home</ListItem>
            </Typography> */}
            <NavListMenu navEle='About' />
            <NavListMenu navEle='Products' />
            <NavListMenu navEle='Solutions' />
            <NavListMenu navEle='Support' />
            <Typography
                as="a"
                href="#"
                variant="small"
                color=""
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-white text-lg shadow-transparent px-3 hover:bg-green-700 focus:bg-transparent">
                    Contact Us
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="/Dashboard"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-white text-lg shadow-transparent px-3 hover:bg-green-700">
                    Login
                </ListItem>
            </Typography>
        </List>
    );
}

const MegaMenuWithHover = () => {
    const [openNav, setOpenNav] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && (setOpenNav(false), setScreenWidth(window.innerWidth), controlButton('-1', '0')),
        );
    }, []);

    const controlButton = (inital, later) => {
        const customSliders = document.getElementsByClassName("custom-sliders")[0];
        if (customSliders) {
            if (openNav) customSliders.style.zIndex = inital;
            else customSliders.style.zIndex = later;
        }
    }


    return (
        <>

            <Navbar className="shadow-none bg-color bg-green-300 rounded-none border-0 max-w-none bg-opacity-100 p-0 h-20">
                {/* <div className="line line1"></div>
                <div className="line line2"></div> */}
                {/* <WaveSvg /> */}
                <div className="text-blue-gray-900">
                    <div style={{ display: 'grid', gridTemplateColumns: "300px 1fr" }}>
                        <div className="flex" style={{ height: '81px' }}>
                            <Typography
                                as="a"
                                href="#"
                                variant="h6"
                                className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                                style={{ backgroundColor: "#ffffff", margin: 0, padding: "0px 0px 0px 30px" }}
                            >

                                <a href="/"> <img src={logo} className='w-auto h-20 inline cursor-pointer' alt='Logo' /></a>

                            </Typography>
                            <img src={Scurve} height={300} width={90} className='' />
                        </div>
                        <div className="flex items-center justify-around">
                            <div className="hidden lg:block">
                                <NavList />
                            </div>

                            <IconButton
                                variant="text"
                                color=""
                                className="lg:hidden"
                                onClick={() => {
                                    setOpenNav(!openNav);
                                    controlButton("0", '-1');
                                }}
                            >
                                {openNav ? (
                                    <XMarkIcon className="h-6 w-6 text-black" strokeWidth={2} />
                                ) : (
                                    <Bars3Icon className="h-6 w-6 text-black" strokeWidth={2} />
                                )}
                            </IconButton>
                            <button className='sm:hidden xs:hidden lg:block bg-green-600 text-white font-normal duration-500 px-6 py-2 mx-4 hover:bg-green-700 rounded'>
                                <a href="/Enquiry"> Enquiry </a> </button>
                        </div>
                    </div>

                </div>
                <Collapse open={openNav} className="bg-green-400 lg:hidden" style={{marginTop:'-1px', padding:'0 0 10px 10px'}}>
                    <NavList />
                    <button className='lg:hidden bg-green-600 text-white font-normal duration-500 px-6 py-2 mx-4 hover:bg-green-700 rounded ml-auto'>
                        <a href="/Enquiry"> Enquiry </a>
                    </button>
                </Collapse>
            </Navbar>
        </>
    );
}
export default MegaMenuWithHover