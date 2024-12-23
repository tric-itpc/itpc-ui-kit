"use strict";(self.webpackChunkitpc_ui_kit=self.webpackChunkitpc_ui_kit||[]).push([[123],{"./src/components/inputs/SearchField/SearchField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Controlled:()=>Controlled,Disabled:()=>Disabled,InsertCurrentlySelected:()=>InsertCurrentlySelected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_enums__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/enums/index.ts"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/index.ts"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/inputs/SearchField/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_3__.L,title:"Inputs/SearchField"},mockItems=[{id:"1",value:"Cat"},{id:"2",value:"Dog"},{id:"3",value:"Duck"},{id:"4",value:"Bear"},{id:"5",value:"Mouse"},{id:"6",value:"Tiger"},{id:"7",value:"Lion"}],Template=args=>{const[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[,setSelectedItem]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.L,{...args,fetchData:async()=>{setIsLoading(!0),setTimeout((()=>{setItems(mockItems),setIsLoading(!1)}),2e3)},handleClear:()=>{setSelectedItem(null),setItems([])},icon:isLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.Z,null):null,isDisableClickIcon:isLoading,items,onChange:id=>{setSelectedItem(items.find((item=>item.id===id))??null)}})},Basic={args:{items:mockItems,onChange:()=>{},placeholder:"Animal"},name:"Базовый"},Controlled={args:{...Basic.args,autoComplete:_enums__WEBPACK_IMPORTED_MODULE_1__.j9.OFF,items:mockItems},name:"Управляемый",render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,args)},InsertCurrentlySelected={args:{...Basic.args,autoComplete:_enums__WEBPACK_IMPORTED_MODULE_1__.j9.OFF,isInsertCurrentlySelected:!0,items:mockItems},name:"С подстановкой из списка",render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,args)},Disabled={args:{...Basic.args,disabled:!0,items:mockItems},name:"Отключённый"},__namedExportsOrder=["Basic","Controlled","InsertCurrentlySelected","Disabled"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    items: mockItems,\n    onChange: () => {},\n    placeholder: "Animal"\n  },\n  name: "Базовый"\n}',...Basic.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    autoComplete: AutoComplete.OFF,\n    items: mockItems\n  },\n  name: "Управляемый",\n  render: args => <Template {...args} />\n}',...Controlled.parameters?.docs?.source}}},InsertCurrentlySelected.parameters={...InsertCurrentlySelected.parameters,docs:{...InsertCurrentlySelected.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    autoComplete: AutoComplete.OFF,\n    isInsertCurrentlySelected: true,\n    items: mockItems\n  },\n  name: "С подстановкой из списка",\n  render: args => <Template {...args} />\n}',...InsertCurrentlySelected.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    disabled: true,\n    items: mockItems\n  },\n  name: "Отключённый"\n}',...Disabled.parameters?.docs?.source}}}}}]);