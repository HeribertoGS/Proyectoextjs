Ext.define('Proyectoextjs.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var panel = Ext.createByAlias('panel.panel');

        var win = Ext.create('classic.src.view.common.WindowStatusBar', {
            title: 'Bienvenido usuario',
            width: 800,
            height: 600,
            layout: 'fit',

            items: panel,
            buttons: [
                {
                    text: 'Seleccionar',
                    scope: this,
                    handler: function () {
                        panel.seleccionar();
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        win.hide();
                    }
                }
            ]
        });

        panel.on({
            selectcliente: function (panelclientes, rec) {
                win.hide();
                Ext.Msg.confirm(
                    'Cliente' + rec.data.cliente_k,
                    'El cliente seleccionado fue ' + rec.data.nombre
                );
            }
        });

        win.show();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
