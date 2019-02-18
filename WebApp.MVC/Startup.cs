using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebApp.MVC.Startup))]
namespace WebApp.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
