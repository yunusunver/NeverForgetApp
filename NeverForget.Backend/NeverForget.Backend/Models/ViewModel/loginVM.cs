namespace NeverForget.Backend.Models.ViewModel
{
    public class loginVM
    {
        public string Id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string username { get; set; }
        public string email { get; set; }

        public string ownerId { get; set; }

        public string Token { get; set; }
    }
}