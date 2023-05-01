import React, { useState, useEffect } from "react";

function PeoplePage() {
    const [people, setPeople] = useState([]);

    // useEffect hook to fetch data from server on component mount
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/AllCandidates");
            const data = await response.json();
            setPeople(data);
        }
        fetchData();
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

export default PeoplePage;

/*
import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("/AllCandidates")
            .then(response => setPeople(response.data))
            .catch(error => console.log(error));
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
                    {people.map(person => (
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

export default MyComponent;
*/