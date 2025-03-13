// Functions
function Imageblock({image, alt = "Subject File"})
{
    return (
        <div className="imageblock border">
            <img className="subject-image" src={image} alt={alt} />
        </div>
    );
}

// Export Image Block
export default Imageblock;