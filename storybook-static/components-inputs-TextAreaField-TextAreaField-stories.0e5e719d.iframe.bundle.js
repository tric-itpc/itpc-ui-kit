"use strict";(self.webpackChunkitpc_ui_kit=self.webpackChunkitpc_ui_kit||[]).push([[491],{"./src/components/inputs/TextAreaField/TextAreaField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Controlled:()=>Controlled,Disabled:()=>Disabled,Fix:()=>Fix,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/inputs/TextAreaField/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.l,title:"Inputs/TextAreaField"},Template=args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.l,{...args,onChange:valueInput=>{setValue(valueInput)},value})},Basic={args:{placeholder:"Text area"},name:"Базовый"},Controlled={args:{...Basic.args,maxHeight:92},name:"Управляемый",render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,args)},Fix={args:{...Basic.args,fixedHeight:92},name:"Фиксированная высота",render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,args)},Disabled={args:{...Basic.args,disabled:!0},name:"Отключенный"},__namedExportsOrder=["Basic","Controlled","Fix","Disabled"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Text area"\n  },\n  name: "Базовый"\n}',...Basic.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    maxHeight: 92\n  },\n  name: "Управляемый",\n  render: args => <Template {...args} />\n}',...Controlled.parameters?.docs?.source}}},Fix.parameters={...Fix.parameters,docs:{...Fix.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    fixedHeight: 92\n  },\n  name: "Фиксированная высота",\n  render: args => <Template {...args} />\n}',...Fix.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    disabled: true\n  },\n  name: "Отключенный"\n}',...Disabled.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/inputs/TextAreaField/styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".itpc-textarea_placeholder {\n  top: 12px\n}","",{version:3,sources:["webpack://./src/components/inputs/TextAreaField/styles.css"],names:[],mappings:"AAAA;EACE;AACF",sourcesContent:[".itpc-textarea_placeholder {\n  top: 12px\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/inputs/TextAreaField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>TextAreaField});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_elements=__webpack_require__("./src/components/_elements/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/inputs/TextAreaField/styles.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;const TextAreaField=({className="",disabled=!1,errorMessage="",fixedHeight,id="itpc-input",maxHeight,name="itpc-input",onBlur,onChange,onFocus,placeholder="",validationState="valid",value="",...rest})=>{const[focused,onHandleFocused]=(0,react.useState)(!1),[height,setHeight]=(0,react.useState)(fixedHeight||40),ref=(0,react.useRef)(null),calculateHeight=scrollHeight=>scrollHeight?fixedHeight?scrollHeight>fixedHeight?scrollHeight:fixedHeight:scrollHeight>40?scrollHeight:40:fixedHeight||40,isFocused=focused||!!value.length;return react.createElement(_elements.D0,{className:classnames_default()(className),...rest},react.createElement(_elements.Lk,{disabled,fixedHeight,focused,height,maxHeight,validationState},react.createElement(_elements.Or,{className:classnames_default()(fixedHeight&&fixedHeight>40&&!isFocused&&"itpc-textarea_placeholder"),disabled,focused:isFocused,htmlFor:id,validationState},placeholder),react.createElement("textarea",{className:classnames_default()("itpc-input",isFocused&&"itpc-input_focused"),disabled,id,name,onBlur:()=>{onHandleFocused(!1),onBlur&&onBlur()},onChange:event=>{const{scrollHeight}=ref.current||{},newHeight=calculateHeight(scrollHeight);setHeight(newHeight),onChange&&onChange(event.currentTarget.value,event)},onFocus:()=>{onHandleFocused(!0),ref.current?.focus(),onFocus&&onFocus()},ref,value}),react.createElement(_elements.dz,{errorMessage,show:"invalid"===validationState})))};TextAreaField.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Отключение",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Текст ошибки",defaultValue:{value:'""',computed:!1}},fixedHeight:{required:!1,tsType:{name:"number"},description:"Фиксированная высота"},id:{required:!1,tsType:{name:"string"},description:"Идентификатор",defaultValue:{value:'"itpc-input"',computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:"Максимальная высота"},name:{required:!1,tsType:{name:"string"},description:"Название поля",defaultValue:{value:'"itpc-input"',computed:!1}},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Обработчик потери фокуса"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  value: string,\n  event: React.ChangeEvent<HTMLTextAreaElement>\n) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Обработчик изменения значения"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Обработчик получения фокуса"},placeholder:{required:!1,tsType:{name:"string"},description:"Подпись",defaultValue:{value:'""',computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"invalid" | "valid" | "warning"',elements:[{name:"literal",value:'"invalid"'},{name:"literal",value:'"valid"'},{name:"literal",value:'"warning"'}]},description:"Состояние валидации",defaultValue:{value:'"valid"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Значение",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]}}}]);