using System;

namespace Server_Client.Models
{
    public class Candidate
    {
        
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime? YearStarted { get; set; }
        public DateTime UpdatedAt { get; set; }
        public List<string> KnownLanguages { get; set; }

      
    }
        

    }
    


