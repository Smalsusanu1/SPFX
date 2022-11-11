import { IPickerTerms } from "@pnp/spfx-controls-react";

export interface IDataIntoBsTableStates {
  email:string; 
  mobile:string;
  Address:string;
  ManagerApproval:string;
  weekDaysAvailability:boolean;
  empPeoplePicker:any[];
  Courses:IPickerTerms;
  multiCourses:IPickerTerms;
  hideDialog:boolean;
  defaultEmp:string[];

}
