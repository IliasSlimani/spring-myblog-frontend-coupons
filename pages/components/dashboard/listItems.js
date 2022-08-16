import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import AirplaneTicketRoundedIcon from '@mui/icons-material/AirplaneTicketRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

  const StylesListSubheader = styled(ListSubheader)(({ theme }) => ({
    backgroundColor: '#E5E5E5',
    color: '#252525',
  }));

export const categoryListItems = (
  <React.Fragment>
      <StylesListSubheader component="div" sx={{display:{xs:"none",sm:"block"}}}>
      Categories
    </StylesListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <ControlPointRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Category Operations" />
    </ListItemButton>  
    <ListItemButton>
      <ListItemIcon>
        <VisibilityRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="All Categories" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ConfirmationNumberRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Add/Remove Coupons From Category" />
    </ListItemButton>
  </React.Fragment>
);

export const couponListItems = (
  <React.Fragment>
    <StylesListSubheader component="div" sx={{display:{xs:"none",sm:"block"}}} >
      Coupons
    </StylesListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <ControlPointRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Coupons Operations" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <VisibilityRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="All Coupons" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AirplaneTicketRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Add/Remove Deals From Coupons" />
    </ListItemButton>
  </React.Fragment>
);

export const dealListItems = (
    <React.Fragment>
      <StylesListSubheader component="div" sx={{display:{xs:"none",sm:"block"}}} >
        Deals
      </StylesListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <ControlPointRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Deals Operations" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <VisibilityRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="All Deals" />
      </ListItemButton>
    
    </React.Fragment>
  );

  export const userListItems = (
    <React.Fragment>
      <StylesListSubheader component="div" sx={{display:{xs:"none",sm:"block"}}} >
        Users
      </StylesListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <PersonAddRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="User Operations" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <VisibilityRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Show Users" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <KeyRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Add/Remove Permissions from Users" />
      </ListItemButton>
    </React.Fragment>
  );

  export const roleListItems = (
    <React.Fragment>
      <StylesListSubheader component="div" sx={{display:{xs:"none",sm:"block"}}} >
        Permissions
      </StylesListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <KeyRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Add/Remove/Update Permissions" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <VisibilityRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Show All Permissions" />
      </ListItemButton>
     
    </React.Fragment>
  );

  export const analyticsListItems = (
    <React.Fragment>
      <StylesListSubheader component="div" sx={{display:{xs:"none",sm:"block"}}} >
        Analytics
      </StylesListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <BarChartRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItemButton>
      
     
    </React.Fragment>
  );