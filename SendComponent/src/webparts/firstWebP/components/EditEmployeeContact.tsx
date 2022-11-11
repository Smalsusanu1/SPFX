import * as React from 'react';
import '../../foundation.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as $ from 'jquery';
import Tabs from "./Tabs/Tabs"
import Tab from "./Tabs/Tab" 
import './Tabs/styles.css';
import { arraysEqual, Modal } from 'office-ui-fabric-react';
import Tooltip from './Tooltip/popup';
import ImagesC from './ImagesC/Images';
import * as Moment from 'moment';
export default function EditEmployeeContact({id}:any) {
    const [data, setData] = React.useState([]);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [Cdata, setCData] = React.useState([]);
    const [show, setShow] = React.useState(false);
    let LanguagesArray: any = [{ 'Title': 'English' }, { 'Title': 'German' }, { 'Title': 'French' }, { 'Title': 'Spanish' }];
    React.useEffect(() => {
        let url = `https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('edc879b9-50d2-4144-8950-5110cacc267a')/items?$select=Id,Title,Item_x0020_Cover,FirstName,FullName,Department,Company,JobTitle,WebPage,CellPhone,Email,LinkedIn,Created,Author/Title,Modified,Editor/Title,EmployeeID/Title,StaffID,EmployeeID/Id&$expand=EmployeeID,Author,Editor&$filter=(Id eq ${id})&$orderBy=%20Created%20asc`;
        let response: any = [];  // this letiable is used for storing list items
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
                    } else setData(response);
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
        React.useEffect(() => {
            let url = `https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('21107fb5-097e-4d04-8021-0424a64f2959')/items?$select=Id,dateOfBirth,placeOfBirth,Nationality,maritalStatus,highestSchoolDiploma,highestVocationalEducation,otherQualifications,Languages,HHHHContact/Id&$expand=HHHHContact&$filter= HHHHContact/Id eq  ${id}`;
            let response: any = [];  // this letiable is used for storing list items
            function GetContactListItems() {
                $.ajax({
                    url: url,
                    method: "GET",
                    headers: {
                        "Accept": "application/json; odata=verbose"
                    },
                    success: function (Cdata) {
                        response = response.concat(Cdata.d.results);
                        if (Cdata.d.__next) {
                            url = Cdata.d.__next;
                            GetContactListItems();
                        } else setCData(response);
                        console.log(response);
                    },
                    error: function (error) {
                        console.log(error);
                        // error handler code goes here
                    }
                });
            }
            GetContactListItems();
        },
            []);
            const setModalIsOpenToTrue = () => {
                setModalIsOpen(true)
            }
            const setModalIsOpenToFalse = () => {
                setModalIsOpen(false)
            }
            const handleOpen = () => {
                setShow(current => !current)
            };
    return(
        <div>
             <img title="Edit Details"  className="wid22"  onClick={(e) => setModalIsOpenToTrue()}
                                            src="https://hhhhteams.sharepoint.com/_layouts/images/edititem.gif"/>
            {data.length!==null?
            data.map(employee =>
                <Modal
            isOpen={modalIsOpen}
            onDismiss={setModalIsOpenToFalse}
            isBlocking={false}>
        <div id="EditGrueneContactSearch" >
        <div ng-cloak >
            <div className="modal-header">
                <h3 className="modal-title">
                    {employee.Item_x0020_Cover !==null &&
                    <img style={{width: "22px"}}  id="selectedimage"
                        src={employee.Item_x0020_Cover.Url} />
                    }
                    {employee.Item_x0020_Cover ==null &&
                    <img style={{width: "22px"}} 
                        src="https://hhhhteams.sharepoint.com/sites/HHHH/SP/SiteCollectionImages/ICONS/32/icon_user.jpg" />}
                    Edit Contact- {employee.FirstName +' '+ employee.Title}
                    <span className="pull-right">
                        <Tooltip/>
                        {/* <page-settings-info webpartid="'sharewebContactPopup'"></page-settings-info> */}
                    </span>
                </h3>
                <button type="button"  style={{width:"22px"}} className="close" data-dismiss="modal" onClick={setModalIsOpenToFalse}>
                    &times;
                </button>
            </div>
            <div className="modal-body">
                <form name="ItemForm" noValidate role="form">
                    <div id="table-wrapper">
                        <div id="table-scroll">
                            <div id="itemtabs" className="exTab3">
                            <Tabs>
                                 <Tab title="BASIC INFORMATION" >
                                <div className="tab-content clearfix">
                                    <div id="basicinfo" className="clearfix">
                                        <div className="col-sm-12 form-group clearfix">
                                            <fieldset className="fieldsett">
                                                <legend className="activity">General</legend>
                                                <div className="form-group clearfix">
                                                    <div className="col-sm-2">
                                                        <label htmlFor="firstName">First Name</label>
                                                        <input defaultValue={employee.FirstName} type="text" className="form-control"
                                                            id="firstName" placeholder="Enter First Name"/>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <label htmlFor="lastName">Last Name</label>
                                                        <input  defaultValue={employee.Title} type="text" className="form-control"
                                                            id="lastName" placeholder="Enter Last Name"/>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <label htmlFor="Organization">Organization</label>
                                                        <input  defaultValue={employee.Company} type="text" className="form-control"
                                                            id="Organization" placeholder="Enter Organization"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Department ">Department</label>
                                                        <input  defaultValue={employee.Department} type="text" className="form-control"
                                                            id="Department" placeholder="Enter Department"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Position">Position</label>
                                                        <input  defaultValue={employee.JobTitle} type="text" className="form-control"
                                                            id="Position" placeholder="Enter Position"/>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-sm-12 form-group clearfix">
                                            <fieldset className="fieldsett">
                                                <legend className="activity">Social Media Accounts</legend>
                                                <div className=" form-group clearfix">
                                                    <div className="col-sm-3 ">
                                                        <label className="full_width">
                                                            LinkedIn   <a className="hreflink" href={employee.LinkedIn!==null?employee.LinkedIn.url:""} 
                                                                target="_blank">
                                                                <span className="pull-right">
                                                                    <i className="fa fa-linkedin"></i>
                                                                </span>
                                                            </a>
                                                        </label>
                                                        <input type="text" className="form-control" defaultValue={employee.LinkedIn!==null?employee.LinkedIn.url:""} />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label className="full_width">
                                                            Website 
                                                            <a className="hreflink" href={employee.WebPage !== null?employee.WebPage.Url:""} 
                                                                target="_blank">
                                                                <span className="pull-right">
                                                                    <i className="fa fa-link"></i>
                                                                </span>
                                                            </a>
                                                        </label>
                                                        <input type="text" className="form-control" defaultValue={employee.WebPage !== null? employee.WebPage.Url:""} />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Email">Email</label>
                                                        <input  defaultValue={employee.Email} type="email" className="form-control" id="Email"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Phone ">Phone</label>
                                                        <input  defaultValue={employee.CellPhone} type="text" className="form-control" id="Phone"
                                                            placeholder="Enter Phone Number"/>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 smartToggler clearfix" >
                                    <div className="panel panel-default border-0">
                                        <label className="col-lg-12 mb0 pd5 bg-grey full_width"  >
                                        HR Information
                                        <a  >
                                            <img className=" pull-right hreflink wid22 " onClick={() => handleOpen()} title="Tap to Expand"  id="identifiertxt"
                                                src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/24/Add-New.png"/>
                                            <a >
                                                <img className="hreflink pull-right wid10  mr-5 mt-5 " title="Tap to Collapse" onClick={() => handleOpen()} id="identifiertxt"
                                                    src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/32/sub_icon.png"/>
                                            </a>
                                            </a>
                                        </label>
                                        {show && (
                                        <>
                                        {Cdata.map(Details =>
                                    <div className="togglecontent" >
                                    {/* style={{display:"none"}} */}
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                                <input defaultValue={Details.dateOfBirth!==null?Moment(Details.dateOfBirth).format('DD/MM/YYYY'):""} type="text"
                                                    className="form-control" id="dateOfBirth"
                                                    placeholder="Enter Date of Birth" />
                                            </div>
                                            <div className="col-sm-2">
                                                <label htmlFor="placeOfBirth">Place of Birth</label>
                                                <input defaultValue={Details.placeOfBirth!==null?Details.placeOfBirth:""} type="text"
                                                    className="form-control" id="placeOfBirth"
                                                    placeholder="Enter Place of Birth"/>
                                            </div>
                                            <div className="col-sm-2">
                                                <label htmlFor="Nationality">Nationality</label>
                                                <input defaultValue={Details.Nationality!==null?Details.Nationality:""} type="text"
                                                    className="form-control" id="Nationality"
                                                    placeholder="Enter Nationality"/>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="Marital">Marital status</label>
                                                <select defaultValue={Details.maritalStatus!==null?Details.maritalStatus:""} className="form-control"
                                                    id="Marital" required>
                                                    <option value="none" disabled>Select an Option</option>
                                                    <option value="Single">Ledig</option>
                                                    <option value="Married">Verheiratet</option>
                                                    <option value="Divorced">Geschieden</option>
                                                    <option value="Widowed">Verwitwet</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="highestSchoolDiploma">Highest School Diploma</label>
                                                <input defaultValue={Details.highestSchoolDiploma!==null?Details.highestSchoolDiploma:""} type="text"
                                                    className="form-control" id="highestSchoolDiploma"
                                                    placeholder="Enter Highest School Diploma"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label htmlFor="highestVocationalEducation">Highest Vocational
                                                    Education</label>
                                                <input defaultValue={Details.highestVocationalEducation!==null?Details.highestVocationalEducation:""}
                                                    type="text" className="form-control" id="highestVocationalEducation"
                                                    placeholder="Enter Highest Vocational Education"/>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="otherQualifications">Other Qualifications</label>
                                                {/* defaultValue={Details.otherQualifications!==null?Details.otherQualifications:"NA"} */}
                                                <input  type="text" defaultValue={Details.otherQualifications!==null?Details.otherQualifications:"NA"}
                                                    className="form-control" id="otherQualifications"
                                                    placeholder="Enter Other Qualifications"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="Languages">Languages</label><br/>
                                                {LanguagesArray.map((obj: any) => 
                                                <span className="col-sm-3" >
                                                    {/* <input type="checkbox" defaultValue={Details.Languages!==null?Details.Languages[0]:""} id="English"
                                                        name="obj.Title"/> */}
                                                            <input type='checkbox' id="English" name="obj.name"/>
                                                    <label htmlFor="English">{obj.Title}</label><br/>
                                                </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                        )}
                                        </>
                                        )}
                                    </div>
                                    </div>
                                </div>
                                </div>
                                  </Tab>
    <Tab title='IMAGE INFORMATION'>
           <ImagesC  id={data}/>
         </Tab>
    </Tabs>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <div className="col-sm-5 text-left pad0">
                    <div className="text-left">
                        Created <span>{Moment(employee.Created).format('DD/MM/YYYY')}</span> by
                        <span className="footerUsercolor">
                            {employee.Author.Title}
                            </span>
                    </div>
                    <div className="text-left">
                        Last modified <span >{Moment(employee.Modified).format('DD/MM/YYYY')}</span> by <span
                            className="footerUsercolor">
                                {employee.Editor.Title}
                                </span>
                    </div>
                    <div className="text-left">
                        <a className="hreflink" >
                            <img src="/_layouts/images/delete.gif"/> Delete this item
                        </a>
                    </div>
                </div>
                <div className="col-sm-7 pull-right">
                    <a className="hreflink" target="_blank"
                        href={`https://hhhhteams.sharepoint.com/sites/HHHH/HR//SitePages/EmployeeInfo.aspx?employeeId=${employee.Id}`}>
                        Go to profile page
                    </a>
                    <span> | </span>
                    <a href={`https://hhhhteams.sharepoint.com/sites/HHHH/Lists/Contacts/EditForm.aspx?ID=${employee.Id}`}
                        target="_blank">
                        Open
                        out-of-the-box form
                    </a>
                    <button type="button" className="btn btn-primary" >Save</button>
                    <button type="button" className="btn btn-default" onClick={setModalIsOpenToFalse}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
                                                     </Modal>
            )
        :
        <Popup trigger={ 
            <img title="Edit Details"  className="wid22"
                                            src="https://hhhhteams.sharepoint.com/_layouts/images/edititem.gif"/>} 
                                            modal
        nested
        contentStyle={{ position:"absolute",left:"10%",width: '80%'  ,top: "1%",backdrop:"false"}}
        closeOnDocumentClick={true} 
                                            > 
                                                    {(close: React.MouseEventHandler<HTMLButtonElement>) => ( 
        <div id="EditGrueneContactSearch" >
        <div ng-cloak >
            <div className="modal-header">
                <h3 className="modal-title">
                    {/* {employee.Item_x0020_Cover !==null && */}
                    <img style={{width: "22px"}} id="selectedimage"
                       />
                         {/* src={employee.Item_x0020_Cover.Url} */}
                    {/* } */}
                    {/* {employee.Item_x0020_Cover ==null && */}
                    <img style={{width: "22px"}}
                        src="https://hhhhteams.sharepoint.com/sites/HHHH/SP/SiteCollectionImages/ICONS/32/icon_user.jpg" />
                        {/* } */}
                    Edit Contact- null null
                    {/* {employee.FirstName +' '+ employee.Title} */}
                    <span className="pull-right">
                        <Tooltip/>
                        {/* <page-settings-info webpartid="'sharewebContactPopup'"></page-settings-info> */}
                    </span>
                </h3>
                <button type="button"  style={{width:"22px"}} className="close" data-dismiss="modal" onClick={close}>
                    &times;
                </button>
            </div>
            <div className="modal-body">
                <form name="ItemForm" noValidate role="form">
                    <div id="table-wrapper">
                        <div id="table-scroll">
                            <div id="itemtabs" className="exTab3">
                            <Tabs>
                                 <Tab title="BASIC INFORMATION" >
                                <div className="tab-content clearfix">
                                    <div id="basicinfo" className="clearfix">
                                        <div className="col-sm-12 form-group clearfix">
                                            <fieldset className="fieldsett">
                                                <legend className="activity">General</legend>
                                                <div className="form-group clearfix">
                                                    <div className="col-sm-2">
                                                        <label htmlFor="firstName">First Name</label>
                                                        {/* defaultValue={employee.FirstName} */}
                                                        <input  type="text" className="form-control"
                                                            id="firstName" placeholder="Enter First Name"/>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <label htmlFor="lastName">Last Name</label>
                                                        {/* defaultValue={employee.Title} */}
                                                        <input   type="text" className="form-control"
                                                            id="lastName" placeholder="Enter Last Name"/>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <label htmlFor="Organization">Organization</label>
                                                        {/* defaultValue={employee.Company} */}
                                                        <input   type="text" className="form-control"
                                                            id="Organization" placeholder="Enter Organization"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Department ">Department</label>
                                                        {/* defaultValue={employee.Department} */}
                                                        <input   type="text" className="form-control"
                                                            id="Department" placeholder="Enter Department"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Position">Position</label>
                                                        {/* defaultValue={employee.JobTitle} */}
                                                        <input   type="text" className="form-control"
                                                            id="Position" placeholder="Enter Position"/>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-sm-12 form-group clearfix">
                                            <fieldset className="fieldsett">
                                                <legend className="activity">Social Media Accounts</legend>
                                                <div className=" form-group clearfix">
                                                    <div className="col-sm-3 ">
                                                        <label className="full_width">
                                                            LinkedIn   <a className="hreflink"  
                                                                target="_blank">
                                                                    {/* href={employee.LinkedIn!==null?employee.LinkedIn.url:""} */}
                                                                <span className="pull-right">
                                                                    <i className="fa fa-linkedin"></i>
                                                                </span>
                                                            </a>
                                                        </label>
                                                        <input type="text" className="form-control"  />
                                                        {/* defaultValue={employee.LinkedIn!==null?employee.LinkedIn.url:""} */}
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label className="full_width">
                                                            Website 
                                                            {/* href={employee.WebPage !== null?employee.WebPage.Url:""} */}
                                                            <a className="hreflink"  
                                                                target="_blank">
                                                                <span className="pull-right">
                                                                    <i className="fa fa-link"></i>
                                                                </span>
                                                            </a>
                                                        </label>
                                                        <input type="text" className="form-control"  />
                                                        {/* defaultValue={employee.WebPage !== null? employee.WebPage.Url:""} */}
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Email">Email</label>
                                                        {/* defaultValue={employee.Email} */}
                                                        <input   type="email" className="form-control" id="Email"
                                                            placeholder="Enter Email"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label htmlFor="Phone ">Phone</label>
                                                        {/* defaultValue={employee.CellPhone} */}
                                                        <input   type="text" className="form-control" id="Phone"
                                                            placeholder="Enter Phone Number"/>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 smartToggler clearfix">
                                    <div className="panel panel-default border-0">
                                        <label className="col-lg-12 mb0 pd5 bg-grey full_width"   >
                                        HR Information
                                        <a >
                                            <img className=" pull-right hreflink wid22" title="Tap to Expand"  onClick={() => handleOpen()}
                                                src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/24/Add-New.png"/>
                                            <a >
                                                <img className="hreflink pull-right wid10  mr-5 mt-5 " title="Tap to Collapse" onClick={() => handleOpen()}
                                                    src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/32/sub_icon.png"/>
                                            </a>
                                            </a>
                                        </label>
                                        {show && (
                                        <>
                                        { 
                                        Cdata.map(Details =>
                                    <div className="togglecontent" >
                                    {/* style={{display:"none"}} */}
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                                {/* defaultValue={Details.dateOfBirth!==null?Moment(Details.dateOfBirth).format('DD/MM/YYYY'):""} */}
                                                <input  type="text"
                                                    className="form-control" id="dateOfBirth"
                                                    placeholder="Enter Date of Birth" />
                                            </div>
                                            <div className="col-sm-2">
                                                <label htmlFor="placeOfBirth">Place of Birth</label>
                                                {/* defaultValue={Details.placeOfBirth!==null?Details.placeOfBirth:""} */}
                                                <input  type="text"
                                                    className="form-control" id="placeOfBirth"
                                                    placeholder="Enter Place of Birth"/>
                                            </div>
                                            <div className="col-sm-2">
                                                <label htmlFor="Nationality">Nationality</label>
                                                {/* defaultValue={Details.Nationality!==null?Details.Nationality:""} */}
                                                <input  type="text"
                                                    className="form-control" id="Nationality"
                                                    placeholder="Enter Nationality"/>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="Marital">Marital status</label>
                                                {/* defaultValue={Details.maritalStatus!==null?Details.maritalStatus:""} */}
                                                <select  className="form-control"
                                                    id="Marital" required>
                                                    <option value="none" disabled>Select an Option</option>
                                                    <option value="Single">Ledig</option>
                                                    <option value="Married">Verheiratet</option>
                                                    <option value="Divorced">Geschieden</option>
                                                    <option value="Widowed">Verwitwet</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="highestSchoolDiploma">Highest School Diploma</label>
                                                {/* defaultValue={Details.highestSchoolDiploma!==null?Details.highestSchoolDiploma:""} */}
                                                <input  type="text"
                                                    className="form-control" id="highestSchoolDiploma"
                                                    placeholder="Enter Highest School Diploma"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label htmlFor="highestVocationalEducation">Highest Vocational
                                                    Education</label>
                                                    {/* defaultValue={Details.highestSchoolDiploma!==null?Details.highestSchoolDiploma:""} */}
                                                <input 
                                                    type="text" className="form-control" id="highestVocationalEducation"
                                                    placeholder="Enter Highest Vocational Education"/>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="otherQualifications">Other Qualifications</label>
                                                {/* defaultValue={Details.otherQualifications!==null?Details.otherQualifications:"NA"} */}
                                                <input  type="text" 
                                                    className="form-control" id="otherQualifications"
                                                    placeholder="Enter Other Qualifications"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="Languages">Languages</label><br/>
                                                {LanguagesArray.map((obj: any) => 
                                                <span className="col-sm-3" ng-repeat="obj in LanguagesArray">
                                                    {/* <input type="checkbox" defaultValue={Details.Languages!==null?Details.Languages[0]:""} id="English"
                                                        name="obj.Title"/> */}
                                                            <input type='checkbox' id="English" name="obj.name"/>
                                                    <label htmlFor="English">{obj.Title}</label><br/>
                                                </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                        )}
                                        </>
                                        )}
                                    </div>
                                    </div>
                                </div>
                                </div>
                                  </Tab>
    <Tab title='IMAGE INFORMATION'>
           <ImagesC  id={data}/>
         </Tab>
    </Tabs>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <div className="col-sm-5 text-left pad0">
                    <div className="text-left">
                        Created <span>{Moment().format('DD/MM/YYYY')}</span> by
                        <span className="footerUsercolor">
                            {/* {employee.Author.Title} */}
                            </span>
                    </div>
                    <div className="text-left">
                        Last modified <span >{Moment().format('DD/MM/YYYY')}</span> by <span
                            className="footerUsercolor">
                                {/* {employee.Editor.Title} */}
                                </span>
                    </div>
                    <div className="text-left">
                        <a className="hreflink" >
                            <img src="/_layouts/images/delete.gif"/> Delete this item
                        </a>
                    </div>
                </div>
                <div className="col-sm-7 pull-right">
                    <a className="hreflink" target="_blank"
                        href={`https://hhhhteams.sharepoint.com/sites/HHHH/HR//SitePages/EmployeeInfo.aspx?`}>
                            {/* employeeId=${}employee.Id */}
                        Go to profile page
                    </a>
                    <span> | </span>
                    <a href={`https://hhhhteams.sharepoint.com/sites/HHHH/Lists/Contacts/EditForm.aspx?`}
                    // id=employee.Id
                        target="_blank">
                        Open
                        out-of-the-box form
                    </a>
                    <button type="button" className="btn btn-primary" >Save</button>
                    <button type="button" className="btn btn-default" onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
                                                     )}     
     </Popup>}
    </div>
    )
}