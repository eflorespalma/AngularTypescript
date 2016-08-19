using BizLogic.Configuracion;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace APIWeb.Controllers
{
    [RoutePrefix("api/configuration")]
    public class ConfigurationController : ApiController
    {
        readonly IItemBizLogic itemService;

        public ConfigurationController(IItemBizLogic _itemService)
        {
            if (_itemService == null)
                throw new ArgumentNullException("iItemBizLogic");
            itemService = _itemService;
        }


        [HttpGet]
        [Route("GetListadoItems")]
        [ResponseType(typeof(ItemDTO))]
        public IHttpActionResult GetList()
        {
            return Ok(itemService.getListItems());
        }
    }
}
