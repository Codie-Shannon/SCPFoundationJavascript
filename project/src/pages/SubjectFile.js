// Import React Hooks
import { useEffect, useState } from 'react';

// Import Components
import Headerblock from '../components/blocks/Headerblock';
import Imageblock from '../components/blocks/Imageblock';
import Textblock from '../components/blocks/Textblock';

// Functions
function SubjectFile({id})
{
    // Get Data From Database
    const currentState = GetSubjects();

    // Filter For Subject File
    const result = currentState.filter(i => i.id === id);

    // Format Subject File For HTML and Return It
    return FormatSubject(result);
}

function GetSubjects()
{
    // Get Data From Database
    function fetchSCP()
    { 
        // Create Data Variable and XHR (XML HTTP Request) Object
        var data = null;
        var xhr = new XMLHttpRequest();

        // Set Credentials Requirement to False
        xhr.withCredentials = false;
        
        // Get Data From Database
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4)
                setState(JSON.parse(this.responseText));
        });

        // Configure XHR (XML HTTP Request)
        xhr.open("GET", "https://scpfoundationdb-ef73.restdb.io/rest/subject-files");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "6270a864fcf9897eb111a0e1");
        xhr.setRequestHeader("cache-control", "no-cache");
        
        // Send XHR (XML HTTP Request)
        xhr.send(data);
    }

    // Create State
    const [currentState, setState] = useState([]);

    // Utilize React useEffect to Run fetchSCP Function
    useEffect(() => { fetchSCP(); }, [currentState] );

    // Return currentState
    return currentState;
}

function FormatSubject(result)
{
    // Return Formatted-HTML Subject File
    return (
        <div className="wrapper">
            {
                result.map(subjectFile =>
                    // Body
                    <div key={subjectFile.id} className="container">
                        {/* Item and Object Class */}
                        <Headerblock item={subjectFile.item} object={subjectFile.class} />

                        {/* Image */}
                        <Imageblock image={subjectFile.image} />

                        {/* Special Containment Procedures */}
                        <Textblock header="Special Containment Procedures:" paragraph={subjectFile.containment} />

                        {/* Description */}
                        <Textblock header="Description:" paragraph={subjectFile.description} />
                    </div>
                )
            }
        </div>
    );
}

// Export SubjectFile
export default SubjectFile;