// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span>ArinKei</span>
      </div>
      <nav className="nav-links">
        <a href="/Iam">나는</a>
        <a href="/reserve">예약하기</a>
        <a href="/special">특가 상품</a>
        <a href="/guide">이용 안내</a>
        <a href="/support">고객센터</a>
      </nav>
    </header>
  );
}

export default Navbar;
