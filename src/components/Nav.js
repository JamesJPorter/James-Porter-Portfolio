import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = [
{
    "id": 1,
    "name": "About Me", 
    "pageName": "AboutMe",
    "href": "/#AboutMe"
}, 
{
    "id": 2,
    "name":"My Work", 
    "pageName": "Projects",
    "href": "/#Projects"
}, 
{
    "id": 3,
    "name": "Contact Me",
    "pageName": "Contact",    
    "href": "/#Contact"
}
];

function ResponsiveAppBar({ currentPage, handlePageChange }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#AboutMe"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            James Porter - Fullstack Developer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" href={page.href} onClick={() => handlePageChange(page.pageName)}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 300,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            James Porter - Fullstack Dev
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
                <Button sx={{className: `navButton, ${{currentPage} === "page.name" ? "navActive" : "nav"}`, my: 2, color: "white", display: "block"  }}
                  key={page.id}
                //   onClick={handleCloseNavMenu}
                  onClick={() => handlePageChange(page.pageName)}
                >
                    {page.name}
                </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import React from "react";

// export default function Navbar({ currentPage, handlePageChange }) {
//   return (
//     <div id="navContainer">
//       <nav class="navbar navbar-expand-lg bg-light container-fluid">
//         <div class="container-fluid" id="navDiv">
//           <a
//             class="navbar-brand"
//             href="#AboutMe"
//             onClick={() => handlePageChange("AboutMe")}
//             className={
//               currentPage === "AboutMe" ? "nav-link active" : "nav-link"
//             }
//           >
//             James Porter - Fullstack Developer
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a
//                   class="nav-link"
//                   activeClassName="active"
//                   href="#AboutMe"
//                   onClick={() => handlePageChange("AboutMe")}
//                   className={
//                     currentPage === "AboutMe" ? "nav-link active" : "nav-link"
//                   }
//                 >
//                   About Me
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link"
//                   activeClassName="active"
//                   href="#Projects"
//                   onClick={() => handlePageChange("Projects")}
//                   className={
//                     currentPage === "Projects" ? "nav-link active" : "nav-link"
//                   }
//                 >
//                   My Work
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   href="#Contact"
//                   activeClassName="active"
//                   class="nav-link"
//                   onClick={() => handlePageChange("Contact")}
//                   className={
//                     currentPage === "Contact" ? "nav-link active" : "nav-link"
//                   }
//                 >
//                   Contact Me
//                 </a>
//               </li>
//               <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//             </a>
//             <ul class="dropdown-menu">
//                 <li><a class="dropdown-item" href="/#AboutMe">About Me</a></li>
//                 <li><a class="dropdown-item" href="/#Projects">My Work</a></li>
//                 {/* <li><hr class="dropdown-divider" /></li> */}
//                 <li><a class="dropdown-item" href="/#Contact">Contact Me</a></li>
//             </ul>
//             </li>
//             </ul>
//             {/* <form class="d-flex" role="search">
//             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button class="btn btn-outline-success" type="submit">Search</button>
//         </form> */}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
