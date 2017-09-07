

import { Http,Response} from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Book } from "./models/book";


// test server
const API_BOOKS: string = "http://localhost:3000/books";

@Injectable()
export class BooksDashboardService {

    constructor(private http: Http){}

    getAllBooks() :Observable<Book[]>{
        return this
            .http.get(API_BOOKS)
            .map((response: Response)=>response.json());
    }

    getBookById(id: number){
        return this
            .http.get(`${API_BOOKS}/${id}`)
            .map((response: Response)=>response.json());
    }

    addBook(): Book{
        
    }
}
