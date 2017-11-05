import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the AddparkingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-addparking',
  templateUrl: 'addparking.html',
})
export class AddparkingPage {
  parking = {};
  _http: Http;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public toastCtrl: ToastController) {
    this._http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddparkingPage');
  }

  
  logForm() {
    let results: string[];
    console.log(this.parking)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://127.0.0.1:5000/parking', JSON.stringify(this.parking), options ).map((res: Response) => res.json());

    this.http.post('http://127.0.0.1:5000/parking', JSON.stringify(this.parking), options).subscribe(Data => {
      // Read the result field from the JSON response.
      console.log(Data.statusText);

      let toast = this.toastCtrl.create({
        message: `Parking Created Successfull!`,
        duration: 2000
      });
      toast.present();


    });
  };


  }


