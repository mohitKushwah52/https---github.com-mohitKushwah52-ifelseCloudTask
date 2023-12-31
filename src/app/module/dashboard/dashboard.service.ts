import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()

export class DashboardService {
    constructor(private http : HttpClient){}

    getTeamData(){
        return this.http.get(environment.appUrl.team);
    }
}