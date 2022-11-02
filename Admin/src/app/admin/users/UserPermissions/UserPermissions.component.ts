import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { UserPermissions } from "src/app/core/models";
import { UserPermissionsService } from "./UserPermissions.service";

@Component({
    selector: "app-users-list",
    templateUrl: "./UserPermissions.component.html",
})
export class UserPermissionsComponent {
    breadCrumbItems: Array<{}>;
    UserPermissions$: Observable<UserPermissions[]>;
    public form: FormGroup;

    constructor(private UserPermissionsService: UserPermissionsService, private fb: FormBuilder) {
        this.form = fb.group({});
        this.UserPermissions$ = UserPermissionsService.getAll()
        .pipe(tap(data=>{
            let formGroups = {};
            data.forEach(group => {
                formGroups[group.role] = new FormArray([]);
                if(group.permissions){
                    group.permissions.forEach(permission => {
                        formGroups[group.role].push(new FormControl(permission)) // Selected
                    });
                }
            });
            this.form = fb.group(formGroups);
        }));
    }

    // has all checkboxes -> -1
    permissions = [
        'Modifier', // -> 0
        'Supprimer', // -> 1
        'Ajouter', // -> 2
        'Details', // -> 3
        'Afficher', // -> 4
        'Exporter', // -> 5
        'Importer', // -> 6
    ]
    access = [
        {
            name: "Anomalies",
            value: "anomalies",
            permissions: -1
        },
        {
            name: 'Travaux',
            value: 'travaux',
            permissions: -1
        },

        {
            name: 'Calendrier',
            value: 'calendrier',
            permissions: 4
        },
        {
            name: 'Objectifs de l\'année',
            value: 'bbjectifs',
            permissions: 4
        },
        {
            name: 'Postes',
            value: 'postes',
            permissions: -1
        },
        {
            name: 'Statistiques',
            value: 'statistiques',
            permissions: 4
        },
        {
            name: 'Équipes',
            value: 'equipes',
            permissions: [0, 1, 2, 3, 4]
        },
        {
            name: 'Members',
            value: 'users',
            permissions: [0, 1, 2, 3, 4]
        },
        {
            name: 'Autorisation',
            value: 'UserPermissions',
            permissions: 0
        },
        {
            name: 'Historique',
            value: 'historique',
            permissions: 4
        },
        {
            name: 'Source des données',
            value: 'data',
            permissions: 4
        },
    ];


    isChecked(value: string, formArrayName: string) {
        const formArray: FormArray = this.form.get(formArrayName) as FormArray;
        return formArray.controls.filter((item: FormControl) => item.value == value).length;
    }
    
    onChange(e: Event, formArrayName: string) {
        const formArray: FormArray = this.form.get(formArrayName) as FormArray;
        const target = e.target as HTMLInputElement;
        console.log(formArray.controls);

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

    onSubmit() {
        console.log(this.form.value);
    }
}
