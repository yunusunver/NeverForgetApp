using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using NeverForget.Backend.Models;
using NeverForget.Backend.Models.ViewModel;

namespace NeverForget.Backend.Services
{
    public class LookupService
    {
        private readonly IMongoCollection<Lookup> _lookup;

        public LookupService(INeverForgetDatabaseSettings settings){
               var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _lookup = database.GetCollection<Lookup>(settings.ForgetsCollectionName);
        }
        public resultVM<Lookup> GetAll( int offset, int limit,bool count){
            var countData=0;

            if (count == true)
            {
               countData = Convert.ToInt32(_lookup.Find(lookup=>true).CountDocuments());
            }
            
             var lookupPagingList = _lookup.Find(lookup=>true).Skip(offset).Limit(limit).ToList();

            resultVM<Lookup> listLookup = new resultVM<Lookup>{
                results=lookupPagingList,
                count=countData
            };

            return  listLookup;

        } 

        public Lookup GetById(string id){
            return _lookup.Find(lookup=>lookup.Id.ToString()==id).FirstOrDefault();
        }

        public List<Lookup> GetByType(string type){
            return _lookup.Find(typeLookup=>typeLookup.type == type).ToList();
        }

        public Lookup AddLookup(Lookup lookup){
            if (lookup == null) return null;
            else _lookup.InsertOne(lookup);
            return lookup;
        }

        public void DeleteLookup(string id){
            if (id == null) return;

            var findLookup = _lookup.Find(lookupDelete => lookupDelete.Id.ToString() == id).FirstOrDefault();
            if (findLookup == null) return;
            else
            {
                findLookup.isDeleted = true;
                _lookup.ReplaceOne(u => u.Id.ToString() == id, findLookup);

            }
        }

        public void UpdateLookup(string id,Lookup lookup){
            _lookup.ReplaceOne(a=>a.Id.ToString()==id,lookup);

        }
    }
}