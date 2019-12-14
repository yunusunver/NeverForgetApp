using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NeverForget.Backend.Models;
using NeverForget.Backend.Services;

namespace NeverForget.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController:ControllerBase
    {
         private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get() =>
            _userService.Get();
        
        [HttpPost]
        public ActionResult<User> Create(User user){
            _userService.Create(user);
            return CreatedAtRoute("GetUser",new{id=user.id.ToString()},user);
   
    }
}
}