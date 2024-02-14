import pic from "../../images/enter_default.png";
import video from "../../video/video_enter.mp4"
import { Link } from "react-router-dom";

const ToiguyHome = () => {
    return  <>
    <div className="backgroundVideo_background_video_container">
        <video
            class="backgroundVideo_background_video"
            src={video} loop autoPlay={true} muted
            style={{ height: "100%", objectPosition:  "Cover", width: "100vw" }}>
        </video>
    </div>
    <div  className="styles_enter_button" >

    <Link to="/toiguy/reel">

    <img id="ToiBig"
        src={pic}
        alt="image link"
        style={{ width: "15vh"  }}
    />
    <canvas id="ToiBig_canvas" />
    </Link>
    </div>
</>;
  };
  
  export default ToiguyHome;