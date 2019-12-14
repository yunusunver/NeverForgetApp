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
         private UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get() =>
            _userService.Get();
        
        
        [HttpPost]
        [Route("Create")]
        public IActionResult Create( User user){
            try
            {
                return Ok(_userService.Create(user));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }
           
   
    }
}
}