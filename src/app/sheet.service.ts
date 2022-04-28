import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SheetService {
  public url = 'https://sheetdbv9express.herokuapp.com'

  constructor(private http:HttpClient) {

   }
   get(){
     this.http.get(`${this.url}/api/diaries`).subscribe((val)=>{console.log(val)})
   }
   set(){
     this.http.post(`${this.url}/api/setsheet`,{"id":1,"insumo":"algun"}).subscribe({
      next: data => {
          console.log(data);
      },
      error: error => {
          
          console.error('There was an error!', error);
      }
  })
   }
}
