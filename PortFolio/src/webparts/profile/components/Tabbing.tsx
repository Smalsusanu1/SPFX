import * as React from 'react';
import Tab from './Tabs/Tab';
import Tabs from './Tabs/Tabs';
import './Tabs/styles.css';


export default function Tabbing(){
    return(
        <div>
            <Tabs>
                <Tab title='Anubhav'>
                Anubhav
                </Tab>
                <Tab title='santosh'>
                santosh
                </Tab>
            </Tabs>
        </div>
    )
}