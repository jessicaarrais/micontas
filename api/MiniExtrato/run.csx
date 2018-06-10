#r "Newtonsoft.Json"
using System.Net;
using System.Text;
using Newtonsoft.Json;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info("C# HTTP trigger function processed a request.");

    // parse query parameter
    string ContaID = req.GetQueryNameValuePairs()
        .FirstOrDefault(q => string.Compare(q.Key, "ContaID", true) == 0)
        .Value;

    if (ContaID == null)
    {
        // Get request body
        dynamic data = await req.Content.ReadAsAsync<object>();
        ContaID = data?.ContaID;
    }

    string json ="teste";

                    var myObj = new {Movimentacaoid  = Guid.NewGuid() ,
                    Tipo  = 1,
                    Descricao = "Pagamento Fornecedor",
                    Data = "2018-01-01",
                    Hora = "05:10",
                    Valor = 1250 };

                    json = JsonConvert.SerializeObject(myObj, Formatting.Indented);
         

    


  return new HttpResponseMessage(HttpStatusCode.OK) 
    {
        Content = new StringContent(json, Encoding.UTF8, "application/json")
    };
}
