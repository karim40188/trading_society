import { Box, Container, Grid2, Typography } from "@mui/material";
import downloadImg from "../assets/download.png";
import phone from "../assets/phone_with_hand.png";
import person1 from "../assets/person1.png";
import signature from "../assets/signature.png";
import person2 from "../assets/person2.png";
function OurMobileApp() {
  return (
    <>
      <Grid2 container spacing={4} alignItems="center">
        <Grid2 size={{ sm: 12, md: 6 }}>
          <Typography
            sx={{
              fontFamily: "SF Pro Display",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "47.73px",
              color: "#FFFFFF",
            }}
          >
            Download <br /> Our mobile App
          </Typography>
          <Typography
            sx={{
              fontFamily: "TanseekModernProArabic-Light",
              fontSize: "27px",
              fontWeight: "400",
              lineHeight: "33.31px",
              color: "#FFFFFF",
            }}
          >
            Take the power of Trading Society with you wherever you go. Download
            our mobile app to access tools that help you make smarter trading
            decisions and track your progress in real time, all from the
            convenience of your phone.
          </Typography>
          <Box>
            <Box component="img" src={downloadImg} />
          </Box>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }} sx={{}}>
          <Box
            sx={{
              width: "793px",
              height: "793px",
              border: "1px solid #fff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={phone}
              sx={{ width: "644.8px", height: "893px" }}
            />
          </Box>
        </Grid2>
      </Grid2>

      <Grid2 container sx={{ my: "200px" }} alignItems="center">
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
          <Box sx={{ width: "605px", height: "623px" }}>
            <Box sx={{ width: "100%" }} component="img" src={person1} />
          </Box>
          <Typography
            sx={{
              fontFamily: "Bayon",
              color: "#fff",
              fontSize: "23px",
              lineHeight: "41.55px",
              letterSpacing: "20%",
              position: "absolute",
              top: "65%",
              left: "12%",
            }}
          >
            CEO <br /> Mohamed Fawzi
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontSize: "45px",
              fontFamily: "Bayon",
              fontWeight: "400",
              lineHeight: "48px",
              letterSpcing: "8%",
              textTransform: "upper-case",
              color: "#FFFFFF",
              my: "20px",
            }}
          >
            CEO Message <br /> for Trading <br /> Society
          </Typography>
          <Box
            sx={{
              fontSize: "25px",
              fontFamily: "SF Pro Display",
              fontWeight: "400",
              lineHeight: "33px",
              letterSpcing: "2%",
              color: "#FFFFFF",
            }}
          >
            <Typography>
              Hello Trading Society Family, I’m excited to welcome you to the
              Trading Society, where education meets community. We started this
              company with a simple goal: to make learning Forex trading
              accessible and to build a healthy, supportive space for traders of
              all levels.
            </Typography>
            <Typography>
              Our mission is to empower you with the knowledge and tools to
              succeed in the Forex market. Whether you’re a beginner just
              starting or a seasoned trader looking to sharpen your skills,
              we’re here to guide you every step of the way. Our courses are
              designed to be clear, straightforward, and easy to understand, so
              you can focus on what matters most—your growth and success.
            </Typography>
            <Typography sx={{ my: "20px" }}>
              But we’re more than just an educational platform. At the heart of
              Trading Society is a strong community where traders connect,
              learn, and grow together. We believe in the power of collaboration
              and sharing experiences. When we support each other, we all win.
              Thank you for being a part of our journey. Let’s learn, grow, and
              succeed together! Wishing you all the best in your trading
              journey,
            </Typography>
            <Box
              component="img"
              src={signature}
              sx={{ width: "248.12px", height: "91px" }}
            />
          </Box>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2} justifyContent="space-between">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography
            component="h3"
            sx={{
              fontFamily: "Bayon",
              fontSize: "45px",
              fontWeight: "400",
              letterSpacing: "2%",
              my: "20px",
            }}
          >
            COO Message
          </Typography>
          <Typography>
            {" "}
            Welcome to Trading Society – your trusted partner in mastering the
            art of Forex trading. We’re not just about teaching the skills, but
            also about building a thriving community where traders grow
            together.{" "}
          </Typography>
          <Typography sx={{ my: "20px" }}>
            At Trading Society, our responsibility goes beyond offering courses.
            We’re dedicated to *sales development*, making sure our students
            have the tools they need to succeed. Through innovative marketing
            strategies and strong community engagement, we aim to create a space
            where everyone feels supported and empowered to reach their trading
            goals.
          </Typography>

          <Typography>
            {" "}
            Our vision is simple – to build a healthy, collaborative trading
            community while helping you achieve lasting success in the world of
            Forex.
          </Typography>
        </Grid2>
        <Grid2 sx={{ alignItems: "end" }} size={{ xs: 12, md: 6 }}>
          <Box>
            <Box sx={{ width: "100%" }} component="img" src={person2} />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default OurMobileApp;
