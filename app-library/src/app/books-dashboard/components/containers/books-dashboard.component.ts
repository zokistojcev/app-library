import { Component, OnInit } from "@angular/core";
import { BooksDashboardService } from "../../books-dashboard.service";

@Component({
    selector: "books-dashboard",
    template:`<div>{{books?.length}}</div>`
})
export class BooksDashboardComponent implements OnInit{
    books:any;
    constructor(private booksDasboardService: BooksDashboardService){}

    ngOnInit(){
        this.booksDasboardService
            .getAllBooks()
            .subscribe((data: any)=>this.books=data);
    }


}