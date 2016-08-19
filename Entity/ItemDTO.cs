using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class ItemDTO
    {
        public string idItem { get; set; }
        public string correlativo { get; set; }
        public string codigo { get; set; }
        public string descripcion { get; set; }
        public string unidadMedida { get; set; }
        public double peso { get; set; }
    }
}
