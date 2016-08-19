module app.common {
    export interface IItem {
        idItem?: string;
        correlativo?: string;
        codigo?: string;
        descripcion?: string;
        unidadMedida?: string;
        peso?: number;
    }
}