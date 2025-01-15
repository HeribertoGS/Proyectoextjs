/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Proyectoextjs.Application',

    name: 'Proyectoextjs',

    requires: [
        // This will automatically load all classes in the Proyectoextjs namespace
        // so that application classes do not need to require each other.
        'Proyectoextjs.*'
    ],

    // The name of the initial view to create.
    mainView: 'Proyectoextjs.view.main.Main'
});
