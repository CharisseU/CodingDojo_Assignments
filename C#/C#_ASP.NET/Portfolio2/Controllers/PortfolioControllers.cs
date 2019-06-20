using Microsoft.AspNetCore.Mvc;

namespace Portfolio2.Controllers
{
    public class PortfolioController : Controller
    {
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {   
           return View("home");
        }
        [HttpGet]
        [Route("projects")]
        public ViewResult Projects()
        {
            return View("projects");
        }
        [HttpGet]
        [Route("contact")]
        public ViewResult Contact()
        {
            return View("contact");
        }
    }
}