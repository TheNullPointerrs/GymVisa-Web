import React from 'react';

const StoreButton = ({ store, url, height }) => {
  const appleBadge = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
  const googleBadge = "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png";

  const badgeSrc = store === 'apple' ? appleBadge : googleBadge;
  const altText = store === 'apple' ? "Download on the App Store" : "Get it on Google Play";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <img
        src={badgeSrc}
        alt={altText}
        style={{ width: '150px', height: height, margin: '0 10px', display: 'block' }}
      />
    </a>
  );
};

export default StoreButton;
