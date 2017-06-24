global class contactBatch implements Database.batchable<sObject>, Database.stateful {
    
    global contactBatch() {
        
    }
    
    global Database.querylocator start(Database.BatchableContext batch) {
        
        String query = 'SELECT Id FROM Contact';
        return Database.getQueryLocator(query);
    }
    
    global void execute(Database.BatchableContext batch, List<SobjEct> objectList ) {
        system.assert(false, objectList);
    }
    
    global void finish(Database.BatchableContext batch ) {
        
    }
}