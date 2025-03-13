// Functions
function HamOverlay({isHamburgerMenu})
{
    return (
        /* Toggle Hamburger Menu Overlay Depending on isHamburgerMenu State */
        <section className={isHamburgerMenu ? "hamburger-overlay hamburger-overlay-toggle" : "hamburger-overlay"}> </section>
    );
}

// Export Overlay
export default HamOverlay;