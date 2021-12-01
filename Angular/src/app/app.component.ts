import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
 list:any[]=[]
  data = 10
  example = ''
  da = 'x'
  person:{username:string,password:string}={username:'',password:''}
  addTask(item: string){
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list)
  }
  removeTask(id: number){
   this.list = this.list.filter(item => item.id !== id);
  }
  updatedata(item:string)
  {
    console.warn(item)
    this.da = item
  }
  loginuser(user:any)
  {
    console.warn(user)
  }
}
