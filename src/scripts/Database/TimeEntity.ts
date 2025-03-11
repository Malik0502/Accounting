export class TimeEntity{
    Id : number;
    WorkId : number;
    From : string
    To : string

    constructor(from : string, to : string){
        this.From = from;
        this.To = to;
    }
}