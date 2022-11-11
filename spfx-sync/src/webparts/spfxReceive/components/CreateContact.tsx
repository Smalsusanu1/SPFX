import * as React from 'react';
import './foundation.scss';
import * as $ from 'jquery';
import { FaAngleDown, FaAngleUp, FaPrint, FaFileExcel, FaPaintBrush, FaEdit, FaSearch } from 'react-icons/fa';
import { SPComponentLoader } from '@microsoft/sp-loader';
import Tab from './Tabs/Tab';
import Tabs from './Tabs/Tabs';
import './Tabs/styles.css';
import '../components/Tabs/styles.css';
import { Modal } from 'office-ui-fabric-react';
import CreateContact from './CreateContact';
import ImagesC  from './ImagesC/Images';
SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");


function ContactSearch() {

    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const [Title, setTitle] = React.useState()
    const [checked, setChecked] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(true);
   
    const [Editdata, setEditdata] = React.useState([])
    const [state, setState] = React.useState([]);
    const [ShowSelect, setShowSelect] = React.useState([]);
    const [array, setArray] = React.useState([])
    const [Institutions, setInstitutions] = React.useState([])
    const [search, setSearch]: [any, (search: any) => void] = React.useState();
    const [AllCategories, setAllCategories] = React.useState([])
    const [check, setCheck] = React.useState([]);
    const [show, setShow] = React.useState(true);
    
    const [maidataBackup, setmaidataBackup] = React.useState([])
    // const [isCheck, setIsCheck] = React.useState(false);
    // const [sorting, setSorting] = React.useState([]);
    // const [isCheckAll, setIsCheckAll] = React.useState(false);
    const [order, setOrder] = React.useState('ASC');

    React.useEffect(() => {
        function UserData() {
            var siteConfig: any = []
            var url = "https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/_api/web/lists/getbyid('6CE99A82-F577-4467-9CDA-613FADA2296F')//items?$select=WorkCity,Categories,Id,ol_Department,WorkCountry,WorkAddress,Email,FullName,Attachments,Item_x0020_Cover,Company,JobTitle,FirstName,Title,WebPage,WorkPhone,Institution/Title,Institution/Id,SmartTopics/Title,SmartTopics/Id,CellPhone,HomePhone,WorkZip,Comments,WorkFax,Created,Modified,Suffix,Primary/Id,Primary/Title,Author/Name,Author/Title,Editor/Name,Editor/Title&$expand=Author,Editor,Primary,Institution,SmartTopics&$top=4999&$orderby=Created desc";

            $.ajax({

                url: url,

                method: "GET",

                headers: {

                    "Accept": "application/json; odata=verbose"

                },

                success: function (data) {

                    siteConfig = data.d.results;
                    console.log(siteConfig);

                    setArray(siteConfig)
                    setmaidataBackup(siteConfig)
                },

                error: function (error) {


                }

            });

        }
        UserData();
        InstitutionData();
        loadSmartTaxonomyItems();

    }, [])

    function InstitutionData() {
        var institute: any = []
        var url = "https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/_api/web/lists/getbyid('A18A87D5-1A18-4004-A8EA-A6AE8A17A1B0')/items?$select=Id,ItemImage,WorkAddress,WorkCity,WorkCountry,Created,Email,Title,SmartCountries/Id,SmartCountries/Title,Modified,Author/Title,Editor/Title,Created,Modified&$top=4999&$expand=Author,Editor,SmartCountries&$filter=ItemType eq 'Institution'";

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
    function loadSmartTaxonomyItems() {
        var Filter: any = []
        var Categories: any = []
        var AllItems: any = []
        var newAllItems: any = []
        var url = "https://hhhhteams.sharepoint.com/sites/HHHH/GmBH/_api/web/lists/getbyid('136503cd-706e-4466-941f-eb2dcb39db7f')/items?$select=Id,Title,SmartFilters,ParentID,SortOrder,Selectable,TaxType&$top=4999&$orderBy=SortOrder";

        $.ajax({

            url: url,

            method: "GET",

            headers: {

                "Accept": "application/json; odata=verbose"

            },

            success: function (data) {

                Filter = data.d.results;
                console.log(Filter);
                //var TopicItem = { Title: 'Topics', TaxType: 'Topics', ParentID: 0, ParentId: 0, ID: 1, Id: 1, Selectable: true, childs = any[] }
                $.each(Filter, function (index: any, taxItem: any) {
                    if (taxItem.Title != 'Blank' && taxItem.Title != 'Database Status') {
                        var item: any = {};
                        item['value'] = taxItem.Title;
                        item['label'] = taxItem.Title;

                        if (taxItem.TaxType == 'Contact Categories' || taxItem.TaxType == 'Topics' || (taxItem.SmartFilters != undefined && taxItem.SmartFilters.results != undefined && taxItem.SmartFilters.results.indexOf('Contacts') > -1)) {
                            Categories.push(item)


                            if (taxItem.Title != 'Draft') {
                                AllItems.push(taxItem)
                            }



                        }
                    }
                })

                $.each(AllItems, function (index: any, taxItems: any) {
                    if (taxItems.Title.indexOf('F2') > -1) {
                        newAllItems.push(taxItems)
                    }
                })
                setAllCategories(newAllItems)
            },

            error: function (error) {


            }

        });
    }
    let handleChangei = (e: { target: { value: any; }; },item:any) => {
        setSearch(e.target.value.toLowerCase());

        
    if(item == 'WorkCity'){
        let searcjQery = e.target.value.toLowerCase(),
        displayedContacts = Institutions.filter((el) => {
          let searchValue = (el.Email.toLowerCase())
          return searchValue.indexOf(searcjQery) !== -1;
        })
        setArray(displayedContacts)
     }
     if(item == 'SmartCountriesIns'){
        let searcjQery = e.target.value.toLowerCase(),
        displayedContacts = Institutions.filter((el) => {
          let searchValue = (el.City.toLowerCase())
          return searchValue.indexOf(searcjQery) !== -1;
        })
        setArray(displayedContacts)
     }
     if(item == 'Title'){
        let searcjQery = e.target.value.toLowerCase(),
        displayedContacts = Institutions.filter((el) => {
          let searchValue = (el.Title.toLowerCase())
          return searchValue.indexOf(searcjQery) !== -1;
        })
        setArray(displayedContacts)
     }
       
      
    };
    let handleChange = (e: { target: { value: any; }; },item:any) => {
        setSearch(e.target.value.toLowerCase());

        if(item == 'FullName'){
       let searcjQery = e.target.value.toLowerCase(),
       displayedContacts = array.filter((el) => {
         let searchValue = (el.FullName.toLowerCase())
         return searchValue.indexOf(searcjQery) !== -1;
       })
       setArray(displayedContacts)
    }
    if(item == 'Email'){
        let searcjQery = e.target.value.toLowerCase(),
        displayedContacts = array.filter((el) => {
          let searchValue = (el.Email.toLowerCase())
          return searchValue.indexOf(searcjQery) !== -1;
        })
        setArray(displayedContacts)
     }
     if(item == 'City'){
        let searcjQery = e.target.value.toLowerCase(),
        displayedContacts = array.filter((el) => {
          let searchValue = (el.City.toLowerCase())
          return searchValue.indexOf(searcjQery) !== -1;
        })
        setArray(displayedContacts)
     }
     if(item == 'Title'){
        let searcjQery = e.target.value.toLowerCase(),
        displayedContacts = Institutions.filter((el) => {
          let searchValue = (el.Title.toLowerCase())
          return searchValue.indexOf(searcjQery) !== -1;
        })
        setArray(displayedContacts)
     }
       
      
    };

    const SingleLookDatatest = (e: any, item: any, value: any) => {
        var ShowSelectdSmartfilter: any = [];

        const { checked } = e.target;
        item.MainTitle = ""
        if (checked) {
            item.MainTitle += item.Title + '; ';

            state.push(item);

        }
        else {
            $.each(state, function (index: any, newite: any) {

                if (newite.Id == item.Id) {
                    state.splice(index, 1);
                }
            })
        }

        setState(state)

        if (state != undefined) {
            $.each(state, function (idex: any, smart: any) {
                var smartfilterItems: any = {};
                smartfilterItems.Title = smart.FilterType;
                if (IsExitSmartfilter(state, smartfilterItems)) {
                    if (smartfilterItems.count >= 3) {
                        smartfilterItems.selectTitle = ' : (' + smartfilterItems.count + ')';
                    } else smartfilterItems.selectTitle = ' : ' + smartfilterItems.MultipleTitle;
                }
                if (!issmartExists(ShowSelectdSmartfilter, smartfilterItems))
                    ShowSelectdSmartfilter.push(smartfilterItems);


            })

        }

        setShowSelect(ShowSelectdSmartfilter)
    }


    const IsExitSmartfilter = (array: any, Item: any) => {
        var isExists = false;
        var count = 0;
        Item.MultipleTitle = '';
        $.each(array, function (news: any, item: any) {
            if (item.TaxType != undefined) {
                isExists = true;
                count++;
                Item.MultipleTitle += item.Title + ', ';

            }
        });
        if (Item.MultipleTitle != "")
            Item.MultipleTitle = Item.MultipleTitle.substring(0, Item.MultipleTitle.length - 2);
        Item.count = count;
        return isExists;
    }
    var issmartExists = function (array: any, title: any) {
        var isExists = false;
        $.each(array, function (item: any) {
            if (item.Title == title.Title) {
                isExists = true;
                return false;
            }
        });
        return isExists;
    }


    const handleOpen = () => {

        setShow(current => !current)
    };

    const Clearitem = () => {
        setArray(maidataBackup)
        $('.selectss').val(null)
    }

    const sortBy = (col: any) => {

        if (order === 'ASC') {
            const sorted = [...array].sort((a, b) =>
                a.col > b.col ? 1 : -1
            );
            setArray(sorted)
            setOrder('DSC')

        }
        if (order === 'DSC') {
            const sorted = [...array].sort((a, b) =>
                a.col < b.col ? 1 : -1
            );
            setArray(sorted)
            setOrder('ASC')

        }

    }


    const FilterProjects = () => {
        if (state.length > 0) {
            var Contacts: any = [];
            $.each(state, function (index: any, contact: any) {
                $.each(maidataBackup, function (index: any, child: any) {
                    if (contact.TaxType != undefined) {
                        if (child.Categories == contact.MainTitle) {
                            Contacts.push(child)
                        }
                    }

                })

            })

            setArray(Contacts);
        }
    };
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }
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
    const handleTitle = (e: any) => {
        setTitle(e.target.value)

    };
    function AddItem() {
        var MyData = JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.ContactsListItem'
            },
            "FirstName": Title,
            
        })
        $.ajax({
            url: "https://hhhhteams.sharepoint.com/sites/HHHH/Gmbh/_api/contextinfo",
            type: "POST",
            headers: {
                "Accept": "application/json;odata=verbose"
            },
            success: function (contextData: any) {
                $.ajax({
                    url: "https://hhhhteams.sharepoint.com/sites/HHHH/Gmbh/_api/web/lists/getbyid('6CE99A82-F577-4467-9CDA-613FADA2296F')/items",
                    method: "POST",
                    contentType: "application/json;odata=verbose",
                    data: MyData,
                    async: false,
                    headers: {
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": contextData.d.GetContextWebInformation.FormDigestValue,
                        "IF-MATCH": "*",
                        "X-HTTP-Method": "POST"
                    },
                    success: function (data: any) {
                        alert('success');
                        setModalIsOpenToFalse();
                        window.location.reload();
                    },
                    error: function (jqXHR: any, textStatus: any, errorThrown: any) {
                        alert('error');
                    }
                });
            },
            error: function (jqXHR: any, textStatus: any, errorThrown: any) {
                alert('error');
            }
           
        });
        


    }
   
    const AllChecked = (e: any) => {
        $('.selects').prop('checked',true)
        const { checked } = e.target

        $.each(array, (index: any, item: any) => {
            if (item != undefined && checked) {

                check.push(item);
                $('.select').prop('checked',true)
            }

            else {
                $.each(check, function (index: any, newite: any) {
                    if (newite.Id == item.Id) {
                        check.splice(index, 17);
                        $('.selects').prop('checked',false)

                    }
                })
                setCheck([])
            }
        })

        setCheck(check)


        return canBeSubmitted();
    };
    const canBeSubmitted = () => {
        return checked ? setIsDisabled(true) : setIsDisabled(false);
    };
    const selectBox = (e: any, item: any, value: any) => {
        const { checked } = e.target;
        if (checked) {
            check.push(item);
            canBeSubmitted()

        }
        else {
            $.each(check, function (index: any, newite: any) {
                if (newite.Id == item.Id) {
                    check.splice(index, 1);
                }
            })
            setCheck([])
            canBeSubmitted()
        }
        setCheck(check)

    }

   const ClearSearch =(search:any)=>{
    setArray(maidataBackup)
   $("#searchCategory").val(null)
   $("#searchTitle").val(null)
   $("#searchJobTitle").val(null)
   $("#searchEmail").val(null)
   $("#searchCity").val(null)
   $('searchInstitution').val(null)
   $('searchCountry').val(null)
   }
   const Prints = () => {
    window.print();
}
    function Sendmail(itemType: any) {
        var emails = '';
        var ContactNothavingEmail: any = [];
        $.each(check, function (ited: any, item: any) {
            if (item.Email == undefined) {
                ContactNothavingEmail.push(item);
            }
            if (item.Email != undefined) {
                emails += item.Email + ";";
            }

        })
        var elmailsLength = emails.length;
        if (elmailsLength <= 2000) {
         
            if (ContactNothavingEmail.length > 0) {
                $('#ShowContactEmail').show();
            }
            else {

                window.location.href = 'mailto:' + emails;
            }
        }
        else {
            $('#ShowAllEmails').show();
        }
        if (check.length == 0) {
            var flag = confirm("No " + itemType + " selected.");
        }
    }
    return (
        <>
            {/* ----------------------------------------Edit popup------------------------------------------------------------------------------------------------ */}




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
                                                            value={Title}  onChange={handleTitle} />
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
                                        <ImagesC id={Editdata}/>

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
                                        <button type="button" className="btn btn-primary" ng-disabled="UserForm.$error.required" onClick={AddItem}>Save</button>
                                        <button type="button" className="btn btn-default" ng-click="cancelUpdate()">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            })}








            {/* --------------------------------------------------------End Popup-------------------------------------------------------------------------------------------------- */}
            <div className="col-sm-12 padL-0 PadR0">
                <h2 className="alignmentitle ng-binding">
                    Contacts Search
                    <span className="icontype display_hide padLR">
                    </span>

                </h2>
            </div>
            <section className="ContentSection">
                <div className="container">
                    <div className="col-sm-12 padL-0 PadR0 tab-content bg-f5f5 bdrbox togglebox">
                        <div className="panel-group" id="accordion">
                            <div className="togglebox">
                                <label className="toggler full_width mt-10 mb-10">
                                    <span className="col-sm-2 no-padding" onClick={() => handleOpen()}>
                                        <img className="hreflink wid22" title="Filter"
                                            src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH//SiteCollectionImages/ICONS/Shareweb/Filter-12-WF.png" />
                                        SmartSearch - Filters
                                    </span>
                                    <span className="col-sm-9 PadR0" ng-click="filtersh owHide()">
                                        {ShowSelect.map(function (anyj: any, obj: any) {
                                            return (
                                                <span>
                                                    Contact Categories: <span className="font-normal">{anyj.selectTitle}</span>
                                                    {obj != (ShowSelect.length - 1) &&
                                                        <span> | </span>
                                                    }
                                                </span>
                                            )
                                        })}
                                    </span>

                                    <span className="col-sm-1 PadR0">
                                        <span className="col-sm-3 padL-0" >
                                            {/* <span className="hreflink" ng-if="!smartfilter2.expanded">
                                                <img className="hreflink wid22" title="Tap to Expand"
                                                    src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH//SiteCollectionImages/ICONS/Shareweb/Add-New.png" />
                                            </span> */}
                                            {/* <span className="hreflink" ng-if="smartfilter2.expanded">
                                                <img className="hreflink wid10" title="Tap to Collapse"
                                                    src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH//SiteCollectionImages/ICONS/Shareweb/sub_icon.png" />
                                            </span> */}
                                        </span>
                                        <span className="col-sm-4 padL-0 PadR0">
                                            <img className="icon-sites-img  wid22 ml5" title="Share SmartFilters selection"

                                                src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH//SiteCollectionImages/ICONS/Shareweb/Icon_Share_Blue.png" />
                                        </span>
                                    </span>
                                </label>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    {show && (
                                        <>
                                            <div className="togglecontent" style={{ display: "block" }}>
                                                <div className="col-sm-12 mb-10">
                                                    <table width="100%" className="indicator_search">
                                                        <tr>
                                                            <td valign="top" style={{ width: "20%" }} >
                                                                <div className="pull-left" style={{ width: "48%" }} >
                                                                    <fieldset>
                                                                        <legend>
                                                                            <span>Events</span>
                                                                        </legend>
                                                                    </fieldset>
                                                                </div>
                                                                <div className="pull-left" style={{ width: "48%" }} >
                                                                    <fieldset>
                                                                        <legend>
                                                                            <span>Topics</span>
                                                                        </legend>
                                                                    </fieldset>
                                                                </div>

                                                                {AllCategories.map(function (category: any, index) {
                                                                    return (
                                                                        <div style={{ width: "96%" }}
                                                                            ng-if="child.ParentID == category.Id && child.FilterType!='Site Themes'"
                                                                        >
                                                                            <div>

                                                                                <input type="checkbox" id="checkboxData"className="selectss icon-input mt-0" ng-model="child.Selected"
                                                                                    onChange={(e) => SingleLookDatatest(e, category, index)} />
                                                                                {category.Title}
                                                                            </div>
                                                                            <div id="id_{{child.Id}}" className="subfilter" style={{ display: "none", width: "96%" }}>
                                                                                <div ng-repeat="child2 in child.childs">
                                                                                    <input type="checkbox" className="icon-input" ng-model="child2.Selected"
                                                                                        ng-click="getMoreFilterTask(child2)" />
                                                                                    <span className="filter-input">{category.Title}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </td>

                                                        </tr>
                                                    </table>
                                                </div>

                                            </div>
                                        </>
                                    )}
                                    <div className="col-md-12 padL-0 PadR0 valign-middle mt-10 mb-10">
                                        <div className="col-sm-6">
                                        </div>

                                        <div className="col-sm-3">

                                        </div>

                                        <div className="col-sm-3 padL-0">
                                            <button type="button"
                                                className="pull-right ml5 btn btn-grey" onClick={() => Clearitem()} >
                                                Clear Filters
                                            </button>
                                            <button type="button" className="btn btn-primary pull-right" onClick={FilterProjects}
                                            >
                                                Update Filters
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="clearfix"></div>
                </div>
            </section>
            <div className="taskuserr">
                <div className="Alltable">
                    <Tabs>
                        <Tab title='CONTACTS'>
                            <div className="tbl-headings">
                                <span className="leftsec">
                                    <label>
                                        Showing {array.length} of {array.length} Components
                                    </label>
                                    <label> | </label>
                                    <span className="g-search">
                                        <input type="text" className="searchbox_height full_width" id="globalSearch" placeholder="search all" />
                                        <span className="gsearch-btn" ><i><FaSearch /></i></span>
                                    </span>
                                </span>
                                <span className="toolbox mx-auto">
                                    <span className="pull-left mr-10">  <button type="button" className="btn btn-primary" disabled={isDisabled} onClick={() => Sendmail('array')}>
                                        Bulk Email</button>
                                    </span>
                                    <span>
                                        <CreateContact arra={array}/>
                                    </span>
                                    <span>
                                        <a onClick={Prints}>
                                            <i className="fa fa-print mr-5" aria-hidden="true" title="Print" ></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a data-ng-click="ClearFilters()"><i className="fa fa-paint-brush hreflink" aria-hidden="true" title="Clear All"></i></a>
                                    </span>
                                    <span>
                                    <a data-ng-click="ClearFilters()"><i className="fa fa-excel hreflink" aria-hidden="true" title="Clear All"></i></a>

                                    </span>
                                </span>
                            </div>
                            <div className="col-sm-12 pad0 smart">
                                <div className="section-event">
                                    <div className="container-new">
                                        <table className="table table-hover" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "7%" }}>
                                                        <div style={{ width: "6%" }} className="smart-relative">
                                                            <input ng-model="contactcompare" type="checkbox" className="mt-0" name="chkCompareContact"
                                                                onChange={(e) => AllChecked(e)} />
                                                            <label className="text ForAll ml-1">All</label>
                                                        </div></th>
                                                    <th style={{ width: "20%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>FullName</label></div>
                                                        <div style={{ width: "19%" }} className="smart-relative">
                                                            <input id="searchCategory" type="text" placeholder="FullName" className="full_width searchbox_height"
                                                                 onChange={(e)=>handleChange(e,'FullName')}  />
                                                                
                                                               <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchFullName')}>X</span>

                                                            <span className="sorticon">
                                                                <span className="up" onClick={() => sortBy('FullName')}>< FaAngleUp /></span>
                                                                <span className="down" onClick={() => sortBy('FullName')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th style={{ width: "10%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>Company</label></div>
                                                        <div style={{ width: "9%" }} className="smart-relative">
                                                            <input id="searchTitle" type="text" placeholder="Organisation" className="full_width searchbox_height"
                                                                ng-model="searchCompany" onChange={(e)=>handleChange(e,'Organisation')} />
                                                                  <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchFullName')}>X</span>

                                                            <span className="sorticon">
                                                                <span className="up" onClick={() => sortBy('Organisation')}>< FaAngleUp /></span>
                                                                <span className="down" onClick={() => sortBy('Organisation')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th style={{ width: "30%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>Job Title</label>
                                                        </div>
                                                        <div style={{ width: "29%" }} className="smart-relative">
                                                            <input type="search" id="searchJobTitle" placeholder="Job Title" className="full_width searchbox_height"  onChange={(e)=>handleChange(e,'Job Title')} />
                                                            <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchFullName')}>X</span>

                                                            <span className="sorticon">
                                                                <span className="up" onClick={() => sortBy('Job Title')}>< FaAngleUp /></span>
                                                                <span className="down" onClick={() => sortBy('Job Title')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th style={{ width: "20%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>Email</label>
                                                        </div>
                                                        <div style={{ width: "19%" }} className="smart-relative">
                                                            <input id="searchEmail" type="text" className="full_width searchbox_height" placeholder="Email"
                                                                ng-model="searchEmail" onChange={(e)=>handleChange(e,'Email')}/>
                                                                 <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchEmail')}>X</span>
                                                            <span className="sorticon">
                                                                <span className="up"  onClick={() => sortBy('Email')}>< FaAngleUp /></span>
                                                                <span className="down" onClick={() => sortBy('Email')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th style={{ width: "10%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>City</label>
                                                        </div>
                                                        <div style={{ width: "9%" }} className="smart-relative">
                                                            <input id="searchWorkCity" type="text" className="full_width searchbox_height" placeholder="City"
                                                                ng-keydown="removeTagOnBackspace($event)" onChange={(e)=>handleChange(e,'City')}/>
                                                                <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchCity')}>X</span>
                                                            <span className="sorticon">
                                                                <span className="up" onClick={() => sortBy('City')}>< FaAngleUp /></span>
                                                                <span className="down"onClick={() => sortBy('City')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th style={{ width: "3%" }}></th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {array.map(function (item, items) {
                                                 
                                              
                                                   
                                                    return (
                                                        <>

                                                            <tr>
                                                                <td className="pad0" colSpan={7}>
                                                                    <table className="table" style={{ width: "100%" }}>
                                                                        <tr className="bold">
                                                                            <td style={{ width: "7%" }} className="mt-0">
                                                                                <input  type="checkbox" className="selects mt-0" name="chkCompareContact"
                                                                                    onChange={(e) => selectBox(e, item, items)} />

                                                                            </td>
                                                                            <td style={{ width: "20%" }} className="colm-relative">
                                                                                <p>
                                                                                    {item.Item_x0020_Cover == undefined &&
                                                                                        <img style={{ width: "22px" }}
                                                                                            src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SiteCollectionImages/ICONS/32/icon_user.jpg" />
                                                                                    }
                                                                                    {item.Item_x0020_Cover != undefined &&
                                                                                        <img style={{ width: "22px" }}
                                                                                            src={item.Item_x0020_Cover.Url} />

                                                                                    }
                                                                                    <a className="ml-5"
                                                                                        ng-href={"https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SitePages/Contact-Profile.aspx?contactId={{item.Id}}&name=" + item.FullName}
                                                                                        target="_blank">{item.FullName}</a>

                                                                                    {/* {item.Childs.length > 0 &&
                                                                                    <span
                                                                                        style={{ cursor: "pointer" }} ng-click="toggleGroup(item);">
                                                                                        ({item.Childs.length})
                                                                                    </span>


                                                                                } */}


                                                                                </p>
                                                                            </td> 
                                                                            <td style={{ width: "10%" }} className="colm-relative">
                                                                                <a
                                                                                    ng-href="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SitePages/Institution-Profile.aspx?contactId={item.InstitutionId}}&&name={item.ContactInstitution}"
                                                                                    target="_blank">{item.ContactInstitution}</a>
                                                                            </td>
                                                                            <td style={{ width: "30%" }} className="colm-relative">
                                                                                {item.JobTitle}
                                                                            </td>
                                                                            <td style={{ width: "20%" }} className="colm-relative"> {item.Email}</td>
                                                                            <td style={{ width: "10%" }} className="colm-relative"> {item.WorkCity}</td>
                                                                            <td style={{ width: "3%" }} className="icontype display_hide">
                                                                                <a onClick={(e) => EditData(e, item.Id)}><FaEdit/></a>
                                                                            </td>

                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab title='INSTITUTIONS'>
                            <div className="tbl-headings">
                                <span className="leftsec">
                                    <label>
                                        Showing {Institutions.length} of {Institutions.length} Components
                                    </label>
                                    <label> | </label>
                                    <span className="g-search">
                                        <input type="text" className="searchbox_height full_width" id="globalSearch" placeholder="search all" />
                                        <span className="gsearch-btn" ><i><FaSearch /></i></span>
                                    </span>
                                </span>
                                <span className="toolbox mx-auto">

                                    <span className="pull-left mr-10">  <button type="button" className="btn btn-primary">
                                        Create Institution</button>
                                    </span>
                                    <span>
                                        <a ng-click="printResults('table-wrapper')">
                                            <i className="fa fa-print mr-5" aria-hidden="true" title="Print"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a data-ng-click="ClearFilters()"><i className="fa fa-paint-brush hreflink" aria-hidden="true" title="Clear All"></i></a>
                                    </span>
                                    <span>
                                        <a ng-click="exportToExcel(filtered)"><FaFileExcel /></a>

                                    </span>
                                </span>
                            </div>
                            <div className="col-sm-12 pad0 smart">
                                <div className="section-event">
                                    <div className="container-new">
                                        <table className="table table-hover" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "60%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>Institute</label></div>
                                                        <div style={{ width: "59%" }} className="smart-relative">
                                                            <input id="searchInstitution" type="text" placeholder="Search Institution" className="full_width searchbox_height"
                                                            onChange={(e)=>handleChangei(e,'Title')}/>
                                                                   <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchInstitution')}>X</span>
                                                            <span className="sorticon">
                                                                <span className="up" onClick={() => sortBy('Title')}>< FaAngleUp /></span>
                                                                <span className="down" onClick={() => sortBy('Title')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th style={{ width: "20%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>FullName</label></div>
                                                        <div style={{ width: "19%" }} className="smart-relative">
                                                            <input id="searchCategory" type="text" placeholder="City" className="full_width searchbox_height"
                                                            onChange={(e)=>handleChangei(e,'WorkCity')} />
                                                            <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchInstitution')}>X</span>

                                                            <span className="sorticon">
                                                                <span className="up" onClick={() => sortBy('WorkCity')}>< FaAngleUp /></span>
                                                                <span className="down" onClick={() => sortBy('WorkCity')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th style={{ width: "17%" }}>
                                                        <div className="displayLabel full_width">
                                                            <label>Company</label></div>
                                                        <div style={{ width: "16%" }} className="smart-relative">
                                                            <input id="searchCountry" type="text" placeholder="Country" className="full_width searchbox_height"
                                                                ng-model="searchCompany" onChange={(e)=>handleChangei(e,'SmartCountriesIns')}/>
                                                              <span className="searchclear" 
                                                                    onClick={() => ClearSearch('searchCountry')}>X</span>
                                                            <span className="sorticon">
                                                                <span className="up" onClick={() => sortBy('SmartCountriesIns')}>< FaAngleUp /></span>
                                                                <span className="down" onClick={() => sortBy('SmartCountriesIns')}>< FaAngleDown /></span>
                                                            </span>
                                                        </div>
                                                    </th>


                                                    <th style={{ width: "3%" }}></th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Institutions.map(function (item: any, items: any) {
                                                    // if (search == "" || item.FullName.toString().toLowerCase().includes(search.toString().toLowerCase())) {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <td className="pad0" colSpan={7}>
                                                                    <table className="table" style={{ width: "100%" }}>
                                                                        <tr className="bold">
                                                                            <td style={{ width: "60%" }}>
                                                                                {item.ItemImage != undefined &&
                                                                                    <img style={{ width: "22px" }}
                                                                                        src={item.ItemImage.Url} />
                                                                                }
                                                                                {item.ItemImage == undefined &&

                                                                                    <img style={{ width: "22px" }}
                                                                                        src="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SiteCollectionImages/ICONS/32/InstitutionPicture.jpg" />
                                                                                }
                                                                                <a className="ml-5"
                                                                                    href="https://hhhhteams.sharepoint.com/sites/HHHH/GmbH/SitePages/Institution-Profile.aspx?contactId={{item.Id}}&&name={{item.Title}}"
                                                                                    target="_blank">{item.Title}</a>
                                                                            </td>

                                                                            <td style={{ width: "20%" }} className="colm-relative">
                                                                                {item.WorkCity}
                                                                            </td>
                                                                            <td style={{ width: "17%" }} className="colm-relative">
                                                                                {item.SmartCountriesIns}
                                                                            </td>

                                                                            <td style={{ width: "3%" }} className="icontype display_hide">
                                                                                <a><EditInstitution id={item.Id} /></a>
                                                                            </td>

                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                    //}
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>


        </>
    )
}
export default ContactSearch;