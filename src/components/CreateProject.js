import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import logo from './images/logo.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import headerimg from './images/headerimg.svg';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "bootstrap/dist/css/bootstrap.min.css";

const CreateProject = () => {

  const [error, setError] = useState();
  const [theme, setTheme] = useState("");
  const Navigate = useNavigate();

  const handletheme=(e)=>{
    setTheme(e.target.value);
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    if(theme!==''){
      setError('');
      Navigate("/projectlisting");

    }else{
      setError('Theme is required')
    }

  }
  return (<>
    <div className='main d-flex' style={{position:'fixed'}}>
      <div className='header'>
        <Header />
      </div>
      <div >
        <div className='sub-div ' style={{ float: 'left' }}>
          {/* <img className='img-fluid' style={{ backgroundSize: "fill", backgroundRepeat: 'no-repeat', position: 'absolute', zIndex: -1, width: "100%" }} src={login} alt="logo" /> */}
          <div><img style={{ backgroundSize: 'fill', backgroundRepeat: 'no-reapet', width: "100%", position: 'absolute', zIndex: -1 }} className='img-fluid' src={headerimg} /></div>
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ margin:"60px",fontSize:"200px" }}> */}
          <div style={{ margin: "60px 80px", fontSize: "30px", color: "white" }}><span> <ArrowBackIosIcon /></span>
            <span style={{ padding: "20px" }}>Create Project</span></div>
          <img style={{ alignItems: "center", display: 'block', justifyContent: 'center', marginLeft: '700px', marginTop: '-110px', zIndex: -1, position: "relative" }} src={logo} alt='logo' />

        </div>
        <div class="container" style={{ float: 'left', marginTop: "80px" }}>

          <form class="row"onSubmit={{handlesubmit}} >
            <div style={{marginLeft:"40px"}}>
              <input type="text" name="theme" id="theme" value={theme} onChange={handletheme} placeholder='Enter Project Theme' style={{ width: "900px", height: "90px", borderRadius: "10px", padding: "0px 20px" }} />
              {Error && <div className='error-msg'>{Error}cfttt</div>}

              <Button style={{ borderRadius: "30px", margin: "-120px 0px 10px 1100px", height: "40px", width: "150px" }} color="secondary">Save Project</Button>

            </div>
            <div className='wrapper'></div>
            <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Reason">Reason</label>

              <Autocomplete
                disablePortal
                id="Reason"
                name="Reason"
                // options={}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="For Bussiness" />}

              />

            </div>
            <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Type">Type</label>

              <Autocomplete
                disablePortal
                id="Type"
                name="Type"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Internal" />}

              />
            </div>
            <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Division">Division</label>

              <Autocomplete
                disablePortal
                id="Division"
                name="Division"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Filters" />}

              />
            </div>
            <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Category">Category</label>

              <Autocomplete
                disablePortal
                id="Category"
                name="Category"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Quality A" />}

              />

            </div>
            <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Priority">Priority</label>

              <Autocomplete
                disablePortal
                id="Priority"
                name="Priority"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="High" />}

              />
            </div>
            <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Department">Department</label>

              <Autocomplete
                disablePortal
                id="Department"
                name="Department"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Strategy" />}

              />
            </div>
            <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Start Date as per Project Plan">Start Date as per Project Plan</label>

              <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']} sx={{ width: 300 }}>
        <DatePicker label="D Month, Yr " />
      </DemoContainer>
    </LocalizationProvider>
            </div>
            <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
            <label htmlFor="End Date as per Project Plan">End Date as per Project Plan</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label=" D Month, Yr" />
      </DemoContainer>
    </LocalizationProvider>
            </div>
            <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
              <label htmlFor="Location">Location</label>

              <Autocomplete
                disablePortal
                id="Location"
                name="Location"
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Pune" />}
              />
            </div>
            <div style={{marginLeft:"950px"}}>Status:<b>Registered</b></div>
          </form>
        </div>
      </div>
    </div>

  </>
  )
}

export default CreateProject