import React, { useState, useEffect } from "react";
import axios from "axios";

function A() {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedExperience, setSelectedExperience] = useState("");
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        // Fetch all available languages from the server
        axios.get("/Alllanguages")
            .then(response => {
                setLanguages(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    }

    const handleExperienceChange = (event) => {
        setSelectedExperience(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a request to the server to fetch matching candidates
        axios.get(`/candidates?language=${selectedLanguage}&experience=${selectedExperience}`)
            .then(response => {
                setCandidates(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Search Candidates</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Select a Language:
                    <select value={selectedLanguage} onChange={handleLanguageChange}>
                        <option value="">Language </option>
                        {languages.map(language => (
                            <option key={language.id} value={language.name}>{language.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Select Experience Level:
                    <select value={selectedExperience} onChange={handleExperienceChange}>
                        <option value=""> Experience</option>
                        <option value="jonyor">Junior</option>
                        <option value="senyor">Senior</option>
                    </select>
                </label>
                <button type="submit" style={{ width: "10%", margin: "0 auto", border: "1px solid black" }}>Search</button>
            </form>
            {candidates.length > 0 && (
                <div>
                    <h2>Matching Candidates:</h2>
                    <ul>
                        {candidates.map(candidate => (
                            <li key={candidate.id}>{candidate.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default A;

/*

import React, { useState } from 'react';
import Button from './Button';

const List = () => {
    const [list, setList] = useState([]);

    const fetchData = async () => {
        const response = await fetch('"api/languages"'); // replace with your server endpoint
        const data = await response.json();
        setList(data);
    };

    return (
        <div className="welcome-page">
            <h1>Welcome To jyoson</h1>
            <h2>To see all the Candidates:</h2>
            <Button onClick={fetchData} />
            {list.map(item => (
                <div key={item.id}>
                   {item.id},{item.name}     
                </div>
          
            ))}
            </div>

    );
}

export default List;




/*

import React, { useState, useEffect } from 'react';
const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        //fetch(`item`)
        fetch(`geta/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {

                setItems(data);
            })
    },[])

    return (
        <main>
            <div className="welcome-page">
                <h1>Welcome</h1>
                <button>Button</button>
                {
                    (items.length > 0) ? items.map((item) => <h3>{item.name}</h3>) : <div>Loading...</div>
                }
            </div>
            
            </main>
    )
}


export default RankItems;
*/