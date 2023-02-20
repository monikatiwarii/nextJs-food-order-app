import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { trandingFood } from "../../data/data";

interface TrandingItemsProps {}
const TrandingItems: React.FC<TrandingItemsProps> = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        sx={{
          marginTop: {
            xl: "50px",
            lg: "40px",
            md: "30px",
            sm: "20px",
            xs: "10px",
          },
        }}
      >
        {trandingFood.map((foodlist, index) => {
          return (
            <Grid item xs={6} sm={4} md={4} key={index}>
              <Box>
                <Image
                  src={foodlist.image}
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
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: {
                    xl: "20px",
                    lg: "20px",
                    md: "20px",
                    sm: "16px",
                    xs: "12px",
                  },
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  translate: "18px -83px",
                }}
              >
                {foodlist.type}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: {
                    xl: "14px",
                    lg: "14px",
                    md: "14px",
                    sm: "12px",
                    xs: "10px",
                  },
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  translate: "20px -83px",
                }}
              >
                {foodlist.places}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TrandingItems;
