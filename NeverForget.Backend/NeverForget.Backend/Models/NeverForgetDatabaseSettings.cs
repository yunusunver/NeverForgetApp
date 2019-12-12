namespace NeverForget.Backend.Models
{

    public class NeverForgetDatabaseSettings : INeverForgetDatabaseSettings
    {
         public string ForgetsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface INeverForgetDatabaseSettings
    {
        string ForgetsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}