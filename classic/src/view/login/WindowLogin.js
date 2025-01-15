Ext.define('classic.src.view.login.WindowLogin', {
    extend: 'Ext.window.Window',

    controller:'windowloginctr',

    title: 'Bienvenido usuario',
    width: 300,
    height:190,
    modal:true,
    draggable:false,
    closable:false,
    buttonAling: 'center',
    
    items:[{
        xtype:'form',
        bodyPadding:10,

        reference: 'formulario',
                
                defaults:{
                    xtype:'textfield',
                    allowBlank:false
                },

                items:[{
                    fieldLabel:'Usuario',
                    name:'usuario',
                    vtype: 'email'
                },
                {
                    inputType:'password',
                    fieldLabel:'Password',
                    name:'pass'
                }]
            }],
    

    buttons:[{
        iconCls:'x-fa fa-user',
        text: 'Ingresar',
        handler: 'hacerLogin'
    }]
});