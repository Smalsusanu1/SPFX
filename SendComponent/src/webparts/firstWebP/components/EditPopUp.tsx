import * as React from 'react';
import * as $ from 'jquery';
import '../../foundation.scss';
import EditEmployeeContact from './EditEmployeeContact';
import CreateEmployee from './CreateEmployee';

export default function EmployeeDetails() {
    const [data, setData] = React.useState([]);
    const [backup, setbackup] = React.useState([]);
    const [check, setcheck] = React.useState([]);
    const [sdata, setsData] = React.useState([]);
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");
    const [searchValue, setSearchValue] = React.useState("")
    const [order,setorder] = React.useState('ASC');
    React.useEffect(() => {
        let url = "https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('edc879b9-50d2-4144-8950-5110cacc267a')/items?$select=Id,Title,Item_x0020_Cover,FirstName,FullName,Department,Company,JobTitle,WebPage,CellPhone,Email,LinkedIn,Created,Author/Title,Modified,Editor/Title,EmployeeID/Title,StaffID,EmployeeID/Id&$expand=EmployeeID,Author,Editor&$orderby e asc";
        let response: any = [];  // this letiable is used for storing list items  &$orderby e asc
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
        let handleChange = (e: { target: { value: string; }; },item:any) => {
            setSearch(e.target.value.toLowerCase()); 
if(item == 'FullName'){
let searcjQery = e.target.value.toLowerCase(),
displayedContacts = data.filter((el) => {
let searchValue = (el.FullName.toLowerCase())
return searchValue.indexOf(searcjQery) !== -1;
})
setData(displayedContacts)
 }
if(item == 'StaffID'){
    let searcjQery = e.target.value.toLowerCase(),
    displayedContacts = data.filter((el) => {
    let searchValue = (el.StaffID.toLowerCase())
    return searchValue.indexOf(searcjQery) !== -1;
})
    setData(displayedContacts)
     }
         if(item == 'Email'){
            let searcjQery = e.target.value.toLowerCase(),
            displayedContacts = data.filter((el) => {
                if(el.Email != undefined){
            let searchValue = (el.Email.toLowerCase())
            return searchValue.indexOf(searcjQery) !== -1;
                }
            })
            setData(displayedContacts)
             }
             if(item == 'Company'){
                let searcjQery = e.target.value.toLowerCase(),
                displayedContacts = data.filter((el) => {
                    if(el.Company != undefined){
                let searchValue = (el.Company.toLowerCase())
                return searchValue.indexOf(searcjQery) !== -1;
             }})
                setData(displayedContacts)
                 }
              if(item == 'Department'){
                let searcjQery = e.target.value.toLowerCase(),
                displayedContacts = data.filter((el) => {
                    if(el.Department != undefined){
                let searchValue = (el.Department.toLowerCase())
                return searchValue.indexOf(searcjQery) !== -1;
                    }
                })
                setData(displayedContacts)
                 }
                  if(item == 'JobTitle'){
                    let searcjQery = e.target.value.toLowerCase(),
                    displayedContacts = data.filter((el) => {
                        if(el.JobTitle != undefined){
                    let searchValue = (el.JobTitle.toLowerCase())
                    return searchValue.indexOf(searcjQery) !== -1;
                  }})
                    setData(displayedContacts)
                     }
        };
        const ClearSearch =(search:any)=>{
            setData(backup)  
            $("#searchFullName").val(null)
            $("#searchJobTitle").val(null)
            $("#searchCompany").val(null)
            $("#searchDepartment").val(null)
            $("#searchEmail").val(null)
           }
        function sortBy(col:any)  {
           if (order === "ASC") {
            let sorteddata =[...data];
                const sorted = sorteddata.sort((a:any, b:any) =>
                    a.FullName > b.FullName ? 1 : -1
                );
                setData(sorted)
                setorder('DSC')
            }
            if (order === 'DSC') {
                const sorted = [...data].sort((a:any, b:any) =>
                    a.FullName < b.FullName ? 1 : -1
                );
                setData(sorted)
                setorder('ASC')
            }
        }
        function sortByE(col:any)  {
            if (order === "ASC") {
             let sorteddata =[...data];
                 const sorted = sorteddata.sort((a:any, b:any) =>
                     a.Email > b.Email ? 1 : -1
                 );
                 setData(sorted)
                 setorder('DSC')
             }
             if (order === 'DSC') {
                 const sorted = [...data].sort((a:any, b:any) =>
                     a.Email < b.Email ? 1 : -1
                 );
                 setData(sorted)
                 setorder('ASC')
             }
         }
         function sortByJ(col:any)  {
            if (order === "ASC") {
             let sorteddata =[...data];
                 const sorted = sorteddata.sort((a:any, b:any) =>
                     a.JobTitle > b.JobTitle ? 1 : -1
                 );
                 setData(sorted)
                 setorder('DSC')
             }
             if (order === 'DSC') {
                 const sorted = [...data].sort((a:any, b:any) =>
                     a.JobTitle < b.JobTitle ? 1 : -1
                 );
                 setData(sorted)
                 setorder('ASC')
             }
         }
         function sortByS(col:any)  {
            if (order === "ASC") {
             let sorteddata =[...data];
                 const sorted = sorteddata.sort((a:any, b:any) =>
                     a.StaffID > b.StaffID ? 1 : -1
                 );
                 setData(sorted)
                 setorder('DSC')
             }
             if (order === 'DSC') {
                 const sorted = [...data].sort((a:any, b:any) =>
                     a.StaffID < b.StaffID ? 1 : -1
                 );
                 setData(sorted)
                 setorder('ASC')
             }
         }
         function sortByD(col:any)  {
            if (order === "ASC") {
             let sorteddata =[...data];
                 const sorted = sorteddata.sort((a:any, b:any) =>
                     a.Department > b.Department ? 1 : -1
                 );
                 setData(sorted)
                 setorder('DSC')
             }
             if (order === 'DSC') {
                 const sorted = [...data].sort((a:any, b:any) =>
                     a.Department < b.Department ? 1 : -1
                 );
                 setData(sorted)
                 setorder('ASC')
             }
         }
         function sortByO(col:any)  {
            if (order === "ASC") {
             let sorteddata =[...data];
                 const sorted = sorteddata.sort((a:any, b:any) =>
                     a.Company > b.Company ? 1 : -1
                 );
                 setData(sorted)
                 setorder('DSC')
             }
             if (order === 'DSC') {
                 const sorted = [...data].sort((a:any, b:any) =>
                     a.Company < b.Company ? 1 : -1
                 );
                 setData(sorted)
                 setorder('ASC')
             }
         }
        // const asc = (Selecteac:any) => {
        //     const copy = [...data];
        //     copy.sort((a:any, b:any) => (a.Selectedc > b.Selectedc) ? 1 : -1);
        //     setData(copy)
        // }
        // const dsc = (Selectedc:any) => {
        //     const copy = [...data];
        //     copy.sort((a, b) => (a.Selectedc > b.Selectedc) ? -1 : 1);
        //     setData(copy)
        // }
        // function selectItemBulkEmail(event: { target: { checked: any; value: any; }; },Emails:any) {
        //      //let BulkEmail: any[] = [];
        //     if (event.target.checked ) {
        //         // BulkEmail.push(Email);
        //         Email.push(Emails);
        //         console.log(Email);
        //     }else{
        //         $.each(Email,function(index:any,item:any){
        //             if(item.Id == Emails.Id){
        //                Email.splice(index,1)
        //             }
        //         })
        //         setEmail([]);
        // }
        // }
        // let SelectedEmail: any = []; 
        // function sendEmail(){
        //      Email.map((item: any)=>{
        //         if(item.Email==undefined){
        //             SelectedEmail.push();    
        //         }else{
        //         SelectedEmail.push(item.Email);
        //     }
        //      })
        //      window.location.href="mailto:"+SelectedEmail;
        // }
function Sendmail(itemType: any) {
 let emails = '';
 let ContactNothavingEmail: any = [];
 $.each(check, function (ited: any, item: any) {
 if (item.Email != undefined) {
 ContactNothavingEmail.push(item);
 }
 if (item.Email != undefined) {
 emails += item.Email + ";";
 }
 })
 let elmailsLength = emails.length;
 if (elmailsLength <= 2000) {
if (ContactNothavingEmail.length > 0) {
 window.location.href = 'mailto:' + emails;
}
 else {
 alert("Please select Contact")
}
 }
if (check.length == 0) {
 let flag = confirm("No " + itemType + " selected.");
 }
 }
        const AllChecked = (e: any) => {
            $('.selects').prop('checked',true)
            const { checked } = e.target
            $.each(data, (index: any, item: any) => {
                if (item != undefined && checked) {
                    check.push(item);
                    $('.selects').prop('checked',true)
                }
                else {
                    $.each(check, function (index: any, newite: any) {
                            check.splice(index, 17);
                            $('.selects').prop('checked',false)
                    })
                    setcheck([])
                }
            })
            setcheck(check)
        };
 const selectBox = (e: any, item: any) => {
 const { checked } = e.target;
 if (checked) {
 check.push(item);
//             canBeSubmitted()
 }
 else {
 $.each(check, function (index: any, newite: any) {
 if (newite.Id == item.Id) {
 check.splice(index, 1);
}
 })
 setcheck([])
//             canBeSubmitted()
 } 
 setcheck(check)
 }
        //     function selectAllItemBulkEmail(event:any) {
        //         //let BulkEmail: any[] = [];
        //         const { checked } = event.target;
        //         $.each(data, (index: any, item: any) => {
        //             if (item != undefined && checked) {
        //                 Email.push(item);
        //                 $('.selects').prop('checked',true)
        //             }
        //             else {
        //                 $.each(Email, function (index: any, newitem: any) {
        // if(newitem.id != undefined){
        //                     if ( newitem.Id == item.Id) {
        //                         Email.splice(index, 13);
        //                         $('.selects').prop('checked',false)
        //                     }
        //                 }
        //                 })
        //                 setEmail([])
        //             }
        //         })
        //         setEmail(Email)
        //    }   
        // let subject = "This mail is send by me.";
        // let Description = "This is a great email from my side.";
        // // let mailtoHref = {`"mailto":${Email}?"subject"=${subject}&body=${Description}`};
        // let mailtoHref = "mailto:"+Email;
    return(
        <div>
<div id="PageInformation" ng-if="PageInformation!=undefined" className="ng-scope">
    <div className="col-sm-12 padL-0 PadR0">
        <h2 className="alignmentitle ng-binding">
            Contacts-Overview
          
            <span className="icontype display_hide padLR">
                <a className="hreflink" title="" data-toggle="modal" >
                    <img className="img-focus" src="https://hhhhteams.sharepoint.com/_layouts/images/edititem.gif"  data-themekey="#"/>
                </a>
            </span>
        </h2>
    </div>
    <div className="">
        <p ng-bind-html="PageInformation.Page_x0020_Content|trustedHTML" className="ng-binding"></p>
    </div>
</div>
        <div className="Alltable">
            <div className="tbl-headings">
                <span className="leftsec w65">
                    <span className="">
                        <label>
                            Showing {data.length} of {data.length} Contact
                        </label>
                    </span>
                    <span className="g-search">
                        <input type="text" className="searchbox_height full_width" id="GlobalSearch"
                            placeholder="search all" ng-model="GlobalSearch"
                            //  onChange={handleChange}
                                      value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                    />
                        <span ng-show="GlobalSearch.length>0"  className="g-searchclear"
                            onClick={()=>ClearSearch}>X</span>
                        <span className="gsearch-btn" ><i className="fa fa-search"></i></span>
                    </span>
                </span>
                <span className="toolbox mx-auto">
  <div>
  <button 
                       type="button"   className="btn btn-primary"    onClick={(e:any)=>Sendmail(data)} >
                            Bulk Email
                            </button>
  </div>
                    {/* <button 
                        type="button" className="btn btn-primary"   disabled={Email.length==0}>
                       <a href='mailtoHref'/> Bulk Email
                    </button> */}
                    <button type="button" className="btn btn-primary"  data-bs-toggle="button"> 
                        <CreateEmployee arr={data} /> 
                    </button>
                    <a className="hreflink" >
                        <i className="fa fa-paint-brush" title="Clear All Headers filters" aria-hidden="true"></i>
                    </a>
                    <a >
                        <img className="excal" title="Export To Excel"
                            src="https://www.shareweb.ch/site/joint/SiteCollectionImages/ICONS/24/small_excel.png" />
                    </a>
                    <a >
                        <i className="fa fa-print hreflink" aria-hidden="true" title="Print"></i>
                    </a>
                    <a >
                        {/* <shareweb-Expand-Table isshowtable="100"></shareweb-Expand-Table> */}
                    </a>
                </span>
            </div>
            <div className="col-sm-12 smart pad0">
                <div id="table-wrapper" className="section-event">
                    <div className="container-new">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th style={{width:"3%"}}>
                                        <div style={{width:"5%"}}>
                                            <input  type="checkbox"  
                                                className="mt-0 ng-valid ng-dirty ng-valid-parse ng-touched ng-empty"
                                                name="chkCompareContact" onClick={(e:any)=>AllChecked(e)}  />
                                                {/* {onclick={SelectContactAll()}} */}
                                            <label className="text ForAll ml-1">All</label>
                                        </div>
                                    </th>
                                    <th style={{width:"10%"}} id="searchStaffID">
                                        <div className="displayLabel" style={{width:"22%"}}>
                                            <label>Staff-ID</label>
                                        </div>
                                        <div className="headcontainer smart-relative" style={{width:"9%"}}>
                                            <input type="text" id="searchStaffID" className="searchbox_height full_width"
                                                placeholder="Staff-ID"  onChange={(e)=>handleChange(e,"Staff-ID")}/>
                                            <span  className="searchclear"
                                               onClick={ClearSearch}>X</span>
                                            <span className="sorticon">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='StaffID'&&!reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByS("StaffID")} > </i>
                                                </span>
                                                <span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='StaffID'&&reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByS("StaffID")}></i>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th style={{width:"18%"}} >
                                        <div className="displayLabel" style={{width:"22%"}}>
                                            <label>Name</label>
                                        </div>
                                        <div className="headcontainer smart-relative" style={{width:"17%"}}>
                                            <input type="text" id="searchFullName" className="searchbox_height full_width"
                                                placeholder="Name" onChange={(e)=>handleChange(e,"FullName")}/>
                                            <span  className="searchclear"
                                                 onClick={ClearSearch}>X</span>
                                            <span className="sorticon">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='FullName'&&!reverse?'siteColor':''}}"
                                                        onClick={(e:any)=>sortBy("FullName")}></i>
                                                </span>
                                                <span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='FullName'&&reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortBy("FullName")}></i>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th style={{width:"23%"}}>
                                        <div className="displayLabel" style={{width:"22%"}}>
                                            <label>Email Address</label>
                                        </div>
                                        <div className="headcontainer smart-relative" style={{width:"22%"}}>
                                            <input type="text" id="searchEmail" className="searchbox_height full_width"
                                                placeholder="Email Address" 
                                                title="Email Address" onChange={(e:any)=>handleChange(e,"Email")}/>
                                            <span  className="searchclear"
                                                 onClick={ClearSearch}>X</span>
                                            <span className="sorticon">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='Email'&&!reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByE("Email")}/>
                                                </span>
                                                <span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='Email'&&reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByE("Email")}/>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th style={{width:"15%"}}>
                                        <div className="displayLabel" style={{width:"19%"}}>
                                            <label>Organization</label>
                                        </div>
                                        <div className="headcontainer smart-relative" style={{width:"14%"}}>
                                            <input type="text" id="searchCompany" className="searchbox_height full_width"
                                                placeholder="Organization" ng-model="searchCompany"
                                                title="Organization"  onChange={(e:any)=>handleChange(e,"Company")}/>
                                            <span ng-show="searchCompany.length>0" className="searchclear"
                                                 onClick={ClearSearch}>X</span>
                                            <span className="sorticon">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='Company'&&!reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByO("Company")}></i>
                                                </span>
                                                <span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='Company'&&reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByO("Company")}></i>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th style={{width:"15%"}}>
                                        <div className="displayLabel" style={{width:"17%"}}>
                                            <label>Department</label>
                                        </div>
                                        <div className="headcontainer smart-relative" style={{width:"14%"}}>
                                            <input type="text" id="searchDepartment" className="searchbox_height full_width"
                                                placeholder="Department" ng-model="searchDepartment"
                                                title="Department" onChange={(e:any)=>handleChange(e,"Department")}/>
                                            <span ng-show="searchDepartment.length>0" className="searchclear"
                                                 onClick={ClearSearch}>X</span>
                                            <span className="sorticon">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='Department'&&!reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByD("Department")}></i>
                                                </span>
                                                <span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='Department'&&reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByD("Department")}></i>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th style={{width:"15%"}}>
                                        <div className="displayLabel" style={{width:"20%"}}>
                                            <label>Position</label>
                                        </div>
                                        <div className="headcontainer smart-relative" style={{width:"14%"}}>
                                            <input type="text" id="searchJobTitle" className="searchbox_height full_width"
                                                placeholder="Position" ng-model="searchJobTitle" title="Position" onChange={(e:any)=>handleChange(e,"JobTitle")} />
                                            <span ng-show="searchJobTitle.length>0" className="searchclear"
                                                 onClick={ClearSearch}>X</span>
                                            <span className="sorticon">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='JobTitle'&&!reverse?'siteColor':''}}"
                                                         onClick={(e:any)=>sortByJ("JobTitle")}></i>
                                                </span>
                                                <span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='JobTitle'&&reverse?'siteColor':''}}"
                                                        onClick={(e:any)=>sortByJ("JobTitle")}></i>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th style={{width:"2%"}}>
                                        <div style={{width:"2%"}}></div>
                                    </th>
                                    <th style={{width:"2%"}}>
                                        <div style={{width:"2%"}}></div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody> 
                            {data.map(employee =>
                                <tr ng-repeat="employee in filtered = ( AllEmployeeDetails | orderBy:orderBy:reverse |filter:GlobalSearch |filter:{FullName:searchFullName,StaffID:searchStaffID,Email:searchEmail, Company:searchCompany,Department:searchDepartment,JobTitle:searchJobTitle})"
                                    className="tdrow">
                                    <td><input type="checkbox" className="selects" 
                                          onClick={(e:any)=>selectBox(e,employee)}  /></td>
                                    <td>{employee.StaffID}</td>
                                    <td> 
                                        <img className="wid22"
                                        // employee.Item_x0020_Cover !=undefined?:"https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/SiteCollectionImages/ICONS/32/icon_user.jpg"
                                        //   employee.Item_x0020_Cover !=undefined?employee.Item_x0020_Cover.Url:
                                          src={"https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/SiteCollectionImages/ICONS/32/icon_user.jpg"}/>
                                        <a className="ml-5"
                                            href= {`https://hhhhteams.sharepoint.com/sites/HHHH/HR/SitePages/EmployeeInfo.aspx?employeeId=${employee.Id}`}
                                            target="_blank">{employee.FullName}</a>
                                    </td>
                                    <td>{employee.Email}</td>
                                    <td>{employee.Company}</td>
                                    <td>{employee.Department}</td>
                                    <td>{employee.JobTitle}</td>
                                    <td>
                                        <EditEmployeeContact id={employee.Id!=null?employee.Id:"null"}/>
                                    </td>
                                </tr>
                               )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div id="createContact" className="modal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Add Employee
                            {/* <page-settings-info webpartid="'CreateContactPopupItem'"></page-settings-info> */}
                        </h3>
                        <button type="button" className="close ml-2"  style={{width:"10px"}} 
                             >
                        &times;
                    </button>
                    </div>
                    <div className="modal-body">
                        <div className="col-sm-12 tab-content bdrbox ">
                            <div className="form-group mt-10">
                                <input type="text" id="txtFirstName" ng-model="contactTitle" className="form-control"
                                    placeholder="Enter Contact Name" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <span ng-if="!contactTitle.length>0">
                            <button type="button" className="btn btn-primary mt-10" disabled >
                                Save
                            </button>
                        </span>
                        <span ng-if="contactTitle.length>0">
                            <button type="button" className="btn btn-primary mt-10" >
                                Save
                            </button>
                        </span>
                        <button type="button" className="btn btn-default mt-10" >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="createContactConfirmationPopUP" className="modal fade in" role="dialog"
            aria-labelledby="myModalLabel" aria-hidden="false" style={{display:"none"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form name="createContactConfirmationPopUPForm" noValidate role="form">
                        <div className="panel-title">
                            <button type="button" className="close ml-2"  style={{width:"10px"}}>
                                &times;
                            </button>
                            {/* <page-settings-info webpartid="'CreateInstitutionPopupItem'"></page-settings-info> */}
                            <h3>Create Institution</h3>
                        </div>
                        <div className="panel-body tab-content">
                            <div className="col-sm-12 form-group">
                                <div id="">
                                    <div id="">
                                        <div className="form-group" ng-if="PopUPType=='Institution'">
                                            <div className="contact">
                                                <div className="col-sm-12">
                                                    <span>
                                                        This Will Create a PopUPType Item with name
                                                        InstitutionTitle.Click Ok to proceed.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-primary"
                                    >OK</button>
                                <button type="button" className="btn btn-default" >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="createInstitution" className="modal fade in" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="false" style={{display:"none"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form name="createInstitutionForm" noValidate role="form">
                        <div className="panel-title">
                            <button type="button" className="close ml-2" style={{width:"10px"}} data-dismiss="modal"
                                >
                                &times;
                            </button>
                            {/* <page-settings-info webpartid="'CreateContactPopupItem'"></page-settings-info> */}
                            <h3 className="">Create Institution</h3>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12 tab-content phase mb-10 mt-10  PadR0">
                                <div className="form-group">
                                    <div className="form-group col-sm-12 padL-0">
                                        <label ng-bind-html="GetColumnDetails('InstitutionTitle') | trustedHTML">
                                        </label>
                                        <div>
                                            <input type="text" id="txtInstitutionItem" ng-model="InstitutionTitle"
                                                className="form-control" ng-required="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="col-sm-12 mt-10">
                              <button type="button" className="btn btn-primary"
                                    >
                                    Save
                                </button>
                                <button type="button" className="btn btn-default"
                                    >Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="ShowContactEmail" className="modal fade in" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="false"  style={{display:"none"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">
                            <div className="pipeseperator1">
                                Email address missing for the following contacts. Click the edit
                                icon to update the contact or 'continue' to ignore these contacts
                            </div>
                        </h3>
                        {/* <page-settings-info webpartid="'CreateContact'"></page-settings-info> */}
                        <button type="button" className="close ml-2"style={{width:"10px"}}   data-dismiss="modal"
                        >
                        &times;
                    </button>
                    </div>
                    <div className="modal-body">
                        <div className="tab-content col-sm-12 phase padL-0 PadR0 mb-10 mt-10">
                            <div className="col-sm-12 divPanelBody mt-10">
                                <div className="form-group">
                                    <div className="contact">
                                        <div className="form-group">
                                            <div className="mb-4" ng-repeat="item in  ContactNothavingEmail">
                                                <span>
                                                    <img className="wid22" ng-if="item.Item_x0020_Cover==undefined"
                                                        ng-src="{{baseUrl}}/SiteCollectionImages/ICONS/32/icon_user.jpg" />
                                                    <img className="wid22" ng-if="item.Item_x0020_Cover != undefined"
                                                        ng-src="{{item.Item_x0020_Cover.Url}}" />
                                                    <a ng-href="https://hhhhteams.sharepoint.com/sites/HHHH/HR/SitePages/EmployeeInfo.aspx?employeeId={{item.Id}}"
                                                        target="_blank">
                                                        <span className="hreflink">item.FullName</span>
                                                    </a>
                                                    <a className="hreflink">
                                                        <img title="Edit" 
                                                            ng-src="/_layouts/images/edititem.gif"/>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="col-sm-12 PadR0">
                            <button type="button" className="btn btn-primary" >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="ShowAllEmails" className="modal fade in" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">
                            Too many email addresses selected please copy them manually to your email
                            client.
                        </h3><span className="pull-right">
                            <a className="btn" style={{marginTop:"-4px"}}  data-clipboard-target="#copyUrl">
                                <img  style={{marginLeft:"0px"}}
                                    ng-src="{{baseUrl}}/Site%20Collection%20Images/ICONS/32/icon_copy.png" />
                            </a>
                        </span>
                        <button type="button" className="close" style={{width:"10px"}}  data-dismiss="modal"
                            >
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="tab-content border container-new col-sm-12  px-2 py-2">
                            <span id="copyUrl"> emails</span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="ItemInfo col-sm-6">
                                </div>
                                <div className="col-sm-6 PadR0">
                                    <button type="button" className="btn pull-right btn-default"
                                        >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}
