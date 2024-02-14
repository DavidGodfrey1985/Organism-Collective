import pic from "../images/toi_big.gif";
import video from "../video/BG_video_wip_v002.mp4"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="backgroundVideo_background_video_container">
                <video
                    class="backgroundVideo_background_video"
                    src={video} loop autoPlay={true} muted
                    style={{ height: "100%", objectPosition:  "Cover", width: "100vw" }}>
                </video>
            </div>
            <div dur="12040" class="sc-aXZVg jpAJcN" style={{position: "fixed", left: "0px", top: "0px"}}>

            <Link to="/toiguy">
            <img id="ToiBig"
                src={pic}
                alt="image link"
                style={{ left: "20vw", top: "55vh", opacity: "1", position: "absolute", width: "25vh"  }}
            />
            <canvas id="ToiBig_canvas" width="469" style={{position: "absolute", left: "20vw", top: "55vh", opacity: "0", border: "1px solid green"}} height="355"/>
            </Link>
            </div>
        </>
    )
        ;
};

export default Home;