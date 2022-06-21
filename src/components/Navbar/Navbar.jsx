import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
          <div className="left">
              <img src="https://cdn.iconscout.com/icon/free/png-256/netflix-3628944-3030169.png" alt="logo"/>
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
          </div>
          <div className="right"></div>
      </div>
    </div>
  )
}

export default Navbar
