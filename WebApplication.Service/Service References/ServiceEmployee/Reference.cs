﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication.Service.ServiceEmployee {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Employee", Namespace="http://schemas.datacontract.org/2004/07/Cape.Entities")]
    [System.SerializableAttribute()]
    public partial class Employee : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string Employee_NameField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string Firts_NameField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int IdField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string Last_NameField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private decimal Total_LaborField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private WebApplication.Service.ServiceEmployee.TypeContract TypeContractField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Employee_Name {
            get {
                return this.Employee_NameField;
            }
            set {
                if ((object.ReferenceEquals(this.Employee_NameField, value) != true)) {
                    this.Employee_NameField = value;
                    this.RaisePropertyChanged("Employee_Name");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Firts_Name {
            get {
                return this.Firts_NameField;
            }
            set {
                if ((object.ReferenceEquals(this.Firts_NameField, value) != true)) {
                    this.Firts_NameField = value;
                    this.RaisePropertyChanged("Firts_Name");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Id {
            get {
                return this.IdField;
            }
            set {
                if ((this.IdField.Equals(value) != true)) {
                    this.IdField = value;
                    this.RaisePropertyChanged("Id");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Last_Name {
            get {
                return this.Last_NameField;
            }
            set {
                if ((object.ReferenceEquals(this.Last_NameField, value) != true)) {
                    this.Last_NameField = value;
                    this.RaisePropertyChanged("Last_Name");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal Total_Labor {
            get {
                return this.Total_LaborField;
            }
            set {
                if ((this.Total_LaborField.Equals(value) != true)) {
                    this.Total_LaborField = value;
                    this.RaisePropertyChanged("Total_Labor");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public WebApplication.Service.ServiceEmployee.TypeContract TypeContract {
            get {
                return this.TypeContractField;
            }
            set {
                if ((object.ReferenceEquals(this.TypeContractField, value) != true)) {
                    this.TypeContractField = value;
                    this.RaisePropertyChanged("TypeContract");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="TypeContract", Namespace="http://schemas.datacontract.org/2004/07/Cape.Entities")]
    [System.SerializableAttribute()]
    public partial class TypeContract : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string DescriptionField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Description {
            get {
                return this.DescriptionField;
            }
            set {
                if ((object.ReferenceEquals(this.DescriptionField, value) != true)) {
                    this.DescriptionField = value;
                    this.RaisePropertyChanged("Description");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServiceEmployee.IServiceEmployees")]
    public interface IServiceEmployees {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceEmployees/GetEmployees", ReplyAction="http://tempuri.org/IServiceEmployees/GetEmployeesResponse")]
        WebApplication.Service.ServiceEmployee.Employee[] GetEmployees();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IServiceEmployees/GetEmployees", ReplyAction="http://tempuri.org/IServiceEmployees/GetEmployeesResponse")]
        System.Threading.Tasks.Task<WebApplication.Service.ServiceEmployee.Employee[]> GetEmployeesAsync();
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IServiceEmployeesChannel : WebApplication.Service.ServiceEmployee.IServiceEmployees, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ServiceEmployeesClient : System.ServiceModel.ClientBase<WebApplication.Service.ServiceEmployee.IServiceEmployees>, WebApplication.Service.ServiceEmployee.IServiceEmployees {
        
        public ServiceEmployeesClient() {
        }
        
        public ServiceEmployeesClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public ServiceEmployeesClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceEmployeesClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceEmployeesClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public WebApplication.Service.ServiceEmployee.Employee[] GetEmployees() {
            return base.Channel.GetEmployees();
        }
        
        public System.Threading.Tasks.Task<WebApplication.Service.ServiceEmployee.Employee[]> GetEmployeesAsync() {
            return base.Channel.GetEmployeesAsync();
        }
    }
}
