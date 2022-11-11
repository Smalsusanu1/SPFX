import { PrimaryButton, TextField } from 'office-ui-fabric-react';
import { IPostdatasProps } from './IPostdatasProps';
import * as React from 'react';
import { IPostdProps } from './IPostd';
function PostRequestHooks( props:IPostdatasProps) {
    const [postId, setPostId] = React.useState(null);
    let _form:IPostdatasProps = {title:"",url:"",description:""};
    let[form, setform] = React.useState({title:"",url:"",description:""});
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
            console.log(postId);

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    function _onSubmit(){
        console.log(form);    }

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {postId}
                <TextField onChange={(e) => setform({...form, title:(e.target as HTMLInputElement).value})}></TextField>
                <TextField onChange={(e)=> setform({...form,url:(e.target as HTMLInputElement).value})}></TextField>
                <TextField onChange={(e)=> setform({...form,description:(e.target as HTMLInputElement).value})}></TextField>
                <PrimaryButton  text="add data" onClick={()=> _onSubmit()}/>
            </div>
        </div>
    );
}

export { PostRequestHooks };