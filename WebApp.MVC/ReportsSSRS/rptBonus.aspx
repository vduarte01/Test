<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="rptBonus.aspx.cs" Inherits="WebApp.MVC.ReportsSSRS.rptBonus" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=14.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
 <div class="row">
        <div class="mjsbox ">
            <div class="message alertVB hide ">
                <p>
                    <asp:Label ID="lblMessage" runat="server" Text=""></asp:Label>
                </p>
            </div>
            <div class="error alertVBE hide">
                <p>
                    <asp:Label ID="lblMessageError" runat="server" Text=""></asp:Label>
                </p>
            </div>
        </div>
    </div>



    <form id="form1" runat="server">
        <div class="main-content">
            <div class="col-xs-12 col-sm-11 col-lg-11">
                <div class="row">
                    <div class="form-group">
                        <div class="col-xs-12 col-sm-3 col-lg-3">
                            <div>
                                <asp:ScriptManager ID="ScriptManager" runat="server"></asp:ScriptManager>
                                <rsweb:ReportViewer ID="rptForBonus" runat="server" Width="100%" Height="650">
                                </rsweb:ReportViewer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </form>
</body>
</html>
