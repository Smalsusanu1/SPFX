  import * as React from 'react';
import styles from './DataIntoBsTable.module.scss';
import { IDataIntoBsTableProps } from './IDataIntoBsTableProps';
import BootstrapTable from 'react-bootstrap-table-next';   
import { IDataIntoBsTableStates } from './IDataIntoBsTableStates'; 
import { SPComponentLoader } from '@microsoft/sp-loader';
import { SPOperations } from '../../services/SPservices';
import {Label,TextField,ChoiceGroup,Checkbox, IChoiceGroupOption,Button,Dialog,DialogFooter, DialogType} from '@fluentui/react';
import { PeoplePicker, PrincipalType } from '@pnp/spfx-controls-react/lib/PeoplePicker';
import {TaxonomyPicker,IPickerTerms} from '@pnp/spfx-controls-react/lib/TaxonomyPicker';
// import { values } from 'office-ui-fabric-react';
import {sp, Term} from "@pnp/sp/presets/all";
import { __metadata } from 'tslib';
import { PrimaryButton } from 'office-ui-fabric-react';
const dialogContent={type:DialogType.normal,Title:"Message",subText:"Your Request have been submitted successfully.",closeButtonArialLabel:"close"};

export default class DataIntoBsTable extends React.Component<IDataIntoBsTableProps, IDataIntoBsTableStates> {    
    constructor(props:IDataIntoBsTableProps){
      super(props);
      this.getEmail=this.getEmail.bind(this);
      this.getMobile=this.getMobile.bind(this);
      this.getAddress=this.getAddress.bind(this);
      this.getManageApproval=this.getManageApproval.bind(this);
      this.getweekDaysAvailability=this.getweekDaysAvailability.bind(this);
      this.getCourse=this.getCourse.bind(this);
      this.getEmployee=this.getEmployee.bind(this);
      this.getMultipleCourses=this.getMultipleCourses.bind(this);
      this.submitData = this.submitData.bind(this);
      this.Cancel=this.Cancel.bind(this);
      this.state={email:"",mobile:"",Address:"",ManagerApproval: "",weekDaysAvailability:false,
      empPeoplePicker:[],
      Courses:[],
      multiCourses:[],
      hideDialog:true,
      defaultEmp:[],
    }
      
    }
  public trainingType: IChoiceGroupOption[]=[
      {key:"Yes",text:"Yes"},
      {key:"No",text:"No"}
    ];
// Read Value

public getEmail(ev,value:string){
this.setState({email:value});
}
public getMobile(ev,value:string){
  this.setState({mobile:value});
}
public getAddress(ev,value:string){
  this.setState({Address:value});
}
public getweekDaysAvailability(ev,value){
    this.setState({weekDaysAvailability:value})
}

public getManageApproval(ev,value:IChoiceGroupOption){
         this.setState({ManagerApproval:value.key});
}


public getEmployee(items:any[]){
   console.log(items);
   let ppl:any[]=[];
   let defaultvalue:string[]=[];
   items.map((item)=>{
     ppl.push(item.id);
     defaultvalue.push(item.secondaryText);
   });
   this.setState({empPeoplePicker:ppl});
   this.setState({defaultEmp:defaultvalue});
}

public getCourse(selectedItems:IPickerTerms){
     this.setState({Courses:selectedItems});
}

public getMultipleCourses(selectedItems:IPickerTerms){
   this.setState({multiCourses:selectedItems});
}

public toggleDialog=(ev)=>{
  this.setState(hideDialog:true)
}

public submitData(){
   let validation:boolean=true;
   if(this.state.email==""){
    validation=false;
    document.getElementById("validation_email").setAttribute("style","display:block !important");
   }

   if(this.state.mobile==""){
    validation=false;
    document.getElementById("validation_mobile").setAttribute("style","display:block !important");
   }
      
  
   if(this.state.weekDaysAvailability){
    validation=false;
    document.getElementById("validation_weekdays").setAttribute("style","display:block !important");
   }
   
  
   if(this.state.empPeoplePicker.length==0){
    validation=false;
    document.getElementById("validation_employee").setAttribute("style","display:block !important");
   }

   
   if(this.state.Courses.length==0){
    validation=false;
    document.getElementById("validation_course").setAttribute("style","display:block !important");
   }

   
   if(this.state.multiCourses.length==0){
    validation=false;
    document.getElementById("validation_multicourse").setAttribute("style","display:block !important");
   }

   if(validation){
       let multiCoursesVal:string="";

       this.state.multiCourses.map((course)=>{
        multiCoursesVal += `-1;#${course.name}|${course.key};#`;
       });
     sp.web.lists
          .getByTitle("SPFxTestList")
          .fields.getByTitle("MultipleCourses")
          .get()
          .then((field)=>{
            const fieldInternalName = field.InternalName;
            const data={
            Title:"Custom List Form",
            AvailabelonWeekDay: this.state.weekDaysAvailability,
            EmployeeNameId:{results:this.state.empPeoplePicker},
            Mobile:this.state.mobile,
            Address:this.state.Address,
            Email:this.state.email,
            ManagerApproval: this.state.ManagerApproval,
            Courses:{
              __metadata:{type:"SP.Taxonomy.TaxonomyfieldValue"},
              Label:this.state.Courses[0].name,
              TermGuid: this.state.Courses[0].key,
              wssId:-1,
            },
          };
          data[fieldInternalName]= multiCoursesVal;
          sp.web.lists
          .getByTitle("SPFxTestList")
          .items.add(data)
          .then(()=>{
            this.setState({hideDialog:false})
          });
          

   });
}
}

public Cancel(){
    this.setState({
  defaultEmp:[""],
  email:"",
  mobile:"",
  Address:"",
  ManagerApproval:"No",
  weekDaysAvailability:false,
  Courses:[],
  multiCourses:[],
    });
}

