import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  _http: Http;
  totalItems: number;
  items: Array<{title: string, note: string, icon: string}>;
  parkings: Array<{streetName1: string, streetName2: string, areaName: string}>;
  posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this._http = http;
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    let headers = new Headers({ 'Accept': 'application/json','Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers: headers });
    this.http.get('http://127.0.0.1:5000/parking',options).map(res => res.json()).subscribe(data => {
      this.posts = data._items;
      this.totalItems = data._meta.total
      console.log("this.totalItems:"+this.totalItems)
      this.parkings = [];
      for (let i = 0; i < 25; i++) {
        this.parkings.push({
          streetName1: this.posts[i].streetName1,
          streetName2: this.posts[i].streetName2,
          areaName:  this.posts[i].areaName
        });
      }


    });
    
   
   


  }

  itemTapped(event, parking) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   parking: parking
    // });
  }
}
