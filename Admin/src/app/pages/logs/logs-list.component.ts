import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { LogsService } from "./logs.service";
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-logs-list",
  templateUrl: "./logs-list.component.html",
})
export class LogsComponent {
  breadCrumbItems: Array<{}>;
  public hideExport = true;

  hoveredDate: NgbDate | null = null;
	fromDate: NgbDate;
	toDate: NgbDate | null = null;
  dpHidden: boolean;

  constructor(public LogsService: LogsService, private fb: FormBuilder, calendar: NgbCalendar) {
    this.LogsService.findAll();
    LogsService.LogsForm = this.fb.group({
      id: [""],
      message: [""],
      levelName: [""],
      extra: [""],
      createdAt: [""],
      user: [""],
    });


    this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.dpHidden = true;

  }

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}
}
