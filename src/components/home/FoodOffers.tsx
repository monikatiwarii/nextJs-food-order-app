import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface FoodOffersProps {}

const FoodOffers: React.FC<FoodOffersProps> = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: {
            xl: "150px",
            lg: "100px",
            md: "100px",
            sm: "100px",
            xs: "100px",
          },
          position: "relative",
        }}
      >
        <Grid item sm={6} xs={6}>
          {/* <Box
            sx={{
              height: "100%",
            }}
          > */}
          {/* <Box
            sx={{
              height: "100%",
            }}
          > */}
          <Image
            src="/images/Rectangle14.png"
            height={0}
            width={0}
            sizes="(max-width:0) 100vw,
                      (max-height:0) 100vh"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
            alt=""
          />
          {/* </Box> */}
          <Typography
            sx={{
              width: {
                xl: "500px",
                lg: "350px",
                md: "350px",
                sm: "350px",
                xs: "130px",
              },
              position: "absolute",
              top: {
                xl: "238px",
                lg: "165px",
                md: "118px",
                sm: "118px",
                xs: "75px",
              },
              left: {
                xl: "50px",
                lg: "50px",
                md: "50px",
                sm: "50px",
                xs: "12px",
              },
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {
                xl: "90px",
                lg: "64px",
                md: "50px",
                sm: "50px",
                xs: "20px",
              },
              lineHeight: {
                xl: "136px",
                lg: "96px",
                md: "75px",
                sm: "75px",
                xs: "30px",
              },
              textTransform: "capitalize",
              color: "#FFFFFF",
            }}
          >
            Buy 2 Get 1 Free
          </Typography>
          {/* </Box> */}
        </Grid>
        <Grid item sm={6} xs={6}>
          <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
              <Image
                src="/images/Rectangle15.png"
                height={0}
                width={0}
                sizes="(max-width:0) 100vw,
                      (max-height:0) 100vh"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                alt=""
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <Image
                src="/images/Rectangle16.png"
                height={0}
                width={0}
                sizes="(max-width:0) 100vw,
                      (max-height:0) 100vh"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FoodOffers;
