import React from "react";

const Header = ({ money, total }) => {
  return (
    <div className="header">
      <div>
        {total > 0
          ? `Kalan para $ ${money - total} vardır`
          : `Harcamak için $ ${money} paranız var.`}
      </div>
      <div>{money - total === 0 && <div>Paranız kalmadı!</div>}</div>
      <style isx>
        {`
        .header{
          position:sticky;
          top:0;
          background:linear-gradient(to bottom , #0a5e0a,#1d501d);
          height:50px;
          display:flex;
          justify-content:center;
          align-items:center;
          color:white;
          font-size:30px
        }`}
      </style>
    </div>
  );
};

export default Header;
