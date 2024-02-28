import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import { LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";
// import { makeStyles } from '@mui/styles';
import "./style.css";

const ImageContainer = styled(Grid)({
  width: "100%",
});

const LargeImage = styled(Grid)({
  width: "60%",
});

const SmallImage = styled(Grid)({
  width: "20%",
});

const Figma = () => {
  const lines = [
    { stars: 5, percentage: 80 },
    { stars: 3, percentage: 60 },
    { stars: 2, percentage: 40 },
    { stars: 1, percentage: 20 },
  ];

  const reviewImg1 =
    "https://images.unsplash.com/photo-1449867727329-3294ea016353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D";

  const repetitions = 4;

  const imageUrls = [
    "https://images.unsplash.com/photo-1582198790133-3692e01f649c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9sbGVyJTIwY29hc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1508952091578-9bb09351ea0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2lyY3VzJTIwcGhvdG9zfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
  ];

  return (
    <div className="container">
      {/* Image container start */}
      <div className="image">
        <ImageContainer container spacing={0}>
          <LargeImage item xs={7}>
            <img
              src={imageUrls[0]}
              alt="Large"
              style={{ width: "100%", height: "88.2vh" }}
            />
          </LargeImage>
          <Grid container item xs={5}>
            {imageUrls.slice(1).map((url, index) => (
              <SmallImage key={index} item xs={12}>
                <img
                  src={url}
                  alt={`Small-${index}`}
                  style={{ width: "100%" , height:'44vh'}}
                />
              </SmallImage>
            ))}
          </Grid>
        </ImageContainer>
      </div>

      {/* Image container end */}
      <div className="comboDeal">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "130vh",
          }}
        >
          <Card sx={{ width: 1000 }}>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{
                      color: "orange",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    COMBO DEALS:
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontSize: "120%", fontWeight: "bold" }}
                  >
                    IMG Worlds of Adventure + Free Burj Khalifa At the Top
                  </Typography>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <div style={{ marginLeft: "2rem" }}>
                    <Typography variant="body1" style={{ marginLeft: "1rem" }}>
                      From PKR
                    </Typography>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      18930.000
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                  marginBottom: "0rem",
                  marginTop: "2rem",
                }}
              >
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} style={{ color: "red" }} />
                ))}
                <Typography variant="body2" style={{ marginLeft: "0.5rem" }}>
                  100 Reviews
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "0.5rem",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ bgcolor: "orange", color: "white" }}
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* main */}

      <div className="main">
        <h2>IMG world Of Adventure</h2>
        <p>
          Combo Tours and day trips are a great way to save money while you
          enjoy two exciting Adventure Tours combined together in a single
          action-packed day. Our combination, two-in-one tours include an
          authentic and private roundtrip transportations, (select areas), so
          that all you have to worry about on your exciting excursion is having
          fun with your family or friends. Get the most out of your big Costa
          Rican adventure in and around los jhbnjnm and beach with our exciting
          combo tours
        </p>
        <p>
          Get the most out of your big Costa Rican adventure in and around los
          jhbnjnm and beach with our exciting combo tours
        </p>
        <h2>Free Burg Khalifa at The Top</h2>
        <p>
          Combo Tours and day trips are a great way to save money while you
          enjoy two exciting Adventure Tours combined together in a single
          action-packed day. Our combination, two-in-one tours include an
          authentic and private roundtrip transportations, (select areas), so
          that all you have to worry about on your exciting excursion is having
          fun with your family or friends.
        </p>
        <p>
          Combo Tours and day trips are a great way to save money while you
          enjoy two exciting Adventure Tours combined together in a single
          action-packed day. Our combination, two-in-one tours include an
          authentic and private roundtrip transportations, (select areas), so
          that all you have to worry about on your exciting excursion is having
          fun with your family or friends
        </p>
        <p>
          Enjoy stunning vistas of the Dubai skyline from the Burj Khalifa while
          sipping on a hot drink. The same ticket let you experience the world’s
          largest indoor theme park, IMG World of Adventures!
        </p>
        <p>Highlights</p>
        <ul>
          <li>
            <p>
              Save big with this combo ticket that grants entry to both the Burj
              Khalifa and IMG World of Adventures Dubai!
              <o className="5"></o>
            </p>
          </li>
          <li>
            <p>
              At the Burj Khalifa, zoom to the 124th and 125th floors for
              exciting views.
              <o className="5"></o>
            </p>
          </li>
          <li>
            <p>
              From 452 meters up high, gaze down at all of Dubai: the city,
              desert, and ocean.
              <o className="5"></o>
            </p>
          </li>
          <li>
            <p>
              At IMG Worlds of Adventure, wave at your favorite superheroes and
              cartoon characters.
              <o className="5"></o>
            </p>
          </li>
          <li>
            <p>
              Enjoy 22 adrenaline-fueled rides and roller coasters across 4 Epic
              Adventure Zones, Marvel, Cartoon Network, IMG Boulevard, and The
              Lost Valley.
              <o className="5"></o>
            </p>
          </li>
          <li>
            <p>
              Fun Fact: The IMG Worlds of Adventure is spread across 1.5 million
              square feet of playground.
              <o className="5"></o>
            </p>
          </li>
        </ul>

        {/* Rectange box INCLUCION */}
        <div className="inclucion">
          <Card sx={{ width: "100%", position: "relative" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Inclusion
              </Typography>
              <Typography variant="body1" style={{ marginTop: "50px" }}>
                Burj Khalifa
                <ul>
                  <li>Free tickets to Burj Khalifa</li>
                  <li>Exclusive access to levels 124, 125</li>
                </ul>
              </Typography>
              <Box
                sx={{
                  fontSize: "32px",
                  position: "absolute",
                  left: "97%",
                  right: "7.81%",
                  top: "10%",
                  bottom: "72.07%",
                  cursor: "pointer",
                  transform: "rotate(1deg)",
                }}
              >
                &#x5e;
              </Box>
            </CardContent>
          </Card>
        </div>
        {/* RECTANGLE BOX  CANCELATION POLICY */}
        <div className="cancelationPolicy">
          <Card sx={{ width: "100%", position: "relative" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Cancellation Policy
              </Typography>
              <Typography variant="body1" style={{ marginTop: "40px" }}>
                These tickets can't be cancelled or rescheduled.
              </Typography>
              <Box
                sx={{
                  fontSize: "32px",
                  position: "absolute",
                  left: "97%",
                  right: "7.81%",
                  top: "10%",
                  bottom: "72.07%",
                  cursor: "pointer",
                  transform: "rotate(1deg)",
                }}
              >
                &#x5e;
              </Box>
            </CardContent>
          </Card>
        </div>
        {/* REACTANGLE BOX MYTICKEt */}
        <div className="myTicket">
          <Card sx={{ width: "100%", position: "relative" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                My Tickets
              </Typography>
              <Typography variant="body1" style={{ marginTop: "50px" }}>
                Your voucher will be emailed to you shortly.
                <ul>
                  <li>
                    Please display the voucher on your mobile phone with a valid
                    photo ID at the attraction.
                  </li>
                  <p> Ticket Redemption Points</p>
                  <p> Burj Khalifa</p>
                  <li>
                    Redeem your tickets at the will-call ticket counter located
                    at the "At The Top" entrance on the lower ground level of
                    the Dubai Mall.
                  </li>
                  <p>
                    Address: Burj Khalifa - 1 Sheikh Mohammed bin Rashid Blvd -
                    Downtown Dubai - Dubai - United Arab Emirates.
                  </p>
                  <p> IMG Worlds of Adventure</p>
                  <li>
                    Redeem your tickets at the entrance of IMG Worlds of
                    Adventure.
                  </li>
                  <li>
                    Address: E311 - Sheikh Mohammed Bin Zayed Rd - Dubai -
                    United Arab Emirates.
                  </li>
                </ul>
              </Typography>
              <Box
                sx={{
                  fontSize: "32px",
                  position: "absolute",
                  left: "97%",
                  right: "7.81%",
                  top: "10%",
                  bottom: "72.07%",
                  cursor: "pointer",
                  transform: "rotate(1deg)",
                }}
              >
                &#x5e;
              </Box>
            </CardContent>
          </Card>
        </div>
        <div className="rating-container">
          <div className="ratingReviews">
            <Card sx={{ width: "100%", position: "relative" }}>
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ marginTop: "10px" }}
                >
                  Rating and Reviews
                </Typography>

                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ marginTop: "60px" }}
                >
                  OverallRatings
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    marginBottom: "0rem",
                    marginTop: "0rem",
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{
                      marginLeft: "0.2rem",
                      marginRight: "1rem",
                      marginTop: "0rem",
                    }}
                  >
                    5.0
                  </Typography>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} style={{ color: "red" }} />
                  ))}
                  <Typography variant="body2" style={{ marginLeft: "0.5rem" }}>
                    100 Reviews
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: "0.5rem",
                    marginTop: "1rem",
                    marginLeft: "0.3rem",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "red", color: "white", borderRadius: "7px" }}
                  >
                    Write a review
                  </Button>
                </div>
                <Box
                  sx={{
                    fontSize: "32px",
                    position: "absolute",
                    left: "97%",
                    right: "7.81%",
                    top: "10%",
                    bottom: "72.07%",
                    cursor: "pointer",
                    transform: "rotate(1deg)",
                  }}
                >
                  &#x5e;
                </Box>
                {/* star and linebar => */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    marginTop: "-150px",
                  }}
                >
                  {lines.map((line, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                        width: "30%",
                      }}
                    >
                      {[...Array(5)].map((_, starIndex) => (
                        <StarIcon
                          key={starIndex}
                          style={{
                            color: starIndex < line.stars ? "red" : "#ccc",
                            marginRight: "4px",
                          }}
                        />
                      ))}
                      <LinearProgress
                        variant="determinate"
                        value={line.percentage}
                        sx={{
                          height: "5px",
                          width: "180px",
                          backgroundColor: "#ccc",
                          marginLeft: "8px",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "red",
                          },
                        }}
                      />
                      <Typography variant="body1" style={{ marginLeft: "4px" }}>
                        1.2k
                      </Typography>
                    </div>
                  ))}
                </div>
                {/* star and linebar END */}
              </CardContent>
            </Card>
          </div>

          {/* Review potion start */}

          <div className="review-boxes">
            {/* review 1 start */}

            <div className="review1 review">
              <Card
                sx={{
                  maxWidth: "95%",
                  boxShadow: "1px 2px 12px 1px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlJTIwYXZhdGFyfGVufDB8fDB8fHww"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardContent>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} style={{ color: "red" }} />
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    Awesome adventure place is very pleasant, the people working
                    always with a smile. Definitely will make a come back in the
                    future They have a very clean area the sun umbrellas were
                    available almost all over.
                  </Typography>
                </CardContent>
                <Grid container spacing={-60}>
                  {Array.from({ length: repetitions }).map((_, index) => (
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      key={index}
                      sx={{ marginY: "20px" }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={reviewImg1}
                        alt="Paella dish"
                        sx={{
                          width: "60%",
                          borderRadius: "15px",
                          marginLeft: "2rem",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </div>

            {/* review 1 End */}

            {/* review 2 start */}

            <div className="review1 review">
              <Card
                sx={{
                  maxWidth: "95%",
                  boxShadow: "1px 2px 12px 1px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlJTIwYXZhdGFyfGVufDB8fDB8fHww"
                        alt="notfound"
                        width="100%"
                        height="100%"
                      />
                    </Avatar>
                  }
                  title="Sara Mathew"
                  subheader="September 14, 2016"
                />
                <CardContent>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} style={{ color: "red" }} />
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    Awesome adventure place is very pleasant, the people working
                    always with a smile. Definitely will make a come back in the
                    future They have a very clean area the sun umbrellas were
                    available almost all over.
                  </Typography>
                </CardContent>
                <Grid container spacing={-60}>
                  {Array.from({ length: repetitions - 1 }).map((_, index) => (
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      key={index}
                      sx={{ marginY: "20px" }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={reviewImg1}
                        alt="Paella dish"
                        sx={{
                          width: "60%",
                          borderRadius: "15px",
                          marginLeft: "2rem",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </div>

            {/* review 2 End */}

            {/* review 3 start */}

            <div className="review1 review">
              <Card
                sx={{
                  maxWidth: "95%",
                  boxShadow: "1px 2px 12px 1px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlJTIwYXZhdGFyfGVufDB8fDB8fHww"
                        alt="notfound"
                        width="100%"
                        height="100%"
                      />
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardContent>
                  {[...Array(4)].map((_, index) => (
                    <StarIcon key={index} style={{ color: "red" }} />
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* review 3 End */}

            {/* review 4 start */}

            <div className="review1 review">
              <Card
                sx={{
                  maxWidth: "95%",
                  boxShadow: "1px 2px 12px 1px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZSUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="notfound"
                        width="100%"
                        height="100%"
                      />
                    </Avatar>
                  }
                  title="Ali baba"
                  subheader="September 14, 2013"
                />
                <CardContent>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} style={{ color: "red" }} />
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* review 4 End */}
          </div>

          <div className="button">
            <Typography
              variant="h6"
              style={{
                marginLeft: "2rem",
                marginRight: "1rem",
                marginTop: "18px",
                marginBottom: "0rem",
              }}
            >
              100 +
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "0rem",
                marginLeft: "1.3rem",
                marginBottom: "3rem",
              }}
              sx={{ bgcolor: "red", color: "white", borderRadius: "7px" }}
            >
              Show more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figma;
