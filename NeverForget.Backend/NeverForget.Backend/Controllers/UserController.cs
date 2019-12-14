using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NeverForget.Backend.Models;
using NeverForget.Backend.Services;
using System;
using System.Security.Authentication;

namespace NeverForget.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        [Route("AddUser")]
        public IActionResult Create(User user)
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


        [HttpDelete("{id:length(24)}")]
        [Route("DeleteUser")]
        // http://localhost:500/api/user/deleteUser/sfsdfsdfsdfsdfsdfsdfvsddv
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


        [HttpDelete("{id:length(24)}")]
        [Route("UpdateUser")]
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

        [HttpDelete("{id:length(24)}")]
        [Route("GetUser")]
        public IActionResult GetUser(string id)
        {
            try
            {
                return Ok(_userService.GetUser(id));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }

        }

        #endregion

    }
}