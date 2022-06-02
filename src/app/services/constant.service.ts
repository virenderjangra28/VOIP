import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  master_service_url : any;
  
  constructor(
    private http : HttpClient,
  ) { 
    this.master_service_url = "https://skinfotechies.in/demo/voip/api";
  }


//============================== Common fetchData Api ===============================
  fetchDataApi(url : string, params : any, headers = new Headers({ 'Content-Type' : 'application/json'}) ){
          var options = {
          headers : new HttpHeaders({ 'Content-Type' : 'application/json'}),
        };
        if(params == ''){
          params = '';
        }

        return this.http.post(url , params, options);
}

// ====================== API Section Start ======================================

getNewAdminRegistrationServiceUrl(){
  return this.master_service_url + "/admin-registration.php"
}


}
