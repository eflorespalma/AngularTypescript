using Data.Configuracion;
using Entity;
using System.Collections.Generic;

namespace BizLogic.Configuracion
{
    public class ItemBizLogic : IItemBizLogic
    {
        readonly IItemData dataAccess;

        public ItemBizLogic(IItemData _dataAccess)
        {
            dataAccess = _dataAccess;
        }

        public List<ItemDTO> getListItems()
        {
            return dataAccess.getListItems();
        }
    }
}
