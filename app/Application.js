/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Proyectoextjs.Application', {
    extend: 'Ext.app.Application',

    name: 'Proyectoextjs',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function(){   
    var ventana = Ext.create('app.view.login.WindowLogin',{});
    ventana.show();
},

 
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
