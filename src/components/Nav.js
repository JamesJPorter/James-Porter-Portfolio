import React from 'react'

export default function Navbar({currentPage, handlePageChange}) {
  return (
<div>
      <nav class="navbar navbar-expand-lg bg-light container-fluid">
    <div class="container-fluid" id="navDiv">
        <a class="navbar-brand" href="/#">James Porter - Fullstack Developer</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link" activeClassName="active" href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" activeClassName="active" href="#Projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>My Work</a>
            </li>
            {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/#">Action</a></li>
                <li><a class="dropdown-item" href="/#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="/#">Something else here</a></li>
            </ul>
            </li> */}
            <li class="nav-item">
            <a href="#Contact" activeClassName="active" class="nav-link" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
            </li>
        </ul>
        {/* <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
    </div>
    </nav>  
</div>
  )
}
