import { Component, Input } from '@angular/core';

@Component({
    selector: 'anomalies-badge',
    template: `
    <!-- Has anomalies -->
    <ng-container *ngIf="(undone > 0 && undone != total) || (!isLink && undone > 0 && undone == total); else NonResolved">
        <div  class="badge badge-soft-danger c-pointer rounded-pill border-danger border px-3 py-2 font-size-13 w-100">
          <i class="fas fa-exclamation-triangle me-2"></i> <span class="text-body">{{total-undone}}/{{total}} Anomalies</span>
        </div>
    </ng-container>
    <!-- NonResolved -->
    <ng-template #NonResolved>
    <ng-container *ngIf="undone > 0 && undone == total; else NoAnomalies">
        <div class="badge badge-soft-danger c-pointer rounded-pill border-danger border px-3 py-2 font-size-13 w-100">
        <i class="fas fa-exclamation-triangle me-2"></i> <span class="text-body">Liste des anomalies</span>
        </div>
    </ng-container>
    </ng-template>
    <!-- No anomalies -->
    <ng-template #NoAnomalies>
    <ng-container *ngIf="total == 0 || total == null; else AllResolved">
        <div class="badge badge-soft-info c-pointer rounded-pill border-info border px-3 py-2 font-size-13 w-100">
        <i class="fas fa-info-circle me-2"></i> <span class="text-body">Pas d'anomalies</span>
        </div>
    </ng-container>
    </ng-template>
    <!-- All Resolved -->
    <ng-template #AllResolved>
    <div class="badge badge-soft-success c-pointer rounded-pill border-success border px-3 py-2 font-size-13 w-100">
        <i class="fas fa-check-circle me-2"></i> <span class="text-body">Toutes résolues</span>
    </div>
    </ng-template>`,
})

export class anomaliesBadgeComponent {
    @Input() undone: number;
    @Input() total: number;
    @Input() isLink: boolean = true;
   
}