import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

type PropsMenu = {
    menuId: string,
    anchorEl: null | HTMLElement,
    handleMenuClose: () => void
}

const RenderMenu : React.FC<PropsMenu> = (props: PropsMenu) => {
    const { anchorEl, menuId, handleMenuClose } = props;
    const isMenuOpen = Boolean(anchorEl);

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )
}

export default RenderMenu;