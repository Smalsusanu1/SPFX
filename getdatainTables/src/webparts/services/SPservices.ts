import { WebPartContext } from "@microsoft/sp-webpart-base";
import {SPHttpClient, SPHttpClientResponse} from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";
import { reject } from "lodash";
export class SPOperations{
    // GetAll List
    public GetAllList(context:WebPartContext):Promise<IDropdownOption[]>{
        let restApiUrl:string="https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Email";
        var listTitles: IDropdownOption[]=[];
        return new Promise<IDropdownOption[]>(async(resolve,reject)=>{
            context.spHttpClient.get(restApiUrl,SPHttpClient.configurations.v1).then((response:SPHttpClientResponse)=>{
                response.json().then((results:any)=>{
                      console.log(results);
                      results.value.map((result:any)=>{
                          listTitles.push({key:result.Email,text:result.Email});
                      });

                });
                resolve(listTitles);
            },(error:any):void=>{
                reject("error occured"+error);
            });
          
        })
       
    }
}