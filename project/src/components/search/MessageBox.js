// Functions
function MessageBox({message})
{
    return (
        <div className='container'>
            <div className="messagebox">
                <div className='messagebox-content border'>
                    <h1>{message}</h1>
                </div>
            </div>
        </div>
    );
}

// Export MessageBox
export default MessageBox;