import { TimeEntity } from "./TimeEntity";

export class WorkEntity{
    
    public Id : number;
    public Date : string;
    public CommitMessage : string;
    public Description : string;
    public Times : TimeEntity[] = [];
}