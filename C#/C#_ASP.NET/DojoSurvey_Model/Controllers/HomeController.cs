using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DojoSurvey_Model.Models;



namespace DojoSurvey_Model
{

    public class HomeController : Controller
    {

        [HttpGet("")]
        public ActionResult Index()
        {
            return View("Index");
        }

        [HttpPost("result")]
        public IActionResult Result(Survey mySurvey)
        {
            return View("Result", mySurvey);
        }

        [HttpGet("result")]
        public RedirectToActionResult Redirect()
        {
            return RedirectToAction("Index");
        }
        public IActionResult Contact()
            {
                ViewData["Message"] = "Your contact page.";
                return View();
            }
        public IActionResult About()
            {
                ViewData["Message"] = "Your about page.";
                return View();
            }
    }
}
