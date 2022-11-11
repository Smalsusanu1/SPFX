import * as React from 'react';
import { useState, useEffect } from 'react';

// const Postdata = () => {
//    const [posts, setPosts] = useState([]);

//    useEffect(() => {
//       fetch("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items")
     
//       .then((res) => res.json())
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);

//    return (
//       <>
//          <div className="add-post-container">
//             <form>
//                <input type="text" className="form-control" />
//                <textarea className="form-control" ></textarea>
//                <button type="submit">Add Post</button>
//             </form>
//          </div>
//          <div className="posts-container">
//             {posts.map((post) => {
//                return (
//                   <div className="post-card" key={post.id}>
//                      <h2 className="post-title">{post.title}</h2>
//                      <p className="post-body">{post.body}</p>
//                      <div className="button">
//                         <div className="delete-btn">Delete</div>
//                      </div>
//                   </div>
//                );
//             })}
//          </div>
//       </>
//    );
// };

// export default Postdata;








const Postdata = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    // ... Fetch posts here
    
    // Handle psosts request
    const handleSubmit = (e:any) => {
       e.preventDefault();
       fetch("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items", {
          method: 'POST',
          body: JSON.stringify({
             title: title,
             body: body,
             userId: Math.random().toString(36).slice(2),
          }),
          headers: {
             'Content-type': 'application/json; charset=UTF-8',
          },
       })
          .then((res) => res.json())
          .then((post) => {
             setPosts((posts) => [post, ...posts]);
             setTitle('');
             setBody('');
          })
          .catch((err) => {
             console.log(err.message);
          });
    };
 
    return (
        <>
      <div className="add-post-container">
            <form>
               <input type="text" className="form-control" />
               <textarea className="form-control" ></textarea>
               <button type="submit" onClick={handleSubmit}>Add Post</button>
            </form>
         </div>
         <div className="posts-container">
            {posts.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                     <h2 className="post-title">{post.title}</h2>
                     <p className="post-body">{post.body}</p>
                     <div className="button">
                        <div className="delete-btn">Delete</div>
                     </div>
                  </div>
               );
            })}
         </div>
      </>
    );
 };
 
 export default Postdata;