import * as React from 'react';
import './foundation.scss';
import * as $ from 'jquery';
import { arraysEqual, Modal } from 'office-ui-fabric-react';
import * as bootstrap from 'bootstrap';
import ContactSearch from './ContactSearch';
import Tab from './Tabs/Tab';
import Tabs from './Tabs/Tabs';
import './Tabs/styles.css';

import ImagesC from './Images';

const CreateContact = ({ arra }: any) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const [modalIsOpen2, setModalIsOpen2] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [Editdata, setEditdata] = React.useState([])

    const setModalIsOpenToTrue2 = () => {
        setModalIsOpen2(true)
    }
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse2 = () => {
        setModalIsOpen2(false)
    }
    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }
    const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {

        setValue(event.target.value);

      };
const AddEditData =()=>{
    // var MyData = JSON.stringify({
    //     '__metadata': {
    //         'type': 'SP.Data.ContactsListItem'
    //     },
       
        
    // })
    // $.ajax({
    //     url: "https://hhhhteams.sharepoint.com/sites/HHHH/Gmbh/_api/contextinfo",
    //     type: "POST",
    //     headers: {
    //         "Accept": "application/json;odata=verbose"
    //     },
    //     success: function (contextData: any) {
    //         $.ajax({
    //             url: "https://hhhhteams.sharepoint.com/sites/HHHH/Gmbh/_api/web/lists/getbyid('6CE99A82-F577-4467-9CDA-613FADA2296F')/items",
    //             method: "POST",
    //             contentType: "application/json;odata=verbose",
    //             data: MyData,
    //             async: false,
    //             headers: {
    //                 "Accept": "application/json;odata=verbose",
    //                 "X-RequestDigest": contextData.d.GetContextWebInformation.FormDigestValue,
    //                 "IF-MATCH": "*",
    //                 "X-HTTP-Method": "POST"
    //             },
    //             success: function (data: any) {
    //                 alert('success');
    //                 setModalIsOpenToFalse();
    //                 window.location.reload();
    //             },
    //             error: function (jqXHR: any, textStatus: any, errorThrown: any) {
    //                 alert('error');
    //             }
    //         });
    //     },
    //     error: function (jqXHR: any, textStatus: any, errorThrown: any) {
    //         alert('error');
    //     }
       
    // });
  
  
   setModalIsOpenToTrue();
}
   

      const onSearch = (searchTerm: React.SetStateAction<string>) => {

        setValue(searchTerm);

        // our api to fetch the search result

        console.log("search ", searchTerm);

      };
      const EditData = (e: any, Id: any) => {
        var spRequest = new XMLHttpRequest();
        spRequest.open('GET', "https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/_api/web/lists/getbyid('6CE99A82-F577-4467-9CDA-613FADA2296F')/items?$filter=Id eq'" + Id + "'", true);
        spRequest.setRequestHeader("Accept", "application/json");

        spRequest.onreadystatechange = function () {

            if (spRequest.readyState === 4 && spRequest.status === 200) {
                var result = JSON.parse(spRequest.responseText);

                if (result.value.ItemType == "Group") {
                    result.value.UserType = "Group"

                }
                else {

                    setEditdata(result.value)

                }
            }

            else if (spRequest.readyState === 4 && spRequest.status !== 200) {
                console.log('Error Occurred !');
            }
            setModalIsOpenToTrue();

        };
        spRequest.send();
    }
    return (
        <>
        {Editdata.map(function (item: any, index: any) {
                return (
                    <Modal
                        isOpen={modalIsOpen}
                        onDismiss={setModalIsOpenToFalse}
                        isBlocking={false}>
                        <div className='modal-dialog modal-lg'>

                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h3 className='modal-title'>Add Item</h3>
                                    <button type="button" className='btn btn-danger pull-right' onClick={setModalIsOpenToFalse}>Cancel</button>
                                </div>
                            </div>

                            <div className='modal-body clearfix bg-f5f5'>

                                <Tabs>

                                    <Tab title='BASIC INFORMATION'>
                                        <form name="NewForm" noValidate role="form">
                                            <div className="col-sm-12">
                                                <fieldset className="fieldsett">
                                                    <legend className="activity">General</legend>

                                                    <div className="col-sm-2">
                                                        <label className="full_width">First Name</label>
                                                        <input type="text" className="form-control" ng-required="true"
                                                            value={item.FirstName} />
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <label className="full_width">Last Name</label>
                                                        <input type="text" className="form-control"
                                                            value={item.Title} />
                                                    </div>
                                                    <div className="col-sm-1">
                                                        <label className="full_width">Suffix</label>
                                                        <input type="text" className="form-control"
                                                            value={item.Suffix} />
                                                    </div>

                                                    <div className="col-sm-3">
                                                        <label className="full_width">Job Title</label>
                                                        <input type="text" className="form-control"
                                                            value={item.JobTitle} />
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <div ng-show="selectedInstituion.length==0">
                                                            <div className="col-sm-11 padL-0 PadR0 Doc-align">
                                                                <label>Organisation</label>
                                                                <input type="text"
                                                                    className="form-control ui-autocomplete-input"
                                                                    id="txtInstitutioncart" autoComplete="off" /><span role="status" aria-live="polite"
                                                                        className="ui-helper-hidden-accessible"></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-1 PadR0"
                                                            ng-hide="selectedInstituion.length>0">
                                                            <label className="full_width">&nbsp;</label>
                                                            <img src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/PublishingImages/Logos/EMMCopyTerm.png"
                                                                ng-click="ShowAllInstituion();" />
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col-sm-4 mb-10">
                                                        <div className="col-sm-11 padL-0 PadR0">
                                                            <label className="full_width">
                                                                Division
                                                                <select ng-show="Item.Institution.Title !='SDC'" className="form-control"
                                                                    ng-model="Item.Division.Id"
                                                                    ng-options="item.Id as item.Title for item in AllDivisions"
                                                                    ng-change="chnagedivision(Item.Division.Id)">
                                                                    <option value="">Select Division</option>
                                                                </select>
                                                            </label>
                                                        </div>
                                                    </div>





                                                </fieldset>
                                            </div>
                                            <div className="col-sm-12 mt-5">

                                                <fieldset className="fieldsett">
                                                    <legend className="activity">Social Media Accounts</legend>

                                                    <div className=" form-group clearfix">
                                                        <div className="col-sm-3 ">
                                                            <label className="full_width">LinkedIn <a className="hreflink" href="{{ContactLinkedIn}}" target="_blank"><span className="pull-right"><i className="fa fa-linkedin"></i></span></a></label>
                                                            <input type="text" className="form-control"
                                                                ng-model="ContactLinkedIn" />
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <label className="full_width">Twitter <a className="hreflink" ng-href="{{ContactTwitter}}" target="_blank"><span className="pull-right"><i className="fa fa-twitter"></i></span></a></label>
                                                            <input type="text" className="form-control"
                                                                ng-model="ContactTwitter" />
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <label className="full_width">Facebook <a className="hreflink" ng-href="{{ContactFacebook}}" target="_blank"><span className="pull-right"><i className="fa fa-facebook"></i></span></a></label>
                                                            <input type="text" className="form-control"
                                                                ng-model="ContactFacebook" />
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <label className="full_width">Instagram <a className="hreflink" ng-href="{{ContactInstagram}}" target="_blank"><span className="pull-right"><i className="fa fa-instagram"></i></span></a></label>
                                                            <input type="text" className="form-control"
                                                                ng-model="ContactInstagram" />
                                                        </div>
                                                    </div>



                                                </fieldset>
                                            </div>
                                            <div className="col-sm-12 mt-5">

                                                <fieldset className="fieldsett">
                                                    <legend className="activity">Contact</legend>
                                                    <div className="row form-group">
                                                        <div className="col-sm-6 bdrgt-clr">
                                                            <div className="col-sm-4">
                                                                <label className="full_width">Business Phone</label>
                                                                <input type="text" className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <label className="full_width">Mobile Number</label>
                                                                <input type="text" className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <label className="full_width">Home Phone</label>
                                                                <input type="text" className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-4 mt-5">
                                                                <label className="full_width">Skype</label>
                                                                <input type="text" className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-4 mt-5" title="Email">
                                                                <label className="full_width">Email</label>
                                                                <input type="text" className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-4 mt-5">
                                                                <label className="full_width">WebPage</label>
                                                                <input type="text" className="form-control"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="col-sm-6">
                                                                <label className="full_width">City</label>
                                                                <input type="text" className="form-control"
                                                                    value={item.WorkCity} />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <label className="full_width">Address</label>

                                                                <input type="text" className="form-control"
                                                                    ng-model="Item.WorkAddress" />
                                                            </div>
                                                            <div className="col-sm-6 mt-5">
                                                                <label className="full_width">ZIP Code</label>

                                                                <input type="text"
                                                                    className="form-control ng-pristine ng-valid ng-touched"
                                                                    ng-model={item.WorkZip} />

                                                            </div>
                                                            <div className="col-sm-6 mt-5">
                                                                <div className="col-sm-11 padL-0 PadR0">
                                                                    <label className="full_width">
                                                                        Country
                                                                    </label>
                                                                    <input style={{ width: "100%" }} type="text"
                                                                        className="form-control" id="txtSmartCountries" />

                                                                </div>
                                                                <div className="col-sm-1 PadR0">
                                                                    <label className="full_width">&nbsp;</label>
                                                                    <img src="{{MainSiteUrl}}/PublishingImages/Logos/EMMCopyTerm.png"
                                                                        ng-click="openSmartTaxonomy('Countries');" />
                                                                </div>
                                                                <div className="col-sm-11 padL-0 PadR0 inner-tabb">
                                                                    {/* <div className="block mt-5" ng-repeat="item in smartCountry">
                                                                        item.Title<a className="hreflink"
                                                                            ng-click="removeSmartCountry(item.Id,Item)">
                                                                            <img ng-src="/_layouts/images/delete.gif" />
                                                                        </a>
                                                                    </div> */}
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>




                                                </fieldset>
                                            </div>
                                            <div className="col-sm-12 mt-5">

                                                <fieldset className="fieldsett">
                                                    <legend className="activity">General Skills</legend>
                                                    <div className="form-group clearfix">
                                                        <div className="col-sm-4 ">
                                                            <div className="col-sm-11 padL-0 PadR0">
                                                                <label className="full_width">
                                                                    MainTopics
                                                                </label>
                                                                <input style={{ width: "100%" }} type="text"
                                                                    className="form-control" id="txtMainTopics" />

                                                            </div>
                                                            <div className="col-sm-1 no-padding">
                                                                <label className="full_width">&nbsp;</label>
                                                                <img src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/PublishingImages/Logos/EMMCopyTerm.png"
                                                                    ng-click="openSmartTaxonomy('Topics');" />
                                                            </div>
                                                            <div className="col-sm-11 padL-0 PadR0 inner-tabb">
                                                                {/* <div className="block mt-5" ng-repeat="item in smartTopics">
                                                                    item.Title<a className="hreflink"
                                                                        ng-click="removeSmartTopic(item.Id,Item)">
                                                                        <img ng-src="/_layouts/images/delete.gif" />
                                                                    </a>
                                                                </div> */}
                                                            </div>

                                                        </div>
                                                        <div className="col-sm-4 ">
                                                            <div className="col-sm-11 padL-0 PadR0">
                                                                <label className="full_width">
                                                                    Main Activities
                                                                </label>
                                                                <input style={{ width: "100%" }} type="text"
                                                                    className="form-control" id="txtContactMainActivity" />

                                                            </div>
                                                            <div className="col-sm-1 no-padding">
                                                                <label className="full_width">&nbsp;</label>
                                                                <img src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/PublishingImages/Logos/EMMCopyTerm.png"
                                                                    ng-click="openSmartTaxonomy('Activities');" />
                                                            </div>
                                                            <div className="col-sm-11 padL-0 PadR0 inner-tabb">
                                                                {/* <div className="block mt-5"
                                                                    ng-repeat="item in smartActivity">
                                                                    "item.Title"<a className="hreflink"
                                                                        ng-click="removeSmartActivity(item.Id,Item)">
                                                                        <img ng-src="/_layouts/images/delete.gif" />
                                                                    </a>
                                                                </div> */}
                                                            </div>

                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div ng-show="selectedPrimary.length==0">
                                                                <div className="col-sm-11 padL-0 PadR0 Doc-align">
                                                                    <label>Primary Contact</label>
                                                                    <input type="text"
                                                                        className="form-control ui-autocomplete-input"
                                                                        id="txtContactcart" autoComplete="off" /><span role="status" aria-live="polite"
                                                                            className="ui-helper-hidden-accessible"></span>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-1 PadR0"
                                                                ng-hide="selectedPrimary.length>0">
                                                                <label className="full_width">&nbsp;</label>
                                                                <img ng-src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/PublishingImages/Logos/EMMCopyTerm.png"
                                                                    ng-click="ShowAllcontact();" />
                                                            </div>
                                                            <div className="col-sm-11 padL-0 PadR0">
                                                                <label className="full_width">&nbsp;</label>
                                                                {/* <div className="col-sm-11 block  mb-20"
                                                                    title="{{ComponentTitle.STRING}}"
                                                                    ng-repeat="item in selectedPrimary track by $index">
                                                                    <a className="hreflink" target="_blank"
                                                                        ng-href="{{baseurl}}/SitePages/Contact-Profile.aspx?contactId={{item.Id}}">item.Title</a>
                                                                    <a className="hreflink"
                                                                        ng-click="removeSmartContact(item.Id)">
                                                                        <img ng-src="/_layouts/images/delete.gif" />
                                                                    </a>
                                                                </div> */}
                                                                <div className="col-md-1  no-padding"
                                                                    ng-show="selectedPrimary.length>0">
                                                                    <img src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/PublishingImages/Logos/EMMCopyTerm.png"
                                                                        ng-click="ShowAllcontact();" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="col-sm-12 mb-5">

                                                <div className="form-group clearfix">
                                                    <div className="col-sm-4">
                                                        <div className="col-sm-12 padL-0">
                                                            <label className="full_width">Notes</label>
                                                            <textarea ng-model="Item.Comments"></textarea>
                                                        </div>

                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="col-ms-12">
                                                            <div className="row">

                                                                <div className="col-sm-4 PadR0"

                                                                    ng-show="category.ParentID==0"
                                                                    ng-repeat="category in AllCategories">
                                                                    <label data-toggle="popover"
                                                                        data-trigger="hover"
                                                                        data-content="{{category.Description}}">
                                                                        category.Title
                                                                        <img
                                                                            src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SiteCollectionImages/ICONS/infoIcon.png" />
                                                                    </label>

                                                                    {/* {AllCategories.map(function (index: any, items: any) {
                                                                        return (
                                                                            <>


                                                                                <div>
                                                                                    <div>
                                                                                        <div>
                                                                                            <span className="plus-icon"
                                                                                                ng-show="child.childs.length>0 && !child.expanded"
                                                                                                style={{ cursor: "pointer" }}
                                                                                                ng-click="loadMoreFilters(child);">
                                                                                                <img src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SiteCollectionImages/ICONS/32/right-list-icon.png" />
                                                                                            </span>
                                                                                            <span className="plus-icon"
                                                                                                style={{ cursor: "pointer" }}
                                                                                                ng-click="loadMoreFilters(child);">
                                                                                                <img src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SiteCollectionImages/ICONS/32/list-icon.png" />
                                                                                            </span>
                                                                                            <input ng-show="child.FilterType=='Status'"
                                                                                                className="form-check-input"
                                                                                                name="radioStatus" type="radio"
                                                                                                value="{{child.Title}}"
                                                                                                ng-model="Status"
                                                                                                ng-click="editStatus(child.Title)" />
                                                                                            <span ng-show="child.FilterType=='Status'"
                                                                                            >
                                                                                                {item.Title}
                                                                                            </span>
                                                                                            <input ng-show="child.FilterType!='Status'"
                                                                                                ng-checked="Item.Categories.indexOf('{{child.Title}}')>-1"
                                                                                                type="checkbox"
                                                                                                ng-click="editCategories(child.Title, undefined, child.Id)" />
                                                                                            <span ng-show="child.FilterType!='Status'"
                                                                                                data-toggle="popover"
                                                                                                data-trigger="hover"
                                                                                                data-content="{{child.Description}}">
                                                                                                {item.Title}
                                                                                            </span>
                                                                                        </div>
                                                                                        <div ng-show="child.expanded"
                                                                                            className="subfilter">
                                                                                            <div ng-repeat="child2 in child.childs">
                                                                                                <input ng-show="child.FilterType=='Status'"
                                                                                                    className="form-check-input"
                                                                                                    name="radioStatus1"
                                                                                                    type="radio"
                                                                                                    value="{{child2.Title}}"
                                                                                                    ng-model="Status"
                                                                                                    ng-click="editStatus(child2.Title)" />

                                                                                                <input ng-show="child.FilterType!='Status'"
                                                                                                    ng-checked="Item.Categories.indexOf('{{child2.Title}}')>-1"
                                                                                                    type="checkbox"
                                                                                                    ng-click="editCategories(child2.Title,undefined, child.Id)" />
                                                                                                <span data-toggle="popover"
                                                                                                    data-trigger="hover"
                                                                                                    data-content="{{child2.Description}}">
                                                                                                   
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        )
                                                                        })} */}
                                                                    
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </form>
                                    </Tab>

                                    {/* ------------------------Tab for image Section------------------------------------------------------------------------------------------- */}

                                    <Tab title='IMAGE INFORMATION'>
                                        <ImagesC id={EditData}/>

                                    </Tab>

                                </Tabs>





                                <div className="modal-footer">
                                    <div className="col-sm-6 text-left pad0">
                                        <div>Created <span>11/05/2022</span> by <span className="footerUsercolor">Amit Kumar</span></div>
                                        <div>Last modified <span>22/08/2022</span> by <span className="footerUsercolor">Harshit Chauhan</span></div>
                                        <div>
                                            <a style={{ cursor: "pointer" }} ng-click="deleteTaskUser(Item.Id);"><img src="/_layouts/images/delete.gif" /><span ng-if="Item.UserGroup.Id!=undefined"> Delete this User</span><span ng-if="Item.UserGroup.Id==undefined"> Delete this Group</span></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        {/* <a target="_blank" href={"https://hhhhteams.sharepoint.com/sites/HHHH/SP/Lists/Task%20Users/EditForm.aspx?ID=" + items.Id}>Open out-of-the-box form</a> */}
                                        <button type="button" className="btn btn-primary" ng-disabled="UserForm.$error.required" ng-click="UpdateTaskUser(Item)">Save</button>
                                        <button type="button" className="btn btn-default" ng-click="cancelUpdate()">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            })}
            <button type="button" className='btn btn-primary' id="Create" onClick={setModalIsOpenToTrue2}>Create Contact</button>
            <Modal
                isOpen={modalIsOpen2}
                onDismiss={setModalIsOpenToFalse2}
                isBlocking={false}>
                <div className='modal-dialog'>

                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 className='modal-title'>Create Contact</h3>
                            <button type="button" className='close'  onClick={setModalIsOpenToFalse2}> &times;</button>
                        </div>
                    

                    <div className='modal-body clearfix bg-f5f5'>
                        <div className="col-sm-12">
                            <div className="form-group mt-10">
                                <input type='text'className="form-control" placeholder="Enter Contact Name" onChange={onChange} onClick={()=>onSearch} value={value}></input>
                                <ul className="ui-menu ui-widget ui-widget-content ui-corner-all">
                                {arra

                                    .filter((item: any) => {

                                        const searchTerm = value.toLowerCase();
                                        const fullName = item.FullName != null ? item.FullName.toLowerCase() : " ";
                                        return (
                                            searchTerm &&
                                            fullName.startsWith(searchTerm) &&
                                            fullName !== searchTerm
                                            
                                        );

                                    })

                                    .slice(0, 10)
                                   
                                            .map((item: any) => (

                                                <li onClick={() => onSearch(item.FullName)} className="ui-menu-item" key={item.FullName}>
                                                    <a className='ui-corner-all' onClick={(e)=>EditData(e, item.Id)}>{item.FullName} </a>
                                                </li>

                                            ))}
                                 </ul>   
                            </div>
                        </div>
                       
                    </div>
                    <div className="modal-footer">

                        <button type="button" className="btn btn-primary mt-10" ng-disabled="createContactForm.$error.required"
                            onClick={(e)=>AddEditData()}>
                            Save
                        </button>
                        <button type="button" className="btn btn-default mt-10" onClick={setModalIsOpenToFalse2}>Cancel</button>

                    </div>
                    </div>
                </div>


            </Modal>
        </>
    )
}
export default CreateContact;