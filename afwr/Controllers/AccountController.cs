﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace afwr.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult LoginForm()
        {
            return PartialView("_LoginForm");
        }
    }
}