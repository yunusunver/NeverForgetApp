using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using MongoDB.Driver;
using NeverForget.Backend.Models;
using NeverForget.Backend.Models.ViewModel;
using NeverForget.Backend.Utility;

namespace NeverForget.Backend.Services
{
    public class UserService:baseService
    {
        private readonly IMongoCollection<User> _users;
        private IConfiguration _configuration;

        public UserService(IHttpContextAccessor contextAccessor, INeverForgetDatabaseSettings settings,IConfiguration configuration):base(contextAccessor)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _configuration = configuration;

            _users = database.GetCollection<User>("User");
        }

        #region CRUD OPERATIONS


        // Get All
        public resultVM<User> GetAll(int offset, int limit, bool count)
        {
            int countData = 0;

            if (count == true)
            {
                // ownerid ye göre filtrele
                countData = Convert.ToInt32(_users.Find(user => user.ownerId==CurrentUser.ownerId).CountDocuments());
            }
            var userPagingList = _users.Find(user => user.isDeleted == false && user.ownerId==CurrentUser.ownerId ).Skip(offset).Limit(limit).ToList();
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

            // Encrypt SHA! 
            user.password = shaUtil.getSHA1(user.password);

            if (user == null) return null;

            // aynı maile sahip birisi varsa alert ver 
            // if(_users.Find(u=>u.email==user.))
            if (_users.Find(u => u.email == user.email).CountDocuments() > 0)
            {
                throw new Exception("Aynı emaile sahip zaten bir kullanıcı mevcut.");
            }

            else
            {
                _users.InsertOne(user);

            }

            return user;
        }

        public loginVM Login(string username, string password)
        {
            password = shaUtil.getSHA1(password);

            var key = _configuration.GetValue<string>("secretkey");
            var bytes = Encoding.UTF8.GetBytes(key);


            // Find user 
            var findedUser = _users.Find(u => u.username.Equals(username) && u.password.Equals(password)).FirstOrDefault();
            if (findedUser == null) throw new Exception("Böyle bir kullanıcı yok "); // usernotFound --> 
            
            // User var 
            // claimslere geçir 
            // Jwt token  8 biti  hangi 
            // Create JWT TOKEN HANDLER 
            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityTokenDescriptor descriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(new Claim[]{
                    new Claim("id",Convert.ToString(findedUser.Id)),
                    new Claim("name",Convert.ToString(findedUser.name)),
                    new Claim("surname",Convert.ToString(findedUser.surname)),
                    new Claim("username",Convert.ToString(findedUser.username)),
                    new Claim("ownerid",Convert.ToString(findedUser.ownerId)),
                }),
                Expires = DateTime.Now.AddDays(1) , // token expire ,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(bytes) ,SecurityAlgorithms.HmacSha512)
            };

            var createdToken = tokenHandler.CreateToken(descriptor);
            var token = tokenHandler.WriteToken(createdToken);
            
            loginVM loginvm = new loginVM() {
                email =  findedUser.email,
                Id = findedUser.Id,
                name = findedUser.name,
                ownerId = findedUser.ownerId,
                surname = findedUser.surname,
                Token = token,
                username = findedUser.username
            };

            return loginvm;

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
        public void updateUser(string id, User user)
        {
            //  user.password = shaUtil.getSHA1(user.password);
            // Aynı emaile sahip birinin mailini  girdiyse hata ver ! 
            // if(_users.Find(u=>u.email==user.email).CountDocuments()>0) {
            //     throw new Exception("Zten email mevcut...");
            // }


            _users.ReplaceOne(a => a.Id.Equals(id), user);


        }

        public User GetUser(string id)
        {
            var user = _users.Find(u => u.Id.Equals(id)).FirstOrDefault();
            return user;
        }

        #endregion

    }
}