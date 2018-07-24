import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { Appointment } from '../../assets/models/appointment';
import { Medicine } from '../../assets/models/medice';
import { Exam } from '../../assets/models/exam';

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
  constructor(public navCtrl: NavController) {
    var today = new Date();

    if (Appointment.appointments_list.length>0){
      Appointment.appointments_list.forEach(item => {
        if (item.date < today){
          //add appoitment
        }
      });
    }

    if (Medicine.medicines_list.length>0){
      Medicine.medicines_list.forEach(item => {
        if (item.date<today){
          //add medicine
        }
      });
    }

    if (Exam.exams_list.length>0){
      Exam.exams_list.forEach(item => {
        if (item.date < today ){
          //add medicine
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
