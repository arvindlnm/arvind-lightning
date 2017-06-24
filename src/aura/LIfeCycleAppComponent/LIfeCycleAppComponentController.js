({
	handleClick : function(component, event, helper) {
		console.log('my app is called ');
	},
    doinit : function(component, event, helper) {
        console.log('init method 2323');
    },
    
    showToast1 : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
        console.log(toastEvent);
    toastEvent.setParams({
        "title": "Success!",
        "message": "The record has been updated successfully."
    });
    toastEvent.fire();
},
    
    showToast2 : function (component, event, helper) {
        
        var compEvent = component.getEvent("sampleComponentEvent");
		compEvent.fire();
	}
    
});