using System.Collections.Generic;
using MongoDB.Driver;
using NeverForget.Backend.Models;

namespace NeverForget.Backend.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(INeverForgetDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _users = database.GetCollection<User>(settings.ForgetsCollectionName);
        }


        public List<User> Get() => _users.Find(user => true).ToList();
        public User Create(User user)
        {
            _users.InsertOne(user);
            return user;
        }

    }
    }