import React from 'react'

const Header = () => {
  return (
    <header className="nav _bgCntr">
    <div className="nav-content">
      <a className="brand" href="/">
        <img
          alt="Robb Report India"
          loading="lazy"
          width={1000}
          height={1000}
          decoding="async"
          data-nimg={1}
          
          src="https://www.robbreportindia.com/_next/image?url=%2Fassets%2Fimages%2Flogo%2FRR-final-logo.png&w=2048&q=75"
          style={{ color: "transparent" }}
        />
      </a>
      <div className="links nav-items">
        <ul className="menu-linksul">
          <li className="menu-item">
            <a className="nav_active" href="/motoring">
              Motoring
            </a>
          </li>
          <li className="menu-item">
            <a className="" href="/yachting-and-aviation">
              Yachting &amp; Aviation
            </a>
          </li>
          <li className="menu-item">
            <a className="" href="/style">
              Style
            </a>
          </li>
          <li className="menu-item">
            <a className="" href="/home-and-design">
              Home &amp; Design
            </a>
          </li>
          <li className="menu-item">
            <a className="" href="/travel">
              Travel
            </a>
          </li>
          <li className="menu-item">
            <a className="" href="/food-and-drink">
              Food &amp; Drink
            </a>
          </li>
          <li className="menu-item">
            <a className="" href="/specials">
              Specials
            </a>
          </li>
        </ul>
      </div>
      <div className="search_btn light show dark">
        <button className="search-btn" aria-label="Search Button">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            version="1.1"
            id="search"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="material-icons menu">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={0}
          viewBox="0 0 15 15"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
 
  </header>
  )
}

export default Header
