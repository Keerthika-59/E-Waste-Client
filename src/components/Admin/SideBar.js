import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link, Redirect} from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <ProSidebar style = {{position : 'fixed'}} className = "mr-auto">
                <SidebarHeader className = "mx-auto">
                    <p> Administrator Dashboard </p>
                </SidebarHeader>

                <Menu iconShape="square">
                    <MenuItem > <Link to="/"> <p> Dashboard </p> </Link> </MenuItem>
                    
                    <SubMenu title="Representative">
                        <MenuItem>  Verify Representatives </MenuItem>
                        <MenuItem> View Representatives  </MenuItem>
                    </SubMenu>

                    <hr />

                    <MenuItem style={{ color: 'whitesmoke' }}> <p> View Users </p>   </MenuItem>
                    
                    <MenuItem style = {{color : 'whitesmoke'}}> <p> View Donations </p>  </MenuItem>
                    <MenuItem style = {{color : 'whitesmoke'}}> <p>View Completed Activities </p>  </MenuItem>
                    <MenuItem style = {{color : 'whitesmoke'}}> <p> View Pending Activities </p>  </MenuItem>
                    <MenuItem style = {{color : 'whitesmoke'}}>  <p> View Messages  </p> </MenuItem>

                </Menu>

            </ProSidebar>;

        </>
    )
}

export default SideBar