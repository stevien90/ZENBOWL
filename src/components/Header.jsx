import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header(props) {
  return (
    <div className="flex-nav">
      <Stack direction="row" spacing={1}>
        <Avatar
          alt="Facebook"
          src="https://i.imgur.com/YRtQTEP.png"
          sx={{
            width: 50,
            height: 50,
            border: "2px solid #333333",
          }}
        />
        <Avatar
          alt="Instagram"
          src="https://i.imgur.com/yRN5ZQR.png"
          sx={{
            width: 50,
            height: 50,
            border: "2px solid #333333",
          }}
        />
      </Stack>
      <div>Shop</div>
      <div>Subscribe</div>
      <div>About Us</div>
      <div className="flex-nav-logo">
        <img src="https://i.imgur.com/m5UiuwV.png" alt="Zen Bowl Logo" />
      </div>
      <div>Reviews</div>
      <div>FAQ</div>
      <div>Contact Us</div>
      <PersonIcon style={{ color: "#333333", width: 40, height: 40 }} />
      <ShoppingCartIcon style={{ color: "#333333", width: 40, height: 40 }} />
    </div>
  );
}

export default Header;
