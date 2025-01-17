Ext.define('classic.src.view.productos.form.FormProducto', {
    extend: 'Ext.form.Panel',

    xtype: 'formproducto',

    bodyPadding: 20,
    scrollable: true,
    defaults: {
        anchor: '100%',
        xtype: 'textfield',
    },
    items: [
        {
            name: 'nombre',
            fieldLabel: 'Nombre',
            allowBlank: false,
            emptyText: 'Ingresa el nombre del producto',
            maxLength: 50,
        },
        {
            name: 'codigo_barras',
            fieldLabel: 'Código de barras',
            allowBlank: false,
            regex: /^[0-9]{8,13}$/,
            regexText: 'El código de barras debe tener entre 8 y 13 números',
        },
        {
            name: 'categoria_k_combo',
            fieldLabel: 'Categoría',
            xtype: 'combobox',
            store: ['Comida', 'Productos de limpieza', 'Dulces'],
            queryMode: 'local',
            forceSelection: true,
            allowBlank: false,
            listeners: {
                select: function (combo) {
                    // Referencia al combobox de subcategorías
                    const subcategoriaCombo = combo.up('form').down('[name=subcategoria_k_combo_dependiente]');

                    // Categorías y sus subcategorías correspondientes
                    const subcategoriasPorCategoria = {
                        Comida: [
                            { name: 'Embutidos' },
                            { name: 'Enlatados' },
                            { name: 'Frutas y verduras' },
                        ],
                        'Productos de limpieza': [
                            { name: 'Detergentes' },
                            { name: 'Jabones' },
                            { name: 'Desinfectantes' },
                        ],
                        Dulces: [
                            { name: 'Chocolates' },
                            { name: 'Caramelos' },
                            { name: 'Galletas' },
                        ],
                    };

                    // Actualiza el store del combobox de subcategorías
                    const nuevasSubcategorias = subcategoriasPorCategoria[combo.getValue()] || [];
                    subcategoriaCombo.getStore().loadData(nuevasSubcategorias);

                    // Resetea el valor seleccionado
                    subcategoriaCombo.reset();
                }
            }
        },
        {
            name: 'subcategoria_k_combo_dependiente',
            fieldLabel: 'Subcategoría',
            xtype: 'combobox',
            store: {
                fields: ['name'], // Define el campo "name"
                data: [] // Inicialmente vacío
            },
            displayField: 'name', // Usa el campo "name" para mostrar los datos
            valueField: 'name', // Usa el campo "name" como valor
            queryMode: 'local',
            forceSelection: true,
            allowBlank: false,
            emptyText: 'Selecciona una subcategoría',
        },

        {
            xtype: 'filefield',
            name: 'file1',
            fieldLabel: 'Foto del producto',
            buttonText: 'Seleccionar archivo',
        },
        {
            xtype: 'numberfield',
            name: 'precio_costo',
            fieldLabel: 'Precio de costo',
            value: 0,
            minValue: 0,
            decimalPrecision: 2,
            allowBlank: false,
        },
        {
            xtype: 'numberfield',
            name: 'precio_venta',
            fieldLabel: 'Precio de venta',
            value: 0,
            minValue: 0,
            decimalPrecision: 2,
            allowBlank: false,
        },
        {
            xtype: 'numberfield',
            name: 'existencias',
            fieldLabel: 'Existencias',
            value: 0,
            minValue: 0,
            maxValue: 1000,
            allowBlank: false,
        },
        {
            name: 'unidad_medida',
            fieldLabel: 'Unidad de medida',
            xtype: 'combobox',
            store: ['kilogramo', 'litros', 'piezas'],
            queryMode: 'local',
            forceSelection: true,
            allowBlank: false,
        },
        {
            xtype: 'checkboxfield',
            name: 'checkbox1',
            fieldLabel: '¿Disponible?',
            boxLabel: 'Sí',
        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'Estatus',
            vertical: true,
            items: [
                { boxLabel: 'Activo', name: 'estatus', inputValue: '1', checked: true },
                { boxLabel: 'Inactivo', name: 'estatus', inputValue: '0' },
            ],
        },
        {
            xtype: 'numberfield',
            name: 'impuesto',
            fieldLabel: 'Impuestos',
            value: 0,
            minValue: 0,
            decimalPrecision: 2,
        },
    ],

    guardar: function () {
        const form = this.getForm();
        if (form.isValid()) {
            console.info('Guardando datos', form.getValues());
            form.submit({
                url: "server/guardar.json",
                params: {},
                success: function (form, resp) {
                    Ext.Msg.alert('Éxito', 'Datos guardados correctamente');
                },
                failure: function (form, response) {
                    Ext.Msg.alert('Error', 'Fallo el guardado. Código de estado: ' + response.status);
                }
            });
        } else {
            Ext.Msg.alert('Error', 'Por favor completa todos los campos obligatorios correctamente.');
        }
    }
});
