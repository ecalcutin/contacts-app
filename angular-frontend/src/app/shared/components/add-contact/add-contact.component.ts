import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add.contact.component.scss']
})
export class AddContactComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<AddContactComponent>
    ) { }

    ngOnInit() { }

}