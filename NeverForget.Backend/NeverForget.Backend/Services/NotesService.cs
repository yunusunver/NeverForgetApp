using System;
using MongoDB.Driver;
using NeverForget.Backend.Models;
using NeverForget.Backend.Models.ViewModel;
using System.Linq;

namespace NeverForget.Backend.Services
{
    public class NotesService
    {
        private readonly IMongoCollection<Notes> _notes;
        private readonly IMongoCollection<User> _users;
        private readonly IMongoCollection<Lookup> _lookup;

        private LookupService _lookupService;
        
        public NotesService(INeverForgetDatabaseSettings settings, LookupService lookupService)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _notes = database.GetCollection<Notes>("Notes");
            _users = database.GetCollection<User>("User");
            _lookup = database.GetCollection<Lookup>("LookUp");
            _lookupService = lookupService;

        }

        public resultVM<noteVM> GetAll(int offset, int limit, bool count)
        {
            
            var users = _users.Find(u => true).ToList(); // ownerid ye göre user listesi çek !
            var notes = _notes.Find(note => true).ToList();
            var lookups = _lookupService.GetByType("category");

            var result = (
                         // inner  join 
                        from note in notes 
                        join user in users 
                        on note.userId equals user.Id //  note ile userlari bağla 
                        join lookUp in lookups  
                        on note.categoryId  equals lookUp.Id // category ile noteları bagla 
                          select new noteVM()
                          {
                              categoryName = lookUp.name,
                              description = lookUp.description,
                              id = "",
                              isDeleted = false,
                              name = user.name,
                              userName = user.username
                          }
                         ).ToList();
            resultVM<noteVM> list = new resultVM<noteVM>()
            {
                count = result.Count,
                results = result
            };

            return list;

        }

        public Notes GetById(string id)
        {
            return _notes.Find(x => x.Id.Equals(id)).FirstOrDefault();
        }

        public Notes AddNotes(Notes note)
        {
            if (note == null)
            {
                return null;
            }
            else _notes.InsertOne(note);

            return note;
        }

        public void DeleteNotes(string id)
        {
            if (id == null)
            {
                return;
            }
            var findNotes = _notes.Find(x => x.Id.Equals(id)).FirstOrDefault();
            if (findNotes == null)
            {
                return;
            }
            findNotes.isDeleted = true;
            _notes.ReplaceOne(x => x.Id.Equals(id), findNotes);
        }

        public void UpdateNotes(string id, Notes note)
        {
            _notes.ReplaceOne(x => x.Id.Equals(id), note);
        }
    }
}