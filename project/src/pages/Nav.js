// Import React Hooks
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// Import Components
import CompanyLogo from '../components/CompanyLogo';
import HamButton from '../components/hamburger-menu/HamButton';
import HamLink from '../components/hamburger-menu/HamLink';
import HamOverlay from '../components/hamburger-menu/HamOverlay';

// Functions
function Nav({ LinkState, setLinkState, setSearchVal }) {
    // Create React States
    const [searchvalue, setsearchvalue] = useState("");
    const [isHamburgerMenu, setHamburgerMenu] = useState(false);

    // Disable Hamburger Menu Once HamLink is Clicked
    useEffect(() => { setHamburgerMenu(false); }, [LinkState]);

    // Return Navigation Menu, Hamburger Menu, and Search Bar
    return (
        <div>
            {/* Navigation Menu */}
            <nav>
                {/* Company Logo */}
                <CompanyLogo />

                {/* Navigation Menu - Buttons */}
                <div className="nav-elms">
                    {/* Hamburger Menu - Button */}
                    <HamButton isHamburgerMenu={isHamburgerMenu} setHamburgerMenu={setHamburgerMenu}/>

                    {/* Search Bar */} {/* Unfocuses Search Input Box on Mouse Leave */}
                    <form className="search-bar" autoComplete="off" onMouseLeave={() => { document.getElementById("search-tb").blur() }}>
                        <input className="autocomp" autoComplete="false" name="hidden" type="text" />

                        {/* Search Bar - Input Box */} {/* Set searchvalue State to Input Field Value on Value Change */}
                        <input id="search-tb" className="search search-tb" type="search" placeholder="Search Here..." onChange={(event) => { setsearchvalue(event.target.value) }} maxLength={7} />

                        {/* Search Bar - Button */} {/* Set searchVal State to searchvalue and Set LinkState to 0 on Button Click */}
                        <Link className="nav-btn search search-btn" to="/Search" onClick={() => {setSearchVal(searchvalue); setLinkState(0)}}>
                            <span className="fa fa-search"></span><span className="search-txt">&nbsp;&nbsp;Search</span>
                        </Link>
                    </form>
                </div>
            </nav>

            {/* Hamburger Menu - Overlay */}
            <HamOverlay isHamburgerMenu={isHamburgerMenu}/>

            {/* Hamburger Menu */} {/* Toggle Hamburger Menu Depending on isHamburgerMenu State */}
            <aside className={isHamburgerMenu ? "hamburger-wrapper hamburger-wrapper-toggle" : "hamburger-wrapper"}>
                {/* Hamburger Menu - Header */}
                <h3 className="hamburger-title">Subject Files</h3>
                <div className="hamburger-menu">
                    {/* Hamburger Menu - Links */}
                    <ul className="links">
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={1} value="SCP-006"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={2} value="SCP-015"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={3} value="SCP-021"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={4} value="SCP-162"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={5} value="SCP-188"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={6} value="SCP-250"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={7} value="SCP-309"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={8} value="SCP-479"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={9} value="SCP-529"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={10} value="SCP-667"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={11} value="SCP-679"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={12} value="SCP-686"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={13} value="SCP-740"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={14} value="SCP-753"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={15} value="SCP-779"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={16} value="SCP-844"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={17} value="SCP-863"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={18} value="SCP-871"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={19} value="SCP-902"/>
                        <HamLink setLinkState={setLinkState} linkState={LinkState} id={20} value="SCP-966"/>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

// Export Nav
export default Nav;