Ext.define('app.store.productos.StoreProductos',{
    extend: 'Ext.data.Store',

    model: 'Proyectoextjs.model.productos.ProductoModel',

    proxy:{
        type: 'ajax',
        url: 'server/listproducts.json',

        reader:{
            type: 'json',
            rootProperty:'data',
            totalProperty: 'numFilas'
        }
    }

});