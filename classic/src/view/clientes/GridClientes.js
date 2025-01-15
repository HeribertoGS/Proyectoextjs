Ext.define('classic.src.view.clientes.GridClientes',{
    extend: 'Ext.grid.Panel',

    xtype: 'gridclientes',

    initComponent: function(){
        var mistore= Ext.create('app.store.clientes.StoreClientes',{
            autoLoad: true
        });
        Ext.apply(this, {
            store: mistore,

            columns:[
                {text: 'Nombre', dataIndex: 'nombre', flex: 1,
                    renderer: function(val, meta, rec){
                        return rec.nombreToHTML();
                    }                
                },
                {text: 'Email', dataIndex: 'email', width:160, menuDisabled: true},
                {text: 'Fecha de nacimiento', dataIndex: 'fecha_nacimiento', 
                width:160, menuDisabled: true,
                    renderer: Ext.util.Format.dateRenderer('d-m-Y')
                },
                {text: 'Estatus', dataIndex: 'estatus', 
                width:100, menuDisabled: true,
                renderer: function (val, mett, rec){
                    if(rec.data.estatus ==0)
                    return '<span style="color:#219e8c">Inactivo</span>';
                    return '';
                }               
            },

             {
            xtype:'actioncolumn',
            width:50,
        items:[{
            iconCls: 'fas fa-edit',
            tooltip: 'Edit',
            handler : function(grid, rowIndex, colIndex){
                var rec =grid.getStore().getAt(rowIndex);
                alert("Edit"+rec.get('nombre'));
            }
        },{
            iconCls: 'fas fa-trash-alt',             
            tooltip: 'Delete',
            handler : function(grid, rowIndex, colIndex){
                var rec =grid.getStore().getAt(rowIndex);
                Ext.Msg.confirm('Elminar cliente', 'Seguro que quiere '+
                'eliminar a <b>'+rec.get('nombre')+' '+rec.data.apellido_paterno+'</b>?',
                function (respuesta){
                    if(respuesta=='yes'){
                        grid.store.remove(rec);
                    }
                }
                );
            }
        }]
    }
            ],
            dockedItems:[{
                xtype: 'pagingtoolbar',
                store: mistore,
                dock: 'bottom',
                displayInfo: true

            }]
        });
        this.callParent();
    }
})