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
import { Product } from '../Products/Products_api'
import Scurve from '../../Assets/scurves.png'
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const navListMenuItemsSolution = [
    {
        title: "Solution",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: ''
    },
]

const navListMenuItemsSupport = [
    {
        title: "Support",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: ''
    },
    {
        title: "After Sales Service",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: '/AfterSalesService'
    },
    {
        title: "AMC",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: '/Amc'

    },
    {
        title: "Change Parts",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: '/ChangeParts'
    },
    {
        title: "Training",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: '/Training'
    },
]

const navListMenuItemsAbout = [
    {
        title: "Our Coorporate",
        description: "",
        icon: SquaresPlusIcon,
        link: '/ourCorporate',
    },
    {
        title: "Partner",
        description: "",
        icon: SquaresPlusIcon,
        link: '/Partner'
    },
    {
        title: "Policy",
        description: "",
        icon: SquaresPlusIcon,
        link: '/Policy',
    },
    {
        title: "Support",
        description: "",
        icon: SquaresPlusIcon,
        link: ''
    },
]

const navListMenuItems = [
    {

        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: '/Products'
    },
    {

        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
        link: '/About'
    },
    {

        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
        link: ''
    },
    {

        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
        link: ''
    },
    {
        id: 14,
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
        link: ''
    },
    {

        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
        link: '/ContactUs'
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
        link: ''
    },
    {

        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
        link: ''
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
                            className="flex items-center gap-2 font-sans font-Fredoka py-2 pr-4 font-bold text-gray-900 text-white text-lg shadow-transparent px-3 hover:bg-green-700 
                            active:bg-inherit focus:bg-green-700 focus:bg-opacity-10 active:bg-opacity-10"

                            // selected={isMenuOpen || isMobileMenuOpen}
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
    const [auth,setAuth] = useAuth();

    const handleLogout = () =>{
        setAuth({
            ...auth,
            user:null,
            token:""
        });
        localStorage.removeItem('auth')
    }
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
                href="/Contact Us"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center font-sans font-Fredoka font-bold  gap-2 py-2 pr-4  text-white text-lg shadow-transparent px-3 hover:bg-green-700">
                    Contact Us
                </ListItem>
            </Typography>
            {!auth.user ? (<>
                <Typography
                as="a"
                href="/Login"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700">
                    Login
                </ListItem>
            </Typography></>) : (<>
                <Typography
                as="a"
                href="/Login"
                variant="small"
                color="blue-gray"
                className="font-medium"
                onClick={handleLogout}
            >
                <ListItem className="flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700">
                    Logout
                </ListItem>
            </Typography></>)
            }
            <Typography
                as="a"
                href="/AdminDashboard"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700">
                    Admin Dashboard
                </ListItem>
            </Typography>
        </List>
    );
}

const MegaMenuWithHover = () => {
    const [openNav, setOpenNav] = useState(false);
    

    return (
        <Navbar className="shadow-none bg-green-500 rounded-none border-0 max-w-none bg-opacity-100 py-0 px-0" >
            <div className="grid-container text-blue-gray-900">
                <div className="flex" style={{ height: '95px' }}>
                    <Typography
                        as="a"
                        href="/"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                        style={{ backgroundColor: "#ffffff", margin: 0, padding: "0px 0px 0px 30px" }}
                    >
                        <img src={logo} className='w-auto h-20 inline cursor-pointer ms-18' alt='Logo' />

                    </Typography>
                    <img src={Scurve} width={90} className='' style={{ height: '96.1px' }} />
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden ml-10"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 text-black" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-black" strokeWidth={2} />
                    )}
                </IconButton>
                <div className="pl-10">
                    <button className='max-tablet:hidden max-desktop:block font-bold bg-green-600 text-white  duration-500 px-6 py-2 mx-4 hover:bg-green-700 rounded'>
                        {/* <a href="/Enquiry"> Enquiry </a>| */}
                        <Link to='/EnquiryForm'>Enquiry</Link>
                    </button>
                </div>
            </div>
            <Collapse open={openNav}>
                <div className="p-10 lg:hidden">
                    <NavList />
                    <button className='lg:hidden bg-green-600 font-bold text-white duration-500 px-6 py-2 mx-4 hover:bg-green-700 rounded ml-auto'>
                        {/* <a href="/Enquiry"> Enquiry </a>| */}
                        <Link to='/EnquiryForm'>Enquiry</Link>
                    </button>
                </div>
            </Collapse>
        </Navbar>
    );
}
export default MegaMenuWithHover















