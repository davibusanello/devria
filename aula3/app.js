Ext.onReady(function() {
	Ext.QuickTips.init();
	var login = Ext.create('Ext.FormPanel',{
		labelWidth  : 50,
		url: 'php',
		// frame: true,
		defaultType: 'textfield',
		monitorValid: true,
		items: [{
			fieldLabel: 'E-mail',
			name: 'email',
			blanText : 'Por favor, informe o seu email',
			width :250,
			allowBlank: false
		},
		{
			fieldLabel: 'Senha',
			name : 'senha',
			width :250,
			inputType :'password',
			blankText :'Por favor informe sua senha',
			allowBlank:false
		}],
		buttons:[{

			text:'Entrar',
			formBind: true,
			handler: facaLogin
		}]
		);

		var win = Ext.create("Ext.Window",{
			layout:'fit',
			title: 'Acesso ao Sistema Caixa 1.0',
			width: 280,
			heigth: 140,
			resizable: false, 
			closable: false,
			draggable: false,
			plain: true,
			border: false,
			items:[login]
		});

		win.Show();

		function facaLogin() {
			if (login.getForm().isValid()){
				login.getForm().submit({
					method: 'POST',
					waitTitle: 'Por favor aguarde',
					waitMsg: 'Autenticando no sistema',
					sucess: function(){
						login.getForm().reset();
						var redirect = 'principal.php';
						window.location = redirect;
					};
					failure: function(){
						if (action.failureType === 'server'){
							obj = Ext.decode(action.response.resposeText);
							Ext.Msg.show({
								title: 'Erro no login',
								msg: obj.erro.motivo,
								butoons: Ext.Msg.OK,
								icon: Ext.MessageBox.ERROR,
								scope:this,
								width: 150,
							})
						}
						else
						{
							Ext.Mag.alert("Erro no cliente")
						}
						login.getform().reset();
					}
				});

			}
		}



	});
});