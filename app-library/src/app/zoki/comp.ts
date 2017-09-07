import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map"

const f: string = "http://localhost:47074/api/zoki";
const mm: string = " http://localhost:3000/books";
@Component({
    
    template:`<p>{{response?.length}}</p>`,
    selector: 'zoki'
    
})
export class comp implements OnInit{
    response: any;
    constructor(private http: Http){}

    ngOnInit(){
        this.http.get(mm).map((m: Response)=>m.json()).subscribe(x=>this.response=x);
        // this.http.get(`${f}/11`).map((m: Response)=>m.text()).subscribe(x=>this.response=x);
    }
}