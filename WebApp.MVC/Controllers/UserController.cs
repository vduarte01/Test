using WebApplication.Business.Business;
using WebApplication.Business.Contracts;
using WebApplication.Entities;
using Resources;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using WebApplication.Dictionary;

namespace WebApp.MVC.Controllers
{
    //[CheckPermissions]
    public class UserController : Controller
    {
        private int idAplication = 0;

        //private IPTOBusiness oIPTOBusiness;
        //private UsersApp oUserApp;

        /// <summary>
        ///
        /// </summary>
        /// <returns></returns>
        public ActionResult CraftUser()
        {
            try
            {
                ViewBag.Message = (TempData["Message"] != null) ? TempData["Message"].ToString() : "";
                ViewBag.ErrorMessage = (TempData["ErrorMessage"] != null) ? TempData["ErrorMessage"].ToString() : "";

                List<User> listUsers = new List<User>();
                User oUser = new User();
                //oUserApp = new UsersApp();

                int.TryParse(WebConfigurationManager.AppSettings["idApplication"].ToString(), out idAplication);
                oUser.idAplication = idAplication;
                oUser.UserId = (int)Session["IdUser"];
                //listUsers = oUserApp.LstUserApplication(oUser);

                if (listUsers != null)
                {
                    return View(listUsers);
                }
            }
            catch (Exception)
            {
                throw;
            }
            return View();
        }

