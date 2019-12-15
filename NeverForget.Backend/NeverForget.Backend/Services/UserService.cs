using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using NeverForget.Backend.Models;
using NeverForget.Backend.Models.ViewModel;

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

        #region CRUD OPERATIONS
            

        // Get All
        public resultVM<User> GetAll(int offset, int limit, bool count)
        {
            int countData = 0;

            if (count == true)
            {
                // ownerid ye göre filtrele
                countData = Convert.ToInt32(_users.Find(user => true).CountDocuments());
            }
            var userPagingList = _users.Find(user => user.isDeleted == false).Skip(offset).Limit(limit).ToList();
            // owner id ye göre listele 

            resultVM<User> userList = new resultVM<User>()
            {
                count = countData,
                results = userPagingList
            };
            return userList;
        }
        
        // Create
        public User Create(User user)
        {
            // Rightids e göre filtreleme  

            if (user == null) return null;

            // aynı maile sahip birisi varsa alert ver 
            // if(_users.Find(u=>u.email==user.))
            if (_users.Find(u=>u.email==user.email).CountDocuments()>0)
            {
                throw new Exception("Aynı emaile sahip zaten bir kullanıcı mevcut.");
            }

            else
            {
                _users.InsertOne(user);

            }

            return user;
        }

        // delete 
        public void deleteUser(string id)
        {
            if (id == null) return;
            // kullanıcıyı silme hakkın var mı 
            User findedUser = _users.Find(user => user.Id.Equals(id)).FirstOrDefault();

            if (findedUser == null) return;
            else
            {
                findedUser.isDeleted = true;
                _users.ReplaceOne(u => u.Id.Equals(id), findedUser);

            }
        }

        // Update 
        public void updateUser(string id,User user){
            // Aynı emaile sahip birinin mailini  girdiyse hata ver ! 
            // if(_users.Find(u=>u.email==user.email).CountDocuments()>0) {
            //     throw new Exception("Zten email mevcut...");
            // }

            
            _users.ReplaceOne(a=>a.Id.Equals(id),user);

            
        }

        public User GetUser(string id){
            var user = _users.Find(u => u.Id.Equals(id)).FirstOrDefault();
                        return user;
        }
        
        #endregion

    }
}