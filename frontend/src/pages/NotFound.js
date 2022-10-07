import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Sayfa Bulunamadı
      <br />
      <Link to={"/"}>Ana Sayfaya Dön</Link>
    </div>
  );
};

export default NotFound;
