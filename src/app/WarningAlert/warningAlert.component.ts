import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'app-warningAlert',
    template:`
    <p> This is a warning, you are in danger !<p>
    `,
    styles:[
        `
        p {
            padding:20px;
            background-color: mistyrose;
            color:red;
            border: 1px solid red;
        }
        `
    ]
})
export class WarningAlertComponent{

}