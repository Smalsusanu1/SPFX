import axios from 'axios';
import * as React from 'react';
export default function Table() {
    const [data, setPostId] = React.useState()
    React.useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbytitle('Employeedetails')/items", requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
            console.log("Data uploaded successfully");
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
      
    return (
        <Table></Table>
     )
  
   }

