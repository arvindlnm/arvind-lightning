public with sharing class testcontroller {

    public Component.Apex.OutputPanel reportCharts {get;set;}
    public testcontroller() {
        
        reportCharts = new Component.Apex.OutputPanel();
        reportCharts.childComponents.add(new Component.Analytics.ReportChart());
        
        
    
    }

}