// import React, { useState } from "react";
// import logo from '../Navbar/logo.png'
// import {
//     Navbar,
//     Collapse,
//     Typography,
//     IconButton,
//     List,
//     ListItem,
//     Menu,
//     MenuHandler,
//     MenuList,
//     MenuItem,
// } from "@material-tailwind/react";
// import {
//     ChevronDownIcon,
//     Bars3Icon,
//     XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//     Bars4Icon,
//     GlobeAmericasIcon,
//     NewspaperIcon,
//     PhoneIcon,
//     RectangleGroupIcon,
//     SquaresPlusIcon,
//     SunIcon,
//     TagIcon,
//     UserGroupIcon,
// } from "@heroicons/react/24/solid";
// import NavbarList from "./NavbarList";
// import { Product } from '../Products/Products_api'
// import Scurve from '../../Assets/scurves.png'
// import { Link } from "react-router-dom";

// const navListMenuItemsSolution = [
//     {
//         title: "Solution",
//         description: "Find the perfect solution for your needs.",
//         icon: SquaresPlusIcon,
//         link: ''
//     },
// ]

// const navListMenuItemsSupport = [
//     {
//         title: "Support",
//         description: "Find the perfect solution for your needs.",
//         icon: SquaresPlusIcon,
//         link: ''
//     },
//     {
//         title: "After Sales Service",
//         description: "Find the perfect solution for your needs.",
//         icon: SquaresPlusIcon,
//         link: '/AfterSalesService'
//     },
//     {
//         title: "AMC",
//         description: "Find the perfect solution for your needs.",
//         icon: SquaresPlusIcon,
//         link: '/Amc'

//     },
//     {
//         title: "Change Parts",
//         description: "Find the perfect solution for your needs.",
//         icon: SquaresPlusIcon,
//         link: '/ChangeParts'
//     },
//     {
//         title: "Training",
//         description: "Find the perfect solution for your needs.",
//         icon: SquaresPlusIcon,
//         link: '/Training'
//     },
// ]

// const navListMenuItemsAbout = [
//     {
//         title: "Our Coorporate",
//         description: "",
//         icon: SquaresPlusIcon,
//         link: '/ourCorporate',
//     },
//     {
//         title: "Partner",
//         description: "",
//         icon: SquaresPlusIcon,
//         link: '/Partner'
//     },
//     {
//         title: "Policy",
//         description: "",
//         icon: SquaresPlusIcon,
//         link: '/Policy',
//     },
//     {
//         title: "Support",
//         description: "",
//         icon: SquaresPlusIcon,
//         link: ''
//     },
// ]

// const navListMenuItems = [
//     {

//         title: "Products",
//         description: "Find the perfect solution for your needs.",
//         icon: SquaresPlusIcon,
//         link: '/Products'
//     },
//     {

//         title: "About Us",
//         description: "Meet and learn about our dedication",
//         icon: UserGroupIcon,
//         link: '/About'
//     },
//     {

//         title: "Blog",
//         description: "Find the perfect solution for your needs.",
//         icon: Bars4Icon,
//         link: ''
//     },
//     {

//         title: "Services",
//         description: "Learn how we can help you achieve your goals.",
//         icon: SunIcon,
//         link: ''
//     },
//     {
//         id: 14,
//         title: "Support",
//         description: "Reach out to us for assistance or inquiries",
//         icon: GlobeAmericasIcon,
//         link: ''
//     },
//     {

