namespace WebApplication.Entities
{
    public class LogError
    {
        public string compilation { get; set; }
        public string message { get; set; }
        public string method { get; set; }
        public string page { get; set; }
        public string parameters { get; set; }
        public string project { get; set; }
        public string state { get; set; }
    }
}