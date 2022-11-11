import * as React from "react";
import ImagesC from "./ImagesC/Images";
import { arraysEqual, Modal } from 'office-ui-fabric-react';
import Tabs from "./Tabs/Tabs";
import Tab from "./Tabs/Tab";
import * as Moment from 'moment';
import'./Tabs/styles.css';
  
// import { Editor } from "react-draft-wysiwyg";
import { Editor, EditorState, ContentState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Tooltip from "./Tooltip/popup";




export default function EditInstitution(){
    // Id:any
    

     
   
    const [Institutions, setInstitutions] = React.useState([]);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }
    

     
    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }


  

     
    React.useEffect(() => {
    function InstitutionData() {
        var institute: any = []
        var url = "https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/_api/web/lists/getbyid('A18A87D5-1A18-4004-A8EA-A6AE8A17A1B0')/items?$select=Id,ItemImage,WorkAddress,CellPhone,HomePhone,LinkedIn,Facebook,Instagram,Twitter,About,WebPage,InstitutionType,Categories,WorkCity,Synonyms,WorkCountry,Email,Description,Title,Modified,Author/Title,SmartCountries/Id,SmartCountries/Title,Editor/Title,Created,Modified&$top=4999&$expand=Author,Editor,SmartCountries";
        // &$filter=Id eq'" + 5 + "'

        $.ajax({

            url: url,

            method: "GET",

            headers: {

                "Accept": "application/json; odata=verbose"

            },

            success: function (data) {

                institute = data.d.results;
                console.log(institute);

                setInstitutions(institute)
            },

            error: function (error) {


            }
        });
    }
    InstitutionData();
},
    []);
   

    return(
        <>
       <img title="Edit Details"  className="wid22"  onClick={(e) => setModalIsOpenToTrue()}
                                            src="https://hhhhteams.sharepoint.com/_layouts/images/edititem.gif"/>
        <Modal
        isOpen={modalIsOpen}
        onDismiss={setModalIsOpenToFalse}
        isBlocking={false}
        // {width:"1250px"}
        >
            {Institutions.map(institution=>
        <div id="EditGrueneContactSearch">
        <div className="panel panel-default" ng-cloak>
            <div className="modal-header">
                <h3 className="modal-title">
                    <img style={{width: "22px"}} ng-if="selectedImageUrl != undefined" id="selectedimage"
                         ng-src="{{selectedImageUrl}}?RenditionID=12" />
                    <img style={{width: "22px"}} ng-if="selectedImageUrl == undefined"
                         src= "https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/SiteCollectionImages/ICONS/32/InstitutionPicture.jpg" />
                    Edit Institution-
                     {institution.Title}
                    <span className="pull-right">
                        {/* <page-settings-info webpartid="'EditInstitutionPopup'"></page-settings-info> */}
                        <Tooltip/>
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
                                                          defaultValue={institution.Title!=undefined?institution.Title:""}  />
                                                </div>
                                                <div className="col-sm-3 padL-0" title="Email">
                                                    <label className="full_width">Email</label>
                                                    <input type="text" className="form-control"
                                                         defaultValue={institution.Email!=undefined?institution.Email:""}   />
                                                </div>
                                                <div className="col-sm-3 padL-0" title="Categories">
                                                    <label className="full_width">Categories</label>
                                                    <input type="text" className="form-control"
                                                           defaultValue={institution.Categories!=undefined?institution.Categories:""}/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="full_width">City</label>
                                                    <input type="text" className="form-control"
                                                          defaultValue={institution.WorkCity!=undefined?institution.WorkCity:""}   />
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
                                                        <div className="block mt-5" >
                                                      
                                                                  {institution.SmartCountries.length!=0?institution.SmartCountries.Title:""}
                                                       
                                                           
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
                                                         defaultValue={institution.WorkAddress!=undefined?institution.WorkAddress:""}   />
                                                </div>
                                                <div className="col-sm-3 padL-0">
                                                    <label className="full_width">Institution Type</label>
    
                                                    <input type="text" className="form-control"
                                                          defaultValue={institution.InstitutionType!=undefined?institution.InstitutionType:""} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <form name="validURLFormforWebPage">
                                                        <label className="full_width">Website</label>
                                                        <input type="text" name="validUrl"
                                                               ng-pattern="/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,7}(:[0-9]{1,7})?(\/.*)?$/"
                                                               className="form-control form-group"
                                                             
                                                               defaultValue={institution.WebPage!=null?institution.WebPage.Description:""}
                                                               />
                                                        {/* <span className="StarRed"
                                                              ng-show="validURLFormforWebPage.validUrl.$error.pattern">
                                                            Not
                                                            a valid url!
                                                        </span> */}
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-sm-3">
                                                    <label className="full_width">Phone</label>
                                                    <input type="text" className="form-control"
                                                              defaultValue={institution.CellPhone!=null?institution.CellPhone:""} 
                                                           />
                                                </div>
                                                <div className="col-sm-3 padL-0">
                                                    <label className="full_width">Primary Contact</label>
                                                    <input type="text" className="form-control"
                                                            defaultValue={institution.HomePhone!=null?institution.HomePhone:""}  />
                                                </div>
                                               
                                                <div className="col-sm-3 padL-0">
                                                    <label className="full_width">LinkedIn <a className="hreflink" href={institution.LinkedIn!=null?institution.LinkedIn.Url:""}  target="_blank"><span className="pull-right"><i className="fa fa-linkedin"></i></span></a></label>
                                                    <input type="text" className="form-control"
                                                          defaultValue={institution.LinkedIn!=null?institution.LinkedIn.Description:""} />
                                                </div>
                                                
                                                <div className="col-sm-3 padL-0">
                                                    <label className="full_width">Facebook <a className="hreflink" href={institution.Facebook!=null?institution.Facebook.Url:""} target="_blank"><span className="pull-right"><i className="fa fa-facebook"></i></span></a></label>
                                                    <input type="text" className="form-control"
                                                           defaultValue={institution.Facebook!=null?institution.Facebook.Description:""} />
                                                </div>
                                               
                                             
                                            </div>
                                            <div className="row form-group">
                                              
                                                <div className="col-sm-3">
                                                    <label className="full_width">Instagram <a className="hreflink" href={institution.Instagram!=null?institution.Instagram.Url:""} target="_blank"><span className="pull-right"><i className="fa fa-instagram"></i></span></a></label>
                                                    <input type="text" className="form-control"
                                                           defaultValue={institution.Instagram!=null?institution.Instagram.Description:""}/>
                                                </div>
                                                
                                                <div className="col-sm-3 padL-0">
                                                    <label className="full_width">Twitter <a className="hreflink" href={institution.Twitter!=null?institution.Twitter.Url:""} target="_blank"><span className="pull-right"><i className="fa fa-twitter"></i></span></a></label>
                                                    <input type="text" className="form-control"
                                                             defaultValue={institution.Twitter!=null?institution.Twitter.Description:""}/>
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-sm-12">
                                                    <label className="full_width">Internal Notes</label>
                                                    <div id="localaboutdescription" defaultValue={institution.localaboutdescription!=undefined?institution.localaboutdescription:""} >
                                                    
                                                    <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
        //  onEditorStateChange={}
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
                                Created <span ng-bind="Item.Created | date:'dd/MM/yyyy'">{institution.Created!=null?Moment(institution.Created).format('DD/MM/YYYY'):""}</span> by
                                <span className="footerUsercolor">
                                    {/* {{Item.Author.Title}} */}
                                    {institution.Author.Title!=undefined?institution.Author.Title:""}
                                    </span>
                            </div>
                            <div className="text-left">
                                Last modified <span ng-bind="Item.Modified | date:'dd/MM/yyyy hh:mm'">{institution.Modified!=null?Moment(institution.Modified).format('DD/MM/YYYY'):""}</span> by <span className="footerUsercolor">
                                    {/* {{Item.Editor.Title}} */}
                                    {institution.Editor.Title!=undefined?institution.Editor.Title:""}
                                    </span>
                            </div>
                            <div className="text-left">
                                <a className="hreflink" ng-click="removeItem(institution.Id)">
                                    <img src="https://hhhhteams.sharepoint.com/sites/HHHH/_layouts/images/delete.gif"/> Delete this item
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 ItemInfo-right">
                            <div className="pull-right">
                                <span>
                                    <a className="ForAll hreflink" target="_blank"
                                       href={`https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/SitePages/Institution-Profile.aspx?contactId=${institution.Id}&name=${institution.Title}`}>
                                        <img className="mb-3 icon_siz19" style={{marginRight: "3px"}}
                                             ng-src="https://hhhhteams.sharepoint.com/sites/HHHH/_layouts/15/images/ichtm.gif?rev=23" />Go to Profile page
                                    </a>
                                </span>
                                <span>|</span>
                                <a ng-href={`https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/Lists/Institutions/EditForm.aspx?ID=${institution.Id}`}
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
                                <button type="button" className="btn btn-default" ng-click="setModalIsOpenToFalse()">Cancel</button>
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
     )} 
    </Modal>
    </>
    )
}