using afwr.Models.Muppet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace afwr.Controllers
{
    public class MuppetController : Controller
    {
        [HttpGet]
        public JsonResult GetStuff()
        {
            List<Muppet> muppetList = new List<Muppet>();
            muppetList.Add(new Muppet()
            {
                FirstName = "Nisse",
                LastName = "Kula"
            });

            muppetList.Add(new Muppet()
            {
                FirstName = "Bosse",
                LastName = "Bula"
            });

            var retVal = new JsonResult()
            {
                Data = muppetList,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };

            return retVal;
        }
    }
}