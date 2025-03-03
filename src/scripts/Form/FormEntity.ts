import { TimeFrom } from "./TimeFrom";
import { TimeTo } from "./TimeTo";


export class FormEntity{
    public workDate : Date;
    public timeFrom : TimeFrom
    public timeTo: TimeTo
    public commit : string;
    public description : string;
}