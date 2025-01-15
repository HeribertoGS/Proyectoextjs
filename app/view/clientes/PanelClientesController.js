Ext.define('Proyectoextjs.view.clientes.PanelClientesController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.panelclientesctr',

    showClienteDetalle: function(grid, rec){
        console.info(rec);

        var panel=this.lookupReference('paneldetalle');
        panel.update(rec.data);
    },
    agregarCliente: function(){
        var window= Ext.create('Ext.Window',{
            modal: true,
            title:'Agregar a un nuevo cliente',
            height:480,
            width:420,
            layout: 'fit',
            items:[{
                xtype: 'formcliente'
            }],
            buttons:[
                {
                text:'Submit',
                handler: function(){
                    var form= this.up('window').down('formcliente');
                    if(form.isValid())
                        form.doSubmit();
                }
            }, {
                text:'Load',
                handler: function(){
                    var form= this.up('window').down('formcliente');
                    form.doLoad();
                }
            }, {
                text:'Cerrar',
                handler: function(){
                    window.close();
                }
            }]
        });
        window.show();
    }
});