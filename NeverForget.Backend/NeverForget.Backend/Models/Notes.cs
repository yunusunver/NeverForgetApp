using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NeverForget.Backend.Models
{
    public class Notes
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string categoryId { get; set; }
        public string name { get; set; }
        public string Description { get; set; }
        public string userId { get; set; }
        public bool isDeleted { get; set; }
        public string Code { get; set; }
    }
}