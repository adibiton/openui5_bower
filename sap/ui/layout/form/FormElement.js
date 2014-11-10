/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.form.FormElement");jQuery.sap.require("sap.ui.layout.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.layout.form.FormElement",{metadata:{publicMethods:["getLabelControl"],library:"sap.ui.layout",properties:{"visible":{type:"boolean",group:"Misc",defaultValue:true}},defaultAggregation:"fields",aggregations:{"label":{type:"sap.ui.core.Label",altTypes:["string"],multiple:false},"fields":{type:"sap.ui.core.Control",multiple:true,singularName:"field"}}}});jQuery.sap.require("sap.ui.core.EnabledPropagator");(function(){sap.ui.layout.form.FormElement.prototype.init=function(){this._oFieldDelegate={oElement:this,onAfterRendering:b}};sap.ui.layout.form.FormElement.prototype.exit=function(){if(this._oLabel){this._oLabel.destroy();delete this._oLabel}this._oFieldDelegate=undefined};sap.ui.layout.form.FormElement.prototype.setLabel=function(A){if(!this._oLabel){var o=this.getLabel();if(o){if(o.isRequired){o.isRequired=o._sapui_isRequired;o._sapui_isRequired=undefined}if(o.getLabelForRendering){o.getLabelForRendering=o._sapui_getLabelForRendering;o._sapui_getLabelForRendering=undefined}}}this.setAggregation("label",A);var l=A;if(typeof l==="string"){if(!this._oLabel){this._oLabel=sap.ui.layout.form.FormHelper.createLabel(l);this._oLabel.setParent(this);if(l.isRequired){this._oLabel.isRequired=_}this._oLabel.getLabelForRendering=a}else{this._oLabel.setText(l)}}else{if(this._oLabel){this._oLabel.destroy();delete this._oLabel}if(!l)return this;if(l.isRequired){l._sapui_isRequired=l.isRequired;l.isRequired=_}if(l.getLabelForRendering){l._sapui_getLabelForRendering=l.getLabelForRendering;l.getLabelForRendering=a}}return this};sap.ui.layout.form.FormElement.prototype.getLabelControl=function(){if(this._oLabel){return this._oLabel}else{return this.getLabel()}};sap.ui.layout.form.FormElement.prototype.addField=function(f){this.addAggregation("fields",f);f.addDelegate(this._oFieldDelegate);return this};sap.ui.layout.form.FormElement.prototype.insertField=function(f,i){this.insertAggregation("fields",f,i);f.addDelegate(this._oFieldDelegate);return this};sap.ui.layout.form.FormElement.prototype.removeField=function(f){var r=this.removeAggregation("fields",f);r.removeDelegate(this._oFieldDelegate);return r};sap.ui.layout.form.FormElement.prototype.removeAllFields=function(){var r=this.removeAllAggregation("fields");for(var i=0;i<r.length;i++){var R=r[i];R.removeDelegate(this._oFieldDelegate)}return r};sap.ui.layout.form.FormElement.prototype.destroyFields=function(){var f=this.getFields();for(var i=0;i<f.length;i++){var F=f[i];F.removeDelegate(this._oFieldDelegate)}this.destroyAggregation("fields");return this};sap.ui.layout.form.FormElement.prototype.updateFields=function(){var f=this.getFields();for(var i=0;i<f.length;i++){var F=f[i];F.removeDelegate(this._oFieldDelegate)}this.updateAggregation("fields");f=this.getFields();for(var i=0;i<f.length;i++){var F=f[i];F.addDelegate(this._oFieldDelegate)}return this};sap.ui.layout.form.FormElement.prototype.enhanceAccessibilityState=function(e,A){var l=this.getLabelControl();if(l&&l!=e){if(!A["labelledby"]){A["labelledby"]=l.getId()}var c=this.getParent();var E=c.getFormElements();if(this==E[0]){var C=this.getFields();if(e==C[0]){var t=c.getTitle();if(t){var i="";if(typeof t=="string"){i=c.getId()+"--title"}else{i=t.getId()}var d=A["describedby"];if(d){d=d+" "+i}else{d=i}A["describedby"]=d}}}}return A};sap.ui.layout.form.FormElement.prototype.onLayoutDataChange=function(e){var p=this.getParent();if(p&&p.onLayoutDataChange){p.onLayoutDataChange(e)}};var _=function(){var f=this.getParent();var F=f.getFields();for(var i=0;i<F.length;i++){var o=F[i];if(o.getRequired&&o.getRequired()===true){return true}}return false};var a=function(){if(this.getLabelFor()){return this.getLabelFor()}else{var f=this.getParent();var F=f.getFields();if(F[0]){return F[0].getId()}}};var b=function(e){var p=this.oElement.getParent();if(p&&p.contentOnAfterRendering){p.contentOnAfterRendering(this.oElement,e.srcControl)}}}());
