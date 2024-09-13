import React from 'react';



function Navbar() {

return (
<>
<div className='navBar'> 
<div className="logoContainer">
<h1 className='logoFontNav'>Mum can code</h1>
</div>
<div className="navLinksContainer">
 <ul>
<li className='navBarLink' href="home">Home</li>
<li className='navBarLink' href="about">About me</li>
<li className='navBarLink' href="projects">Projects</li>
<li className='navBarLink' href="contact">Contact</li>
<li className='navBarLink' href="skills">Skills</li>
</ul>
</div>

</div>
</>
)

}


export default Navbar;