//         title: "Contact",
//         description: "Find the perfect solution for your needs.",
//         icon: PhoneIcon,
//         link: '/ContactUs'
//     },
//     {
//         title: "News",
//         description: "Read insightful articles, tips, and expert opinions.",
//         icon: NewspaperIcon,
//         link: ''
//     },
//     {

//         title: "Special Offers",
//         description: "Explore limited-time deals and bundles",
//         icon: TagIcon,
//         link: ''
//     },
// ];

// function NavListMenu({ navEle }) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <>
//             <Menu
//                 open={isMenuOpen}
//                 handler={setIsMenuOpen}
//                 offset={{ mainAxis: 20 }}
//                 placement="bottom"
//                 allowHover={true}
//             >
//                 <MenuHandler>
//                     <Typography as="div" variant="small" className="font-medium">
//                         <ListItem
//                             className="flex items-center gap-2 font-sans font-Fredoka py-2 pr-4 font-bold text-gray-900 text-white text-lg shadow-transparent px-3 hover:bg-green-700 
//                             active:bg-inherit focus:bg-green-700 focus:bg-opacity-10 active:bg-opacity-10"

//                             // selected={isMenuOpen || isMobileMenuOpen}
//                             onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//                         >
//                             {navEle}
//                             <ChevronDownIcon
//                                 strokeWidth={2.5}
//                                 className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
//                                     }`}
//                             />
//                             <ChevronDownIcon
//                                 strokeWidth={2.5}
//                                 className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
//                                     }`}
//                             />
//                         </ListItem>
//                     </Typography>
//                 </MenuHandler>
//                 {
//                     navEle === 'Products' ?
//                         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//                             <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//                                 {/* {renderItems} */}
//                                 <NavbarList navListMenuItems={navListMenuItems} />
//                             </ul>
//                         </MenuList>
//                         :
//                         (
//                             navEle === 'Solutions' ?
//                                 <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//                                     <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//                                         {/* {renderItems} */}
//                                         <NavbarList navListMenuItems={navListMenuItemsSolution} />
//                                     </ul>
//                                 </MenuList>

//                                 :
//                                 (navEle === 'Support' ? <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//                                     <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//                                         {/* {renderItems} */}
//                                         <NavbarList navListMenuItems={navListMenuItemsSupport} />
//                                     </ul>
//                                 </MenuList> : <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//                                     <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//                                         {/* {renderItems} */}
//                                         <NavbarList navListMenuItems={navListMenuItemsAbout} />
//                                     </ul>
//                                 </MenuList>)
//                         )


//                 }
//             </Menu>
//             <div className="block lg:hidden">
//                 <Collapse open={isMobileMenuOpen}>
//                     {
//                         navEle === 'Products' ?
//                             <NavbarList navListMenuItems={navListMenuItems} />
//                             :
//                             (
//                                 navEle === 'Solutions' ?
//                                     <NavbarList navListMenuItems={navListMenuItemsSolution} />
//                                     :
//                                     (navEle === 'Support' ? <NavbarList navListMenuItems={navListMenuItemsSupport} />
//                                         : <NavbarList navListMenuItems={navListMenuItemsAbout} />)
//                             )
//                     }
//                 </Collapse>
//             </div>
//         </>
//     );
// }

// function NavList() {
//     const [isLoggedIn, setIsLoggedIn]=useState(!!localStorage.getItem('Token'))

