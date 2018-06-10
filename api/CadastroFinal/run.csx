#r "Newtonsoft.Json"
using System.Net;
using System.Text;
using Newtonsoft.Json;


public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info("C# HTTP trigger function processed a request.");

    // parse query parameter
    string SMSToken = req.GetQueryNameValuePairs()
        .FirstOrDefault(q => string.Compare(q.Key, "SMSToken", true) == 0)
        .Value;

    if (SMSToken == null)
    {
        // Get request body
        dynamic data = await req.Content.ReadAsAsync<object>();
        SMSToken = data?.SMSToken;
    }
    
    string json ="teste";

     if (SMSToken == "86768")   
     {
                    var myObj = new {ContaID  = Guid.NewGuid() ,
                    status  = 0,
                    Message = "Conta Digital Habilitada com Sucesso"};
                    json = JsonConvert.SerializeObject(myObj, Formatting.Indented);

     }else
     {
                    var myObj = new {ContaID  = 0 ,
                    status  = -66,
                    Message = "Falha na validação de SMS Token"};
                    json = JsonConvert.SerializeObject(myObj, Formatting.Indented);
     }           

    


  return new HttpResponseMessage(HttpStatusCode.OK) 
    {
        Content = new StringContent(json, Encoding.UTF8, "application/json")
    };

}
