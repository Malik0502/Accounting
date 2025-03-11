import { contextBridge, ipcRenderer } from "electron";
import { WorkEntity } from "./scripts/Database/WorkEntity";

contextBridge.exposeInMainWorld("electronAPI", {
    sendFormData: (data: WorkEntity) => ipcRenderer.send("AddToDatabase", data),
  });