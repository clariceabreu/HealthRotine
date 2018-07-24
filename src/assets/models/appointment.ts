export class Appointment{
    public professional_name:string;
    public category:string;
    public day:number;
    public month:number;
    public year:number;
    public date: Date;
    public hour:number;
    public minute:number;
    public location:string;

    constructor(_professional_name:string, _category:string, _day:number, _month:number, _year:number, _hour:number, _minute:number, _location:string){
       this.professional_name = _professional_name;
       this.category =  _category;
       this.day = _day;
       this.month = _month;
       this.year = _year;
       this.minute = _minute;
       this.location = _location;

       this.date = new Date(this.year, this.month - 1, this.day);
       Appointment.appointments_list.push(this);
    }

    public static appointments_list: Appointment[];
}