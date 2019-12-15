using System.Security.Authentication;
using Microsoft.AspNetCore.Mvc;
using NeverForget.Backend.Models;
using NeverForget.Backend.Services;

namespace NeverForget.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LookupController:ControllerBase
    {
        private LookupService _lookupService;

        
        public LookupController(LookupService lookService)
        {
            _lookupService=lookService;            
        }
        [HttpGet]
        [Route("GetAll")]
        // TEST EDİLDİ ONAYLANDI
        public IActionResult GetAll([FromQuery] int offset,[FromQuery] int limit,[FromQuery] bool count=true){
            try
            {
                var lookups = _lookupService.GetAll(offset,limit,count);
                return Ok(lookups);
            }
            catch(AuthenticationException ){
                    return Forbid();
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
                
            }
        }
        
        
        [HttpGet]
        [Route("GetById/{id:length(24)}")]
        // TEST EDİLDİ ONAYLANDI
        public IActionResult GetById(string id){
            try
            {
                var lookups = _lookupService.GetById(id);
                return Ok(lookups);
            }
            catch(AuthenticationException){
                    return Forbid();
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
                
            }
        }
        [HttpPost]
        [Route("AddLookup")]
        // TEST EDİLDİ ONAYLANDI
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

        [HttpDelete]
        [Route("DeleteLookup/{id:length(24)}")]
                // TEST EDİLDİ ONAYLANDI

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


        [HttpPut]
        [Route("UpdateLookup/{id:length(24)}")]
        // TEST EDİLDİ ONAYLANDI
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