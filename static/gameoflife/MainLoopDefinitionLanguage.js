(function(){function d(a){var d=this;this._nextVariableId=1,this._mainLoop=a,this._loopSyntax=new b(a),this._callSyntax=function(b){var e=d._nextVariableId;d._nextVariableId+=1,a.withCallTo(b).withResult(e);var f={};f._result=e,f._mainLoop=a,f.withArguments=c,f.withArgument=c;return f},this._usingSyntax=function(b){var e=d._nextVariableId;d._nextVariableId+=1,a.withCallTo(b).withResult(e);var f={};f._result=e,f._mainLoop=a,f.processArgument=c,f.processArguments=c,f.andProcessArgument=c,f.andProcessArguments=c,f.processComponents=componentProcessor,f.andProcessComponents=componentProcessor,f.withDefault=function(a){var b={forComponent:function(b){d._mainLoop.withDefaultFor(a,b);return f}};return b},f.withDefaults=function(){var a=Array.fromArguments(arguments),b={forComponents:function(){var b=Array.fromArguments(arguments);for(var c=0;c<a.length;c++)d._mainLoop.withDefaultFor(a[c],b[c]);return f}};return b},f.updating=function(){var b=Array.fromArguments(arguments);a.updatingComponents(b);return this},f.updatingAll=function(){a.updatingAllComponents();return this},f.updatingAllExcept=function(){var b=Array.fromArguments(arguments);a.updatingAllComponentsExcept(b);return this},f.updatingNone=function(){return this},f.andUpdateEntities=function(){a.withEntityUpdates();return this},f.andReturnResult=function(){return this};return f}}function b(a){this._mainLoop=a}require("spell/common/util/dialect");var a=require("spell/common/core/MainLoop");b.prototype.runEvery=function(a){this._mainLoop.withSleepTime(a);return{seconds:function(){}}},b.prototype.every=function(b){this._mainLoop.withGroup(b);return{ticks:function(){return{execute:function(b){b(a.PASSED_TIME)}}}}},b.prototype.everyTick=function(){return this.every(1).ticks()},b.prototype.endAfter=function(a){this._mainLoop.withDuration(a);return{tick:function(){},ticks:function(){}}};var c=function(){var a=Array.fromArguments(a),b=a.map(function(a){if(a._result!=undefined)var a=a._result;return a});this._mainLoop.withArguments(b);return this};componentProcessor=function(){var a=Array.fromArguments(arguments);this._mainLoop.withComponents(a);return this},d.prototype.interpret=function(a){a(this._loopSyntax,this._callSyntax,this._usingSyntax)},typeof window=="undefined"?module.exports=d:register("spell/common/core/MainLoopDefinitionLanguage",d)})()