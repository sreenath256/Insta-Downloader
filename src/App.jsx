//test Url  https://www.instagram.com/reel/CvzvzCQNR9J/?igshid=MzRlODBiNWFlZA==
// App.js 
import React, { useState } from 'react';
import { downloadInstagramVideo } from './api';
import './index.css'; 
import Loader from './Loader';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (videoUrl) {
      setIsLoading(true);
      try {
        const data = await downloadInstagramVideo(videoUrl);
        setVideoData(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
    
      <div className="content">
        <h1 className="heading">Instagram Reel Video Downloader</h1>
        <input type="text" className="input"
          placeholder="Reel Url" value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        {isLoading ? (
          <div><Loader /></div>
        ) : (
          videoData && (
            <div className="video-section">
            
               <video className="video-player" controls>
                <source src="https://instagram.fdnk3-1.fna.fbcdn.net/v/t66.30100-16/10000000_1061247398337217_7986528291713675059_n.mp4?_nc_ht=instagram.fdnk3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=03gXe-ztFWQAX_yqiqV&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAJsM3-AbVrex4EaMGZD1YBrTCJebbp2vIMnEaRf92Hqw&oe=654B8FD1&_nc_sid=2999b8" type="video/mp4" />
                
              </video> 
              
            </div>
          )
        )}
        <button className="button" onClick={handleDownload}>
        <span>Download</span></button>
      </div>
    </div>
  );
}

export default App;
