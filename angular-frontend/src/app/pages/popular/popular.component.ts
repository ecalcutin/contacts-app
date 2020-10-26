import { Component, OnInit } from '@angular/core';
import { IContact, ContactsService } from '../../shared/services/contacts.service';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

    contacts: IContact[];

    constructor(private contactsService: ContactsService) { }

    ngOnInit(): void {
        this.contacts = this.contactsService.getPopularContacts();
    }

}