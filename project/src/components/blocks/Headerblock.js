// Functions
function Headerblock({item, object})
{
    return(
        <div className="headerblock border">
            <h1>Item #: {item}</h1>
            <h2>Object Class: {object}</h2>
        </div>
    );
}

// Export Headerblock
export default Headerblock;