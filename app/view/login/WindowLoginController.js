Ext.define('Proyectoextjs.view.login.WindowLoginController',{
    extend: 'Ext.app.ViewController',

    alias:'controller.windowloginctr',

    hacerLogin:function(){
        var formulario = this.lookupReference('formulario');
       
       formulario.getForm().submit({
        url:'server/dologin.json',
        scope: this, //same scope
       // params: datos,

        success: function(response, opts){
           // var obj = Ext.decode(response.responseText);
            console.dir(opts.result);

           
            Ext.Msg.alert('Hola', 'Bienvenido de nuevo '+ opts.result.fullname, function(){

                this.getView().close();//close the window
            },this/*same scope*/);
        },

        failure: function(response, opts){
            console.log('server-side failure with status code'+ response.status);
        }
       });
       
    }

});