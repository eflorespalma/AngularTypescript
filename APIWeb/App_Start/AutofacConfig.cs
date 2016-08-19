using Autofac;
using Autofac.Integration.WebApi;
using System.Reflection;
using System.Web.Http;

using BizLogic.Configuracion;
using Data.Configuracion;

namespace APIWeb
{
    public class AutofacConfig
    {
        public static void RegisterContainer()
        {
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterWebApiFilterProvider(config);

            #region Registering the Logic Interfaces
            builder.RegisterType<ItemBizLogic>().As<IItemBizLogic>();
            #endregion

            #region Registering The Data Interfaces
            builder.RegisterType<ItemData>().As<IItemData>();
            #endregion

            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
    }
}