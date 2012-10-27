Ext.onReady(function () {
  Ext.QuickTips.init();
  var bd = Ext.getBody();

  bd.createChild({tag: 'h2', html: 'Suporte Tecnico'});

  var simple = Ext.create('Ext.form.Panel',{
    url: 'save-form.php',
    frame:true,
    title: 'Registro da ocorrencia',
    bodyStyle: 'padding: 0 5px 0 5px;',
    whidth: 350,
    // items
    items: [{

    }],
    // buttons
    buttons:

  });
});
simple.render(document.body);