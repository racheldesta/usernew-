import React from "react";

const Avatar = ({ src, alt, size, shape }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: shape === "circle" ? "50%" : "4px",
  };

  return <img src={src} alt={alt} style={avatarStyle} />;
};

export default Avatar;