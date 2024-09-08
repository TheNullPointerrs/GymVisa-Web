import React from 'react';

const BackgroundVideoMobile = () => {
  const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/gymvisa-d2c4a.appspot.com/o/websiteVideo%2Flv_0_20240906200527.mp4?alt=media&token=c9999925-379c-441a-b5b3-3d0541a06915';

  return (
    <video
      src={videoUrl}
      autoPlay
      loop
      playsInline
      muted
      controls={false}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: 4,
        objectFit: 'cover', 
      }}
    />
  );
};

export default BackgroundVideoMobile;
