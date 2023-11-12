import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'months-selector',
    template: `
        <div class="input-group input-group-sm">
            <select [(ngModel)]="selectedMonth" (change)="onSelectionChange($event.target.value)" class="form-select form-select-sm">
                <option *ngFor="let month of months" [value]="month.value">{{ month.label }}</option>
            </select>
            <label class="input-group-text">Mois</label>
        </div>`,
})

export class monthsSelectorComponent implements OnInit {
    @Output() selectionChange = new EventEmitter<string>();
    selectedMonth: number;
    months: monthsData[]=[];

    ngOnInit(): void {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth()+1;
        const monthMap = ["JAN", "FÉV", "MAR", "AVR", "MAI", "JUN", "JUL", "AOÛ", "SEP", "OCT", "NOV", "DÉC"];
        for (let i = 0; i < 12; i++) {
            // Calculate the month for the current iteration
            let month = currentMonth - i;
  
            // If the calculated month is less than or equal to 0, it means we need to wrap around to the previous year
            if (month <= 0) {
                month += 12; // Wrap around to the previous year (12 months in a year)
            }
  
            this.months.push({
                value: month,
                label: monthMap[month - 1]
            });
        }
        this.selectedMonth = currentMonth;
        this.onSelectionChange(currentMonth.toString());
    }

    onSelectionChange(value: string): void {
        this.selectionChange.emit(value);
    }
}
export interface monthsData { value: number, label: string }