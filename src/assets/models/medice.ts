export class Medicine {
    public name: string;
    public frequence: number;
    public start_day: number;
    public start_month: number;
    public start_year: number;
    public date: Date;
    public start_hour: number;
    public start_minute: number;
    public durantion: number; //in days, where 0 means everyday 7
    public quantity: string; //ex: 570 mg

    public end_day: number;
    public end_month: number;
    public end_year: number;
    public end_hour: number;
    public end_minute: number;

    constructor(_name: string, _frequence: number, _day_start:number, _month_start:number, _year_start: number, _hour_start:number, _minute_start:number, _durantion:number){
        this.name = _name;
        this.frequence = _frequence;
        this.start_day = _day_start;
        this.start_month =_month_start;
        this.start_day = _year_start;
        this.start_hour = _hour_start;
        this.start_minute = _minute_start;
        this.durantion = _durantion;

        this.date = new Date(this.start_year, this.start_month - 1, this.start_day);
        var end_date = new Date();
        end_date.setDate(this.date.getDate() + this.durantion);

        this.end_day = end_date.getDay();
        this.end_month = end_date.getMonth() + 1;
        this.end_year = end_date.getFullYear();

        Medicine.medicines_list.push(this);
    }

    public static medicines_list: Medicine[];
}