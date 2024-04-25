using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BlinkDramaApi.Controllers
{
    public class TestController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Name() {

            return Request.CreateResponse("Amman");
                }
    }
}
