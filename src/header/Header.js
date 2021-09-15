import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo" aria-label="Go to Homepage">
        <Image width="100%" height="100%" src="/images/logo.svg" alt="" />
      </a>
      <div className="header__page-title">
        <h1>
          <i className="blender-icon"></i>
          Receipesss
        </h1>
      </div>
      <div className="header__account">
        <figure>
          <Image width="100%" height="100%" src="/images/user-img.jpg" alt="" />
        </figure>
        <div className="header__account__details dropdown">
          <a href="#" className="dropdown__toggle">
            <span>Welcome</span>
            <h3>
              Sam
              <i className="caret-down-icon"></i>
            </h3>
          </a>
          <div className="dropdown__menu">
            <ul>
              <li>
                <a href="#">
                  <i className="pen-icon"></i>
                  Edit
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="clone-icon"></i>
                  Clone
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
