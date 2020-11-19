(function(){
  Ext.onReady(function(){


    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
    renderTo: document.body,
    width   : 800,
    items: [
        {
            id: 'Button1',
            name: 'Example Button 1',
            text: 'Example Button 1',
            handler: function(){
              var Button1 =  Ext.getCmp('Button1');
              var Button2 = Ext.getCmp("Button2");
              Button1.setDisabled(true);
              Button1.setHidden(true);
              Button2.setDisabled(false);
              Button2.setHidden(false);
            }
        },
        {
          id: 'Button2',
          name: 'Example Button 2',
          text: 'Example Button 2',
          hidden: true,
          handler: function(){
            var Button1 =  Ext.getCmp('Button1');
            var Button2 = Ext.getCmp("Button2");
            Button1.setDisabled(false);
            Button1.setHidden(false);
            Button2.setDisabled(true);
            Button2.setHidden(true);
          }
        },
        {
          id: 'Button3',
          width:225,
          format:'Y-m-d',
          name: 'Example Button 3',
          text: 'Example Button 2',
          fieldLabel:'日期选择框',
          xtype: 'datefield'
        },
        {
            xtype:'datefield',
            itemId:'beginDate',
            format:'Y-m-d',
            value:Ext.util.Format.date(Ext.Date.add(new Date(),Ext.Date.MONTH,-1),"Y-m-d")

        },
        '-',
        {
            xtype:'datefield',
            itemId:'endDate',
            format:'Y-m-d',
            value:Ext.util.Format.date(Ext.Date.add(new Date(),Ext.Date.MONTH,1),"Y-m-d")

        }
    ]
});

var addedItems = [];

Ext.create('Ext.toolbar.Toolbar', {
    renderTo: document.body,
    width   : 700,
    margin  : '5 0 0 0',
    items   : [
        {
            text   : 'Add a button',
            scope  : this,
            handler: function() {
                var text = prompt('Please enter the text for your button:');
                addedItems.push(toolbar.add({
                    text: text
                }));
            }
        },
        {
            text   : 'Add a text item',
            scope  : this,
            handler: function() {
                var text = prompt('Please enter the text for your item:');
                addedItems.push(toolbar.add(text));
            }
        },
        {
            text   : 'Add a toolbar separator',
            scope  : this,
            handler: function() {
                addedItems.push(toolbar.add('-'));
            }
        },
        {
            text   : 'Add a toolbar spacer',
            scope  : this,
            handler: function() {
                addedItems.push(toolbar.add('->'));
            }
        },
        '->',
        {
            text   : 'Remove last inserted item',
            scope  : this,
            handler: function() {
                if (addedItems.length) {
                    toolbar.remove(addedItems.pop());
                } else if (toolbar.items.length) {
                    toolbar.remove(toolbar.items.last());
                } else {
                    alert('No items in the toolbar');
                }
            }
        },
        {
            text   : 'Remove all items',
            scope  : this,
            handler: function() {
                toolbar.removeAll();
            }
        }
    ]
});
  });
})();
