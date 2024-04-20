import { LightningElement, wire } from 'lwc';
import { showToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT
    fields = [FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD]

    handleSuccess(event){
        const toastMsg = new showToastEvent({
            title: "Contact Record Created",
            message: "Record Id: " + event.detail.id,
            variant: "success"
        })

        this.dispatchEvent(toastMsg)
    }

}