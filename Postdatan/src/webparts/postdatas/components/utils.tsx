import { SPHttpClient, SPHttpClientResponse,ISPHttpClientOptions} from '@microsoft/sp-http';

export async function postdata(client:SPHttpClient,url:string, sppayload:any): Promise<any> {
    const spOpts:ISPHttpClientOptions ={
        body: sppayload
    };
    let resp: SPHttpClientResponse = await client.post(url, SPHttpClient.configurations.v1, spOpts);
    let json = resp.json();
    return json;
}