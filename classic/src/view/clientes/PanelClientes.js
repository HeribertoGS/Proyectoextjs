Ext.define('classic.src.view.clientes.PanelClientes',{
    extend: 'Ext.Panel',
    xtype:'panelclientes',
    layout:'border',
    alias: 'panel.panel',
    controller: 'panelclientesctr',
    tbar:[
        {
            //region: 'north',
            text:'Agregar cliente',
            iconCls:'x-fa fa-plus',
            handler: 'agregarCliente'
        }, '->',{
            xtype:'comboclientes',
            emptyText:'Buscar cliente',
            width: 300//px,

        }],

    items:[
        {
        region:'center',
        layout:'fit',
        xtype:'tabpanel',
        height: '450',
        items:[{
            height:'100',
            title:'Lista de clientes',
            xtype:'gridclientes',
            reference: 'gridlistado',
            listeners: {
                itemclick: 'showClienteDetalle'
            }
        }],
        bbar:['Bottom bar (Zona baja)','-',{
            text:'Agregar un nuevo contenido',
            scale:'large',
            handler: function (){
            var num=Ext.id(),
                panel=Ext.create('Ext.Panel',{
                    //configuraciones
                    title:'Detalle cliente'+num,
                    html: 'Info Cliente'+num,
                    closable: true,

                    layout:{
                        type: 'hbox',
                        aling: 'stretch'
                    },
                    items:[{
                        title:'Detalle del cliente'+num,
                        xtype: 'panel',
                        flex:3, 
                        height:450,
                        layout:'card',
                        items:[{
                            bodyStyle:'background-color: #ABC; font-size: 30px; color:#345',
                            html:'detalle 1'
                        },{
                            bodyStyle:'background-color: #A6C; font-size: 30px; color:#345',
                            html:'detalle 2'
                        }],
                        buttons: [{
                            text: 'Panel 1',
                            scale: 'large',
                            handler: function () {
                                this.up('panel').layout.setActiveItem(0);
                            }
                        },                        {
                            text:'Panel 2',
                            scale: 'large',
                            handler: function(){
                                this.up('panel').layout.setActiveItem(1);
                            }
                        }]
                    },
                {
                    html:'Al seleccionar panel 2',
                    flex:1,
                    height:450,
                    bodyStyle:'background-color:#DEF; font-size: 30px; color:#345'
                }]
                });
                this.up('tabpanel').add(panel);
                this.up('tabpanel').setActiveItem(panel);            
             }
        }]
        },
        {
       height:160, //px
       region:'south',
       bodyPadding: 10,
        reference:  'paneldetalle',
        tpl: '<div><div style="float: left; margin-right:20 px;"> <img src="resources/img/pepe-d-pepe.gif" width="100px" height="100px"></div>'+
        '<h2>{nombre}</h2>'+
        '<span style="font-size: 16px; color: #5FA2DD;">{rolnombre}</span><br>'+
        '<span>{email}</span><br>'
        +'</div>'
        },
       
    ],

        seleccionar: function(){
            var rec= this.lookupReference('gridlistado').getSelectionModel().getSelection();
            this.fireEvent('selectcliente', this, rec[0]);
        
        }
});