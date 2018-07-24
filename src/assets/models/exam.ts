import { InstanceProperty } from "@ionic-native/core";

export class Exam{
    public desciption: string;
    public day: number;
    public month: number;
    public year: number;
    public date: Date;
    public results: string;

    constructor(_description:string, _day:number, _month:number, _year:number){
        this.desciption = this.desciption;
        this.day = _day;
        this.month = _month;
        this.year = _year;

        this.date = new Date(this.year, this.month - 1, this.day);
        Exam.exams_list.push(this);
    }

    public setResults (_results:string){
        this.results = _results;
    }
    

    public static exams_list: Exam[];
}