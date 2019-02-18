using Resources;
using System;
using System.Collections.Generic;
using System.Web.Configuration;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication.Business.Business;
using WebApplication.Business.Contracts;
using WebApplication.Entities;



namespace WebApp.MVC.Controllers
{
    //[CheckPermissions]
    public class BonusController : Controller
    {

        private IEmployeeBusiness oIEmployeeBusiness;
        private int idAplication = 0;

        // GET: Bonus
        public ActionResult Index()
        {
            try
            {
                ViewBag.Message = (TempData["Message"] != null) ? TempData["Message"].ToString() : "";
                ViewBag.ErrorMessage = (TempData["ErrorMessage"] != null) ? TempData["ErrorMessage"].ToString() : "";

                List<Employee> lstEmployee = new List<Employee>();

                Employee oEmployee = new Employee()
                {
                   // employee = Session["userAconting"].ToString()
                };

                oIEmployeeBusiness = new EmployeeBusiness();
                lstEmployee = oIEmployeeBusiness.GetListEmployee(oEmployee);



                return View(lstEmployee);
            }
            catch (Exception)
            {
                throw;
            }
        }

        // GET: Bonus/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Bonus/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Bonus/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Bonus/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Bonus/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Bonus/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Bonus/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }



        public JsonResult Detail(int id)
        {
            try
            {

                List<Bonus> lstBonus = new List<Bonus>();
                Employee oEmployee = new Employee()
                {
                    Id = id
                };
                oIEmployeeBusiness = new EmployeeBusiness();
                //lstBonus = oIEmployeeBusiness.GetListEmployeeBonus(oEmployee);




                //if (oEmailInfraestructure.SendEmail(oEmail))
                   // TempData["Message"] = string.Format("Email sent");
                return Json(lstBonus, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }



    }
}
