using System.Security.Authentication;
using Microsoft.AspNetCore.Mvc;
using NeverForget.Backend.Models;
using NeverForget.Backend.Services;

namespace NeverForget.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController:ControllerBase
    {
        private NotesService _notes;

        public NotesController(NotesService notes){
            _notes=notes;
        }
        [HttpGet]
        [Route("GetNotes")]
        public IActionResult GetNotes([FromQuery] int offset,[FromQuery] int limit,[FromQuery] bool count){
                try
                {
                     var notes = _notes.GetAll(offset,limit,count);
                    return Ok(notes);
                }
                catch(AuthenticationException e){
                    return Forbid(); //403
                }
                catch (System.Exception e)
                {
                    
                    return BadRequest(e.ToString());
                }
        }

        [HttpPost]
        [Route("AddNote")]
        public IActionResult Create(Notes note)
        {
            try
            {
                if (note != null)
                    return Ok(_notes.AddNotes(note));

                return BadRequest();
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }
    }
    
    [HttpPut]
    [Route("UpdateNote/{id}")]
    public IActionResult Update(string id,Notes note){
        try
        {
            _notes.UpdateNotes(id,note);
            return NoContent(); // 204

        }
        catch (System.Exception e)
        {
            return BadRequest(e.ToString());
        }
    }
    [HttpDelete]
    [Route("DeleteNote/{id}")]
    public IActionResult Delete(string id){
          try
            {
                _notes.DeleteNotes(id);
                return NoContent(); // 204
            }
            catch (System.Exception e)
            {
                return BadRequest(e.ToString());
            }
    }
}
}