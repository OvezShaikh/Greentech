import React from 'react'
import { Link } from 'react-router-dom';
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

const NavbarList = ({ navListMenuItems, id}) => {
    if (!navListMenuItems || !Array.isArray(navListMenuItems)) {
        return null; 
    }

    return navListMenuItems.map(
        ({ icon, title, description,link }, key) => (
            <Link to={link} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div> */}
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                          
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </Link>
        ),
    );
    // return (
    //     <MenuList className="hidden max-w-screen-xl rounded-xl lg:block" id={id}>
    //         <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
    //             {renderItems}
    //         </ul>
    //     </MenuList>
    // )
}

export default NavbarList