import React from "react";

const Header = ({ money, total }) => {
  return (
    <div>
      {" "}
      {total > 0
        ? `Kalan para $ ${money - total} vardır`
        : `Harcamak için $ ${money} paranız var.`}
    </div>
  );
};

export default Header;
