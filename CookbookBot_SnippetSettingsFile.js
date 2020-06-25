// Populate the LiveChatTranscript record with pre-chat data

window._snapinsSnippetSettingsFile = (function() {

  // Logs that the snippet settings file was loaded successfully
  //console.log("Snippet settings file loaded.");

  embedded_svc.snippetSettingsFile.extraPrechatFormDetails = [{
    "label":"First Name", 
    "transcriptFields": ["cfg_First_Name__c"]
  },{
    "label":"Last Name", 
    "transcriptFields": ["cfg_Last_Name__c"]
  },{
    "label":"Email", 
    "transcriptFields": ["cfg_Email__c"]
  },{
    "label":"Subject", 
    "transcriptFields": ["cfg_Subject__c"]
  }];
})();
