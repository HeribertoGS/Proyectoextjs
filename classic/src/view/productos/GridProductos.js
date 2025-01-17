Ext.define('classic.src.view.productos.GridProductos', {
    extend: 'Ext.grid.Panel',

    xtype: 'gridproductos',

    initComponent: function () {
        // Crear el store para productos
        var productStore = Ext.create('app.store.productos.StoreProductos', {
            autoLoad: true
        });

        // Configuración del grid
        Ext.apply(this, {
            store: productStore,

            columns: [
                {
                    text: 'Nombre',
                    dataIndex: 'nombre',
                    flex: 1,
                    renderer: function (val, meta, rec) {
                        return `<b>${Ext.String.htmlEncode(rec.get('nombre'))}</b>`;
                    }
                },
                {
                    text: 'Categoría',
                    dataIndex: 'categoria_k_combo',
                    flex: 1,
                    menuDisabled: true
                },
                {
                    text: 'Precio Costo',
                    dataIndex: 'precio_costo',
                    width: 120,
                    renderer: function (value) {
                        return Ext.util.Format.currency(value, '$', 2);
                    },
                    menuDisabled: true
                },
                {
                    text: 'Precio Venta',
                    dataIndex: 'precio_venta',
                    width: 120,
                    renderer: function (value) {
                        return `<b>${Ext.util.Format.currency(value, '$', 2)}</b>`;
                    },
                    menuDisabled: true
                },
                {
                    text: 'Existencias',
                    dataIndex: 'existencias',
                    width: 100,
                    menuDisabled: true
                },
                {
                    text: 'Estatus',
                    dataIndex: 'estatus',
                    width: 100,
                    menuDisabled: true,
                    renderer: function (val) {
                        if (val === 0) {
                            return '<span style="color:#dc1515">Inactivo</span>';
                        }
                        return '<span style="color:#28a745">Activo</span>';
                    }
                },
                {
                    xtype: 'actioncolumn',
                    width: 70,
                    items: [
                        {
                            iconCls: 'fas fa-edit',
                            tooltip: 'Editar producto',
                            handler: 'editarProducto' // Llama al método del controlador
                        },

                        {
                            iconCls: 'fas fa-trash-alt',
                            tooltip: 'Eliminar producto',
                            handler: function (grid, rowIndex, colIndex) {
                                var rec = grid.getStore().getAt(rowIndex);
                                Ext.Msg.confirm(
                                    'Eliminar producto',
                                    `¿Está seguro de que desea eliminar <b>${rec.get('nombre')}</b>?`,
                                    function (respuesta) {
                                        if (respuesta === 'yes') {
                                            grid.getStore().remove(rec);
                                        }
                                    }
                                );
                            }
                        }
                    ]
                }
            ],

            // Barra de paginación
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: productStore,
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });

        // Llamar al método del padre
        this.callParent();
    }
});
