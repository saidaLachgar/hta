import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import { forkJoin, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { EntitiesAccess, PermissionsIndex } from "src/app/core/const/access";
import { UserPermissions } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { UserPermissionsService } from "./UserPermissions.service";

const Equals = (x, y) => {
    const xu = [...new Set(x).values()]; // unique values of x
    const yu = [...new Set(y).values()]; // unique values of y
    return xu.length != yu.length ? false : xu.every(x => yu.includes(x));
}
@Component({
    selector: "app-users-list",
    templateUrl: "./UserPermissions.component.html",
})
export class UserPermissionsComponent {
    breadCrumbItems: Array<{}>;
    UserPermissions$: Observable<UserPermissions[]>;
    OldPermissions: UserPermissions[];
    form: FormGroup;
    submitted = false;
    readonly EntitiesAccess= EntitiesAccess;
    readonly PermissionsIndex = PermissionsIndex;

    constructor(
        public service: UserPermissionsService,
        private fb: FormBuilder,
        private toast: HotToastService,
    ) {
        this.form = fb.group({});
        this.UserPermissions$ = service.getAll()
            .pipe(tap(data => {
                let formGroups = {};
                data.forEach(group => {
                    formGroups[group.role] = new FormArray([]);
                    if (group.permissions) {
                        group.permissions.forEach(permission => {
                            formGroups[group.role].push(new FormControl(permission)) // Selected
                        });
                    }
                });
                this.form = fb.group(formGroups);
                this.OldPermissions = data;
            }));
    }


    isChecked(value: string, formArrayName: string) {
        const formArray: FormArray = this.form.get(formArrayName) as FormArray;
        return formArray.controls.filter((item: FormControl) => item.value == value).length;
    }

    onChange(e: Event, formArrayName: string) {
        const formArray: FormArray = this.form.get(formArrayName) as FormArray;
        const target = e.target as HTMLInputElement;
        if (target.checked)
            formArray.push(new FormControl(target.value)) // Selected
        else
            formArray.controls.forEach((item: FormControl, i) => {
                if (item.value == target.value) {
                    formArray.removeAt(i);
                    return;
                }
            })
                ;
    }

    /**
   * Persist : update
   */
    onSubmit(): void {
        this.submitted = true;
        let values = this.form.value;
        let toast = this.toast;
        let observables = [];

        this.OldPermissions.forEach(group => {
            if (
                // group.permissions &&// not null
                !Equals(group.permissions, values[group.role]) // is updated
            ) {
                console.log("create an observable")
                let newPermissions:UserPermissions = {...group} ;
                newPermissions.permissions = values[group.role];
                observables.push(this.service.update(newPermissions))
            }
        });

        observables.length && forkJoin(observables)
            .subscribe({
                error: () => toast.error("un problème est survenu, veuillez réessayer"),
                complete() {
                    toast.success("Les permissions ont été mises à jour avec succès");
                    this.submitted = false;
                },
            })

    }
}
