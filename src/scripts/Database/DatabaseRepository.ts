import { Database } from "sqlite3/lib/sqlite3";
import { WorkEntity } from './WorkEntity';

export class WorkRepository{
    async Add(entity : WorkEntity) : Promise<{success: boolean, workId: number}>{
        return new Promise((resolve , reject) => {
            var db = new Database("src/AccountingDb.db", function (err){
                if(err){
                    console.log("Fehler beim Ausführen der Query:");    
                    reject(err);
                }
                else{
                    const query = 'INSERT INTO Work(Datum, CommitMessage, Beschreibung) VALUES (?, ?, ?)';
                    db.run(query, [entity.Date, entity.CommitMessage, entity.Description], function (err) {
                        
                        if (err) return console.error(err.message);
                        else{
                            const workId : number = this.lastID;
    
                            if (!entity.Times || entity.Times.length === 0) {
                                return resolve({ success: true, workId });
                            }
                            const insertTimeQuery = "INSERT INTO Time (WorkId, Von, Bis) VALUES (?, ?, ?)"
                            const stmt = db.prepare(insertTimeQuery);
    
                            entity.Times.forEach(element => {
                                stmt.run(workId, element.From, element.To);
                            });
    
                            stmt.finalize((err) => {
                                if(err){
                                    console.error("Fehler beim Einfügen in Time:", err.message);
                                    return reject(err);
                                }
                                console.log("Time-Einträge erfolgreich hinzugefügt");
                                resolve({success: true, workId})
                            })
                        }
                    })
    
                    
                }
            })
        })
        
    }
}