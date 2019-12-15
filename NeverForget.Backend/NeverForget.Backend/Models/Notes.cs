using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NeverForget.Backend.Models
{
    public class Notes
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }
        public ObjectId categoryId { get; set; }
        public string name { get; set; }
        public string Description { get; set; }
        public ObjectId userId { get; set; }
        public bool isDeleted { get; set; }
    }
}