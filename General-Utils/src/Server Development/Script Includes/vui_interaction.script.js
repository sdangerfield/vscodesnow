
var vui_interaction = Class.create();
// Creates a class to gradually enrich the inbound interaction
// establish company, customer/user & account
// then enrich with data events etc.
vui_interaction.prototype = {
    
    

    
    initialize: function() {
        //privates - generally chains from there into static data
        var sysUserID = '';                     //sysid from sys_user
        var sysAccountID = '';                  //sysid from account (if user cant be determined but account can)
        var e164Phone ='';                      //phone number in E164 format
        var bSMS = false;                        //bool can SMS
        var sysInteractionID = '';              //sysid from interactions table
        var contactType = constContact.USER;    //const for contact type, default ot USER
        var channel = constChannel.CALL;        //const for channel, default to call
        
        Object.freeze(this.constContact);       //freeze to make constants - loving Javascript
        Object.freeze(this.constChannel);
    },
    type: 'vui_interaction',


    constContact: {
        USER:   'user',
        EMPLOYEE: 'employee',
        CUSTOMER: 'customer',
        CONTACT: 'contact'
    },
    
    constChannel: {
        CALL: 'call',
        CHAT: 'chat',
        EMAIL: 'email',
        ASSISTANT: 'assistant'
    },

};


var vui_event = Class.Create();
vui_eventType.prototype = {
    initialize: function() {
        var intEventID = 0;                     //EventID of the Event
        var strTitle ='';                        //Title of the Event    
        var strDetail ='';                      //Detail of the Event
        var constSource = constEventType.SYSTEM;
        Object.freeze(this.constEventType);
    },

    type: 'vui_event',
    constEventType: {
        SYSTEM:  'System',
        APPLICATION: 'Application',
        SECURITY: 'Security',
        PERFORMANCE: 'Performance',
        CUSTOM: 'Custom'
    },
};




