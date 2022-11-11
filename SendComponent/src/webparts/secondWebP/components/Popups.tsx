import * as React from "react";
import EditEmployeeContact from "../../firstWebP/components/EditEmployeeContact";


 
export default function Popupss(){
    const [data, setData] = React.useState([]);
    const [backup, setbackup] = React.useState([]);
    React.useEffect(() => {
      var url = "https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('edc879b9-50d2-4144-8950-5110cacc267a')/items?$select=Id,Title,Item_x0020_Cover,FirstName,FullName,Department,Company,JobTitle,WebPage,CellPhone,Email,LinkedIn,Created,Author/Title,Modified,Editor/Title,EmployeeID/Title,StaffID,EmployeeID/Id&$expand=EmployeeID,Author,Editor&$orderby e asc";
      var response: any = [];  // this variable is used for storing list items  &$orderby e asc
      function GetListItems() {
          $.ajax({
              url: url,
              method: "GET",
              headers: {
                  "Accept": "application/json; odata=verbose"
              },
              success: function (data) {
                  response = response.concat(data.d.results);
                  if (data.d.__next) {
                      url = data.d.__next;
                      GetListItems();
                  } else 
                  setData(response);
                  setbackup(response)
                  console.log(response);
              },
              error: function (error) {
                  console.log(error);
                  // error handler code goes here
              }
          });
      }
      GetListItems();
  },
      []);
    return(
        <table>
        <tbody> 
                               {data.map(employee =>
                                   <tr 
                                       className="tdrow">
                                       <td><input type="checkbox" className="selects" 
                                              /></td> 
                                              {/* onClick={(e:any)=>selectBox(e,employee)} */}
                                       <td>{employee.StaffID}</td>
                                       <td> 
                                           <img className="wid22"
                                           // employee.Item_x0020_Cover !=undefined?:"https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/SiteCollectionImages/ICONS/32/icon_user.jpg"
                                           //   employee.Item_x0020_Cover !=undefined?employee.Item_x0020_Cover.Url:
                                             src={"https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/SiteCollectionImages/ICONS/32/icon_user.jpg"}/>
                                           <a className="ml-5"
                                               href= {`https://hhhhteams.sharepoint.com/sites/HHHH/HR/SitePages/EmployeeInfo.aspx?employeeId=${employee.Id}`}
                                               rel="noopener noreferrer" target="_blank">{employee.FullName}</a>
                                       </td>
                                       <td>{employee.Email}</td>
                                       <td>{employee.Company}</td>
                                       <td>{employee.Department}</td>
                                       <td>{employee.JobTitle}</td>
                                       <td>
                                           <EditEmployeeContact id={employee.Id!==null?employee.Id:"null"}/>
                                       </td>
                                   </tr>
                                  )}
                               </tbody>
                           </table>
    )
}