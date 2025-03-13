// Functions
function HamButton({isHamburgerMenu, setHamburgerMenu, value = "Subject Files"})
{
    return (
    /* Toggles isHamburgerMenu State on Button Click */
    <button id="hamburger-btn" className={isHamburgerMenu ? "nav-btn hamburger-btn-toggle" : "nav-btn"} type="button" onClick={() => setHamburgerMenu(!isHamburgerMenu)}>
        <span className="fa fa-bars"></span><span className="hamburger-txt">&nbsp;&nbsp;{value}</span>
    </button>
    );
}

// Export Ham Button
export default HamButton;