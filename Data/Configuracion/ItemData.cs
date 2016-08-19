using Entity;
using System.Collections.Generic;

namespace Data.Configuracion
{
    public class ItemData : IItemData
    {
        public List<ItemDTO> getListItems()
        {
            return new List<ItemDTO>()
            {
                new ItemDTO() { idItem= "00001", codigo = "ITEM0032", correlativo= "001", descripcion="Hidrobomba XTR 56", peso= 198, unidadMedida = "Kilos" },
                new ItemDTO() { idItem= "00002", codigo = "ITEM0033", correlativo= "002", descripcion="Brida Hisotermica", peso= 198, unidadMedida = "Kilos" },
                new ItemDTO() { idItem= "00003", codigo = "ITEM0034", correlativo= "003", descripcion="Pernos XL 14.G", peso= 198, unidadMedida = "Kilos" },
                new ItemDTO() { idItem= "00004", codigo = "ITEM0035", correlativo= "004", descripcion="Tuercas 3DA.9DA", peso= 198, unidadMedida = "Kilos" },
            };
        }
    }
}
