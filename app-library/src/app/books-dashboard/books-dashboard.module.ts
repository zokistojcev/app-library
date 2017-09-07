import { NgModule } from "@angular/core";
import { BooksDashboardService } from "./books-dashboard.service";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { BooksDashboardComponent } from "./components/containers/books-dashboard.component";

@NgModule({
    imports:[
        HttpModule,
        CommonModule
  
    ],
    declarations:[
        BooksDashboardComponent
        
    ],
    exports:[
        BooksDashboardComponent
    ],

    providers:[
        BooksDashboardService
    ]
})
export class BooksDasboardModule{}