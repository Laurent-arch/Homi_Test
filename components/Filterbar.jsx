import styles from "../styles/Sidebar.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const FilterBar = ({priceFilterCallback, typeFilterCallback }) => {
    const [priceFilterValue, setPriceFilterValue] = useState(0);
    const [selectedType, setSelectedType] = useState(null);

    
    const handleFilterPriceChange = (event) => {
        const newValue = parseInt(event.target.value);
        setPriceFilterValue(newValue);
        priceFilterCallback(newValue);
    };

    const handleTypeChange = (event, newValue) => {
      setSelectedType(newValue);
      typeFilterCallback(newValue);
    }
   
    const Type = [{ label: "For Sale" }, { label: "For Rent" }];
  return (
    <>
      <h1 className={styles.title}>Advanced filters</h1>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Type}
            sx={{ width: 300 }}
            value={selectedType}
            renderInput={(params) => <TextField {...params} label="Type" />}
            onChange={handleTypeChange}
            getOptionLabel={options => options.label}
          />
        </div>
        <div className={styles.rangeContainer}>

          <div>
            <label className={styles.category}>Price/month</label>
            <Box sx={{ width: 150 }}>
              <Slider
                aria-label="Always visible"
                min={100}
                max={1000}
                valueLabelDisplay="on"
                value={priceFilterValue}
                onChange={handleFilterPriceChange}
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;


