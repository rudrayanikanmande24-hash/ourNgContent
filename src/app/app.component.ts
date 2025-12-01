import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipost } from './post-card/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showModal : boolean = false
  title = 'ourNgContent';
  postArr:Array<Ipost>=[]

  POST_URL:string=`https://jsonplaceholder.typicode.com/posts`

  constructor(
    private _httpClient : HttpClient
     
  ){

  }

  ngOnInit(): void {
    this._httpClient.get<Array<Ipost>>(this.POST_URL)
     .subscribe((res:Array<Ipost>)=>{
      console.log(res);
      this.postArr=res
     })
  }


  onEdit(id:number){
   console.log(id);
  }

  onPostRemove(){
    this.showModal=true
  }

  getShowFlag(flag:boolean){
   this.showModal=flag
  }

  getConfirmation(flag:boolean){
    if(flag){
      console.log('Make remove API call');
      
    }else{
      console.log('Dont make API call');
      
    }
  }
}


