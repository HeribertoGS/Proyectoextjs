Ext.define('classic.src.view.productos.PanelProductos', {
    extend: 'Ext.Panel',
    xtype: 'panelproductos',
    layout: 'border',
    alias: 'panel.panel',
    controller: 'panelproductosctr',
    tbar: [
        {
            text: 'Agregar producto',
            iconCls: 'x-fa fa-plus',
            handler: 'agregarProducto'
        }, '->', {
            xtype: 'comboproductos',
            emptyText: 'Buscar producto',
            width: 300,
            listeners: {
                change: 'filtrarProductos'
            }
        }
    ],

    items: [
        {
            region: 'center',
            layout: 'fit',
            xtype: 'tabpanel',
            height: '450',
            items: [{
                height: '100',
                title: 'Lista de productos',
                xtype: 'gridproductos',
                reference: 'gridlistado',
                listeners: {
                    itemclick: 'showProductoDetalle'
                }
            }],
            bbar: ['Zona baja (Productos)', '-', {
                text: 'Agregar un nuevo contenido',
                scale: 'large',
                handler: function () {
                    var num = Ext.id(),
                        panel = Ext.create('Ext.Panel', {
                            title: 'Detalle producto ' + num,
                            html: 'Info Producto ' + num,
                            closable: true,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [{
                                title: 'Detalle del producto ' + num,
                                xtype: 'panel',
                                flex: 3,
                                height: 450,
                                layout: 'card',
                                items: [{
                                    bodyStyle: 'background-color: #ABC; font-size: 30px; color:#345',
                                    html: 'detalle 1'
                                }, {
                                    bodyStyle: 'background-color: #A6C; font-size: 30px; color:#345',
                                    html: 'detalle 2'
                                }],
                                buttons: [{
                                    text: 'Panel 1',
                                    scale: 'large',
                                    handler: function () {
                                        this.up('panel').layout.setActiveItem(0);
                                    }
                                },
                                    {
                                        text: 'Panel 2',
                                        scale: 'large',
                                        handler: function () {
                                            this.up('panel').layout.setActiveItem(1);
                                        }
                                    }]
                            },
                                {
                                    html: 'Al seleccionar panel 2',
                                    flex: 1,
                                    height: 450,
                                    bodyStyle: 'background-color:#DEF; font-size: 30px; color:#345'
                                }]
                        });
                    this.up('tabpanel').add(panel);
                    this.up('tabpanel').setActiveItem(panel);
                }
            }]
        },
        {
            height: 160, // px
            region: 'south',
            bodyPadding: 10,
            reference: 'paneldetalle',
            tpl: '<div><div style="float: left; margin-right:20px;">' +
                '<img src="resources/img/producto.png" width="100px" height="100px"></div>' +
                '<h2>{nombre}</h2>' +
                '<span style="font-size: 16px; color: #5FA2DD;">Categoría: {categoria_k_combo}</span><br>' +
                '<span>Precio de costo: {precio_costo}</span><br>' +
                '<span>Precio de venta: {precio_venta}</span><br>' +
                '<span>Existencias: {existencias}</span><br>' +
                '</div>'
        }
    ],

    seleccionar: function () {
        var rec = this.lookupReference('gridlistado').getSelectionModel().getSelection();
        this.fireEvent('selectproducto', this, rec[0]);
    }
});
