using Resources;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace afwr.Models.Account
{
    public class LoginAd
    {
        [Required(ErrorMessageResourceType = typeof(strings), ErrorMessageResourceName = "LoginViewModel_LoginAd_UserName_Required")]
        [Display(Name = "LoginViewModel_LoginAd_UserName", ResourceType = typeof(strings))]
        public string UserName { get; set; }

        [Required(ErrorMessageResourceType = typeof(strings), ErrorMessageResourceName = "LoginViewModel_LoginAd_Password_Required")]
        [DataType(DataType.Password)]
        [Display(Name = "LoginViewModel_LoginAd_Password", ResourceType = typeof(strings))]
        public string Password { get; set; }

    }
}