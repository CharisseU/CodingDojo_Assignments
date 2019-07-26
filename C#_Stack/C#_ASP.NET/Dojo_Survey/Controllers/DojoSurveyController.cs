using Microsoft.AspNetCore.Mvc;
using System;

namespace Dojo_Survey.Controllers
{
    public class DojoSurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [Route("result")]
        public IActionResult result(string name, string location, string language, string comment){
            ViewBag.name = name;
            ViewBag.location = location;
            ViewBag.language = language;
            ViewBag.comment = comment;
            Console.WriteLine(ViewBag.name + ViewBag.location + ViewBag.language + ViewBag.comment);
            return View("result");
        }
    }
}