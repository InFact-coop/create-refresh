import React from "react"

const BackgroundDiv = styled.div.attrs({})``
const Close = styled.img.attrs({})``
const NavLinks = styled.div.attrs({})``
const Link = styled.a.attrs({})``

const ShareBox = ({ icon, to }) => (
  <div>
    <p>Share to</p>
    <img src={icon} alt={to} />
  </div>
)

const Hamburger = () => (
  <BackgroundDiv>
    <Close src="" alt="" />
    <NavLinks>
      <Link>Home</Link>
      <Link>Privacy</Link>
      <Link>FAQ</Link>
    </NavLinks>
    <ShareBox to="facebook" icon={facebook} />
    <ShareBox to="twitter" icon={twitter} />
  </BackgroundDiv>
)

export default Hamburger
