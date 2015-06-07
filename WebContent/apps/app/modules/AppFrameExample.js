/*
 * 
 * MyFrameController
 *
 * @author [Your Name]
 * 
 * Copyright (c) 2014 [Your Company]
 * 
 * [Website]
 *
 * [License information]
 * 
 */

(function(){

	var jQuerySap = jQuery.sap;

	jQuerySap.declare("tld__domain.product__app.modules.AppFrameExample");
	
	//Register the module path so OpenUI5 know where to find the library
 //jQuery.sap.registerModulePath("./openui5/googlemaps/", "./lib/openui5/googlemaps/");
 //sap.ui.getCore().loadLibrary("googlemaps", "googlemaps/");
	 sap.ui.getCore().loadLibrary("openui5.googlemaps", "openui5/googlemaps/");
	
	jQuerySap.require("ui5strap.AppFrame");
	jQuerySap.require("ui5strap.Sidebar");
	jQuerySap.require("ui5strap.NavBar");
	jQuerySap.require("ui5strap.Nav");
	jQuerySap.require("ui5strap.ListNavItem");
	jQuerySap.require("ui5strap.Link");
	jQuerySap.require("ui5strap.ButtonGroup");
	jQuerySap.require("ui5strap.Button");
	jQuerySap.require("ui5strap.Icon");
	jQuerySap.require("ui5strap.ScrollContainer");
	
	jQuerySap.require("jquery.sap.history");

	//FrameControllers must extend the AppFrame class
	ui5strap.AppFrame.extend("tld__domain.product__app.modules.AppFrameExample");

	var FrameController = tld__domain.product__app.modules.AppFrameExample,
		FrameControllerProto = FrameController.prototype,
		configuration = sap.ui.getCore().getConfiguration();

	/*
	* Create the nav container control used by this frame.
	*/
	FrameControllerProto._createControl = function(){
		var _this = this,
			navContainer = ui5strap.AppFrame.prototype._createControl.call(this);

		//Get the frame options
		var frameOptions = this.options;
		
		//Navbar
		var navbar = new ui5strap.NavBar({ 
			inverse : false, 
			fluid : true, 
			position : ui5strap.NavBarPosition.StaticTop,
			visible: true
		});

		this.navbar = navbar;

		//Sidenav toggle
		var toggle = new ui5strap.Button({align : ui5strap.Alignment.NavBarTop, bsAction : ui5strap.BsAction.ToggleSidenav});
		toggle.addContent(new ui5strap.Icon({icon : 'columns', size : ui5strap.IconSize.Large}));

		toggle.attachEvent('tap', {}, function(){
			_this.control.toggleOption('sidenav');
		});

		navbar.addContentLeft(toggle);

		//Brand
		var logo  = new ui5strap.Image(
			{ 
			src : "./apps/app/img/meetdesklogo.png",
			width : 148,
			height : 148
			}
			
		);
		
		
		
			//Brand
		var profil  = new ui5strap.Image(
			{ 
			src : "./app/img/IMG_2519.jpg",
			width : 10,
			height : 10
			}
			
		);
		
		var brandCol = new ui5strap.Col(
			{ 
			columnsExtraSmall : 10,
			columnsSmall : 10,
			columnsMedium : 10,
			columnsLarge : 10,
			
			
			}
			
		);
		
		brandCol.addContent(logo);
		
		var brandTitle = new ui5strap.Text(	);
		
		//brandTitle.bindProperty('text', {path : 'i18n>MENU_BRAND'});
		//brandCol.addContent(brandTitle);

		
		
		var brand = new ui5strap.Link(
			{ 
		
			}
			
		);
		
		brand.addContent(brandCol);
		
		
		//brand.bindProperty('text', {path : 'i18n>MENU_BRAND'});
       // brand.bindProperty('type', logo );
		
		brand.attachEvent('tap', {}, function(){
			_this.showInitialContent();
		});

		navbar.setBrand(brand);

		//Main menu
		var navNavbar = new ui5strap.Nav(),
			menu = this.app.config.getMenuData(frameOptions.navbarMenu);
		
		
		getVisibility(this.app.config);
		
		if(menu){
			//If a navbarMenu is specified in frameOptions, create the nav menu from it
			for (var i = 0; i < menu.items.length; i++){
				var menuPage = menu.items[i],
					navItem = new ui5strap.ListItem(),
					navItemLink = new ui5strap.Link({align : ui5strap.Alignment.NavBarRight});
				
				
				
				navItemLink.bindProperty('text', {path : menuPage.label});
		
				
				if(menuPage.icon){
				navItemLink.addContent(new ui5strap.Icon({ 'icon' : menuPage.icon, 'fixedWidth' : true }));
				}
							
				navItem.addContent(navItemLink);
			
				navItem.data(menuPage);
				navNavbar.addItems(navItem);
			}
		}

		navNavbar.attachEvent('tap', {}, function(oEvent){
			var listItem = oEvent.getParameter('listItem');
			if(listItem){
				_this.gotoPage(listItem.data());

				navbar.setCollapsed(true);
			}
		});
		navNavbar.setAlign(ui5strap.Alignment.NavBarRight);

		//navbar.addCollapse(navNavbar);
		this.navNavbar = navNavbar;

		//Language select buttons
		var navButtons = new ui5strap.ButtonGroup({align : ui5strap.Alignment.NavBarRight, size : ui5strap.Size.ExtraSmall}),
			buttonDe = new ui5strap.Button({'text' : "DE"}),
			buttonEn = new ui5strap.Button({'text' : "EN"});
		
		navButtons.addButtons(buttonEn);
		navButtons.addButtons(buttonDe);
		navbar.addCollapse(navButtons);
		navbar.addCollapse(navNavbar);
		
		navButtons.attachEvent('tap', {}, function(oEvent){
			var srcButton = oEvent.getParameter('button');
			navButtons.setSelectedControl(srcButton);

			if(buttonEn === srcButton){
				configuration.setLanguage('en-us');
			}
			else if(buttonDe === srcButton){
				configuration.setLanguage('de-de');
			}
			//alert(configuration.getLanguage());
		});

		if(jQuery.sap.startsWithIgnoreCase(configuration.getLanguage(), 'de')){
			buttonDe.setSelected(true);
		}
		else{
			buttonEn.setSelected(true);
		}

		//Nav menu toggle
		var toggleRight = new ui5strap.Button({align : ui5strap.Alignment.NavBarRight, bsAction : ui5strap.BsAction.ToggleNavbar});
		
		toggleRight.addContent(new ui5strap.Icon({icon : 'bars', size : ui5strap.IconSize.Large}));

		toggleRight.attachEvent('tap', {}, function(){
			navbar.toggle();
		});

		navbar.addContentRight(toggleRight);

		//Sidebar / Sidenav
		var sidebar = new ui5strap.Sidebar({inverse : false, fluid : true, 
			position : ui5strap.NavBarPosition.StaticTop,
			visible: true}),
			navSidebar = new ui5strap.Nav({type : ui5strap.NavType.PillsStacked, align : ui5strap.Alignment.Sidebar});

		this.sidebar = sidebar;

		navSidebar.attachEvent('tap', {}, function(oEvent){
			var listItem = oEvent.getParameter('listItem');
			if(listItem){
				_this.gotoPage(listItem.data());
			}
		});

		sidebar.addContent(navSidebar);
		this.navSidebar = navSidebar;

		return navContainer;
	};


	/*
	* Init navigation history
	*/
	FrameControllerProto._initHistory = function(){
		var _this = this;

		if(!this.app.config.data.app.history){
			return false;
		}

		jQuery.sap.history({
			routes : [
				{
					path : "content",
					handler : function (params, navType) {
						if(_this.initialized){
							params.writeHistory = false;
							_this.gotoPage(params);
						}
						else{
							params.writeHistory = true;
							params.transition = 'no-transition';

							//The next navigation within target "content" will be replaced
							_this.oTargets.content = params;
						}
					}
				}
			],
			defaultHandler : function (navType) {

				if(_this.initialized){
					//alert('t');
					_this.showInitialContent();
				}

			}
		});
	};

	/*
	* Navigate to a page
	*
	* @Public
	* @Override
	*/
	FrameControllerProto.gotoPage = function (viewDef, callback) {
		var _this = this,
			frameOptions = this.options;
		
		//If "sidebarMenu" is set, and no "viewName" specified, goto first page of sidebarMenu.
		if(viewDef.sidebarMenu && !viewDef.viewName){
			//if the viewDef contains no viewName but a sidebarMenu only, show the first entry of the submenu

			var submenu = this.app.config.getMenuData(viewDef.sidebarMenu);
			if("items" in submenu && submenu.items.length > 0){
				this.gotoPage(submenu.items[0], callback);
			}
			else{
				throw new Error('Invalid sidebar menu: ' + viewDef.sidebarMenu);
			}

			return;
		}

		//Get final view configuration
		var viewConfig = this.getViewConfig(viewDef),
			target = viewConfig.target;

		if(this.isBusy(target)){
			jQuery.sap.log.debug('[MFR] IS BUSY {' + target + '}');

			return false;
		}
		else{
			jQuery.sap.log.debug('+++ [MFR] NAVIGATE {' + target + '} "' + viewConfig.viewName + '"');
		}

		var navbarEnabled = frameOptions.navbar;
		if("navbar" in viewConfig){
			navbarEnabled = viewConfig.navbar;
		}

		var sidebarEnabled = frameOptions.sidebar;
		if("sidebar" in viewConfig){
			sidebarEnabled = viewConfig.sidebar;
		}

		var sidenavEnabled = frameOptions.sidenav;
		if("sidenav" in viewConfig){
			sidenavEnabled = viewConfig.sidenav;
		}

		var sidebar2Nav = frameOptions.sidebar2Nav;
		if("sidebar2Nav" in viewConfig){
			sidebar2Nav = viewConfig.sidebar2Nav;
		}

		var sidebarSmall = frameOptions.sidebarSmall;
		if("sidebarSmall" in viewConfig){
			sidebarSmall = viewConfig.sidebarSmall;
		}

		var sidenavToggle = frameOptions.sidenavToggle;
		if("sidenavToggle" in viewConfig){
			sidenavToggle = viewConfig.sidenavToggle;
		}

		this.control.setOptionsEnabled({
			'navbar' :  navbarEnabled,
			'sidebar' : sidebarEnabled,
			'sidenav' : sidenavEnabled,
			
			'sidebar-2nav' : sidebar2Nav,
			'sidebar-small' : sidebarSmall,
			'sidenav-toggle' : sidenavToggle
		});

		if("sidebarMenu" in viewConfig){
		
			this.setSidebarMenu(viewConfig.sidebarMenu);
		}
		else if("sidebarMenu" in frameOptions){
			
		
		var sidebarMen = getMenu(viewConfig.id);
		
	var visible = getVisibility(viewConfig.id);
	
	this.sidebar.setVisible(getVisibility(viewConfig.id));
		
		this.setSidebarMenu(sidebarMen);
			
			
			//this.setSidebarMenu(frameOptions.sidebarMenu);
		}

		jQuery.sap.log.debug(' + [MFR] SET "sidebar" AND "navbar"');
		this.control.toPage(this.sidebar, 'sidebar');
		this.control.toPage(this.navbar, 'navbar');


		//var currentPage = this.getCurrentPage(target);
	var currentPage = this.getCurrentPage(target);
		
		if(
			_this.control.getDomRef() 
			&& viewConfig.id 
			&& currentPage 
			&& viewConfig.id === currentPage.getId()
		){
			this.updatePage(currentPage, viewConfig.parameters);

			jQuery.sap.log.debug('[MFR] is current page: ' + viewConfig.id);
			return false;
		}

		if(viewConfig.documentTitle){
			var titlePath = viewConfig.documentTitle.split('>');
			if(titlePath.length === 2){ 
				document.title = this.app.getLocaleString(titlePath[1], titlePath[0]);
			}
		}

		this.updateMenu(viewConfig.viewName);

		if(viewConfig.showLoader){
			this.app.setLoaderVisible(true, function(){
				_this.toPage(viewConfig, callback);
			});
		}
		else{
			this.toPage(viewConfig, callback);
		}

		//Write history entry for back/forward navigation in browser / using javascript.
		if (viewConfig.writeHistory && this.app.config.data.app.history) {
			jQuery.sap.history.addHistory(target, viewConfig.viewData.__ui5strap.viewDef, viewConfig.bookmarkable, viewConfig.virtual);
		}

		return true;
	};

	
	/*
	*
	* Update menu and highlight items that match to current view
	*
	* @Public
	*/
	FrameControllerProto.updateMenu = function(viewName){
		jQuery.sap.log.debug(' + [MFR] UPDATE MENU "' + viewName + '"');

		var navSidebar = this.navSidebar;

		if(this.sidebarMenu){
			var sidebarMenu = this.app.config.getMenuData(this.sidebarMenu);
			
			if(null !== sidebarMenu && 'items' in sidebarMenu){
				var sidebarMenuIndex = -1,
					sidebarItems = sidebarMenu.items;
				
				for(var i=0; i<sidebarItems.length; i++){
					if(viewName === sidebarItems[i].viewName){
						sidebarMenuIndex = i;
						break;
					}
				}

				if(sidebarMenuIndex !== -1){
					navSidebar.setSelectedIndex(sidebarMenuIndex);
				}
				else{
					navSidebar.setSelectedControl(null);
				}
			}
			else{
				throw new Error('Invalid sidebar menu: ' + this.sidebarMenu);
			}
		}

		var frameOptions = this.options;
		if(frameOptions.navbarMenu){
			var menu = this.app.config.getMenuData(frameOptions.navbarMenu);

			if(null !== menu && 'items' in menu){
				var menuIndex = -1,
					menuItems = menu.items;

				for(var p=0; p<menuItems.length; p++){
					if(viewName === menuItems[p].viewName || (this.sidebarMenu && this.sidebarMenu === menuItems[p].sidebarMenu)){
						menuIndex = p;
						break;
					}
				}

				if(menuIndex !== -1){
					this.navNavbar.setSelectedIndex(menuIndex);
				}
				else{
					this.navNavbar.setSelectedControl(null);
				}
			}
			else{
				jQuery.sap.log.debug("No navbar menu is set.");
				//throw new Error('Invalid navbar menu: ' + frameOptions.navbarMenu);
			}
		}
	};

	/*
	* Sets the sidebar menu
	* @param menuName Name of menu defined in configuration
	*/
	FrameControllerProto.setSidebarMenu = function(menuName){
		var navSidebar = this.navSidebar,
			_this = this;
		
		if(menuName === this.sidebarMenu){
			return;
		}

		navSidebar.removeAllItems();

		this.sidebarMenu = menuName;

		if(!menuName){
			return;
		}


		var sidebarMenu = this.app.config.getMenuData(menuName);

		if(null !== sidebarMenu && "items" in sidebarMenu){

			var items = sidebarMenu.items;
			for(var i = 0; i < items.length; i++){
				var menuItemData = items[i],
					navItem = new ui5strap.ListNavItem();

				navItem.bindProperty('text', menuItemData.label);
				navItem.data(menuItemData);

				if(menuItemData.icon){
					navItem.addContent(new ui5strap.Icon({ 'icon' : menuItemData.icon, 'fixedWidth' : true }));
				}
				
				navSidebar.addItems(navItem);
			}

		}
		else{

			throw new Error('Invalid sidebar menu: ' + menuName);

		}
	};

getMenu = function(viewId){
	
	var	sidebarMen = "myMenu";
	
		if("my-app-page3" == viewId || "my-app-page4" == viewId){
		
	sidebarMen = "myNav1";
							
		}
	return sidebarMen;
	
};

getVisibility = function(viewId){
	

	var	visible = false;
	
		if("my-app-page3" == viewId || "my-app-page4" == viewId){
		
	visible = true;
							
		}
	return visible;
	
};

	
getParam = function(paramName)
{
var sURL = window.document.URL.toString();


if (sURL.indexOf("%22%2C%22") > 0)
{
var arrParams = sURL.split("%2C%22"+paramName+"%22%3A%22");
var arrURLParams = arrParams[1].split("%22");
var para = arrURLParams[0].replace("%20", '');

var param = decodeURI(para);
return(param);
}
else 
 {
return('no param found');
}
};
}());