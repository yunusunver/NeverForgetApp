using System.Collections.Generic;

namespace NeverForget.Backend.Models.ViewModel
{
    public class resultVM<TEntity>  where TEntity:class,new()
    {
      
        
        public List<TEntity> results { get; set; }   
        public int count { get; set; }
    }
}