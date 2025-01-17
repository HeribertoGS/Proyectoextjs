Ext.define('app.view.productos.ComboProductos', {
    extend: 'Ext.form.ComboBox',

    xtype: 'comboproductos',

    queryMode: 'remote', // Permite búsquedas remotas
    displayField: 'nombre',
    valueField: 'producto_k',
    typeAhead: true,
    hideTrigger: true,

    initComponent: function () {
        // Asignar el store de productos
        Ext.apply(this, {
            store: Ext.create('app.store.productos.StoreProductos'),

            // Plantilla para desplegar resultados
            tpl: Ext.create('Ext.XTemplate',
                '<ul class="x-list-plain"><tpl for=".">',
                '<li class="x-boundlist-item">',
                '{producto_k} - {nombre} ({categoria_k_combo} - {subcategoria_k_combo_dependiente})',
                '</li>',
                '</tpl></ul>'
            ),

            displayTpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                '{nombre} ({categoria_k_combo} - {subcategoria_k_combo_dependiente})',
                '</tpl>'
            ),

            // Configuración de listeners para búsquedas
            listeners: {
                beforequery: function (queryEvent) {
                    const query = queryEvent.query.toLowerCase(); // Texto ingresado
                    const store = this.getStore();

                    store.clearFilter(true); // Limpia filtros previos

                    store.filterBy(function (record) {
                        // Filtrar por múltiples campos
                        return (
                            record.get('codigo_barras').toString().toLowerCase().includes(query) ||
                            record.get('nombre').toLowerCase().includes(query) ||
                            record.get('categoria_k_combo').toLowerCase().includes(query) ||
                            record.get('subcategoria_k_combo_dependiente').toLowerCase().includes(query) ||
                            record.get('unidad_medida').toLowerCase().includes(query) ||
                            record.get('estatus').toString().includes(query) ||
                            record.get('impuestos').toString().includes(query)
                        );
                    });
                },
                select: function (combo, record) {
                    Ext.Msg.alert('Producto seleccionado', `Seleccionaste: ${record.get('nombre')}`);
                }
            }
        });

        this.callParent();
    }
});