    public render(): React.ReactElement<IDataIntoBsTableProps> {   

       return(
        <div>
        <div><h1>Anubhav </h1></div>
        <div id='id_customform'>
          <div className='{style.grid}'>
            <div className='{style.gridRow}'>
            <div className='{style.smallCol}'>
            <Label>Employee Name<span className='style.validation'>*</span></Label>
            </div>
            <div className='{style.largeCol}'>
               <PeoplePicker
                  context={this.props.context}
                  placeholder="Enter Your Name"
                  ensureUser={true}
                  personSelectionLimit={3}
                  groupName={""}
                  showtooltip={false}
                  disabled={false}
                  showHiddenInUI={false}
                  resolveDelay={1000}
                  principalTypes={[PrincipalType.User]}
                  selectedItems ={this.getEmployee}
                  defaultSelectedUsers={this.state.defaultEmp}

               ></PeoplePicker>
              <div id='validation_employee' className='form-validation'><span>You can't leave this blank</span></div>
     
            </div>



            <div className='{style.smallCol}'>
            <Label>Email<span className='style.validation'>*</span></Label>
            </div>
            <div className='{style.largeCol}'>
               <TextField placeholder='Enter Your Email Here' onChange={this.getEmail} value={this.state.email}></TextField>
                <div id='validation_email' className='form-validation'><span>You can't leave this blank</span></div>
               </div>
          
               <div className='{style.smallCol}'>
            <Label>Mobile<span className='style.validation'>*</span></Label>
            </div>
            <div className='{style.largeCol}'>
               <TextField type='number' placeholder='Enter Your Mobile Number' onChange={this.getMobile} value={this.state.mobile}></TextField>
               <div id='validation_mobile' className='form-validation'><span>You can't leave this blank</span></div>
               </div>
              
            
               <div className='{style.smallCol}'>
            <Label>Address</Label>
            </div>
            <div className='{style.largeCol}'>
               <TextField multiline={true} onChange={this.getAddress} value={this.state.Address}></TextField>
               
               </div>
              

            
               <div className='{style.smallCol}'>
            <Label>Choose Your Course<span className='style.validation'>*</span></Label>
            </div>
            <div className='{style.largeCol}'>
               <TaxonomyPicker 
               termsetNameOrID='Skills'
               panelTitle='Select Term'
               label=''
               context={this.props.context}
               placeholder="Select Course"
               isTermSetSelectable={false}
               onChange={this.getCourse}
               initialValues={this.state.Courses}
               ></TaxonomyPicker>
                 <div id='validation_course' className='form-validation'><span>You can't leave this blank</span></div>
   
               </div>




               <div className='{style.smallCol}'>
            <Label>Choose Multiple Course<span className='style.validation'>*</span></Label>
            </div>
            <div className='{style.largeCol}'>
               <TaxonomyPicker 
               allowMultipleSelections={true}
               termsetNameOrID='Skills'
               panelTitle='Select Term'
               label=''
               context={this.props.context}
               placeholder="Select multiple Course"
               isTermSetSelectable={false}
               onChange={this.getMultipleCourses}
               
               initialValues={this.state.multiCourses}
               ></TaxonomyPicker>
                <div id='validation_multicourse' className='form-validation'><span>You can't leave this blank</span></div>
   
               </div>

          
               <div className='{style.smallCol}'>
            <Label>Do you have manager approval</Label>
            </div>
            <div className='{style.largeCol}'>
               <ChoiceGroup options={this.trainingType} onChange={this.getManageApproval} defaultSelectedKey={this.state.ManagerApproval}></ChoiceGroup>
               
               </div>


               <div className='{style.smallCol}'>
            <Label>Availabel On Weekdays</Label>
            </div>
            <div className='{style.largeCol}'>
               <Checkbox label='Yes' onChange={this.getweekDaysAvailability} checked={this.state.weekDaysAvailability}></Checkbox>
   
               </div>
               <Dialog dialogContentProps={dialogContent} hidden={this.state.hideDialog} onDismiss={this.toggleDialog}>
               <DialogFooter>
                <PrimaryButton text='close' onClick={this.toggleDialog} ></PrimaryButton>
               </DialogFooter>

               </Dialog>

               
               <div className='{style.largeCol}'>
               <Button  className='{style.button}' text='Submit' onClick={this.submitData}></Button>
               <Button className='{style.button}' text='Cancel' onClick={this.Cancel}></Button>
               </div>


            </div>
          </div>
        </div>
        </div>
       );    
       
    }    
  }  

