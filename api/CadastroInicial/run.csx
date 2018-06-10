#r "Newtonsoft.Json"
using System.Net;
using System.Text;
using Newtonsoft.Json;


public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info("C# HTTP trigger function processed a request.");

    // parse query parameter
    string name = req.GetQueryNameValuePairs()
        .FirstOrDefault(q => string.Compare(q.Key, "name", true) == 0)
        .Value;

    if (name == null)
    {
        // Get request body
        dynamic data = await req.Content.ReadAsAsync<object>();
        name = data?.name;
    }


    var myObj = new {Req_id = Guid.NewGuid() ,
                    status = 0,
                    Message = "Cadastro solicitdo com sucesso"};
    var json = JsonConvert.SerializeObject(myObj, Formatting.Indented);


  return new HttpResponseMessage(HttpStatusCode.OK) 
    {
        Content = new StringContent(json, Encoding.UTF8, "application/json")
    };
}
