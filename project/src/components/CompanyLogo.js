// Functions
function CompanyLogo({webp = "images/logo.webp", png = "images/logo.png", alt = "SCP Foundation Logo"})
{
    return (
        <picture className="nav-logo">
            <source srcSet={webp} type="image/webp" />
            <img src={png} alt={alt} />
        </picture>
    );
}

// Export Company Logo
export default CompanyLogo;