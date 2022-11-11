import * as React from 'react';
// import xmlParser from 'react-xml-parser';
import "bootstrap/dist/css/bootstrap.min.css";


export default function NextGlobalSearch(){
    const[data, setData] = React.useState([]);
    // const[searchApiData,setSearchApiData] = React.useState([]);
    // const [filterVal, setFilterVal] = React.useState('');
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");


    React.useEffect(()=>{
        const fetchData=()=>{
          
            var getRequest = new XMLHttpRequest();
            getRequest.open('GET', "https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber&$filter=(Email ne null)", true);
            getRequest.setRequestHeader("Accept", "application/json");
          
            getRequest.onreadystatechange = function () {
          
              if (getRequest.readyState === 4 && getRequest.status === 200) {
                var result = JSON.parse(getRequest.responseText);
                var resnext = result.value;
                 console.log(resnext)
                 setData(resnext);
                //  setData(result),
                  }
              else if (getRequest.readyState === 4 && getRequest.status !== 200) {
                console.log('Error Occurred !');
                
              }
            };
            getRequest.send();
          }
          fetchData();
        },
        
        []);




    //     const fetchData=()=>{
    //         fetch("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber&$filter=(Email ne null)")
    //         .then(response=>response.json())
    //         .then(json =>{
    //             setData(json)
    //             setSearchApiData(json)
    //         })
    //     }
    //     fetchData();
    // },[])
   
    // const fetchData=()=>{
    //     fetch("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber")
    //         .then(response => response.text())
    //         .then(datas => {
    //             var XMLParser = require('react-xml-parser');
    //             var xml = new XMLParser().parseFromString(datas); 
    //             console.log(xml)
                
    //             setData(xml)
    //             setSearchApiData(xml)
    //         })
    //         .catch(err => console.log(err));
    //       }
    //       fetchData();
    // }, [])

// XML2JSON
    // const fetchData=()=>{
    //     fetch("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber")
    //         .then(response => response.text())
    //         .then(datas => {
    //             const xml = require("txml");
    //             const data = `
    //             <tag>tag content</tag>
    //             <tag2>another content</tag2>
    //             <bar>
    //               <foo>inside content</foo>
    //               <emptyTag />
    //             </bar>`;
                
    //             const dom = xml(data);
    //             xml.stringify(dom);
                
    //             const json = xml.parse(data);
                
    //             setData(xml)
    //             setSearchApiData(xml)
    //         })
    //         .catch(err => console.log(err));
    //       }
    //       fetchData();
    // }, [])
      
    // const handleFilter=(e:any)=>{
    //     if(e.target.value === ''){
    //         setData(searchApiData)

    //     }else{
    //        const filterResult= searchApiData.filter(item=> item.name.toLowerCase().include(e.target.value.toLowerCase()))
    //        if(filterResult.length>0){
    //         setData(filterResult)
    //        }else{
    //         setData([{"name":"No Result"}])
    //        }
           
    //     }
    //     setFilterVal(e.target.value)
                
    // }

    const handleChange = (e: { target: { value: string; }; }) => {
        setSearch(e.target.value);
      };
    return(
        
        <div>

            <div>
            {/* onChange={(e)=>handleFilter(e)}  value={filterVal}*/}
                {/* <input  type='search' value={filterVal}  placeholder='Search'   onChange={(e)=>handleFilter(e)} /> */}
                <div className=''><input type="search" placeholder='search' onChange={handleChange} /></div>
                <table className="table table-striped table-bordered table-sm">
                <thead>
              <tr>
              <th className="th-sm">EmployeeName <input type="search" placeholder='search Name'  onChange={handleChange} /></th>
              <th className="th-sm">Email<input type="search" placeholder='search Email' onChange={handleChange} /></th>
              <th className="th-sm">Designation<input type="search" placeholder='search Designation' onChange={handleChange} /></th>
              <th className="th-sm">Mobile Number<input type="search" placeholder='search PhoneNumber' onChange={handleChange} />
                </th>
                <th>Action</th>
                </tr>
                </thead>
              
         {data.map((item) => {
             if (search == "" || item.Title.toLowerCase().includes(search.toLowerCase())||item.Email.toLowerCase().includes(search.toLowerCase())||item.Designation.toLowerCase().includes(search.toLowerCase())||item.PhoneNumber.toLowerCase().includes(search.toLowerCase())) {
                return(
                    <tr>
                        <td>{item.Title}</td>
                        <td>{item.Email}</td>
                        <td>{item.Designation}</td>
                        <td>{item.PhoneNumber}</td>
                        
                    </tr>
                );
                }
         })}
                </table>
            </div>
            </div>
    )
}
