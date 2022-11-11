import * as React from 'react';
import styles from './Operations.module.scss';
import { IOperationsProps } from './IOperationsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as $ from 'jquery';
import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';




const [name_text, set_name_text] = React.useState('');


export default class Operations extends React.Component<IOperationsProps, {}> {
  public render(): React.ReactElement<IOperationsProps> {
   

    return (
      <div className={styles.Operations}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <p className={styles.description}>{escape(this.props.description)}</p>
            <div className={styles.itemField}>
              <div className={styles.fieldLabel}>Item ID:</div>
              <input type="text" id='itemId'></input>
            </div>
            <div className={styles.itemField}>
              <div className={styles.fieldLabel}>Full Name</div>
              <input type="text" id='fullName' value={name_text}></input>
            </div>
            <div className={styles.itemField}>
              <div className={styles.fieldLabel}>Age</div>
              <input type="text" id='age' ></input>
            </div>
            <div className={styles.itemField}>
              <div className={styles.fieldLabel}>All Items:</div>
              <div id="allItems"></div>
            </div>
            <div className={styles.buttonSection}>
              <div className={styles.button}>
                <span className={styles.label} onClick={this.createItem}>Create</span>
              </div>
              {/* <div className={styles.button}>
                <span className={styles.label} onClick={this.getItemById}>Read</span>
              </div> */}
              <div className={styles.button}>
                <span className={styles.label} onClick={this.getAllItems}>Read All</span>
              </div>
              {/* <div className={styles.button}>
                <span className={styles.label} onClick={this.updateItem}>Update</span>
              </div> */}
              <div className={styles.button}>
                <span className={styles.label} onClick={this.deleteItem}>Delete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
// Create Item
private createItem = (): void => {
  const body: string = JSON.stringify({
    'Title': name_text,
    'Email': ("Email")
  });
  this.props.context.spHttpClient.post(`https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email`,
    SPHttpClient.configurations.v1, {
    headers: {
      'Accept': 'application/json;odata=nometadata',
      'Content-type': 'application/json;odata=nometadata',
      'odata-version': ''
    },
    body: body
  })
    .then((response: SPHttpClientResponse) => {
      if (response.ok) {
        response.json().then((responseJSON) => {
          console.log(responseJSON);
          alert(`Item created successfully with ID: ${responseJSON.ID}`);
        });
      } else {
        response.json().then((responseJSON) => {
          console.log(responseJSON);
          alert(`Something went wrong! Check the error in the browser console.`);
        });
      }
    }).catch((error: any) => {
      console.log(error);
    });
}


// // Get Item by ID
// private getItemById = (): void => {
//   const id: number = document.getElementById('itemId')['value'];
//   if (id > 0) {
//     this.props.context.spHttpClient.get(this.props.context.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('EmployeeDetails')/items(${id})`,
//       SPHttpClient.configurations.v1,
//       {
//         headers: {
//           'Accept': 'application/json;odata=nometadata',
//           'odata-version': ''
//         }
//       })
//       .then((response: SPHttpClientResponse) => {
//         if (response.ok) {
//           response.json().then((responseJSON) => {
//             console.log(responseJSON);
//             document.getElementById('fullName')['value'] = responseJSON.Title;
//             document.getElementById('age')['value'] = responseJSON.Age;
//           });
//         } else {
//           response.json().then((responseJSON) => {
//             console.log(responseJSON);
//             alert(`Something went wrong! Check the error in the browser console.`);
//           });
//         }
//       }).catch((error: any) => {
//         console.log(error);
//       });
//   }
//   else {
//     alert(`Please enter a valid item id.`);
//   }
// }


// Get all items
private getAllItems = (): void => {
  this.props.context.spHttpClient.get(`https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber&$filter=(Email ne null)`,
    SPHttpClient.configurations.v1,
    {
      headers: {
        'Accept': 'application/json;odata=nometadata',
        'odata-version': ''
      }
    })
    .then((response: SPHttpClientResponse) => {
      if (response.ok) {
        response.json().then((responseJSON) => {
          var html = `<table><tr><th>ID</th><th>Full Name</th><th>Age</th></tr>`;
          responseJSON.value.map((item: { ID: any; Title: any; Age: any; }, index: any) => {
            html += `<tr><td>${item.ID}</td><td>${item.Title}</td><td>${item.Age}</td></li>`;
          });
          html += `</table>`;
          document.getElementById("allItems").innerHTML = html;
          console.log(responseJSON);
        });
      } else {
        response.json().then((responseJSON) => {
          console.log(responseJSON);
          alert(`Something went wrong! Check the error in the browser console.`);
        });
      }
    }).catch((error: any) => {
      console.log(error);
    });
}


// // Update Item
// private updateItem = (): void => {
//   const id: number = ('itemId');
//   const body: string = JSON.stringify({
//     'Title': ("fullName"),
//     'Age': ("age")
//   });
//   if (id > 0) {
//     this.props.context.spHttpClient.post(`${this.props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('EmployeeDetails')/items(${id})`,
//       SPHttpClient.configurations.v1,
//       {
//         headers: {
//           'Accept': 'application/json;odata=nometadata',
//           'Content-type': 'application/json;odata=nometadata',
//           'odata-version': '',
//           'IF-MATCH': '*',
//           'X-HTTP-Method': 'MERGE'
//         },
//         body: body
//       })
//       .then((response: SPHttpClientResponse) => {
//         if (response.ok) {
//           alert(`Item with ID: ${id} updated successfully!`);
//         } else {
//           response.json().then((responseJSON) => {
//             console.log(responseJSON);
//             alert(`Something went wrong! Check the error in the browser console.`);
//           });
//         }
//       }).catch((error: any) => {
//         console.log(error);
//       });
//   }
//   else {
//     alert(`Please enter a valid item id.`);
//   }
// }


// Delete Item
private deleteItem = (): void => {
  const id: number = parseInt(('itemId'));
  if (id > 0) {
    this.props.context.spHttpClient.post(`https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id`,
      SPHttpClient.configurations.v1,
      {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'Content-type': 'application/json;odata=verbose',
          'odata-version': '',
          'IF-MATCH': '*',
          'X-HTTP-Method': 'DELETE'
        }
      })
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
          alert(`Item ID: ${id} deleted successfully!`);
        }
        else {
          alert(`Something went wrong!`);
          console.log(response.json());
        }
      });
  }
  else {
    alert(`Please enter a valid item id.`);
  }
}
}

  



