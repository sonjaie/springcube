import React, { useState } from 'react';
import { TextField, Select, MenuItem } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import './style.css'

function SearchBar() {
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  return (
    <>
    <div class="container">
      <div class="job-search">
          <div class="icon-job">
              <Search />
          </div>
          <div class="jobs-placeholder">
              <TextField
                  placeholder="Job Title Keyword" 
                  value={jobTitle} 
                  onChange={(e) => setJobTitle(e.target.value)} 
                  InputProps={{ disableUnderline: true }} 
              />
          </div>
      </div>
      <div class="separator">|</div>
      <div class="select-country">
          <div class="icon-country">
            <FmdGoodOutlinedIcon />
          </div>
          <div class="country-placeholder">
            <Select value={country} onChange={(e) => setCountry(e.target.value)} displayEmpty >
            <MenuItem value="" disabled style={{ display: 'none' }}>Select Country</MenuItem>
              <MenuItem value="Singapore">Singapore</MenuItem>
              <MenuItem value="Malaysia">Malaysia</MenuItem>
              <MenuItem value="Thailand">Thailand</MenuItem>
              <MenuItem value="Indonesia">Indonesia</MenuItem>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="Philippines">Philippines</MenuItem>
            </Select>
          </div>
      </div>
      <div class="separator">|</div>
      <div class="select-state">
          <div class="icon-state">
            <FmdGoodOutlinedIcon />
          </div>
          <div class="state-placeholder">
            <Select value={state} onChange={(e) => setState(e.target.value)} displayEmpty >
                <MenuItem value="" disabled style={{ display: 'none' }}>Select State</MenuItem>
                <MenuItem value="Alabama">Alabama</MenuItem>
                <MenuItem value="Alaska">Alaska</MenuItem>
                <MenuItem value="Arizona">Arizona</MenuItem>
                <MenuItem value="Arkansas">Arkansas</MenuItem>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Colorado">Colorado</MenuItem>
                <MenuItem value="Connecticut">Connecticut</MenuItem>
                <MenuItem value="Delaware">Delaware</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
                <MenuItem value="Georgia">Georgia</MenuItem>
              </Select>
          </div>
      </div>
      <div class="separator">|</div>
      <div class="job-function">
          <div class="icon-job-function">
              <BusinessCenterOutlinedIcon />
          </div>
          <div class="job-function-placeholder">
              <TextField
                  placeholder="Job Function" 
                  value={jobTitle} 
                  onChange={(e) => setJobTitle(e.target.value)} 
                  InputProps={{ disableUnderline: true }} 
              />
          </div>
      </div>
  </div>
  <div className="advance-search">
    <p>
      <span className="search-bold-text">Advanced Search</span>
    </p>
  </div>
  </>
  );
}

export default SearchBar;
