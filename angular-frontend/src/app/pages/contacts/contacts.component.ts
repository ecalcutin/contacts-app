import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddContactComponent } from '../../shared/components/add-contact/add-contact.component';
import { IContact, ContactsService } from '../../shared/services/contacts.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    contacts: IContact[];

    constructor(
        private contactsService: ContactsService,
        public dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.contacts = this.contactsService.getContacts();
    }

    add() {
        const dialogRef = this.dialog.open(AddContactComponent);
        dialogRef.afterClosed().subscribe((contact: IContact) => {
            if (contact) {
                this.contacts.push(contact);
            }
        });
    }

    delete(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
    }

}