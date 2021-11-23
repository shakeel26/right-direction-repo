import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import { categories, sizes } from "../../data.js";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import ListItemIcon from "@mui/material/ListItemIcon";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 25%)",
    padding: 20,
    marginTop: 20,
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      width: "100%",
    },
  },
  input: {
    // display: 'none',
  },
  indeterminateColor: {
    color: "#f50057",
  },
  selectAllText: {
    fontWeight: 500,
  },
  selectSelector: {
    width: 300,
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  variant: "menu",
};

export default function AddItem() {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [allValues, setAllValues] = useState({
    ItemName: "",
    ItemCode: "",
    ItemPrice: "",
    ItemCategory: "",
    ItemDescription: "",
    ItemComposition: "",
    ItemSize: "",
    ItemPhoto: "",
    ItemImgCollection: [],
  });

  const handleUpdate = (e) => {
    // Dealing with name field changes to update our state
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const headers = {
    "Content-Type": "application/json",
  };
  // update item image
  const handleImage = (e) => {
    // console.log('image ', e.target.files)
    setAllValues({ ...allValues, [e.target.name]: e.target.files[0] });
  };
  // Updating Selected Sizes
  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(e.target.name ,' is now ', e.target.value)
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    setSelected(value);
  };

  // Update images for slider in /item page
  let ItemImgCollectionArray = [];
  const handleImages = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      ItemImgCollectionArray.push(e.target.files[i]);
    }
    console.log("collection ", ItemImgCollectionArray);
    setAllValues({ ...allValues, [e.target.name]: ItemImgCollectionArray });
    console.log("allValues ", allValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("ItemName", allValues.ItemName);
    formData.append("ItemCode", allValues.ItemCode);
    formData.append("ItemPrice", allValues.ItemPrice);
    formData.append("ItemCategory", allValues.ItemCategory);
    formData.append("ItemDescription", allValues.ItemDescription);
    formData.append("ItemComposition", allValues.ItemComposition);
    formData.append("ItemSize", allValues.ItemSize);
    formData.append("ItemPhoto", allValues.ItemPhoto);
    formData.append("ItemImgCollection", allValues.ItemImgCollection);

    for (var i = 0; i < allValues.ItemImgCollection.length; i++) {
      formData.append("ItemImgCollection", allValues.ItemImgCollection[i]);
    }

    await axios
      .post("http://localhost:4000/form-post", formData, {
        headers: headers,
      })
      .then(
        (response) => {
          // clear form after submit
          setAllValues({
            ItemName: "",
            ItemCode: "",
            ItemPrice: "",
            ItemCategory: "",
            ItemDescription: "",
            ItemComposition: "",
            ItemSize: "",
            ItemPhoto: "",
            ItemImgCollection: "",
          });
          if (response.data === "This article already exists !") {
            alert("This article number already exists !");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <main style={{ backgroundColor: "#F5F5F5", padding: "20px" }}>
      <Box className={classes.mainBox}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={2}>
              <TextField
                id="item-code"
                label="Item Code"
                required
                type="text"
                name="ItemCode"
                onChange={handleUpdate}
                value={allValues.ItemCode}
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                id="item-name"
                label="Item Name"
                required
                type="text"
                name="ItemName"
                onChange={handleUpdate}
                value={allValues.ItemName}
              />
            </Grid>

            <Grid item lg={2}>
              <TextField
                id="item-price"
                label="Item Price"
                required
                type="number"
                name="ItemPrice"
                onChange={handleUpdate}
                value={allValues.ItemPrice}
              />
            </Grid>

            <Grid item lg={4}>
              <TextField
                id="item-catagory"
                select
                label="Select Category"
                value={allValues.ItemCategory}
                required
                name="ItemCategory"
                onChange={handleUpdate}
                helperText="Please select your item catagory"
              >
                {categories.map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item lg={3}>
              <TextField
                id="item-description"
                label="Add Description"
                multiline
                rows={4}
                name="ItemDescription"
                onChange={handleUpdate}
                value={allValues.ItemDescription}
                required
              />
            </Grid>

            <Grid item lg={3}>
              <TextField
                id="item-composition"
                label="Add Composition"
                multiline
                rows={4}
                name="ItemComposition"
                onChange={handleUpdate}
                value={allValues.ItemComposition}
                required
              />
            </Grid>

            <Grid item lg={3}>
              <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
              <Select
                labelId="mutiple-select-label"
                multiple
                name="ItemSize"
                className={classes.selectSelector}
                value={selected}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    <ListItemIcon>
                      <Checkbox checked={selected.indexOf(size) > -1} />
                    </ListItemIcon>
                    <ListItemText primary={size} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item lg={4}>
              <input
                accept="image/*"
                className={classes.input}
                id="image-photo"
                type="file"
                name="ItemPhoto"
                onChange={handleImage}
                required
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload Image
                </Button>
              </label>
            </Grid>

            <Grid item lg={4}>
              <input
                accept="image/*"
                className={classes.input}
                id="image-photo"
                type="file"
                name="ItemImgCollection"
                onChange={handleImages}
                multiple
                required
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload Images
                </Button>
              </label>
            </Grid>
          </Grid>
          <Box my={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </main>
  );
}
