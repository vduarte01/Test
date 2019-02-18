using System.Web;
using System.Web.Optimization;

namespace WebApp.MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                       "~/Scripts/jquery-{version}.js",
                       "~/Scripts/jquery.cookie.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                     "~/Scripts/ui/jquery-ui.js",
                      "~/Scripts/ui/jquery-ui.min.js",
                      "~/Scripts/ui/jquery-ui.autocomplete.js",
                      "~/Scripts/ui/jquery-ui.tooltip.js",
                     "~/Scripts/bootstrap-datepicker.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                    "~/Scripts/bootstrap.js",
                    "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/Block").Include(
                  "~/Scripts/ui/jquery.blockUI.js",
                  "~/Scripts/Block.js"
                  ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                     "~/Content/bootstrap.css",
                     "~/Content/bootstrap-datepicker.css",
                     "~/Content/MasterApp.css",
                     "~/Content/themes/base/jquery-ui.css",
                     "~/Content/themes/base/jquery.ui.tooltip.css",
                     "~/Content/site.css"));


            bundles.Add(new ScriptBundle("~/bundles/Reports").Include(
                      "~/Scripts/ViewReport-{version}.js"));


            bundles.Add(new ScriptBundle("~/bundles/SendEmail").Include(
                      "~/Scripts/SendEmail-{version}.js"));



            bundles.Add(new ScriptBundle("~/bundles/UpdatePTO").Include(
                      "~/Scripts/PTO-Update-{version}.js"));

            #region DataTables

            bundles.Add(new ScriptBundle("~/bundles/DataTablesJS").Include(
                        "~/Scripts/DataTables/jquery.dataTables.js",
                        "~/Scripts/DataTables/dataTables.tableTools.js",
                        "~/Scripts/DataTables-Generic.js"));

            bundles.Add(new StyleBundle("~/bundle/DataTablesCSS").Include(
                "~/Content/DataTables/css/jquery.dataTables.css",
                "~/Content/DataTables/css/dataTables.tableTools.css"));
            #endregion DataTables

            #region popup
            bundles.Add(new StyleBundle("~/bundle/jqueryui").Include(
                "~/Content/jquery-ui.css"));
            #endregion popup

            #region PTO
            bundles.Add(new ScriptBundle("~/bundles/PTOCreateUser").Include(
                        "~/Scripts/PTO-CreateUser-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/PTOEditUser").Include(
                "~/Scripts/PTO-EditUser-{version}.js"));
            #endregion


            #region Detail

            bundles.Add(new ScriptBundle("~/bundles/Detail").Include(
            "~/Scripts/DetailBonus-{version}.js"));

            #endregion


            #region login

            bundles.Add(new StyleBundle("~/Content/login").Include(
                 "~/Content/bootstrap.min.css",
                 "~/Content/font-awesome.min.css",
                 "~/Content/icon-font.min.css",
                 "~/Content/vendor/animate/animate.css",
                 "~/Content/vendor/css-hamburgers/hamburgers.min.css",
                 "~/Content/vendor/animsition/css/animsition.min.css",
                 "~/Content/vendor/select2/select2.min.css",
                 "~/Content/vendor/daterangepicker/daterangepicker.css",
                 "~/Content/util.css",
                 "~/Content/main.css"));


            bundles.Add(new ScriptBundle("~/bundles/login").Include(
                "~/Scripts/vendor/jquery/jquery-3.2.1.min.js",
                "~/Scripts/vendor/animsition/js/animsition.min.js",
                "~/Scripts/vendor/bootstrap/js/popper.js",
                "~/Scripts/vendor/bootstrap/js/bootstrap.min.js",
                "~/Scripts/vendor/select2/select2.min.js",
                "~/Scripts/vendor/daterangepicker/moment.js",
                "~/Scripts/vendor/daterangepicker/daterangepicker.js",
                "~/Scripts/vendor/countdowntime/countdowntime.js",
                "~/Scripts/main.js",
                "~/Scripts/MasterApp.js",
                "~/Scripts/jquery.cookie.js"));

            #endregion


            #region Layout

            bundles.Add(new StyleBundle("~/Content/layout").Include(
                "~/Content/vendor/bootstrap/css/bootstrap.min.css",
                "~/Content/vendor/metisMenu/metisMenu.min.css",
                "~/Content/dist/css/sb-admin-2.css",
                "~/Content/vendor/font-awesome/css/font-awesome.min.css"));


            bundles.Add(new ScriptBundle("~/bundles/layout").Include(
                "~/Scripts/vendor/jquery/jquery/jquery.min.js",
                "~/Scripts/vendor/bootstrap/js/popper.js",
                "~/Scripts/vendor/bootstrap/js/bootstrap/bootstrap.min.js",
                "~/Scripts/vendor/metisMenu/metisMenu.min.js",
                "~/Scripts/vendor/dist/js/sb-admin-2.js",
                "~/Scripts/MasterApp.js",
                "~/Scripts/jquery.cookie.js"));
            #endregion

            bundles.Add(new ScriptBundle("~/bundles/DatePicker").Include(
                     "~/Scripts/DatePicker-{version}.js"));

        }
    }
}
