using System;
using Twilio;


public static void Run(TimerInfo myTimer, TraceWriter log)
{
    log.Info($"C# Timer trigger function executed at: {DateTime.Now}");

     string accountSid = "AC326a618ee0eca6b15dbd6354bfb4817b";
    string authToken = "1b3e8768787ea3a5f8f547b325f56e68";
 
    var client = new TwilioRestClient(accountSid, authToken);
 
        client.SendSmsMessage(
            "+5511971709194", // Insert your Twilio from SMS number here
            "+5511971709194", // Insert your verified (trial) to SMS number here
            "hello from Azure Functions!" + DateTime.Now            
        );
  

}
