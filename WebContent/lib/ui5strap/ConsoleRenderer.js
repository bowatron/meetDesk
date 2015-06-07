/*
 * 
 * UI5Strap
 *
 * ui5strap.ConsoleRenderer
 * 
 * @author Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Homepage: http://ui5strap.com
 *
 * Copyright (c) 2013-2015 Jan Philipp Knöller <info@pksoftware.de>
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

	jQuery.sap.declare("ui5strap.ConsoleRenderer");

	var ConsoleRenderer = {};

	ui5strap.ConsoleRenderer = ConsoleRenderer;

	ConsoleRenderer.render = function(rm, oControl) {
		rm.write("<div");
		rm.writeControlData(oControl);
		rm.addClass("ui5strap-console-container");
		rm.writeClasses();
		rm.write(">");
		    
	   		rm.write("<div");
	   		rm.addClass("ui5strap-console");
	   		rm.writeClasses();
		    rm.write(">");
		    
		    rm.write("<div");
	   		rm.addClass("ui5strap-console-inner");
	   		rm.writeClasses();
		    rm.write(">");
		    
		    rm.write("</div>");
		rm.write("</div>");
		    
		rm.write("</div>");
	};

}());