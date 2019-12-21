using System;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using NeverForget.Backend.Models.ViewModel;

namespace NeverForget.Backend.Services
{
    public class baseService
    {
        // claims principle created
        public ClaimsPrincipal principal;
        public baseService(IHttpContextAccessor accessor) // IHttpContextAccessor -> HttpContextAccessor
        {
            this.principal = accessor.HttpContext.User;
        }

        public loginVM CurrentUser
        {
            get
            {
                return this.getFromJwt();
            }
        }

        private loginVM getFromJwt()
        {
            loginVM result = new loginVM();
            var claims = this.principal.Claims.ToDictionary(x => x.Type, x => x.Value);

            
             result.Id = Convert.ToString(claims["id"]);
            result.name =  Convert.ToString(claims["name"]);
            result.surname = Convert.ToString(claims["surname"]);
            result.username = Convert.ToString(claims["username"]);
            result.ownerId = Convert.ToString(claims["ownerid"]);
            
            return result;
        }


        // Current user --> claimlerde HttpContext.Current.User --> HttpContextAccessor

        // rigtlar eklenecek 

        // check right 


    }
}