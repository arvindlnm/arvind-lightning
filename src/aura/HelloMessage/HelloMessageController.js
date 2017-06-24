({
    handleClick: function(component, event, helper) {
        console.log(event.getSource());
        var btnClicked = event.getSource();         // the button
        var btnMessage = btnClicked.get("v.label"); // the button's label
        component.set("v.message", btnMessage);     // update our message
    }
})