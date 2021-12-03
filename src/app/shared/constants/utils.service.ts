import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UtilsService {
    constructor() { }

    public formatDate(date?: string) {
        if (date) {
            const [day, month, year] = date.split('/');
            return `${year}-${month}-${day}`
        }
        else {
            return
        }
    }
}