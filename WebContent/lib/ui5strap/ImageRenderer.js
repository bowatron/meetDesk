/*
 * 
 * UI5Strap
 *
 * ui5strap.ImageRenderer
 * 
 * @author Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Homepage: http://ui5strap.com
 *
 * Copyright (c) 2013-2014 Jan Philipp Knöller <info@pksoftware.de>
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

	jQuery.sap.declare("ui5strap.ImageRenderer");

	ui5strap.ImageRenderer = {
		shapeToClass : {
			Rounded : 'img-rounded',
			Circle : 'img-circle',
			Thumbnail : 'img-thumbnail'
		}
	};

	ui5strap.ImageRenderer.render = function(rm, oControl) {
		var src = oControl.getSrc(),
			mpath = oControl.getMpath(),
			mext = oControl.getExt(),

			width = oControl.getWidth(),
			height = oControl.getHeight(),
			shape = oControl.getShape(),
			title = oControl.getTitle();

		if(mpath){
			src = jQuery.sap.getModulePath(mpath, '.' + mext);
		}

		rm.write("<img");
		rm.writeControlData(oControl);
		if(oControl.getResponsive()){
			rm.addClass('img-responsive');
		}
		if(shape in this.shapeToClass){
			rm.addClass(this.shapeToClass[shape]);
		}
		rm.writeClasses();
		
		if('' !== src){
			rm.writeAttribute('src', src);
		}
		if('' !== title){
			rm.writeAttribute('title', title);
		}
		if(-1 !== width){
			rm.writeAttribute('width', width);
		}
		if(-1 !== height){
			rm.writeAttribute('height', height);
		}
		rm.writeAttribute('alt', oControl.getAlt());
		
		rm.write("/>");

		ui5strap.RenderUtils.renderTrail(rm, oControl);
	};

}());
