import { Modal } from "office-ui-fabric-react/lib/Modal";
import * as React from "react";

import Tabs from "./Tabs/Tabs"
import Tab from "./Tabs/Tab"
import './Tabs/styles.css';

import * as Moment from 'moment';
import ImagesC from "./Images";
var LanguagesArray: any = [{ 'Title': 'English' }, { 'Title': 'German' }, { 'Title': 'French' }, { 'Title': 'Spanish' }];
   

function modal(){
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }


     
    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setValue(event.target.value);
};
const onSearch = (searchTerm: React.SetStateAction<string>) => {
setValue(searchTerm);


// our api to fetch the search result
console.log("search ", searchTerm);
};
    const [data, setData] = React.useState([]);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    
    const [Cdata, setCData] = React.useState([]);
    //      -----------------------------------------Empty Modal------------------------
<Modal
isOpen={modalIsOpen}
onDismiss={setModalIsOpenToFalse}
isBlocking={false}>
<div id="EditGrueneContactSearch" >
<div ng-cloak >
    <div className="modal-header">
        <h3 className="modal-title">
            {/* {employee.Item_x0020_Cover !=null && */}
            <img style={{width: "22px"}} ng-if="selectedImaSgeUrl != undefined" id="selectedimage"
               />
                 {/* src={employee.Item_x0020_Cover.Url} */}
            {/* } */}
            {/* {employee.Item_x0020_Cover ==null && */}
            <img style={{width: "22px"}} ng-if="selectedImageUrl == undefined"
                src="https://hhhhteams.sharepoint.com/sites/HHHH/SP/SiteCollectionImages/ICONS/32/icon_user.jpg" />
                {/* } */}
            Edit Contact- null null
            {/* {employee.FirstName +' '+ employee.Title} */}
            <span className="pull-right">
                {/* <Tooltip/> */}
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
                                                            {/* href={employee.LinkedIn!=null?employee.LinkedIn.url:""} */}
                                                        <span className="pull-right">
                                                            <i className="fa fa-linkedin"></i>
                                                        </span>
                                                    </a>
                                                </label>
                                                <input type="text" className="form-control"  />
                                                {/* defaultValue={employee.LinkedIn!=null?employee.LinkedIn.url:""} */}
                                            </div>
                                            <div className="col-sm-3">
                                                <label className="full_width">
                                                    Website 
                                                    {/* href={employee.WebPage != null?employee.WebPage.Url:""} */}
                                                    <a className="hreflink"  
                                                        target="_blank">
                                                        <span className="pull-right">
                                                            <i className="fa fa-link"></i>
                                                        </span>
                                                    </a>
                                                </label>
                                                <input type="text" className="form-control"  />
                                                {/* defaultValue={employee.WebPage != null? employee.WebPage.Url:""} */}
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
                                <div className="col-lg-12 smartToggler clearfix" ng-if="isHR || Myuser">
                            <div className="panel panel-default border-0">
                                <label className="col-lg-12 mb0 pd5 bg-grey full_width" htmlFor="identifiertxt"  ng-click="filtershowHide()">
                                HR Information
                                <a ng-if="smartToggler.expanded" id="identifiertxt">
                                    <img className=" pull-right hreflink wid22" title="Tap to Expand"  id="identifiertxt"
                                        src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/24/Add-New.png"/>
                                    <a ng-if="!smartToggler.expanded">
                                        <img className="hreflink pull-right wid10  mr-5 mt-5 " title="Tap to Collapse" id="identifiertxt"
                                            src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/32/sub_icon.png"/>
                                    </a>
                                    </a>
                                </label>
                                {Cdata.map(Details =>
                            <div className="togglecontent" >
                            {/* style={{display:"none"}} */}
                                <div className="row">
                                    <div className="col-sm-2">
                                        <label htmlFor="dateOfBirth">Date of Birth</label>
                                        {/* defaultValue={Details.dateOfBirth!=null?Moment(Details.dateOfBirth).format('DD/MM/YYYY'):""} */}
                                        <input  type="text"
                                            className="form-control" id="dateOfBirth"
                                            placeholder="Enter Date of Birth" />
                                    </div>
                                    <div className="col-sm-2">
                                        <label htmlFor="placeOfBirth">Place of Birth</label>
                                        {/* defaultValue={Details.placeOfBirth!=null?Details.placeOfBirth:""} */}
                                        <input  type="text"
                                            className="form-control" id="placeOfBirth"
                                            placeholder="Enter Place of Birth"/>
                                    </div>
                                    <div className="col-sm-2">
                                        <label htmlFor="Nationality">Nationality</label>
                                        {/* defaultValue={Details.Nationality!=null?Details.Nationality:""} */}
                                        <input  type="text"
                                            className="form-control" id="Nationality"
                                            placeholder="Enter Nationality"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="Marital">Marital status</label>
                                        {/* defaultValue={Details.maritalStatus!=null?Details.maritalStatus:""} */}
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
                                        {/* defaultValue={Details.highestSchoolDiploma!=null?Details.highestSchoolDiploma:""} */}
                                        <input  type="text"
                                            className="form-control" id="highestSchoolDiploma"
                                            placeholder="Enter Highest School Diploma"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label htmlFor="highestVocationalEducation">Highest Vocational
                                            Education</label>
                                            {/* defaultValue={Details.highestSchoolDiploma!=null?Details.highestSchoolDiploma:""} */}
                                        <input 
                                            type="text" className="form-control" id="highestVocationalEducation"
                                            placeholder="Enter Highest Vocational Education"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="otherQualifications">Other Qualifications</label>
                                        {/* defaultValue={Details.otherQualifications!=null?Details.otherQualifications:"NA"} */}
                                        <input  type="text" 
                                            className="form-control" id="otherQualifications"
                                            placeholder="Enter Other Qualifications"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="Languages">Languages</label><br/>
                                        {LanguagesArray.map((obj: any) => 
                                        <span className="col-sm-3" ng-repeat="obj in LanguagesArray">
                                            {/* <input type="checkbox" defaultValue={Details.Languages!=null?Details.Languages[0]:""} id="English"
                                                name="obj.Title"/> */}
                                                    <input type='checkbox' id="English" name="obj.name"/>
                                            <label htmlFor="English">{obj.Title}</label><br/>
                                        </span>
                                        )}
                                    </div>
                                </div>
                            </div>
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
                <a className="hreflink" ng-click="removeItem(Item.Id)">
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
            <button type="button" className="btn btn-primary" ng-click="SaveItem(Item)">Save</button>
            <button type="button" className="btn btn-default" onClick={close}>Cancel</button>
        </div>
    </div>
</div>
</div>
                                                 
</Modal>

// Institution
<Modal
isOpen={modalIsOpen}
onDismiss={setModalIsOpenToFalse}
isBlocking={false}
// {width:"1250px"}
>
    {/* {Institutions.map(institution=> */}
<div id="EditGrueneContactSearch">
<div className="panel panel-default" ng-cloak>
    <div className="modal-header">
        <h3 className="modal-title">
            <img style={{width: "22px"}} ng-if="selectedImageUrl != undefined" id="selectedimage"
                 ng-src="{{selectedImageUrl}}?RenditionID=12" />
            <img style={{width: "22px"}} ng-if="selectedImageUrl == undefined"
                 src= "https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/SiteCollectionImages/ICONS/32/InstitutionPicture.jpg" />
            Edit Institution-
             {/* {institution.Title} */}
            <span className="pull-right">
                {/* <page-settings-info webpartid="'EditInstitutionPopup'"></page-settings-info> */}
            </span>
        </h3>
        <button type="button" style={{minWidth:"10px"}} className="close" data-dismiss="modal"
                onClick={setModalIsOpenToFalse}>
            &times;
        </button>
    </div>
    <div className="modal-body">
        <form name="ItemForm" noValidate role="form">
            <div id="table-wrapper">
                <div id="table-scroll">
                    <div id="itemtabs" className="exTab3">
                        
                        <div className="tab-content clearfixnew">
                            <Tabs>
                                <Tab title="BASIC INFORMATION">

                               
                            <div id="basicinfo">
                                <div className="col-sm-12">
                                    <div className="row form-group">
                                        <div className="col-sm-3">
                                            <label className="full_width">Title</label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.Title" />
                                        </div>
                                        <div className="col-sm-3 padL-0" title="Email">
                                            <label className="full_width">Email</label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.Email" />
                                        </div>
                                        <div className="col-sm-3 padL-0" title="Categories">
                                            <label className="full_width">Categories</label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.Categories" />
                                        </div>
                                        <div className="col-sm-3">
                                            <label className="full_width">City</label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.WorkCity" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                       
                                        <div className="col-sm-3">
                                            <div className="col-sm-11 padL-0 PadR0">
                                                <label className="full_width">
                                                    Country
                                                </label>
                                                <input style={{width: "100%"}} type="text"
                                                       className="form-control" id="txtSmartCountries" />

                                            </div>
                                            <div className="col-sm-1 PadR0">
                                                <label className="full_width">&nbsp;</label>
                                                <img src="https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/PublishingImages/Logos/EMMCopyTerm.png"
                                                     ng-click="openSmartTaxonomy('Countries');"/>
                                            </div>
                                            <div className="col-sm-11 padL-0 PadR0 inner-tabb">
                                                <div className="block mt-5" ng-repeat="item in smartCountry">
                                                    {/* {{item.Title}} */}
                                                    <a className="hreflink"
                                                                     ng-click="removeSmartCountry(item.Id,Item)">
                                                        <img src="https://hhhhteams.sharepoint.com/sites/HHHH/_layouts/images/delete.gif"/>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-3 padL-0">
                                            <label className="full_width">Address</label>

                                            <input type="text" className="form-control"
                                                   ng-model="Item.WorkAddress" />
                                        </div>
                                        <div className="col-sm-3 padL-0">
                                            <label className="full_width">Institution Type</label>

                                            <input type="text" className="form-control"
                                                   ng-model="Item.InstitutionType" />
                                        </div>
                                        <div className="col-sm-3">
                                            <form name="validURLFormforWebPage">
                                                <label className="full_width">Website</label>
                                                <input type="text" name="validUrl"
                                                       ng-pattern="/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,7}(:[0-9]{1,7})?(\/.*)?$/"
                                                       className="form-control form-group"
                                                       ng-model="Item.WebPage" />
                                                <span className="StarRed"
                                                      ng-show="validURLFormforWebPage.validUrl.$error.pattern">
                                                    Not
                                                    a valid url!
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-sm-3">
                                            <label className="full_width">Phone</label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.CellPhone" />
                                        </div>
                                        <div className="col-sm-3 padL-0">
                                            <label className="full_width">Primary Contact</label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.HomePhone" />
                                        </div>
                                       
                                        <div className="col-sm-3 padL-0">
                                            <label className="full_width">LinkedIn <a className="hreflink" ng-href="{{Item.LinkedIn}}" target="_blank"><span className="pull-right"><i className="fa fa-linkedin"></i></span></a></label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.LinkedIn" />
                                        </div>
                                        
                                        <div className="col-sm-3 padL-0">
                                            <label className="full_width">Facebook <a className="hreflink" ng-href="{{Item.Facebook}}" target="_blank"><span className="pull-right"><i className="fa fa-facebook"></i></span></a></label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.Facebook" />
                                        </div>
                                       
                                     
                                    </div>
                                    <div className="row form-group">
                                      
                                        <div className="col-sm-3">
                                            <label className="full_width">Instagram <a className="hreflink" ng-href="{{Item.Instagram}}" target="_blank"><span className="pull-right"><i className="fa fa-instagram"></i></span></a></label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.Instagram" />
                                        </div>
                                        
                                        <div className="col-sm-3 padL-0">
                                            <label className="full_width">Twitter <a className="hreflink" ng-href="{{Item.Twitter}}" target="_blank"><span className="pull-right"><i className="fa fa-twitter"></i></span></a></label>
                                            <input type="text" className="form-control"
                                                   ng-model="Item.Twitter" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-sm-12">
                                            <label className="full_width">Internal Notes</label>
                                            <div id="localaboutdescription" ng-model="localaboutdescription">

                                            <Editor
 toolbarClassName="toolbarClassName"
 wrapperClassName="wrapperClassName"
 editorClassName="editorClassName"
 wrapperStyle={{ width: '100%', border: "2px solid black", height:'50%' }}
 placeholder="Type Something"
/>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label className="full_width">About (public information)</label>
                                            <div className="forFullScreenButton" id="itemDescription" ng-model="localaboutdescription">
                                            <Editor
 toolbarClassName="toolbarClassName"
 wrapperClassName="wrapperClassName"
 editorClassName="editorClassName"
 wrapperStyle={{ width: '100%', border: "2px solid black", height:'50%' }}
 placeholder="Type Something"
/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            </Tab>

                           <Tab title="IMAGES INFOMATION">
                            <div id="ImageInfo">
                             <ImagesC id={null}/>
                            </div>
                            </Tab>

                          <Tab title="DIVISION">
                            <div id="Institution" className="tab-pane fade">
                                <div className="divPanelBody clearfix">
                                    <div className="col-sm-12 clearfix">
                                        <ul id="main-menu" className="new">
                                            <li>
                                                <a className="hreflink" ng-click="editDivisionpopup()">
                                                    <img src="https://kathabeck.sharepoint.com/sites/42/SiteCollectionImages/ICONS/Shareweb/Add-New.png"
                                                         alt="" title="Add Taxonomy Item"
                                                         className="img-icon"/>
                                                </a>
                                            </li>
                                            <li id="node_{{item.Id}}" ng-repeat="item in AllDivisions">
                                                <a target="_blank" className="hreflink"
                                                   ng-href="{{CurrentSiteUrl}}/SitePages/Institution-Profile.aspx?contactId={{item.Id}}&name={{item.Title}}">
                                                    {/* {{item.Title}} */}
                                                    </a>
                                                <a   style={{padding:"0px 6px"}}
                                                   className="hreflink pull-right"
                                                   ng-click="deleteitem(item);">
                                                    <img ng-src="https://hhhhteams.sharepoint.com/sites/HHHH/_layouts/images/delete.gif"/>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                            </Tab>
                            
                             <Tab title="SYNONYMS">
                            <div id="AddSynonyms" className="tab-pane fade">
                                <div className="fixed-divPanelBody clearfix">
                                    <div className="col-sm-12">
                                        <span className="pull-right mb-10 mt-10">
                                            <button type="button" className="btn btn-primary" ng-click="addsynonyms()">
                                                Add
                                                Synonyms
                                            </button>
                                        </span>
                                    </div>
                                    <div className="col-sm-12">
                                        <div ng-if="Item['Synonyms'].length==0">
                                            <div className="current_commnet">No Synonyms Available</div>
                                        </div>
                                        <div ng-if="Item['Synonyms'].length>0">
                                            <div className="section-event">
                                                <div className="container-new">
                                                    <table className="table  compare_item"  style={{width:"100%"}}>
                                                        <thead>
                                                            <tr>
                                                                <th  style={{width:"80%"}}>
                                                                    <div className="text" style={{width:"80%"}}>
                                                                        Title
                                                                    </div>
                                                                </th>
                                                                <th style={{width:"10%"}}>
                                                                    <div style={{width:"10%"}}></div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr ng-repeat="val in Item['Synonyms']">
                                                                <td style={{width:"95%"}}>
                                                                    <input className="form-control" type="text"
                                                                           ng-model="val.Title"
                                                                           ng-disabled="val.status"/>
                                                                </td>
                                                                <td>
                                                                    <span ng-if="!val.status"
                                                                          ng-click="val.status=!val.status"
                                                                          title="Save">
                                                                        <img src="https://www.shareweb.ch/site/Joint/SiteCollectionImages/ICONS/24/save.png"/>
                                                                    </span>
                                                                    <span ng-if="val.status"
                                                                          ng-click="val.status=!val.status"
                                                                          title="Edit">
                                                                        <img src="https://www.shareweb.ch/site/Joint/SiteCollectionImages/ICONS/24/edit.png"/>
                                                                    </span>
                                                                    <a className="hreflink"
                                                                       ng-click="Item['Synonyms'].splice($index,1);">
                                                                        <img ng-src="https://hhhhteams.sharepoint.com/sites/HHHH/_layouts/images/delete.gif"/>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        {/* <!--<item-info></item-info>--> */}

    </div>
    <div className="modal-footer">
        <div className="col-sm-12">
            <div className="row">
                <div className="ItemInfo col-sm-6">
                    <div className="text-left">
                        Created <span ng-bind="Item.Created | date:'dd/MM/yyyy'"></span> by
                        <span className="footerUsercolor">
                            {/* {{Item.Author.Title}} */}
                            </span>
                    </div>
                    <div className="text-left">
                        Last modified <span ng-bind="Item.Modified | date:'dd/MM/yyyy hh:mm'"></span> by <span className="footerUsercolor">
                            {/* {{Item.Editor.Title}} */}
                            </span>
                    </div>
                    <div className="text-left">
                        <a className="hreflink" ng-click="removeItem(Item.Id)">
                            <img src="https://hhhhteams.sharepoint.com/sites/HHHH/_layouts/images/delete.gif"/> Delete this item
                        </a>
                    </div>
                </div>
                <div className="col-sm-6 ItemInfo-right">
                    <div className="pull-right">
                        <span>
                            <a className="ForAll hreflink" target="_blank"
                               ng-href="{{baseurl}}/SitePages/Institution-Profile.aspx?contactId={{Item.Id}}&name={{Item.Title}}">
                                <img className="mb-3 icon_siz19" style={{marginRight: "3px"}}
                                     ng-src="https://hhhhteams.sharepoint.com/sites/HHHH/_layouts/15/images/ichtm.gif?rev=23" />Go to Profile page
                            </a>
                        </span>
                        <span>|</span>
                        <a ng-href="{{baseurl}}/Lists/Institutions/EditForm.aspx?ID={{Item.Id}}"
                           target="_blank">Open out-of-the-box form</a>
                        <button type="button" className="btn btn-primary" ng-click="SaveItem()">Save</button>
                        <button type="button" className="btn btn-default" ng-click="cancelItem()">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="getDivisionPopUp" className="modal fade in" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="false" style={{display: "none"}}>
    <div className="modal-dialog">
        <div className="modal-content">
            <form name="createInstitutionForm" noValidate role="form">
                <div className="panel-title">
                    <button type="button" className="close ml-2" style={{minWidth:"10px"}} data-dismiss="modal"
                            ng-click="cancelDivisionpopup()">
                        &times;
                    </button>
                    {/* <page-settings-info webpartid="'CreateContactPopupItem'"></page-settings-info> */}
                    <h3 className="">Add Division</h3>
                </div>
                <div className="modal-body">
                    <div className="col-sm-12 tab-content phase mb-10 mt-10  PadR0">
                        <div className="form-group">
                            <div className="form-group col-sm-12 padL-0">
                                <label ng-bind-html="GetColumnDetails('InstitutionTitle') | trustedHTML">
                                </label>
                                <div>
                                    <input type="text" ng-model="Title"
                                           className="form-control" ng-required="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="col-sm-12 mt-10">
                        {/* <!--<button type="button" ng-show="IsTitleSelected" className="btn btn-primary" ng-click="createJoinInstitution()">Ok</button>--> */}
                        <button type="button" className="btn btn-primary"
                                ng-click="saveDivision()">
                            Save
                        </button>
                        <button type="button" className="btn btn-default" ng-click="cancelDivisionpopup()">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="modalAllCovers" className="modal fade in" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="false" style={{display: "none"}}>
    <div className="modal-dialog" style={{width: "90%"}}>
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" style={{minWidth: "10px"}} ng-click="cancelItemCover()"
                        title="Click to exit">
                    &times;
                </button>
                <h4 className="modal-title">Select Item Cover</h4>
                <div className="pull-right">
                    <button type="button" ng-disabled="rowPosition <= 115" className="btn btn-primary"
                            style={{marginRight: "10px",marginTop: "-35px"}} ng-click="LoadPrevCovers(rowPosition)"
                            title="Click to load prev 100 Covers">
                        Prev
                    </button>
                    <button type="button" ng-disabled="rowPosition >= AllImages.length" className="btn btn-primary"
                            style={{marginRight: "30px",marginTop: "-35px"}} ng-click="LoadNextCovers(rowPosition)"
                            title="Click to load next 100 Covers">
                        Next
                    </button>
                </div>
            </div>
            <div className="modal-body">
                <div id="coverImagesPopup">
                    <img title="{{img.FileLeafRef}}" id="{{img.Id}}_imagepopup"
                         ng-src="{{img.EncodedAbsUrl}}?RenditionID=9" ng-click="selectImagePopup(img)"
                         className="morecovers" ng-repeat="img in Images" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" ng-click="cancelItemCover()"
                        title="Save changes & exit">
                    Save
                </button>
                <button type="button" className="btn btn-default" ng-click="cancelItemCover()"
                        title="Discard unsaved changes & exit" onClick={setModalIsOpenToFalse}>
                    Cancel
                </button>
            </div>
        </div>
    </div>
</div>




</div>
{/* )} */}
</Modal>
}