import * as sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';

export class DatabaseCreator{

    private db : Database;

    createDatabases() : void{
        const database = new sqlite3.Database("src/AccountingDb.db", (err) => {
            if (err) {
                console.error('Fehler beim Erstellen der Datenbank:', err.message);
            } else {
                console.log('Verbindung zur SQLite-Datenbank erfolgreich!');
                this.db = database;
                this.createWorkDatabase();
                this.createTimeDatabase();
            }
        });
    }

    createWorkDatabase() : void{
        this.db.run(
            `CREATE TABLE IF NOT EXISTS Work (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                Datum DATE NOT NULL,
                CommitMessage TEXT NOT NULL,
                Beschreibung TEXT
            );`,
            (err) => {
                if (err) {
                    console.error('Fehler beim Erstellen der Work-Tabelle:', err.message);
                } else {
                    console.log('Tabelle "Work" wurde überprüft/erstellt.');
                }
            }
        );
    }

    createTimeDatabase() : void{
        this.db.run(
            `CREATE TABLE IF NOT EXISTS Time (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                WorkId INTEGER NOT NULL,
                Von TIME NOT NULL,
                Bis TIME NOT NULL,
                FOREIGN KEY (WorkId) REFERENCES Work(Id) ON DELETE CASCADE
            );`,
            (err) => {
                if (err) {
                    console.error('Fehler beim Erstellen der Time-Tabelle:', err.message);
                } else {
                    console.log('Tabelle "Time" wurde überprüft/erstellt.');
                }
            }
        );
    }
}