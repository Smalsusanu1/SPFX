
import { WebPartContext } from "@microsoft/sp-webpart-base";
import {SPHttpClient, SPHttpClientResponse} from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";
import { reject } from "lodash";
export class SPOperations{






GetListData() {
    var getdataHandler = this;
  
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', "https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber&$filter=(Email ne null)", true);
    getRequest.setRequestHeader("Accept", "application/json");
  
    getRequest.onreadystatechange = function () {
  
      if (getRequest.readyState === 4 && getRequest.status === 200) {
        var result = JSON.parse(getRequest.responseText);
  
        getdataHandler.setState({
          items: result.value
        });
      }
      else if (getRequest.readyState === 4 && getRequest.status !== 200) {
        console.log('Error Occurred !');
      }
    };
    getRequest.send();
  }
}



// id="dtBasicExample" 