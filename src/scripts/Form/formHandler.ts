import { WorkEntity } from "../Database/WorkEntity";
import { TimeEntity } from "../Database/TimeEntity";

export class FormHandler{
    
    public submitForm() : WorkEntity{
        let workEntity : WorkEntity = new WorkEntity();

        const table = document.getElementById("timeTable") as HTMLTableElement
        const tableRows = table.querySelectorAll("tbody tr")

        tableRows.forEach((element) => {
            const inputFrom = element.querySelector(".inputFrom") as HTMLInputElement
            const inputTo = element.querySelector(".inputTo") as HTMLInputElement

            if(inputFrom.value && inputTo.value){
                workEntity.Times.push(new TimeEntity(inputFrom.value, inputTo.value))
            }
        });
        
        workEntity.Date = (document.getElementById('inputDate') as HTMLInputElement).value;        
        workEntity.CommitMessage = (document.getElementById('inputCommit') as HTMLInputElement).value;
        workEntity.Description = (document.getElementById('inputDescription') as HTMLInputElement).value;

        return workEntity;
    }

    public addTableRow() : void{
        const table = document.getElementById("timeTable") as HTMLTableElement
        const tableBody = table.querySelector("tbody");

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

        tableBody.appendChild(tableRow);
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