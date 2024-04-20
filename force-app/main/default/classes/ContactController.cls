public with sharing class ContactController {

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        try {
            throw new AuraHandledException('Forced error');
            //return [Select FirstName, LastName, Email from Contact ];    
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}