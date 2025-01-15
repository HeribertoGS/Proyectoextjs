/**
 * This view is an example list of people.
 */
Ext.define('Proyectoextjs.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'Proyectoextjs.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
