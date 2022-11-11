import * as React from 'react';
import Popup from 'reactjs-popup';
import './model.css';


export default function PopupEdit() {
  const [data, setData] = React.useState([]);
  const [search, setSearch]: [string, (search: string) => void] = React.useState("");
  const [toDoText, setToDoText] = React.useState("Title");

  React.useEffect(() => {
    const fetchData = () => {

      var getRequest = new XMLHttpRequest();
      getRequest.open('GET', "https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber&$filter=(Email ne null)", true);
      getRequest.setRequestHeader("Accept", "application/json");

      getRequest.onreadystatechange = function () {

        if (getRequest.readyState === 4 && getRequest.status === 200) {
          var result = JSON.parse(getRequest.responseText);
          var resnext = result.value;
          console.log(resnext)
          setData(resnext);
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



  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let target = event.target;
    setToDoText((currentState) => {
      return target.value;
    })
  }
  return (

    <div>

      <div>
        <div>
          <Popup
            trigger={<button className="button" > ADD Employee Data </button>}
            modal
            nested
          >
            <div style={{ "background": "#8a6d3b", "width": "190%", "color": "black" }}>
              <div>
                <label>Name:</label>
                <input type="text" id="todo-text" onChange={handleInput} placeholder='Enter Name' />
              </div>

              <div  >
                <label>Email:</label>
                <input type='text' placeholder='Enter Email' onChange={handleInput} />
              </div>
              <div >
                <label>Designation:</label>
                <input type='text' placeholder='Enter Designation' onChange={handleInput} />
              </div>
              <div>
                <label>Phone Number:</label>
                <input type='text' placeholder='Enter Phone Number' onChange={handleInput} />
              </div>
              <button type='button'>Save</button>
              <span>  </span>
              <button type='button' >Cancel</button>
            </div>
          </Popup>
        </div>
        <div className=''><input type="search" placeholder='search' onChange={handleChange} /></div>
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th className="th-sm">EmployeeName <input style={{ "width": "96%" }} type="search" placeholder='search Name' onChange={handleChange} /></th>
              <th className="th-sm">Email<input type="search" style={{ "width": "96%" }} placeholder='search Email' onChange={handleChange} /></th>
              <th className="th-sm">Designation<input type="search" style={{ "width": "96%" }} placeholder='search Designation' onChange={handleChange} /></th>
              <th className="th-sm">Mobile Number<input type="search" style={{ "width": "96%" }} placeholder='search PhoneNumber' onChange={handleChange} />
              </th>
              <th>Action</th>
            </tr>
          </thead>

          {data.map((item) => {
            if (search == "" || item.Title.toLowerCase().includes(search.toLowerCase()) || item.Email.toLowerCase().includes(search.toLowerCase()) || item.Designation.toLowerCase().includes(search.toLowerCase()) || item.PhoneNumber.toLowerCase().includes(search.toLowerCase())) {
              return (
                <tr>
                  <td>{item.Title}</td>
                  <td>{item.Email}</td>
                  <td>{item.Designation}</td>
                  <td>{item.PhoneNumber}</td>
                  <td> <Popup
                    trigger={<button className="button"> Edit </button>}
                    modal
                    nested
                  >
                    <div style={{ "background": "#8a6d3b", "width": "190%", "color": "black" }}>
                      <div>
                        <label>Name:</label>
                        <input type="text" id="todo-text" defaultValue={item.Title} placeholder='Enter Name' onChange={handleInput} />
                      </div>

                      <div  >
                        <label>Email:</label>
                        <input type='text' defaultValue={item.Email} placeholder='Enter Email' onChange={handleInput} />
                      </div>
                      <div >
                        <label>Designation:</label>
                        <input type='text' defaultValue={item.Designation} placeholder='Enter Designation' onChange={handleInput} />
                      </div>
                      <div>
                        <label>Phone Number:</label>
                        <input type='text' defaultValue={item.PhoneNumber} placeholder='Enter Phone Number' onChange={handleInput} />
                      </div>
                      <button type='button'>Save</button>
                      <span>  </span>
                      <button type='button' >Cancel</button>
                    </div> 
                  </Popup></td>


                </tr>
              );
            }
          })}
        </table>
      </div>
    </div>
  )
}





