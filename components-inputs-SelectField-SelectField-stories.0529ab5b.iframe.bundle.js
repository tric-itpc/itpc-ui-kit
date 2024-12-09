"use strict";(self.webpackChunkitpc_ui_kit=self.webpackChunkitpc_ui_kit||[]).push([[903],{"./src/components/inputs/SelectField/SelectField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Controlled:()=>Controlled,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/inputs/SelectField/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.z,title:"Inputs/SelectField"},mockItems=[{disabled:!0,id:"1",value:"Cat"},{id:"2",value:"Dog"},{id:"3",value:"Duck"},{id:"4",value:"Bear"},{id:"5",value:"Mouse"},{id:"6",value:"Tiger"},{id:"7",value:"Lion"}],Template=args=>{const[selectedItem,setSelectedItem]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.z,{...args,defaultItemId:selectedItem?.id,items:mockItems,onChange:id=>{setSelectedItem(mockItems.find((item=>item.id===id))??null)}})},Basic={args:{items:mockItems,placeholder:"Animal"},name:"Базовый"},Controlled={args:{...Basic.args},name:"Управляемый",render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,args)},Disabled={args:{...Basic.args,disabled:!0},name:"Отключённый"},__namedExportsOrder=["Basic","Controlled","Disabled"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    items: mockItems,\n    placeholder: "Animal"\n  },\n  name: "Базовый"\n}',...Basic.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args\n  },\n  name: "Управляемый",\n  render: args => <Template {...args} />\n}',...Controlled.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    disabled: true\n  },\n  name: "Отключённый"\n}',...Disabled.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/_elements/ListBox/styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".itpc-list-box {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  box-sizing: border-box;\n  width: 100%;\n  max-height: 200px;\n  margin: 0;\n  padding: 0;\n\n  border: 1px solid var(--itpc-primary-border-color);\n  border-radius: 4px;\n  background-color: transparent;\n  list-style: none;\n  pointer-events: none;\n\n  transition: transform ease-in-out, line-height ease-in-out;\n}\n\n.itpc-list-box_opened {\n  line-height: 1.2;\n\n  pointer-events: auto;\n\n  transform: scaleY(1);\n}\n\n.itpc-list-box_closed {\n  line-height: 0;\n\n  transform: scaleY(0);\n}\n","",{version:3,sources:["webpack://./src/components/_elements/ListBox/styles.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,SAAS;EACT,UAAU;;EAEV,kDAAkD;EAClD,kBAAkB;EAClB,6BAA6B;EAC7B,gBAAgB;EAChB,oBAAoB;;EAEpB,0DAA0D;AAC5D;;AAEA;EACE,gBAAgB;;EAEhB,oBAAoB;;EAEpB,oBAAoB;AACtB;;AAEA;EACE,cAAc;;EAEd,oBAAoB;AACtB",sourcesContent:[".itpc-list-box {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  box-sizing: border-box;\n  width: 100%;\n  max-height: 200px;\n  margin: 0;\n  padding: 0;\n\n  border: 1px solid var(--itpc-primary-border-color);\n  border-radius: 4px;\n  background-color: transparent;\n  list-style: none;\n  pointer-events: none;\n\n  transition: transform ease-in-out, line-height ease-in-out;\n}\n\n.itpc-list-box_opened {\n  line-height: 1.2;\n\n  pointer-events: auto;\n\n  transform: scaleY(1);\n}\n\n.itpc-list-box_closed {\n  line-height: 0;\n\n  transform: scaleY(0);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/inputs/SelectField/styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".itpc-select {\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 40px;\n\n  border: 1px solid var(--itpc-input-border-color);\n  border-radius: 4px;\n  background-color: var(--itpc-primary-bg-color);\n  box-shadow: none;\n}\n\n.itpc-select:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-select__button {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 7px 10px;\n\n  font-size: var(--itpc-font-size-xs);\n  color: var(--itpc-primary-text-color);\n\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.itpc-select__button:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-select__button_focused {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n","",{version:3,sources:["webpack://./src/components/inputs/SelectField/styles.css"],names:[],mappings:"AAAA;EACE,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;;EAEZ,gDAAgD;EAChD,kBAAkB;EAClB,8CAA8C;EAC9C,gBAAgB;AAClB;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;;EAEjB,mCAAmC;EACnC,qCAAqC;;EAErC,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,uDAAuD;AACzD",sourcesContent:[".itpc-select {\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 40px;\n\n  border: 1px solid var(--itpc-input-border-color);\n  border-radius: 4px;\n  background-color: var(--itpc-primary-bg-color);\n  box-shadow: none;\n}\n\n.itpc-select:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-select__button {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 7px 10px;\n\n  font-size: var(--itpc-font-size-xs);\n  color: var(--itpc-primary-text-color);\n\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.itpc-select__button:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-select__button_focused {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/_elements/ListBox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>ListBox});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),CalculateStyle=__webpack_require__("./src/lab/CalculateStyle/index.ts"),types=__webpack_require__("./src/lab/CalculateStyle/types.ts");var setDurationAnimation=__webpack_require__("./src/lab/setDurationAnimation/setDurationAnimation.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/_elements/ListBox/styles.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;const ListBox=({children,durationAnimation,isOpen,refChildren,refParent})=>{const localRef=(0,react.useRef)(null),ref=refChildren?.current||localRef.current,[styleAnimation,setStyleAnimation]=(0,react.useState)({});return(0,react.useEffect)((()=>{ref&&refParent?.current&&((0,setDurationAnimation.R)(durationAnimation,".itpc-list-box_opened",".itpc-list-box_closed"),ref.style.width=`${refParent.current.offsetWidth}px`)}),[durationAnimation,refChildren,refParent]),(0,react.useEffect)((()=>{if(isOpen&&refParent?.current&&ref){const animationTransform=((refParent,refChildren,distanceBetweenElements)=>`center ${(0,CalculateStyle.ME)(refParent,refChildren,distanceBetweenElements)===types.B7.TOP?types.B7.BOTTOM:types.B7.TOP}`)(refParent,refChildren||localRef);setStyleAnimation({transformOrigin:animationTransform})}}),[isOpen,refParent?.current]),react.createElement("ul",{className:classnames_default()("itpc-list-box",isOpen&&"itpc-list-box_opened",!isOpen&&"itpc-list-box_closed"),ref:refChildren||localRef,style:styleAnimation},children)};ListBox.__docgenInfo={description:"",methods:[],displayName:"ListBox",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},durationAnimation:{required:!0,tsType:{name:"DurationAnimation"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},refChildren:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLUListElement>",elements:[{name:"HTMLUListElement"}]},description:""},refParent:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}}},"./src/components/inputs/SelectField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>SelectField});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_elements=__webpack_require__("./src/components/_elements/index.ts"),ListBox=__webpack_require__("./src/components/_elements/ListBox/index.tsx"),lab=__webpack_require__("./src/lab/index.ts"),types=__webpack_require__("./src/lab/CalculateStyle/types.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/inputs/SelectField/styles.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;const SelectField=({className="",defaultItemId=null,disabled=!1,durationAnimation={durationClose:200,durationOpen:300},items,onChange,placeholder,position=types.yY.FIXED,...rest})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),{isClosing}=(0,lab.sM)(isOpen,durationAnimation),ref=(0,react.useRef)(null),handleOpen=()=>{disabled||setIsOpen(!isOpen)},changeValue=value=>{"function"==typeof onChange&&onChange(value),setIsOpen(!1)};return(0,lab.Wr)(ref,(()=>{setIsOpen(!1)}),isOpen),react.createElement("div",{className:classnames_default()("itpc-select",className),ref,...rest},react.createElement("button",{className:classnames_default()("itpc-select__button",isOpen&&"itpc-select__button_focused"),disabled,onClick:handleOpen,type:"button"},react.createElement(_elements.Or,{focused:isOpen||!!defaultItemId},placeholder),defaultItemId&&items.find((item=>item.id===defaultItemId))?.value),react.createElement(_elements.Pl,{onClick:handleOpen,orientation:isOpen?"top":"bottom"}),react.createElement(_elements.ZL,{element:document.body},react.createElement(_elements.jK,{isClosing,isOpen,position,refParent:ref},react.createElement(ListBox.q,{durationAnimation,isOpen:isOpen?!isClosing:isOpen,refParent:ref},items.map((item=>react.createElement(_elements.eb,{disabled:item.disabled,id:item.id,isActive:defaultItemId===item.id,key:item.id,onChange:changeValue},item.value)))))))};SelectField.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс",defaultValue:{value:'""',computed:!1}},defaultItemId:{required:!1,tsType:{name:"string"},description:"Значение по умолчанию",defaultValue:{value:"null",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Отключить",defaultValue:{value:"false",computed:!1}},durationAnimation:{required:!1,tsType:{name:"DurationAnimation"},description:"Задержка анимации",defaultValue:{value:"{\n  durationClose: 200,\n  durationOpen: 300,\n}",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"Список элементов"},placeholder:{required:!0,tsType:{name:"string"},description:"Подпись"},position:{required:!1,tsType:{name:"ALLOWED_POSITIONS"},description:"Позиционирование выпадающего списка",defaultValue:{value:"ALLOWED_POSITIONS.FIXED",computed:!0}}},composes:["Omit"]}}}]);