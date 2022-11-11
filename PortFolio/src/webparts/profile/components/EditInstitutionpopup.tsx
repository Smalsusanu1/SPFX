import * as React from "react";
import ImagesC from "./Images";






export default function EditInstitution(){
    return(
        <div id="EditGrueneContactSearch">
        <div className="panel panel-default" ng-cloak>
            <div className="modal-header">
                <h3 className="modal-title">
                    <img style={{width: "22px"}} ng-if="selectedImageUrl != undefined" id="selectedimage"
                         ng-src="{{selectedImageUrl}}?RenditionID=12" />
                    <img style={{width: "22px"}} ng-if="selectedImageUrl == undefined"
                         ng-src="{{imageinfourl}}/SiteCollectionImages/ICONS/32/InstitutionPicture.jpg" />
                    Edit Institution-
                     {/* {{Item.Title}} */}
                    <span className="pull-right">
                        {/* <page-settings-info webpartid="'EditInstitutionPopup'"></page-settings-info> */}
                    </span>
                </h3>
                <button type="button" style={{minWidth:"10px"}} className="close" data-dismiss="modal"
                        ng-click="cancelItem()">
                    &times;
                </button>
            </div>
            <div className="modal-body">
                <form name="ItemForm" noValidate role="form">
                    <div id="table-wrapper">
                        <div id="table-scroll">
                            <div id="itemtabs" className="exTab3">
                                <ul className="nav nav-pills">
                                    <li><a data-toggle="tab" href="#basicinfo">BASIC INFORMATION</a></li>
                                    <li>
                                        <a data-toggle="tab" href="#ImageInfo"
                                           ng-click="showcoveroption('copypaste')">Image Information </a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#Institution">Division </a>
                                    </li>
                                    <li><a data-toggle="tab" href="#AddSynonyms"> Synonyms</a></li>
                                </ul>
                                <div className="tab-content clearfixnew">
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
                                                        <img src="{{MainSiteUrl}}/PublishingImages/Logos/EMMCopyTerm.png"
                                                             ng-click="openSmartTaxonomy('Countries');"/>
                                                    </div>
                                                    <div className="col-sm-11 padL-0 PadR0 inner-tabb">
                                                        <div className="block mt-5" ng-repeat="item in smartCountry">
                                                            {/* {{item.Title}} */}
                                                            <a className="hreflink"
                                                                             ng-click="removeSmartCountry(item.Id,Item)">
                                                                <img ng-src="/_layouts/images/delete.gif"/>
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
                                                    <div id="localaboutdescription" ng-model="localaboutdescription"></div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <label className="full_width">About (public information)</label>
                                                    <div className="forFullScreenButton" id="itemDescription" ng-model="localaboutdescription"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
    
                                    <div id="ImageInfo">
                                     <ImagesC id={null}/>
                                    </div>
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
                                                            <img ng-src="/_layouts/images/delete.gif"/>
                                                        </a>
                                                    </li>
    
                                                </ul>
                                            </div>
    
                                        </div>
                                    </div>
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
                                                                                <img ng-src="/_layouts/images/delete.gif"/>
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
                                    <img src="/_layouts/images/delete.gif"/> Delete this item
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 ItemInfo-right">
                            <div className="pull-right">
                                <span>
                                    <a className="ForAll hreflink" target="_blank"
                                       ng-href="{{baseurl}}/SitePages/Institution-Profile.aspx?contactId={{Item.Id}}&name={{Item.Title}}">
                                        <img className="mb-3 icon_siz19" style={{marginRight: "3px"}}
                                             ng-src="/_layouts/15/images/ichtm.gif?rev=23" />Go to Profile page
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
                                title="Discard unsaved changes & exit">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="PrimaryContact" className="modal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="panel-title">
                        <button type="button" className="close ml-2" style={{minWidth:"10px"}} data-dismiss="modal" ng-click="cancelPrimary()">&times;</button>
                        {/* <page-settings-info webpartid="'CreateContactPopupItem'"></page-settings-info> */}
                        <h3 className="">Select Primary Contact</h3>
                    </div>
                    <div className="modal-body">
                        <div className="col-sm-12 tab-content pad0 bdrbox">
                            <div className="padL-0 PadR0 col-sm-12">
                                <div className="table-head pb-5 mt-5">
                                    <div className="colm-3">
                                        <p></p>
                                        {/* <!--<input ng-model="contactcompare" type="checkbox" name="chkCompareContact" ng-click="SelectContactAll(contactcompare)" />
                                        <label className="text ForAll ml-1">All</label>--> */}
                                    </div>
                                    <div className="colm-h">
                                        <div className="displayLabel full_width">
                                            <label>FullName</label>
                                        </div>
                                        <div className="headcontainer full_width">
                                            <input id="searchCategory" type="text" placeholder="FullName" ng-model="searchFullName" />
                                            <span className="searchclear" ng-show="searchFullName.length>0" ng-click="clearControl('searchFullName')">X</span>
    
                                            <span className="icons">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='FullName'&&!reverse?'active':''}}"
                                                       ng-click="sortBy('FullName', false)"></i>
                                                </span><span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='FullName'&&reverse?'active':''}}"
                                                       ng-click="sortBy('FullName', true)"></i>
                                                </span>
    
                                            </span>
                                        </div>
                                    </div>
    
                                    <div className="colm-c">
                                        <div className="displayLabel full_width">
                                            <label>Company</label>
                                        </div>
                                        <div className="headcontainer full_width">
                                            <input id="searchTitle" type="text" placeholder="Institution" ng-model="searchCompany" />
                                            w=
                                            <span className="searchclear" ng-show="searchCompany.length>0" ng-click="clearControl('searchCompany')">X</span>
                                            {/* <!-- <span className="{{orderBy=='Company'&&!reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-up direction-arrow arrow_up" ng-click="sortBy('Company', false)"></span>
                                            <span className="{{orderBy=='Company'&&reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-down direction-arrow arrow_down" ng-click="sortBy('Company', true)"></span> --> */}
                                            <span className="icons">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='Company'&&!reverse?'active':''}}"
                                                       ng-click="sortBy('Company', false)"></i>
                                                </span><span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='Company'&&reverse?'active':''}}"
                                                       ng-click="sortBy('Company', true)"></i>
                                                </span>
    
                                            </span>
                                        </div>
                                    </div>
    
                                    <div className="colm-c">
                                        <div className="displayLabel full_width">
                                            <label>Email</label>
                                        </div>
                                        <div className="headcontainer full_width">
                                            <input id="searchEmail" type="text" placeholder="Email" ng-model="searchEmail" />
                                            ng
                                            <span className="searchclear" ng-show="searchEmail.length>0" ng-click="clearControl('searchEmail')">X</span>
                                            {/* <!-- <span className="{{orderBy=='Email'&&!reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-up direction-arrow arrow_up" ng-click="sortBy('Email', false)"></span>
                                            <span className="{{orderBy=='Email'&&reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-down direction-arrow arrow_down" ng-click="sortBy('Email', true)"></span> --> */}
                                            <span className="icons">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='Email'&&!reverse?'active':''}}"
                                                       ng-click="sortBy('Email', false)"></i>
                                                </span><span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='Email'&&reverse?'active':''}}"
                                                       ng-click="sortBy('Email', true)"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* <!--<div className="colm-d">
                                        <div className="displayLabel full_width">
                                            <label>City</label>
                                        </div>
                                        <div className="headcontainer full_width">
                                            <input id="searchWorkCity" type="text" placeholder="City" ng-model="searchWorkCity" />
                                            <span className="searchclear" ng-show="searchWorkCity.length>0" ng-click="clearControl('searchWorkCity')">X</span>--> */}
                                    {/* <!-- <span className="{{orderBy=='WorkCity'&&!reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-up direction-arrow arrow_up" ng-click="sortBy('WorkCity', false)"></span>
                                    <span className="{{orderBy=='WorkCity'&&reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-down direction-arrow arrow_down" ng-click="sortBy('WorkCity', true)"></span> -->
                                    <!--<span className="icons">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='WorkCity'&&!reverse?'active':''}}"
                                                       ng-click="sortBy('WorkCity', false)"></i>
                                                </span><span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='WorkCity'&&reverse?'active':''}}"
                                                       ng-click="sortBy('WorkCity', true)"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>--> */}
                                </div>
    
                                <div className="filter-section">
                                    <div className="tablerow for-c03" ng-repeat="item in filtered = (AllContactsPrimary | orderBy:orderBy:reverse | filter:{Status:searchStatus,FullName:searchFullName,Company:searchCompany,JobTitle:searchJobTitle,Email:searchEmail,WorkCity:searchWorkCity,WorkCountry:searchWorkCountry})">
                                        <div className="colm-3 icontype">
                                            <input ng-model="item.isSelected" className="no-padding" type="checkbox" name="chkCompareContact" ng-click="selectPrimaryContact(item)" />
                                        </div>
                                        <div className="colm-h">
                                            <p>
                                                <img style={{width: "22px"}} ng-if="item.Item_x0020_Cover==undefined" src="{{baseUrl}}/SiteCollectionImages/ICONS/32/icon_user.jpg" />
                                                <img style={{width: "22px"}} ng-if="item.Item_x0020_Cover!=undefined" ng-src="{{item.Item_x0020_Cover.Url}}" />
                                                <a className="ml-5" ng-href="{{baseUrl}}/SitePages/Contact-Profile.aspx?contactId={{item.Id}}" target="_blank">
                                                    {/* {{item.FullName}} */}
                                                    </a>
    
                                            </p>
                                        </div>
                                        <div className="colm-c">
                                            {/* <p>{{item.Company}}</p> */}
                                            </div>
                                        <div className="colm-c">
                                            {/* <p>="{{item.Email}}</p> */}
                                            </div>
                                        {/* <!--<div className="colm-d"><p>{{item.WorkCity}}</p></div>-->
                                        <!--<div className="colm-b"><p>{{item.WorkCountry}}</p></div>-->
                                        <!--<div className="icontype display_hide">
                                            <a href="javascript:void(0)" data-backdrop="static" data-toggle="modal" data-trigger="hover" title="Edit" data-toggle="modal" ng-click="getContactDetail(item.Id)"><img className="pull-right" src="/_layouts/images/edititem.gif"> </a>
                                        </div>--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* <!--<button type="button" ng-show="IsTitleSelected" className="btn btn-primary" ng-click="createGrueneContact()">Ok</button>--> */}
                        <button type="button" className="btn btn-primary mt-10" ng-disabled="createContactForm.$error.required" ng-click="createContact()">Save</button>
                        <button type="button" className="btn btn-default mt-10" ng-click="cancelPrimary()">Cancel</button>
    
                    </div>
                </div>
    
    
    
            </div>
        </div>
        <div id="ContactInstituion" className="modal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="panel-title">
                        <button type="button" className="close ml-2" style={{minWidth:"10px"}} data-dismiss="modal" ng-click="cancelPrimary()">&times;</button>
                        {/* <page-settings-info webpartid="'CreateContactPopupItem'"></page-settings-info> */}
                        <h3 className="">Select Instituion</h3>
                    </div>
                    <div className="modal-body">
                        <div className="col-sm-12 tab-content bdrbox padL-0 PadR0">
                            <div className="col-sm-12 padL-0 PadR0">
                                <div className="table-head pb-5 mt-5">
                                    <div className="colm-3">
                                        <p></p>
                                        {/* <!--<input ng-model="contactcompare" type="checkbox" name="chkCompareContact" ng-click="SelectContactAll(contactcompare)" />
                                        <label className="text ForAll ml-1">All</label>--> */}
                                    </div>
                                    <div className="colm-h">
                                        <div className="displayLabel full_width">
                                            <label>Title</label>
                                        </div>
                                        <div className="headcontainer full_width">
                                            <input id="searchCategory" type="text" placeholder="Title" ng-model="searchTitle" />
                                            <span className="searchclear" ng-show="searchTitle.length>0" ng-click="clearControl('searchTitle')">X</span>
    
                                            <span className="icons">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='Title'&&!reverse?'active':''}}"
                                                       ng-click="sortBy('Title', false)"></i>
                                                </span><span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='Title'&&reverse?'active':''}}"
                                                       ng-click="sortBy('Title', true)"></i>
                                                </span>
    
                                            </span>
                                        </div>
                                    </div>
    
                                    <div className="colm-c">
                                        <div className="displayLabel full_width">
                                            <label>City</label>
                                        </div>
                                        <div className="headcontainer full_width">
                                            <input id="searchTitle" type="text" placeholder="City" ng-model="searchWorkCity" />
                                            ea
                                            <span className="searchclear" ng-show="searchWorkCity.length>0" ng-click="clearControl('searchCompany')">X</span>
    
                                            {/* <!-- <span className="{{orderBy=='WorkCity'&&!reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-up direction-arrow arrow_up" ng-click="sortBy('Company', false)"></span>
                                            <span className="{{orderBy=='WorkCity'&&reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-down direction-arrow arrow_down" ng-click="sortBy('Company', true)"></span> --> */}
                                            <span className="icons">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='WorkCity'&&!reverse?'active':''}}"
                                                       ng-click="sortBy('WorkCity', false)"></i>
                                                </span><span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='WorkCity'&&reverse?'active':''}}"
                                                       ng-click="sortBy('WorkCity', true)"></i>
                                                </span>
    
                                            </span>
                                        </div>
                                    </div>
    
                                    <div className="colm-c">
                                        <div className="displayLabel full_width">
                                            <label>Country</label>
                                        </div>
                                        <div className="headcontainer full_width">
                                            <input id="searchWorkCountry" type="text" placeholder="Country" ng-model="searchWorkCountry" />
                                            kC
                                            <span className="searchclear" ng-show="searchWorkCountry.length>0" ng-click="clearControl('searchWorkCountry')">X</span>
                                            {/* <!-- <span className="{{orderBy=='WorkCountry'&&!reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-up direction-arrow arrow_up" ng-click="sortBy('Email', false)"></span>
                                            <span className="{{orderBy=='WorkCountry'&&reverse?'glyphicon_active':'glyphicon'}}  glyphicon-chevron-down direction-arrow arrow_down" ng-click="sortBy('Email', true)"></span> --> */}
                                            <span className="icons">
                                                <span>
                                                    <i className="fa fa-angle-up hreflink {{orderBy=='WorkCountry'&&!reverse?'active':''}}"
                                                       ng-click="sortBy('WorkCountry', false)"></i>
                                                </span><span>
                                                    <i className="fa fa-angle-down hreflink {{orderBy=='WorkCountry'&&reverse?'active':''}}"
                                                       ng-click="sortBy('WorkCountry', true)"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="filter-section">
                                    <div className="tablerow for-c03" ng-repeat="item in filtered = (AllContactInstituion | orderBy:orderBy:reverse | filter:{Title:searchTitle,WorkCity:searchCompany,searchWorkCity:searchWorkCountry})">
                                        <div className="colm-3 icontype">
                                            <input className="no-padding" type="radio" name="chkCompareContact" ng-click="selectContactInstituion(item)" />
                                        </div>
                                        <div className="colm-h">
                                            <p>
                                                {/* {{item.Title}} */}
    
                                            </p>
                                        </div>
                                        <div className="colm-c"><p>
                                            {/* {{item.WorkCity}} */}
                                            </p></div>
                                        <div className="colm-c"><p>
                                            {/* {{item.WorkCountry}} */}
                                            </p></div>
    
                                        {/* <!--<div className="colm-d"><p>{{item.WorkCity}}</p></div>-->
                                        <!--<div className="colm-b"><p>{{item.WorkCountry}}</p></div>-->
                                        <!--<div className="icontype display_hide">
                                            <a href="javascript:void(0)" data-backdrop="static" data-toggle="modal" data-trigger="hover" title="Edit" data-toggle="modal" ng-click="getContactDetail(item.Id)"><img className="pull-right" src="/_layouts/images/edititem.gif"> </a>
                                        </div>--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* <!--<button type="button" ng-show="IsTitleSelected" className="btn btn-primary" ng-click="createGrueneContact()">Ok</button>--> */}
                        <button type="button" className="btn btn-primary mt-10" ng-disabled="createContactForm.$error.required" ng-click="createContactInstituion()">Save</button>
                        <button type="button" className="btn btn-default mt-10" ng-click="cancelPrimary()">Cancel</button>
    
                    </div>
                </div>
    
    
    
            </div>
        </div>
        {/* <!--Smart taxonomy popup--> */}
        <div id="SmartTaxonomyPopup" className="modal fade in smart-taxonomy-responsive" tabIndex={-1} role="dialog"
             aria-labelledby="myModalLabel" aria-hidden="false" style={{display: "none"}}>
            <div className="modal-dialog smarttaxonomypopupwidth">
                <div className="modal-content">
                    <div className="modal-header">
    
                        <h3 className="modal-title" ng-if="Portfolio==undefined">
                            {/* Select {{SmartTaxonomyName}} */}
                            <span className="pull-right">
                                {/* <page-settings-info webpartid="'sharewebsmartpicker'"></page-settings-info> */}
                            </span>
                        </h3>
                        <button type="button" className="close" data-dismiss="modal" ng-click="cancelSmartTaxonomyPopup()"
                                style={{minWidth: "10px", marginTop: "5px"}}>
                            &times;
                        </button>
    
    
                    </div>
                    <div className="col-sm-12 mb-10">
                        <table className="ms-dialogHeader" cellSpacing="0" cellPadding="0"  width="100%">
                            <tbody>
                                <tr className="">
                                    <td valign="middle" align="center" id="page" className="inner-tabb">
                                        <img ng-src="/_layouts/images/EMMDoubleTag.png" alt=""/>
                                    </td>
                                    <td className="ms-dialogHeaderDescription full_width inner-tabb" valign="top">
    
                                        <div id="selectTermDescription" className="none-wordbreak">
                                            <table className="ms-dialogHeaderDescription">
                                                <tbody>
                                                    <tr id="addNewTermDescription" className="">
                                                        <td>New items are added under the currently selected item.</td>
                                                        <td className="TaggingLinkWidth">
                                                            <a className="hreflink" ng-click="gotomanagetaxonomy();">
                                                                Add New Item
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr id="SendFeedbackTr">
                                                        <td>Make a request or send feedback to the Term Set manager.</td>
                                                        <td className="TaggingLinkWidth">
                                                            <a ng-click="sendFeedback();">
                                                                Send Feedback
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
    
                                            <button type="button" className="btn btn-primary pull-right"
                                                    style={{marginTop: "-30px"}} ng-click="copySelectedSmartTaxonomy()">
                                                OK
                                            </button>
                                        </div>
    
                                    </td>
                                    <td className="ms-dialogHelpLink inner-tabb" align="right" valign="top" >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-body bg-f5f5 border-c">
                        <div className="col-sm-12 mt-10 mb-10">
                            <div className="col-sm-4 padL-0 PadR0 ">
                                <div className="col-sm-12 padL-0 PadR0 pull-right" ng-show="SmartTaxonomyName =='Topics'">
                                    <input type="text"
                                           className="form-control searchbox_height ng-pristine ng-valid ng-empty ui-autocomplete-input ng-touched"
                                           id="txtnewTopicpicker" placeholder="Search Metadata" autoComplete="off"/><span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                                    <span className="searchclear">
                                        <img className="hreflink wid17"
                                             ng-src="https://www.shareweb.ch/site/EI/SiteCollectionImages/ICONS/24/searchIcon.png"/>
                                    </span>
                                </div>
                                <div className="col-sm-12 padL-0 PadR0 pull-right" ng-show="SmartTaxonomyName =='Activities'">
                                    <input type="text"
                                           className="form-control searchbox_height ng-pristine ng-valid ng-empty ui-autocomplete-input ng-touched"
                                           id="txtnewActivitiespicker" placeholder="Search Metadata" autoComplete="off"/><span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                                    <span className="searchclear">
                                        <img className="hreflink wid17"
                                             ng-src="https://www.shareweb.ch/site/EI/SiteCollectionImages/ICONS/24/searchIcon.png"/>
                                    </span>
                                </div>
                                <div className="col-sm-12 padL-0 PadR0 pull-right" ng-show="SmartTaxonomyName =='Contact Categories'">
                                    <input type="text"
                                           className="form-control searchbox_height ng-pristine ng-valid ng-empty ui-autocomplete-input ng-touched"
                                           id="txtnewContactfunctionCategories" placeholder="Search Metadata" autoComplete="off"/><span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                                    <span className="searchclear">
                                        <img className="hreflink wid17"
                                             ng-src="https://www.shareweb.ch/site/EI/SiteCollectionImages/ICONS/24/searchIcon.png"/>
                                    </span>
                                </div>
                                <div className="col-sm-12 padL-0 PadR0 pull-right" ng-show="SmartTaxonomyName =='Countries'">
                                    <input type="text"
                                           className="form-control searchbox_height ng-pristine ng-valid ng-empty ui-autocomplete-input ng-touched"
                                           id="txtnewContactsmartcountry" placeholder="Search Metadata" autoComplete="off"/><span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                                    <span className="searchclear">
                                        <img className="hreflink wid17"
                                            src="https://www.shareweb.ch/site/EI/SiteCollectionImages/ICONS/24/searchIcon.png"/>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-8 PadR0">
                                <div className="col-sm-12 padL-0 PadR0">
                                    <input type="text"
                                           ng-show="SmartTaxonomyName==newsmarttaxnomy && SmartTaxonomyName=='Regions'|| SmartTaxonomyName=='Document Status' || SmartTaxonomyName=='Partner_x002d_Countries'"
                                           className="form-control searchbox_height ng-pristine ng-untouched ng-valid ng-empty ui-autocomplete-input"
                                           ng-model="SmartTaxonomyValue" autoComplete="off"/><span role="status"
                                                                                                  aria-live="polite" className="ui-helper-hidden-accessible"></span>
                                </div>
                                <div className="col-sm-12 padL-0 PadR0"
                                     ng-show="SmartTaxonomyName =='Topics'  || SmartTaxonomyName=='Activities'|| SmartTaxonomyName=='Contact Categories'|| SmartTaxonomyName=='Countries'">
                                    <div className="pad-5">
                                        <span ng-show="item.Title!=undefined" className="block clear-assessment mr-4"
                                              ng-repeat="item in SmartArray">
                                            {/* {{item.Title}} */}
                                            <a className="hreflink"
                                                             ng-click="removeSmartArray(item.Id)">
                                                <img ng-src="/_layouts/images/delete.gif"/>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
    
                        </div>
    
                        <div className="col-sm-12 divPanelBody">
                            <nav id="nav_pop-up">
                                <ul id="main-menu">
                                    <li ng-repeat="item in TaxonomyItems">
                                        <a className="hreflink" ng-click="selectnewItem(item);">
                                            <img ng-if="item.Item_x0020_Cover.Url != undefined" className="flag_icon"
                                                 ng-src="{{item.Item_x0020_Cover.Url}}"/>
                                                  {/* {{item.Title}} */}
                                        </a>
                                        <ul ng-if="item.childs.length>0" className="sub-menu clr mar0">
                                            <li ng-repeat="child1 in item.childs">
                                                <a className="hreflink" ng-click="selectnewItem(child1);">
                                                    <img ng-if="child1.Item_x0020_Cover!=undefined" className="flag_icon"
                                                         ng-src="{{child1.Item_x0020_Cover.Url}}"/> 
                                                         {/* {{child1.Title}} */}
                                                </a>
                                                <ul ng-if="child1.childs.length>0" className="sub-menu clr2 mar0 padL-0">
                                                    <li ng-repeat="child2 in child1.childs">
                                                        <a className="hreflink" ng-click="selectnewItem(child2);">
                                                            <img ng-if="child2.Item_x0020_Cover!=undefined" className="flag_icon"
                                                                 ng-src="{{child2.Item_x0020_Cover.Url}}"/>
                                                            {/* {{child2.Title}} */}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
    
                    <div className="modal-footer">
                        <div className="col-sm-12 pull-right">
                            <a className="hreflink" ng-click="gotomanagetaxonomy();">Manage Smart Taxonomy</a>
                            <button type="button" className="btn btn-primary" ng-click="copySelectedSmartTaxonomy()">OK</button>
                        </div>
                    </div>
                </div>
    
            </div>
            {/* <shareweb-progress-bar progressbarid="'smarttaxnomyprogressbar'"></shareweb-progress-bar> */}
        </div>
        {/* <!--<div id="SmartTaxonomyPopup" className="modal fade in smart-taxonomy-responsive" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" style="display: none;">
            <div className="modal-dialog smarttaxonomypopupwidth">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" ng-click="cancelSmartTaxonomyPopup()" style="min-width: 10px;">&times;</button>
                        <page-settings-info webpartid="'sharewebsmartpicker'"></page-settings-info>
                        <h4 className="modal-title">
                            Select {{SmartTaxonomyName}}
                        </h4>
                        <table className="ms-dialogHeader" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tbody>
                                <tr className="">
                                    <td valign="middle" align="center" id="page" className="inner-tabb">
    
                                        <img ng-src="/_layouts/images/EMMDoubleTag.png" alt="">
    
                                    </td>
                                    <td className="ms-dialogHeaderDescription full_width inner-tabb" valign="top">
    
                                        <div id="selectTermDescription" className="none-wordbreak">
                                            <table className="ms-dialogHeaderDescription">
                                                <tbody>
                                                    <tr id="addNewTermDescription" className="">
                                                        <td>New items are added under the currently selected item.</td>
                                                        <td className="TaggingLinkWidth">
                                                            <a className="hreflink" ng-click="gotomanagetaxonomy();">
                                                                Add New Item
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr id="SendFeedbackTr">
                                                        <td>Make a request or send feedback to the Term Set manager.</td>
                                                        <td className="TaggingLinkWidth">
                                                            <a ng-click="sendFeedback();">
                                                                Send Feedback
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
    
                                    </td>
                                    <td className="ms-dialogHelpLink inner-tabb" align="right" valign="top" nowrap="nowrap">-->
        <!-- Remove -->
        <!--</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-body">
                        <div>
    
                            <div className="col-sm-10 Activity_Box" ng-hide="SmartTaxonomyName=='Topics' || SmartTaxonomyName=='Activities' || SmartTaxonomyName=='Countries' || SmartTaxonomyName=='Shareweb Pages'">
                                <input type="text" className="form-control ng-pristine ng-untouched ng-valid ng-empty ui-autocomplete-input" id="txtSmartTaxonomyPopup" ng-model="SmartTaxonomyValue" autocomplete="off"><span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                            </div>
    
    
                        </div>
                        <div className="">
                            <div className="col-sm-12 ActivityBox" ng-show="SmartTaxonomyName=='Topics'">
                                <span className="block" ng-repeat="item in smartTopics">{{item.Title}}<a className="hreflink" ng-click="removeSmartTopic(item.Id)"> <img ng-src="/_layouts/images/delete.gif"></a></span>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-sm-12 ActivityBox" ng-show="SmartTaxonomyName=='Activities'">
                                <span className="block" ng-repeat="item in smartActivity">{{item.Title}}<a className="hreflink" ng-click="removeSmartActivity(item.Id)"> <img ng-src="/_layouts/images/delete.gif"></a></span>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-sm-12 ActivityBox" ng-show="SmartTaxonomyName=='Countries'">
                                <span className="block" ng-repeat="item in SmartCountries">{{item.Title}}<a className="hreflink" ng-click="removeSmartCountries(item.Id)"> <img ng-src="/_layouts/images/delete.gif"></a></span>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-sm-12 ActivityBox" ng-show="SmartTaxonomyName=='Shareweb Pages'">
                                <span className="block" ng-repeat="item in smartPages">{{item.Title}}<a className="hreflink" ng-click="removeSmartPages(item.Id)"> <img ng-src="/_layouts/images/delete.gif"></a></span>
                                <div className="clearfix"></div>
                            </div>
                        </div>
    
                        <div className="divPanelBody">
                            <nav id="nav_pop-up">
                                <ul id="main-menu">
                                    <li ng-repeat="item in TaxonomyItems">
                                        <a className="hreflink" ng-click="selectItem(item);"><img ng-if="item.Item_x0020_Cover.Url != undefined" className="flag_icon" ng-src="{{item.Item_x0020_Cover.Url}}"> {{item.Title}}</a>
                                        <ul ng-if="item.childs.length>0" className="sub-menu clr">
                                            <li ng-repeat="child1 in item.childs">
                                                <a className="hreflink" ng-click="selectItem(child1);"><img ng-if="child1.Page_x002d_Title!=undefined && child1.ProfileType!=undefined" className="flag_icon" ng-src="{{child1.Item_x0020_Cover.Url}}"> {{child1.Title}}</a>
                                                <ul ng-if="child1.childs.length>0" className="sub-menu clr2">
                                                    <li ng-repeat="child2 in child1.childs">
                                                        <a className="hreflink" ng-click="selectItem(child2);"><img ng-if="child2.Page_x002d_Title!=undefined && child2.ProfileType!=undefined" className="flag_icon" ng-src="{{child2.Item_x0020_Cover.Url}}"> {{child2.Title}}</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="col-sm-12 pull-right">
                            <a className="hreflink" ng-click="gotomanagetaxonomy();">Manage Smart Taxonomy</a>
                            <button type="button" className="btn btn-primary" ng-click="copySelectedSmartTaxonomy()">OK</button>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>--> */}
    </div>

    )
}