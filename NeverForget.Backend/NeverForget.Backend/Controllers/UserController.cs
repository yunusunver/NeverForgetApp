using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NeverForget.Backend.Models;
using NeverForget.Backend.Services;
using System;
using System.Security.Authentication;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authorization;

namespace NeverForget.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [Authorize]

    // Interceptor  Autthorization Bearer tokenin üretildiği 
    public class UserController : ControllerBase
    {
        private UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        #region  USER-SERVICE

        
        [HttpGet]
        [Route("GetUsers")]
        // TEST EDILDI ONAYLANDI!
        public IActionResult Get([FromQuery] int offset, [FromQuery] int limit, [FromQuery] bool count = true)
        {
            try
            {
                var users = _userService.GetAll(offset, limit, count);

                return Ok(users);
            }
            // Exception Handler 
            catch (AuthenticationException e)
            {
                return Forbid(); // 403 
            }
            catch (Exception e)
            {
                // Loglama 
                return BadRequest(e.ToString());
            }
        }



        [HttpPost]
        [Route("Register")]
        // TEST EDILDI ONAYLANDI 
        public IActionResult Register(User user)
        {
            try
            {
                if (user != null)
                    return Ok(_userService.Create(user));

                return BadRequest();
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        [HttpPost]
        [Route("Login")]
         public IActionResult Login(  [FromQuery]  string username,  [FromQuery]  string password)
        {
            try
            {
                    var loginVM = _userService.Login(username,password);
                    return Ok(loginVM);

            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }
        }



        [HttpDelete]
        [Route("DeleteUser/{id:length(24)}")]
        // http://localhost:500/api/user/deleteUser/sfsdfsdfsdfsdfsdfsdfvsddv
        // TEST EDILDI ONAYLANDI
        public IActionResult Delete(string id)
        {
            try
            {
                _userService.deleteUser(id);
                return NoContent(); // 204
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }

        }


        [HttpPut]
        [Route("UpdateUser/{id:length(24)}")]
        // TEST EDİLDİ ONAYLANDI.
        public IActionResult Update(string id, [FromBody] User user)
        {
            try
            {
                _userService.updateUser(id, user);
                return NoContent(); // 204
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }

        }

         [HttpGet]
        [Route("GetUser/{userNumber}")]
        // TEST EDILDI ONAYLANDI 
        public IActionResult GetUser( string userNumber)
        {
            try
            {
                return Ok(_userService.GetUser(userNumber));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }

        }

        #endregion

         // Register 

         // Login 

    }
}