//     const handleLogout=()=>{
//         localStorage.removeItem('Token')
//     }
//     return (
//         <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//             {isLoggedIn?(
//                 <>
//             {/* <Typography
//                 as="a"
//                 href="#"
//                 variant="h6"
//                 color="blue-gray"
//                 className="font-medium"
//             >
//                 <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700">Home</ListItem>
//             </Typography> */}
//             <NavListMenu navEle='About' />
//             <NavListMenu navEle='Products' />
//             <NavListMenu navEle='Solutions' />
//             <NavListMenu navEle='Support' />
//             <Typography
//                 as="a"
//                 href="/Contact Us"
//                 variant="small"
//                 color="blue-gray"
//                 className="font-medium"
//             >
//                 <ListItem className="flex items-center font-sans font-Fredoka font-bold  gap-2 py-2 pr-4  text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700">
//                     Contact Us
//                 </ListItem>
//             </Typography>
//             <Typography
//                 as="a"
//                 href="/AdminDashboard"
//                 variant="small"
//                 color="blue-gray"
//                 className="font-medium"
//             >
//                 <ListItem className="flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700">
//                     Admin Dashboard
//                 </ListItem>
//             </Typography>
//             <Typography
//                 as="a"
//                 href="/"
//                 variant="small"
//                 color="blue-gray"
//                 className="font-medium"
//             >
//                 <ListItem onClick={handleLogout}
//                      className="flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700">
//                     Logout
//                 </ListItem>
//             </Typography>
//             <button className='max-tablet:hidden max-desktop:block flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700'>
//                         {/* <a href="/Enquiry"> Enquiry </a>| */}
//                         <Link to='/EnquiryForm'>Enquiry</Link>
//                     </button>
//             </>
//             ):(
//                 <>
//                 <Typography
//                 as="a"
//                 href="/Login"
//                 variant="small"
//                 color="blue-gray"
//                 className="font-medium"
//             >
//                 <ListItem className="flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700">
//                     Login
//                 </ListItem>
//             </Typography>
//             <Typography
//                 as="a"
//                 href="/Signup"
//                 variant="small"
//                 color="blue-gray"
//                 className="font-medium"
//             >
//                 <ListItem className="flex items-center font-sans font-Fredoka font-bold gap-2 py-2 pr-4 text-white text-lg shadow-transparent px-3 hover:bg-green-700 active:bg-green-500 focus:bg-green-700">
//                     Register
//                 </ListItem>
//             </Typography>
//                 </>

//             )
//         }
//         </List>
//     );
// }

// const MegaMenuWithHover = () => {
//     const [openNav, setOpenNav] = useState(false);
    

//     return (
//         <Navbar className="shadow-none bg-green-500 rounded-none border-0 max-w-none bg-opacity-100 py-0 px-0" >
//             <div className="grid-container text-blue-gray-900">
//                 <div className="flex" style={{ height: '95px' }}>
//                     <Typography
//                         as="a"
//                         href="/"
//                         variant="h6"
//                         className="mr-4 cursor-pointer py-1.5 lg:ml-2"
//                         style={{ backgroundColor: "#ffffff", margin: 0, padding: "0px 0px 0px 30px" }}
//                     >
//                         <img src={logo} className='w-auto h-20 inline cursor-pointer ms-18' alt='Logo' />

//                     </Typography>
//                     <img src={Scurve} width={90} className='' style={{ height: '96.1px' }} />
//                 </div>
//                 <div className="hidden lg:block">
//                     <NavList />
//                 </div>
//                 <IconButton
//                     variant="text"
//                     color="blue-gray"
//                     className="lg:hidden ml-10"
//                     onClick={() => setOpenNav(!openNav)}
//                 >
//                     {openNav ? (
//                         <XMarkIcon className="h-6 w-6 text-black" strokeWidth={2} />
//                     ) : (
//                         <Bars3Icon className="h-6 w-6 text-black" strokeWidth={2} />
//                     )}
//                 </IconButton>
//                 {/* <div className="pl-10">
//                     <button className='max-tablet:hidden max-desktop:block font-bold bg-green-600 text-white  duration-500 px-6 py-2 mx-4 hover:bg-green-700 rounded'>
//                         <Link to='/EnquiryForm'>Enquiry</Link>
//                     </button>
//                 </div> */}
//             </div>
//             <Collapse open={openNav}>
                
//                 <div className="p-10 lg:hidden">
                
//                     <NavList />
//                      <button className='lg:hidden bg-green-600 font-bold text-white duration-500 px-6 py-2 mx-4 hover:bg-green-700 rounded ml-auto'>
//                         <Link to='/EnquiryForm'>Enquiry</Link>
//                     </button> 
                  
            
//                 </div>
//             </Collapse>
//         </Navbar>
//     );
// }
// export default MegaMenuWithHover