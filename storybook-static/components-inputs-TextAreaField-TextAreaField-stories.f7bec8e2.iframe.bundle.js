/*! For license information please see components-inputs-TextAreaField-TextAreaField-stories.f7bec8e2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkitpc_ui_kit=self.webpackChunkitpc_ui_kit||[]).push([[491],{"./src/components/inputs/TextAreaField/TextAreaField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Controlled:()=>Controlled,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/inputs/TextAreaField/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.l,title:"Inputs/TextAreaField"},Template=args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.l,{...args,onChange:valueInput=>{setValue(valueInput)},value})},Basic={args:{placeholder:"Text area"},name:"Базовый"},Controlled={args:{...Basic.args},name:"Управляемый",render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,args)},Disabled={args:{...Basic.args,disabled:!0},name:"Отключенный"},__namedExportsOrder=["Basic","Controlled","Disabled"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Text area"\n  },\n  name: "Базовый"\n}',...Basic.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args\n  },\n  name: "Управляемый",\n  render: args => <Template {...args} />\n}',...Controlled.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    disabled: true\n  },\n  name: "Отключенный"\n}',...Disabled.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/inputs/TextAreaField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>TextAreaField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_elements__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_elements/index.ts");const TextAreaField=({className="",disabled=!1,errorMessage="",id="itpc-input",maxHeight,name="itpc-input",onBlur,onChange,onFocus,placeholder="",validationState="valid",value="",...rest})=>{const[focused,onHandleFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[height,setHeight]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(40),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.D0,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),...rest},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.Lk,{focused,height,maxHeight,validationState},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.Or,{focused:focused||value.length>0,htmlFor:id,validationState},placeholder),react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("itpc-input",(focused||!!value.length)&&"itpc-input_focused"),disabled,id,name,onBlur:()=>{onHandleFocused(!1),onBlur&&onBlur()},onChange:event=>{setHeight(40),ref.current?.scrollHeight&&ref.current.scrollHeight>40&&setHeight(ref.current.scrollHeight),onChange&&onChange(event.currentTarget.value,event)},onFocus:()=>{onHandleFocused(!0),ref.current?.focus(),onFocus&&onFocus()},ref,value}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.dz,{errorMessage,show:"invalid"===validationState})))};TextAreaField.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Отключение",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Текст ошибки",defaultValue:{value:'""',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Идентификатор",defaultValue:{value:'"itpc-input"',computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:"Максимальная высота"},name:{required:!1,tsType:{name:"string"},description:"Название поля",defaultValue:{value:'"itpc-input"',computed:!1}},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Обработчик потери фокуса"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  value: string,\n  event: React.ChangeEvent<HTMLTextAreaElement>\n) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Обработчик изменения значения"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Обработчик получения фокуса"},placeholder:{required:!1,tsType:{name:"string"},description:"Подпись",defaultValue:{value:'""',computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"invalid" | "valid" | "warning"',elements:[{name:"literal",value:'"invalid"'},{name:"literal",value:'"valid"'},{name:"literal",value:'"warning"'}]},description:"Состояние валидации",defaultValue:{value:'"valid"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Значение",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]}}}]);