import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreated = false;
  serverCreationStatus = "No server was created!";
  ServerName = "TestServer";
  Username="ayman";
  UsernameCreationStatus ="No Name was added";
  allowNewUserName=false;
  servers=['Testserver','Testserver2']
  ShowDispaly= false;
  log=[];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);

   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.ServerName);
    this.serverCreationStatus="server was created! with the Name "+ this.ServerName;
  }
  onUdateServerName(event:Event){
    this.ServerName = (event.target as HTMLInputElement).value;  
  }
  AddUserName(){
    this.UsernameCreationStatus="Username : "+ this.Username + " was added "
  }
  UpdateUsername(event:Event){
    this.Username = (event.target as HTMLInputElement).value;  
  } 
  onToggleDisplay(){
    this.ShowDispaly =!this.ShowDispaly;
    this.log.push(this.log.length + 1);
  }



}
