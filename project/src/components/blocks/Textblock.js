// Functions
function Textblock({header, paragraph})
{
    return (
        <div className="textblock border">
            <article>
                <h2>{header}</h2>
                <p>{paragraph}</p>
            </article>
        </div>
    );
}

// Export Textblock
export default Textblock;