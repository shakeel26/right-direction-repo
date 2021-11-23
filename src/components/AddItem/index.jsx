import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import { categories } from "../../data.js";
import Box from "@mui/material/Box";

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
}));

export default function AddItem() {
  const classes = useStyles();
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
  const handleImage = (e) => {
    // console.log('image ', e.target.files)
    setAllValues({ ...allValues, [e.target.name]: e.target.files[0] });
   
  };

  let ItemImgCollectionArray = [];

  const handleImages = (e) => {
    console.log('allValues after images upload ', allValues)
    console.log("multiple images ", e.target.files, e.target.files.length);

    for (let i = 0; i < e.target.files.length; i++) {
      ItemImgCollectionArray.push(e.target.files[i]);
    }
    console.log("collection ", ItemImgCollectionArray);
    setAllValues({ ...allValues, [e.target.name]:  ItemImgCollectionArray});
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


    for(var i=0;i<allValues.ItemImgCollection.length;i++){
      formData.append("ItemImgCollection", allValues.ItemImgCollection[i]);
    }


    await axios
      .post("http://localhost:4000/form-post", formData, {
        headers: headers,
      })
      .then(
        (response) => {
          // setAllValues({
          //   ItemName: "",
          //   ItemCode: "",
          //   ItemPrice: "",
          //   ItemCategory: "",
          //   ItemDescription: "",
          //   ItemComposition: "",
          //   ItemSize: "",
          //   ItemPhoto: "",
          //   ItemImgCollection: "",
          // });
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
              <TextField
                id="item-size"
                label="Item Size"
                required
                type="text"
                name="ItemSize"
                onChange={handleUpdate}
                value={allValues.ItemSize}
                helperText="Please separate sizes with comma ,"
              />
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
