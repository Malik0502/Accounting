"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormHandler = void 0;
class FormHandler {
    submitForm() {
        let entity;
        entity.workDate = new Date(document.getElementById('inputDate').value);
        entity.timeFrom = new Date(document.getElementById('inputFrom').value);
        entity.timeTo = new Date(document.getElementById('inputTo').value);
        entity.commit = document.getElementById('inputCommit').value;
        entity.description = document.getElementById('inputDescription').value;
        return entity;
    }
}
exports.FormHandler = FormHandler;
//# sourceMappingURL=formHandler.js.map