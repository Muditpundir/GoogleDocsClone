import { useEffect, useState } from 'react';

import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Header from './Header';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
// import {io} from 'socket.io-client';
import {io} from 'socket.io-client';
import {useParams} from 'react-router-dom';





const Component = styled.div`
    background: #F5F5F5;
`

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
];
  

const Editor = () => {
    
    const[socket, setSocket ]= useState();
    const[quill,setQuill] = useState();
   

    useEffect( () => {
        const s = io("http://localhost:3001");
        setSocket(s);
               return() => {
            s.disconnect();
        }
    },[]);

   

    useEffect(() => {
        const quillServer = new Quill('#container', { theme: 'snow', modules: { toolbar: toolbarOptions }});
       
        setQuill(quillServer);

    }, []);
    return (
        
        <Component>
            <Header />
            <Box className='container' id='container'></Box>
        </Component>
    )
}

export default Editor;