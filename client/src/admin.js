import React, { useEffect, useState } from "react";
import { axiosClient } from "./api/apiClient";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function Admin() {
  const [listbooks, setListBooks] = useState([]);
  useEffect(() => {
    (function () {
      const response = axiosClient.get("/books");
      response
        .then((result) => {
          const newResult = result?.data.map((element) => {
            return JSON.parse(element);
          });
          setListBooks(newResult);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);
  return (
    <div className="App">
        <h1>List of order</h1>
      <Grid container spacing={2} >
        {listbooks.map((book, index) => {
          return (
            <Grid item xs={3} md={3} sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={book.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {book.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {book.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.date}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
