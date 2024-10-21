import * as React from "react";
import { useState } from "react";
import '../App.css';
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import blue from "@material-ui/core/colors/blue";
import Input from '@mui/material/Input';
import ArticleIcon from '@mui/icons-material/Article';
import OutlinedInput from '@mui/material/OutlinedInput';



const Header = () => {
  const [value ,setValue] = useState('');
  
  return (
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          {/*Inside the IconButton, we 
           can render various icons*/}
          <IconButton
            size="large"
            edge="start"
            color="red"
            aria-label="menu"
            sx={{ mr: 2 }}
 
          >
            {/*This is a simple Menu 
             Icon wrapped in Icon */}
           <ArticleIcon style={{ color: "blue", }}  />
            {/* <MenuIcon /> */}
          </IconButton>
          {/* The Typography component applies 
           default font weights and sizes */}
           
           <Input id= "saveField" value={value}  onChange={e => setValue(e.target.value)}  contenteditable />
          
          <Typography variant="h6"  component="div" sx={{ mr: 2 ,ml:2, fontSize: '1.2rem' }}
            >File
          </Typography>
          <Typography variant="h6" 
            component="div" sx={{ mr: 2 ,ml:2, fontSize: '1.2rem' }}>
            Edit
          </Typography>

          <Typography variant="h6" 
            component="div" sx={{ mr: 2 ,ml:2, fontSize: '1.2rem' }}>
            View
          </Typography>
          <Typography variant="h6" 
            component="div" sx={{ mr: 2 ,ml:2,fontSize: '1.2rem' }}>
            Insert
          </Typography>
          <Typography variant="h6" 
            component="div" sx={{ mr: 2 ,ml:2,fontSize: '1.2rem' }}>
              Format
          </Typography>
          <Typography variant="h6" 
            component="div" sx={{ mr: 2 ,ml:2,fontSize: '1.2rem' }}>
            Tools
          </Typography>
          <Typography variant="h6" 
            component="div" sx={{ mr: 2 ,ml:2,fontSize: '1.2rem' }}>
            Extension
          </Typography>
          <Typography variant="h6" 
            component="div" sx={{ mr: 2 ,ml:2,fontSize: '1.2rem' }}>
            Help
          </Typography>

          <Button color="inherit" sx={{ mr: 2 ,ml:38,fontSize: '1rem' ,borderRadius: 8, backgroundColor: '#D4F1F4',padding:1}}>Share</Button>
        </Toolbar>
      </AppBar>
  );
}
export default Header;