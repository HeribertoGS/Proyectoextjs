Ext.define('Proyectoextjs.model.productos.ProductoModel',{
    extend: 'Ext.data.Model',
    fields:[
        {name:"producto_k", type: 'int'},
        {name:"codigo_barras", type: 'int'},
        "nombre",
        "categoria_k_combo",
        "subcategoria_k_combo_dependiente",
        {name:"precio_costo", type: 'float'},
        {name:"precio_venta", type: 'float'},
        {name:"existencias", type: 'int'},
        "unidad_medida",
        {name:"estatus", type: 'int'},
        {name:"impuestos", type: 'float'},

    ],
    nombreToHTML: function (){
        return ' <b>'+this.get('nombre')+'</b>';
    },
    precioVentaToHTML: function (){
        return ' <b>'+this.get('precio_venta')+'</b>';
    }
});