using Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;


namespace WebApp.MVC.Controllers
{
    //[CheckPermissions]
    public class ReportController : Controller
    {
        // GET: Report
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Report()
        {
            try
            {
                ViewBag.Message = (TempData["Message"] != null) ? TempData["Message"].ToString() : "";
                ViewBag.ErrorMessage = (TempData["ErrorMessage"] != null) ? TempData["ErrorMessage"].ToString() : "";

                return View();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}