import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public day:number;
  public month:number;
  public year:number;
  public hour:number;
  public minute:number;
  public category:string;
  public location:string;
  public medic:string;
  public isVisible:boolean = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    this.day = navParams.get('day');
    if (this.day!=null){
      this.month = navParams.get('month');
      this.year = navParams.get('year');
      this.hour = navParams.get('hour');
      this.minute = navParams.get('minute');
      this.category = navParams.get('category');
      this.location = navParams.get('location');
      this.medic = navParams.get('medic');
      this.isVisible = false;
    }
    
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
