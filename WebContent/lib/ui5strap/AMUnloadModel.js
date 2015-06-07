/*
 * 
 * UI5Strap
 *
 * ui5strap.AMUnloadModel
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

	jQuery.sap.declare("ui5strap.AMUnloadModel");
	jQuery.sap.require("ui5strap.ActionModule");

	ui5strap.ActionModule.extend("ui5strap.AMUnloadModel");

	var AMUnloadModelProto = ui5strap.AMUnloadModel.prototype;

	/*
	* @Override
	*/
	AMUnloadModelProto.namespace = 'unloadModel';

	/*
	* @Override
	*/
	AMUnloadModelProto.parameters = {
		
		//Required
		"modelName" : {
			"required" : true, 
			"type" : "string"
		},
		
		//Optional
		"controlId" : {
			"required" : false, 
			"defaultValue" : null, 
			"type" : "string"
		},
		"viewId" : {
			"required" : false,
			"defaultValue" : null,
			"type" : "string"
		},
		"scope" : {
			"required" : false, 
			"defaultValue" : "VIEW", 
			"type" : "string"
		}

	};

	/*
	* @Override
	*/
	AMUnloadModelProto.run = function(){ 
			var theControl = this.findControl(true),
				modelName = this.getParameter("modelName");
			
			theControl.setModel(null, modelName);
			
			this.context._log.debug(this._actionNameShort + "Model '" + modelName + "' (scope: '" + this.getParameter("scope") + "') unloaded.");
	};

}());