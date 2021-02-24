import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//import Collapse from '@material-ui/core/Collapse';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserProfile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [subData, setSubrData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  function submitData(subData) {
    setFinalData(subData);
    setSubrData((subData = {}));
    document.myForm.reset();
    console.log(finalData);
    // console.log(finalData.)
  }

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <div
          style={{
            marginLeft: "30%",
            marginTop:"10%"
          }}
        >
          <h2 style={{marginLeft:"70px"}}>Employee Details</h2>
          <Card className={classes.root}>
           
            {/* <CardMedia */}
              {/* className={classes.media}
              // image={finalData.image}
              // image="https://images.unsplash.com/photo-1611095790691-ff1be3430b22?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" */}
              <img
              ref={uploadedImage}
              style={{
                borderRadius: "50%",
                width: "140px",
                height: "150px",
                border:"1px dashed black",
                alignItems:"center",
                justifyContent:"center",
                marginLeft:"100px",
                marginTop:"10px"
                // style={{
                      //   borderRadius: "50%",
                      //   height: "140px",
                      //   width: "150px",

                      //   border: "1px dashed black",
                      // }}
              }}
            // />
            onClick={() => imageUploader.current.click()}
            />
             <CardHeader
              // avatar={
              //   <Avatar
              //     src="https://images.unsplash.com/photo-1611095790691-ff1be3430b22?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              //     aria-label="recipe"
              //     className={classes.large}
              //   ></Avatar>
              // }
              // action={
              //   <IconButton aria-label="settings">
              //     {/* <MoreVertIcon /> */}
              //   </IconButton>
              // }
              
              title={finalData.empName}
              subheader={finalData.emailId}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {finalData.desc}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> */}
              </IconButton>
              <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
            </CardActions>
          </Card>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{
            // marginLeft: "10%",
            marginTop:"10%"
          }}>
          <h2 style={{marginLeft:"170px"}}>Edit Employees Details</h2>
          <form name="myForm">
            <TableContainer
              style={{ display: "flex", justifyContent: "center",marginTop:"10px" }}
            >
              <Table
                style={{ width: "50%", justifyContent: "center" }}
                size="small"
              >
                <TableHead>
                  {/* <TableCell> */}
                  <TableRow>
                    <TextField
                      value={subData["empName"]}
                      onChange={(e) =>
                        setSubrData({ ...subData, empName: e.target.value })
                      }
                      label="Empolyee Name"
                      margin="normal"
                      variant="outlined"
                      color="secondary"
                    />
                  </TableRow>
                  {/* </TableCell> */}
                  {/* <TableCell> */}
                  <TableRow>
                    <TextField
                      value={subData["emailId"]}
                      onChange={(e) =>
                        setSubrData({ ...subData, emailId: e.target.value })
                      }
                      label="Email Id "
                      margin="normal"
                      variant="outlined"
                      color="secondary"
                    />
                  </TableRow>
                  <TableRow>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={imageUploader}
                      placeholder="selectFile"
                      style={{
                        display: "none",
                      }}
                    />
                    {/* <Button
                      // style={{
                      //   borderRadius: "50%",
                      //   height: "140px",
                      //   width: "150px",

                      //   border: "1px dashed black",
                      // }}
                      onClick={() => imageUploader.current.click()}
                    > Upload Image</Button> */}
                     
                    
                  </TableRow>
                  <TableRow>
                    <TextField
                      value={subData["desc"]}
                      onChange={(e) =>
                        setSubrData({ ...subData, desc: e.target.value })
                      }
                      label="Description "
                      margin="normal"
                      variant="outlined"
                      color="secondary"
                    />
                  </TableRow>
                  {/* </TableCell> */}
                  {/* <TableCell> */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => submitData(subData)}
                  >
                    Edit Details{" "}
                  </Button>
                  {/* </TableCell> */}
                  {/* </TableRow>
                       
                        <TableBody> */}
                  {/* {finalData.map(data =>(
                                <TableRow>
                                <TableCell>{data.sub}</TableCell>
                                <TableCell>{data.sem}</TableCell>
                                </TableRow>
                            ))} */}

                  {/* </TableBody>*/}
                </TableHead>
              </Table>
            </TableContainer>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
