import { Injectable } from '@angular/core';

export interface IContact {
    name: string;
    number: string;
    popular: boolean;
}

@Injectable()
export class ContactsService {

    private readonly contacts: IContact[] = [
        { name: 'Evgheni', number: '060005777', popular: true },
        { name: 'Dora', number: '069324122', popular: false },
        { name: 'Vasilii', number: '069345666', popular: true },
        { name: 'Alexandr', number: '069487233', popular: false }
    ];

    getContacts(): IContact[] {
        return this.contacts;
    }

    getPopularContacts(): IContact[] {
        return this.contacts.filter((contact: IContact) => {
            return (contact.popular === true);
        });
    }

}