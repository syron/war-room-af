using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace afwr.Models.Account
{
    public class LoginAd
    {
        [Required(ErrorMessage = "nä du! denna behövs")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "lösenordet då pucko???")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}