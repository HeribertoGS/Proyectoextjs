Ext.define('Proyectoextjs.view.productos.PanelProductosController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.panelproductosctr',

    showProductoDetalle: function (grid, rec) {
        console.info(rec);

        var panel = this.lookupReference('paneldetalle');
        panel.update(rec.data);
    },

    agregarProducto: function () {
        var window = Ext.create('Ext.Window', {
            modal: true,
            title: 'Agregar un nuevo producto',
            height: 480,
            width: 420,
            layout: 'fit',
            items: [
                {
                    xtype: 'formproducto'
                }
            ],
            buttons: [
                {
                    text: 'Guardar',
                    handler: function () {
                        var form = this.up('window').down('formproducto');
                        if (form.isValid()) {
                            form.guardar();
                            window.close();
                        }
                    }
                },
                {
                    text: 'Cerrar',
                    handler: function () {
                        window.close();
                    }
                }
            ]
        });
        window.show();
    },

    editarProducto: function (grid, rowIndex) {
        // Obtén el registro seleccionado
        var rec = grid.getStore().getAt(rowIndex);

        // Crear la ventana para editar
        var window = Ext.create('Ext.Window', {
            modal: true,
            title: 'Editar producto: ' + rec.get('nombre'),
            height: 480,
            width: 420,
            layout: 'fit',
            items: [
                {
                    xtype: 'formproducto' // Asegúrate de que este xtype está bien definido
                }
            ],
            listeners: {
                afterrender: function (windo) {
                    // Cargar datos en el formulario después de renderizar la ventana
                    var form = windo.down('formproducto');
                    form.loadRecord(rec); // Cargar el registro en el formulario
                }
            },
            buttons: [
                {
                    text: 'Guardar cambios',
                    handler: function () {
                        var form = this.up('window').down('formproducto');
                        if (form.isValid()) {
                            form.updateRecord(); // Actualizar el registro con los nuevos valores
                            form.guardar();
                            window.close();
                        }
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        window.close();
                    }
                }
            ]
        });

        // Mostrar la ventana
        window.show();
    }
});
