import { useEffect, useState } from "react";
import { axiosApiBook, axiosClient } from "./api/apiClient";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
function User() {
  const [bookstore, setBookstore] = useState([]);
  async function getOrder(event,book)
  {
    const response = await axiosClient.post('/books',book);
    console('response',response);
  }
  useEffect(() => {
    async function getBook() {
      const books = await axiosApiBook.get("/new");
      setBookstore(books.books);
    }
    getBook();
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "lightblue" }}>
      <Grid container spacing={2}>
        {bookstore?.map((book, index) => {
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
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) => getOrder(event, book)}
                  >
                    Order
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default User;
