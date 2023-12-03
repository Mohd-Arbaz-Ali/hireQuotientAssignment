import React from 'react';

const navs = ['Features', 'Testemonial', 'Pricing', 'FAQs', 'Blogs'];

export default function Header() {
  const [isMenu, setIsMenu] = React.useState(false);

  return (
    <div
      data-aos="fade-up"
      className="header-container"
      style={{
        height: !isMenu ? '80px' : '330px',
        overflow: 'hidden',
        position:'fixed',
        zIndex:'100'
      }}
    >
      <div className="header">
        <span className="title">Milton</span>
        <ul className="desktop-only">
          {navs.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <button
          className="menu"
          onClick={(e) => {
            e.preventDefault();
            setIsMenu(!isMenu);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              width: '20px',
              height: '20px',
            }}
          >
            {!isMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>

        <div className="cta">
          <button className="login">Login</button>
          <button className="get-started">Get Started</button>
        </div>
      </div>

      <div className="mobile-nav">
        {navs.map((item, index) => (
          <div className="mobile-nav-item">{item}</div>
        ))}
      </div>
    </div>
  );
}
