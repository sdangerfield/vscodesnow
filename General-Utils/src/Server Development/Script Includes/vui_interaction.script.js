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
        var bSMS = fase;                        //bool can SMS
        var sysInteractionID = '';              //sysid from interactions table
        var contactType = constContact.USER;    //const for contact type
        var channel = constChannel.CALL;        //const for channel
        
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



