using System.Security.Authentication;
using Microsoft.AspNetCore.Mvc;
using NeverForget.Backend.Models;
using NeverForget.Backend.Services;

namespace NeverForget.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LookupController:ControllerBase
    {
        private LookupService _lookupService;

        
        public LookupController(LookupService lookService)
        {
            _lookupService=lookService;            
        }
        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll([FromQuery] int offset,[FromQuery] int limit,[FromQuery] bool count){
            try
            {
                var lookups = _lookupService.GetAll(offset,limit,count);
                return Ok(lookups);
            }
            catch(AuthenticationException w){
                    return Forbid();
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
                
            }
        }
        [HttpGet("{id:length(24)}")]
        [Route("GetById")]
        public IActionResult GetById(string id){
            try
            {
                var lookups = _lookupService.GetById(id);
                return Ok(lookups);
            }
            catch(AuthenticationException e){
                    return Forbid();
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
                
            }
        }
        [HttpPost]
        [Route("AddLookup")]
        public IActionResult Create(Lookup lookup)
        {
            try
            {
                if (lookup !=null) return Ok( _lookupService.AddLookup(lookup));
               return BadRequest();
            }
            catch (System.Exception e)
            {
                
                return BadRequest(e.ToString());
            }
        }

                [HttpDelete("{id:length(24)}")]
        [Route("DeleteLookup")]
        public IActionResult Delete(string id)
        {
            try
            {
                _lookupService.DeleteLookup(id);
                return NoContent(); // 204
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }

        }


        [HttpDelete("{id:length(24)}")]
        [Route("UpdateLookup")]
        public IActionResult Update(string id, [FromBody] Lookup lookup)
        {
            try
            {
                _lookupService.UpdateLookup(id, lookup);
                return NoContent(); // 204
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }

        }

    }
}