import { Box } from "@mui/material";
import Image from "next/image";

interface DownloadAppProps {}

const DownloadApp: React.FC<DownloadAppProps> = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xl: "1296px",
            lg: "1180px",
            md: "740px",
            sm: "540px",
            xs: "300px",
          },
          margin: "auto",
        }}
      >
        <Image
          src="/images/Frame3.png"
          height={0}
          width={0}
          sizes="(max-width:0) 100vw,
                (max-height:0) 100vh"
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
          }}
          alt=""
        />
      </Box>
    </>
  );
};

export default DownloadApp;