        /// <summary>
        /// Shows the view fo creating a new user
        /// </summary>
        /// <returns>
        /// if command is succesfull
        /// if not - message with the error occurred
        /// </returns>
        public ActionResult Create()
        {
            try
            {
                ViewBag.Message = (TempData["Message"] != null) ? TempData["Message"].ToString() : "";
                ViewBag.ErrorMessage = (TempData["ErrorMessage"] != null) ? TempData["ErrorMessage"].ToString() : "";

                ViewBag.RolesByAdmin = ListRoles();
            }
            catch (Exception)
            {
                throw;
            }
            return View();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="oUser"></param>
        /// <param name="fileExcel"></param>
        /// <param name="firstName"></param>
        /// <param name="lastName"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Create(User oUser, HttpPostedFileBase fileExcel, string firstName, string lastName)
        {
            try
            {
                int.TryParse(WebConfigurationManager.AppSettings["idApplication"].ToString(), out idAplication);
                int idUser = 0;
                //int idEmployee = 0;

                oUser.idAplication = idAplication;
                ViewBag.RolesByAdmin = ListRoles();
                //oUserApp = new UsersApp();
                //oIEmployeeBusiness = new EmployeeBusiness();
                //oIFileBusiness = new FileBusiness();


                string[] name = firstName.Split(' ');
                string[] namelast = lastName.Split(' ');



                oUser.userName = name[0].Substring(0, 1) + namelast[0];
                oUser.userAconting = namelast[0] + name[0].Substring(0, 1);

                oUser.name = firstName + " " + lastName;
                oUser.changePasswordRequiered = true;

                //idUser = oUserApp.CreateUserApplication(oUser);


                TempData["Message"] = string.Format(CustomMessage.INTESERT_OK, "User");
                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                throw;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public ActionResult Edit(string userName)
        {
            User oUser = new User();
            List<User> ListEditUser = new List<User>();
            //oUserApp = new UsersApp();

            try
            {
                ViewBag.Message = (TempData["Message"] != null) ? TempData["Message"].ToString() : "";
                ViewBag.ErrorMessage = (TempData["ErrorMessage"] != null) ? TempData["ErrorMessage"].ToString() : "";

                int.TryParse(WebConfigurationManager.AppSettings["idApplication"].ToString(), out idAplication);

                ViewBag.RolesByAdmin = ListRoles();
                oUser.userName = userName;
                oUser.idAplication = idAplication;
                //ListEditUser = oUserApp.LstUserApplication(oUser);

                oUser = (from item in ListEditUser
                         select new User
                         {
                             UserId = item.UserId,
                             autorize = item.autorize,
                             changePasswordRequiered = item.changePasswordRequiered,
                             email = item.email,
                             name = item.name,
                             password = item.password,
                             rol = item.rol,
                             userAconting = item.userAconting,
                             idAplication = item.idAplication,
                             userName = item.userName,
                             LastDate = item.LastDate
                         }).FirstOrDefault();

            }
            catch (Exception)
            {
                throw;
            }
            return View(oUser);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="oUser"></param>
        /// <param name="fileExcel"></param>
        /// <param name="firstName"></param>
        /// <param name="lastName"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Edit(User oUser, HttpPostedFileBase fileExcel, string firstName, string lastName)
        {
            try
            {
                //oIEmployeeBusiness = new EmployeeBusiness();
                //oIFileBusiness = new FileBusiness();
                //oUserApp = new UsersApp();

                int.TryParse(WebConfigurationManager.AppSettings["idApplication"].ToString(), out idAplication);

                oUser.idAplication = idAplication;
                ViewBag.RolesByAdmin = ListRoles();
                oUser.rol = new Rol() { idRol = oUser.rol.idRol };
                oUser.name = firstName + " " + lastName;
                oUser.LastDate = DateTime.Now;
                oUser.changePasswordRequiered = true;

                //oUserApp.UpdateUserApplication(oUser);

                //Employee oEmployee = new Employee()
                //{
                //    employee = oUser.userAconting,
                //    firstName = firstName,
                //    lastName = lastName,
                //    number = oUser.UserId
                //};

                //oEmployee = oIEmployeeBusiness.GetEmployee(oEmployee);

                //if (fileExcel != null)
                //{
                //    SaveExcelFile(fileExcel, oEmployee.id);
                //    ENTITIES.File oFile = new ENTITIES.File() 
                //    {
                //        name = fileExcel.FileName
                //    };

                //    oIFileBusiness.CreateFile(oEmployee, oFile);
                //}

                TempData["Message"] = string.Format(CustomMessage.UPDATE_OK, "User");

                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                throw;
            }
        }


        public JsonResult Email(string user, string pass, string email, string otherEmail)
        {
            try
            {
                Email oEmail = new Email();
                //EmailInfraestructure oEmailInfraestructure = new EmailInfraestructure();
                //oIVacationBusiness = new VACATIONBusiness();

                #region notify

                oEmail.body = user + "," + pass;
                oEmail.to = email;
                oEmail.cc = (otherEmail == "") ? "" : otherEmail;
                oEmail.idTemplate = (int)Dictionary.TemplatesEmail.PTO;
                oEmail.subject = "";
                oEmail.template = "";

                #endregion notify

                //if (oEmailInfraestructure.SendEmail(oEmail))
                    TempData["Message"] = string.Format("Email sent");
                return Json("Ok", JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }



        /// <summary>
        /// Obtains the user list
        /// </summary>
        /// <returns>
        /// if command is succesfull - view with the Project list
        /// if not - message with the error occurred
        /// </returns>
        public ActionResult Index()
        {
            try
            {
                ViewBag.Message = (TempData["Message"] != null) ? TempData["Message"].ToString() : "";
                ViewBag.ErrorMessage = (TempData["ErrorMessage"] != null) ? TempData["ErrorMessage"].ToString() : "";

                List<User> listUsers = new List<User>();
                User oUser = new User();
                //oUserApp = new UsersApp();

                int.TryParse(WebConfigurationManager.AppSettings["idApplication"].ToString(), out idAplication);
                oUser.idAplication = idAplication;
                //listUsers = oUserApp.LstUserApplication(oUser);

                if (listUsers != null)
                {
                    return View(listUsers);
                }
            }
            catch (Exception)
            {
                throw;
            }
            return View();
        }

        /// <summary>
        /// Delivers the list of Roles
        /// </summary>
        /// <returns>
        /// if command is succesfull - Roles list
        /// if not - message with the error occurred
        /// </returns>
        public List<SelectListItem> ListRoles()
        {
            List<SelectListItem> _ListRoles = new List<SelectListItem>();
            try
            {
                //oUserApp = new UsersApp();
                List<Rol> listRol = new List<Rol>();
                //listRol = oUserApp.ListRoles();
                foreach (var item in listRol)
                {
                    _ListRoles.Add(new SelectListItem() { Value = item.idRol.ToString(), Text = item.Name });
                }
            }
            catch (Exception)
            {
                throw;
            }
            return _ListRoles;
        }

        /// <summary>
        /// Save the excel files
        /// </summary>
        private void SaveExcelFile(HttpPostedFileBase fileExcel, int idPto)
        {
            try
            {
                string pathFile = String.Empty;
                string fileName = String.Empty;
                string principalFolder = String.Empty;

                var pathUrl = System.Web.HttpContext.Current.Request.Url.Host.ToLower();

                if (pathUrl == "localhost")
                    principalFolder = ConfigurationManager.AppSettings["pathFile"].ToString() + idPto;
                else
                    principalFolder = ConfigurationManager.AppSettings["pathFileServer"].ToString() + idPto;

                bool Exists = System.IO.Directory.Exists(Server.MapPath(principalFolder));

                if (!Exists)
                    System.IO.Directory.CreateDirectory(Server.MapPath(principalFolder));

                fileName = Path.GetFileName(fileExcel.FileName);
                pathFile = principalFolder + "/" + fileName;

                var locationDirectory = Server.MapPath(pathFile);

                fileExcel.SaveAs(locationDirectory);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}