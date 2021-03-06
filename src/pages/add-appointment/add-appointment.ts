import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular/umd';
import { HistoryPage } from '../history/history';
import { Appointment } from '../../assets/models/appointment';

@IonicPage()
@Component({
  selector: 'page-add-appointment',
  templateUrl: 'add-appointment.html',
})
export class AddAppointmentPage {
  public professional_name:string;
  public day:number;
  public month:number;
  public year:number;
  public hour:number;
  public minute:number;
  public category:string;
  public location:string = null;

  private correct:boolean = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl : AlertController) {
    this.day = 1;
    this.month = 1;
    this.year = 2018;
    this.hour = 12;
    this.minute = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAppointmentPage');
  }
  
  dayChange(val: number){
    this.day = val;
  }
  monthChange(val: number){ 
    this.month = val;
  }
  yearChange(val: number){
    this.year = val;
  }

  hourChange(val: number){
    this.hour = val;
  }
  minuteChange(val: number){
    this.minute = val;
  }

  categoryChange(val: string){
    this.category = val;
  }

  salvar(){
    this.correct = true;
    if ((this.month == 4 || this.month == 6 || this.month == 9 || this.month === 11) && this.day == 31) {
      this.showAlert();
      this.correct = false;
    }
    if ((this.month == 2) && this.day>28)  {
      this.showAlert();
      this.correct = false;
    }
        
    if (this.correct){
      var newAppoitment = new Appointment(this.professional_name, this.category,this.day, this.month, this.year, this.hour, this.minute, this.location);
      this.navCtrl.push(HistoryPage);
    }
  }

  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Data inválida',
      buttons: ['OK']
    });
    alert.present();
  }

}

