import React, { useState, useEffect } from "react";
/*
The function returns the list of all candidates to the client
It addresses the function on the server and fetches the list from there
At the end it presents the list in the form of a table
*/
function CandidatePage() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function A() {
            const response = await fetch("/AllCandidates");
            const data = await response.json();
            setPeople(data);
        }
        A();
    }, []);

        return (
            <div>
                <h1>List of all the Candidate:</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                    </thead> 
                <tbody>
                      {people.map((person) => (
                        <tr key={person.id}>
                          <td>{person.id}</td>
                          <td>{person.name}</td>
                        </tr>
                      ))}
                    </tbody>
            </table>
        </div>
    );

}

export default CandidatePage;
