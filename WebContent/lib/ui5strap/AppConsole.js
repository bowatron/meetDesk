/*
 * 
 * UI5Strap
 *
 * ui5strap.AppConsole
 * 
 * @author Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Homepage: http://ui5strap.com
 *
 * Copyright (c) 2013 Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * Released under Apache2 license: http://www.apache.org/licenses/LICENSE-2.0.txt
 * 
 */

 (function(){

	var jQuerySap = jQuery.sap;

	jQuerySap.declare("ui5strap.AppConsole");

	jQuerySap.require("ui5strap.library");
	
	jQuerySap.require("ui5strap.AppBase");
	
	jQuerySap.require("ui5strap.Console");
	
	ui5strap.AppBase.extend("ui5strap.AppConsole");

	var AppConsole = ui5strap.AppConsole, 
		AppConsoleProto = AppConsole.prototype;

	/*
	* ------------------------------------------------
	* --------------------- FLOW ---------------------
	* ------------------------------------------------
	*/
	
	/*
	* Init app specific logging
	* @protected
	*/
	AppConsoleProto._initLog = function(){
		
		var _this = this;

		this.log = {

			debug : function (message) {
				_this.console && _this.console.debug(message, _this.getId());
				jQuery.sap.log.debug("[APPLOG] " + message);
			},

			warning : function (message) { 
				_this.console && _this.console.warning(message, _this.getId());
				jQuery.sap.log.warning("[APPLOG] " + message);
			},

			error : function (message) {
				_this.console && _this.console.error(message, _this.getId());
				jQuery.sap.log.error("[APPLOG] " + message);
			},

			info : function (message) {
				_this.console && _this.console.info(message, _this.getId());
				jQuery.sap.log.info("[APPLOG] " + message);
			},

			fatal : function (message) {
				_this.console && _this.console.fatal(message, _this.getId());
				jQuery.sap.log.fatal("[APPLOG] " + message);
			}

		};
	};

	/*
	* -------------------------------------------------------------
	* --------------------- GETTERS & SETTERS ---------------------
	* -------------------------------------------------------------
	*/

	AppConsoleProto.getRootControl = function(){
		if(!this.console){
			this.console = new ui5strap.Console();
			this.console.setCurrentLog(this.getId());
			this.console.setLogLevel(this.config.data.app.logLevel);
		}
		return this.console;
	}; 

	/*
	* -------------------------------------------------
	* --------------------- STYLE ---------------------
	* -------------------------------------------------
	*/

	AppConsoleProto.includeStyle = function(callback){
		callback && callback();
	};

	AppConsoleProto.removeStyle = function(){

	};

	
}());