using System;
using MongoDB.Driver;
using NeverForget.Backend.Models;
using NeverForget.Backend.Models.ViewModel;

namespace NeverForget.Backend.Services
{
    public class NotesService
    {
        private readonly IMongoCollection<Notes> _notes;

        public NotesService(INeverForgetDatabaseSettings settings){
                var client=new MongoClient(settings.ConnectionString);
                var database=client.GetDatabase(settings.DatabaseName);
                _notes=database.GetCollection<Notes>(settings.ForgetsCollectionName);
        }

        public resultVM<Notes> GetAll(int offset,int limit,bool count){
            var countData=0;
            if (count != true)
            {
                countData = Convert.ToInt32(_notes.Find(lookup=>true).CountDocuments());
            }

            var notesPagingList = _notes.Find(lookup=>true).Skip(offset).Limit(limit).ToList();

            resultVM<Notes> listNotes=new resultVM<Notes>{
                results=notesPagingList,
                count=countData
            };
            return listNotes;
        }

        public Notes GetById(string id){
            return _notes.Find(x=>x.Id.ToString() == id).FirstOrDefault();
        }

        public Notes AddNotes(Notes note){
            if (note == null)
            {
                return null;
            }
            else _notes.InsertOne(note);

            return note;
        }

        public void DeleteNotes(string id){
            if (id==null)
            {
                return;
            }
            var findNotes=_notes.Find(x=>x.Id.ToString()==id).FirstOrDefault();
            if (findNotes==null)
            {
                return;
            }
            findNotes.isDeleted=true;
            _notes.ReplaceOne(x=>x.Id.ToString()==id,findNotes);
        }

        public void UpdateNotes(string id,Notes note){
            _notes.ReplaceOne(x=>x.Id.ToString()==id,note);
        }
    }
}