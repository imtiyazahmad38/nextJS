export default function Header() {
    return (
      <aside className="sidebar">
        <nav className="sidebar__nav">
          <ul>
            <li>
              <a href="receipes.html">
                <i className="home-icon"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="receipes.html" className="active">
                <i className="blender-icon"></i>
                Receipes
              </a>
            </li>
          </ul>
          <div className="testing"></div>
        </nav>
      </aside>
    )
  }