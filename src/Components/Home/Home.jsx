import { Box, Typography } from "@mui/material";
import banner from "../../assets/banner.png";
import missionImg from "../../assets/misson_img.png";
import mission from "../../assets/mission.png";
import visionImg from "../../assets/vision_img.png";
import vision from "../../assets/Vision.png";
import leftSideImg from "../../assets/left_side.png";
import rightSideImg from "../../assets/right_side.png";
function Home() {
  return (
    <>
      <Box>
        <Box sx={{ maxWidth: "1316px", maxHeight: "719px", margin: "auto" }}>
          <Box sx={{ width: "100%" }} component="img" src={banner} />
        </Box>

        <Box
          component="section"
          sx={{
            marginBlock: "100px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <Typography
              sx={{ color: "#fff", fontSize: "25px", fontFamily: "Bayon" }}
              component="h3"
            >
              ABOUT US – TRADING SOCIETY
            </Typography>
            <Box
              sx={{
                border: "5px solid #ECBC56",
                maxWidth: "251px",
                height: "0",
              }}
            ></Box>
          </Box>
          <Typography
            sx={{
              maxWidth: "957px",
              maxHeight: "194px",
              color: "#fff",
              fontSize: "27px",
              fontWeight: "400",
              lineHeight: "33.31px",
              fontFamily: "TanseekModernProArabic-Light",
            }}
          >
            Trading Society is dedicated to making Forex trading accessible to
            everyone. We offer practical, easy-to-understand courses designed
            for both beginners and experienced traders who want to improve their
            skills. What sets us apart is our focus on building a strong,
            supportive community. We believe that trading success comes not just
            from learning, but from sharing knowledge and experiences. At
            Trading Society, we’re here to provide the education, tools, and
            environment to help you grow confidently in your trading journey.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginBlock: "200px" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "start" }}>
              <Box
                sx={{
                  maxWidth: "250px",
                  maxHeight: "250px",
                  backgroundImg: "cover",
                }}
                component="img"
                src={missionImg}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: "100px",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "264px",
                    maxHeight: "41px",
                    marginLeft: "-30px",
                  }}
                  component="img"
                  src={mission}
                />
                <Typography
                  sx={{
                    maxWidth: "356px",
                    maxheight: "98px",
                    fontFamily: "TanseekModernProArabic-Light",
                    fontSize: "27px",
                    color: "#FFFFFF",
                    fontWeight: "400",
                    lineHeight: "33.31px",
                  }}
                >
                  Our mission at Trading Society is to provide high-quality,
                  easy-to-understand Forex education that empowers traders of
                  all levels. We aim to build a strong, collaborative community
                  where traders can share insights, learn from each other, and
                  grow in a supportive environment.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center"}}>
              <Box
                sx={{
                  maxWidth: "346px",
                  maxHeight: "217px",
                  backgroundImg: "cover",
                }}
                component="img"
                src={visionImg}
              />
              <Box sx={{ display: "flex", flexDirection: "column",gap:'10px',mt:'100px' }}>
                <Box
                  sx={{
                    maxWidth: "234px",
                    maxHeight: "36px",
                    marginLeft: "-30px",
                  }}
                  component="img"
                  src={vision}
                />
                <Typography
                  sx={{
                    maxWidth: "356px",
                    maxHeight: "98px",
                    fontFamily: "TanseekModernProArabic-Light",
                    fontSize: "27px",
                    color: "#FFFFFF",
                    fontWeight: "400",
                    lineHeight: "33.31px",
                  }}
                >
                  Our vision is to create a global network of skilled traders
                  who not only succeed individually but also contribute to the
                  growth of a thriving, informed trading community. We envision
                  a future where Forex trading is accessible, transparent, and
                  rewarding for all.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: "350px",
              maxHeight: "441px",
              opacity: "0.5",
              position: "absolute",
              left: "0",
              top: "150px",
            }}
          >
            <Box
              sx={{ width: "100%", objectfit: "cover" }}
              component="img"
              src={leftSideImg}
            />
          </Box>
          <Box
            sx={{
              maxWidth: "350px",
              maxHeight: "441px",
              opacity: "0.5",
              position: "absolute",
              top: "-300px",
              right: "0",
            }}
          >
            <Box sx={{ width: "100%" }} component="img" src={rightSideImg} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ my: "200px" }}></Box>
    </>
  );
}

export default Home;
