Ext.onReady(function(){
  Ext.QuickTips.init();

  var myData = [
    ['Razr i', 390, 2500, '3/1'],
    ['Galaxy S3', 450, 90, '9/4'],
    ['iPhone 5', 320, 150, '4/3'],
    ['Razr Maxx HD', 320, 360, '9/2']
  ];

  function brEstoque(val) {
    if (val > 100) {
      return '<span style="color:green;">'+Ext.Format.currency(val)+'</span>';
    } else if (val < 100) {
      return '<span style="color:red;">'+Ext.Format.currency(val)+'</span>';
    }
    return Ext.Format.currency(val);
  };

  var store = Ext.create('Ext.data.ArrayStore', {



  });

  var grid = Ext.create('Ext.grip.Panel',{


  });

console.dir(myData);
});