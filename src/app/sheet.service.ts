import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SheetService {
  

  constructor(private http:HttpClient) {

   }
   get(){
     this.http.get('/api/diaries').subscribe((val)=>{console.log(val)})
   }

   set(){
    const jo = {"id":"1","insumo":"hola","umedida":"kg","categoria":"hola"};
    
    const headers:HttpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    ; 

     this.http.post('/api/sheet/newrow',jo).subscribe({
      next: der => {
          console.log(der);
      },
      error: error => {
          
          console.error('agun puto error!', error);
      }
  })
   }
}
