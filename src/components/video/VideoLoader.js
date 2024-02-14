
import { useState, useEffect, useRef } from "react";

function Video({video}) {

    const videoRef = useRef(null);

    useEffect(() => {
        try {
            const videoUrl = '/video/' + video + '.mp4';
            const videoRequest = new Request(videoUrl);
            fetch(videoRequest)
              .then(() => {

                var video = document.getElementById('video');
                videoRef.current.src = videoUrl;
              });
          } catch (error) {
            console.error(error);
          }
      });

    return (
        <video ref={videoRef} src='' id="video" poster="" loop={true} autoPlay={true} muted  preload="auto" width="100%" height="100%" data-setup="{}">
            <source src='' type="video/mp4"/>
        </video>


    );
  }

  export default Video;