import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    @api title;

    handleButton(event) { 
        if(event.target.title == 'Multiply'){
            this.dispatchEvent(new CustomEvent('multiplybuttonclick',{bubbles: true}));
        }else {
            this.dispatchEvent(new CustomEvent('dividebuttonclick',{bubbles: true}));
        }   
    }
}