import { FormEntity } from "./FormEntity";
import { TimeFrom } from "./TimeFrom";
import { TimeTo } from "./TimeTo";

export class FormHandler{
    
    public submitForm() : FormEntity{
        let entity : FormEntity = new FormEntity();

        entity.workDate = this.formatDate(new Date((document.getElementById('inputDate') as HTMLInputElement).value));        
        let timeFromValue = (document.getElementById('inputFrom') as HTMLInputElement).value;
        let timeFromToValue = (document.getElementById('inputTo') as HTMLInputElement).value;
        entity.commit = (document.getElementById('inputCommit') as HTMLInputElement).value;
        entity.description = (document.getElementById('inputDescription') as HTMLInputElement).value;

        console.log(entity.workDate);

        this.timeInputToObject(timeFromValue, timeFromToValue, entity);

        return entity;
    }

    private timeInputToObject(timeFromValue : string, timeFromToValue : string, entity : FormEntity) : void{
        const[hoursFrom, minutesFrom] = timeFromValue.split(':').map(Number);
        const[hoursTo, minutesTo] = timeFromToValue.split(':').map(Number);

        entity.timeFrom = new TimeFrom(hoursFrom, minutesFrom)
        entity.timeTo = new TimeTo(hoursTo, minutesTo)
    }

    private formatDate(date : Date) : Date{
        const dateFormat = new Date('04-03-2025');
        const locale = 'de-DE';

        const options: Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }

        const formattter = new Intl.DateTimeFormat(locale, options)
        return new Date(formattter.format(date));   
    }
}
