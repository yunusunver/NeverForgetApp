using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NeverForget.Backend.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public bool isDeleted { get; set; }
        public bool isNotusing { get; set; }
        public string ownerId { get; set; }
        // public DateTime createdDate { get; set; }
    }
}