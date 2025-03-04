import { FormEntity } from "./FormEntity";
import { TimeFrom } from "./TimeFrom";
import { TimeTo } from "./TimeTo";

export class FormHandler{
    
    public submitForm() : FormEntity{
        let entity : FormEntity = new FormEntity();

        const table = document.getElementById("timeTable") as HTMLTableElement
        const tableRows = document.querySelectorAll("tbody tr")

        tableRows.forEach((element) => {
            const inputFrom = element.querySelector(".inputFrom") as HTMLInputElement
            const inputTo = element.querySelector(".inputTo") as HTMLInputElement

            if(inputFrom.value && inputTo.value){
                entity =  this.addToEntityArray(inputFrom.value, inputTo.value, entity);
            }
        });
        

        entity.workDate = this.formatDate(new Date((document.getElementById('inputDate') as HTMLInputElement).value));        
        entity.commit = (document.getElementById('inputCommit') as HTMLInputElement).value;
        entity.description = (document.getElementById('inputDescription') as HTMLInputElement).value;

        console.log("Laenge InputFrom" + " " + entity.timeFrom.length);
        console.log("Laenge InputTo" + " " + entity.timeTo.length);

        

        return entity;
    }

    public addTableRow() : void{
        const table = document.getElementById("timeTable") as HTMLTableElement
        
        const tableRow = document.createElement("tr");
        const tableD = document.createElement("td");
        const tableDTwo = document.createElement("td");
        
        const inputOne = document.createElement("input");
        inputOne.type = "time";
        inputOne.className = "inputFrom";

        const inputTwo = document.createElement("input");
        inputTwo.type = "time";
        inputTwo.className = "inputTo";
    
        tableD.appendChild(inputOne);
        tableDTwo.appendChild(inputTwo);

        tableRow.appendChild(tableD);
        tableRow.appendChild(tableDTwo);

        table.appendChild(tableRow);
    
    }

    private addToEntityArray(timeFromValue : string, timeFromToValue : string, entity : FormEntity) : FormEntity{
        const[hoursFrom, minutesFrom] = timeFromValue.split(':').map(Number);
        const[hoursTo, minutesTo] = timeFromToValue.split(':').map(Number);

        entity.timeFrom.push(new TimeFrom(hoursFrom, minutesFrom))
        entity.timeTo.push(new TimeTo(hoursTo, minutesTo))

        return entity;
    }

    private formatDate(date : Date) : Date{
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
