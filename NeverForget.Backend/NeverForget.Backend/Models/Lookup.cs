using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NeverForget.Backend.Models
{
    public class Lookup
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string type { get; set; }
        public string parentId { get; set; }
        public bool isDeleted { get; set; }
        public int order { get; set; }
    }
}