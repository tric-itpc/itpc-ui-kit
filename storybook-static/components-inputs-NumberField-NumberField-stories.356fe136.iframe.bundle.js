"use strict";(self.webpackChunkitpc_ui_kit=self.webpackChunkitpc_ui_kit||[]).push([[443],{"./src/components/inputs/NumberField/NumberField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Disabled:()=>Disabled,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_elements__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/_elements/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/index.ts").oz,title:"Inputs/NumberField"},Basic={args:{format:"+7 (###) - ### - ## - ##",mask:"_",placeholder:"Phone number"},name:"Базовый"},Disabled={args:{...Basic.args,disabled:!0},name:"Отключённый"},WithIcon={args:{...Basic.args,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_1__.iQ,null)},name:"С иконкой"},__namedExportsOrder=["Basic","Disabled","WithIcon"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    format: "+7 (###) - ### - ## - ##",\n    mask: "_",\n    placeholder: "Phone number"\n  },\n  name: "Базовый"\n}',...Basic.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    disabled: true\n  },\n  name: "Отключённый"\n}',...Disabled.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    icon: <IconWarning />\n  },\n  name: "С иконкой"\n}',...WithIcon.parameters?.docs?.source}}}}}]);