"use strict";(self.webpackChunkitpc_ui_kit=self.webpackChunkitpc_ui_kit||[]).push([[395],{"./src/components/inputs/MultiSelectField/MultiSelectField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Controlled:()=>Controlled,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/inputs/MultiSelectField/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.A,title:"Inputs/MultiSelectField"},mockItems=[{id:"1",value:"Cat"},{id:"2",value:"Dog"},{id:"3",value:"Duck"},{id:"4",value:"Bear"},{id:"5",value:"Mouse"},{id:"6",value:"Tiger"},{id:"7",value:"Lion"}],Template=args=>{const[selectedItems,setSelectedItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{id:"1",value:"Cat"}]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.A,{...args,items:mockItems,onChange:values=>{setSelectedItems(mockItems.filter((item=>values.includes(item.id))))},selectedItems:selectedItems.map((item=>item.id))})},Basic={args:{items:mockItems,placeholder:"Animal"},name:"Базовый"},Controlled={args:{...Basic.args,items:mockItems},name:"Управляемый",render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,args)},Disabled={args:{...Basic.args,disabled:!0},name:"Заблокированный"},__namedExportsOrder=["Basic","Controlled","Disabled"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    items: mockItems,\n    placeholder: "Animal"\n  },\n  name: "Базовый"\n}',...Basic.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    items: mockItems\n  },\n  name: "Управляемый",\n  render: args => <Template {...args} />\n}',...Controlled.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Basic.args,\n    disabled: true\n  },\n  name: "Заблокированный"\n}',...Disabled.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/_elements/ListBox/styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".itpc-list-box {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  box-sizing: border-box;\n  width: 100%;\n  max-height: 200px;\n  margin: 0;\n  padding: 0;\n\n  border: 1px solid var(--itpc-primary-border-color);\n  border-radius: 4px;\n  background-color: transparent;\n  list-style: none;\n  pointer-events: none;\n\n  transition: transform ease-in-out, line-height ease-in-out;\n}\n\n.itpc-list-box_opened {\n  line-height: 1.2;\n\n  pointer-events: auto;\n\n  transform: scaleY(1);\n}\n\n.itpc-list-box_closed {\n  line-height: 0;\n\n  transform: scaleY(0);\n}\n","",{version:3,sources:["webpack://./src/components/_elements/ListBox/styles.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,SAAS;EACT,UAAU;;EAEV,kDAAkD;EAClD,kBAAkB;EAClB,6BAA6B;EAC7B,gBAAgB;EAChB,oBAAoB;;EAEpB,0DAA0D;AAC5D;;AAEA;EACE,gBAAgB;;EAEhB,oBAAoB;;EAEpB,oBAAoB;AACtB;;AAEA;EACE,cAAc;;EAEd,oBAAoB;AACtB",sourcesContent:[".itpc-list-box {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  box-sizing: border-box;\n  width: 100%;\n  max-height: 200px;\n  margin: 0;\n  padding: 0;\n\n  border: 1px solid var(--itpc-primary-border-color);\n  border-radius: 4px;\n  background-color: transparent;\n  list-style: none;\n  pointer-events: none;\n\n  transition: transform ease-in-out, line-height ease-in-out;\n}\n\n.itpc-list-box_opened {\n  line-height: 1.2;\n\n  pointer-events: auto;\n\n  transform: scaleY(1);\n}\n\n.itpc-list-box_closed {\n  line-height: 0;\n\n  transform: scaleY(0);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/inputs/MultiSelectField/styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".itpc-multi-select {\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n\n  border: 1px solid var(--itpc-input-border-color);\n  border-radius: 4px;\n  background-color: var(--itpc-primary-bg-color);\n  box-shadow: none;\n}\n\n.itpc-multi-select_disabled {\n  color: var(--itpc-disabled-text-color);\n\n  border-color: var(--itpc-disabled-input-border-color);\n  /* background-color: var(--itpc-input-bg-disabled-color); */\n  cursor: not-allowed;\n  pointer-events: none;\n  user-select: none;\n}\n\n.itpc-multi-select_hover:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-multi-select__button {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 7px 10px;\n\n  font-size: var(--itpc-font-size-xs);\n  color: var(--itpc-primary-text-color);\n\n  border: none;\n  border-radius: 4px;\n  background-color: transparent;\n  box-shadow: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.itpc-multi-select__button:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-multi-select__button_focused {\n  border-color: var(--itpc-primary-border-color);\n}\n","",{version:3,sources:["webpack://./src/components/inputs/MultiSelectField/styles.css"],names:[],mappings:"AAAA;EACE,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,YAAY;;EAEZ,gDAAgD;EAChD,kBAAkB;EAClB,8CAA8C;EAC9C,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;;EAEtC,qDAAqD;EACrD,2DAA2D;EAC3D,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;;EAEjB,mCAAmC;EACnC,qCAAqC;;EAErC,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,gBAAgB;EAChB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,8CAA8C;AAChD",sourcesContent:[".itpc-multi-select {\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n\n  border: 1px solid var(--itpc-input-border-color);\n  border-radius: 4px;\n  background-color: var(--itpc-primary-bg-color);\n  box-shadow: none;\n}\n\n.itpc-multi-select_disabled {\n  color: var(--itpc-disabled-text-color);\n\n  border-color: var(--itpc-disabled-input-border-color);\n  /* background-color: var(--itpc-input-bg-disabled-color); */\n  cursor: not-allowed;\n  pointer-events: none;\n  user-select: none;\n}\n\n.itpc-multi-select_hover:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-multi-select__button {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 7px 10px;\n\n  font-size: var(--itpc-font-size-xs);\n  color: var(--itpc-primary-text-color);\n\n  border: none;\n  border-radius: 4px;\n  background-color: transparent;\n  box-shadow: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.itpc-multi-select__button:hover {\n  border-color: var(--itpc-primary-hover-color-component);\n}\n\n.itpc-multi-select__button_focused {\n  border-color: var(--itpc-primary-border-color);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/_elements/ListBox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>ListBox});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),CalculateStyle=__webpack_require__("./src/lab/CalculateStyle/index.ts"),types=__webpack_require__("./src/lab/CalculateStyle/types.ts");var setDurationAnimation=__webpack_require__("./src/lab/setDurationAnimation/setDurationAnimation.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/_elements/ListBox/styles.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;const ListBox=({children,durationAnimation,isOpen,refChildren,refParent})=>{const localRef=(0,react.useRef)(null),ref=refChildren?.current||localRef.current,[styleAnimation,setStyleAnimation]=(0,react.useState)({});return(0,react.useEffect)((()=>{ref&&refParent?.current&&((0,setDurationAnimation.R)(durationAnimation,".itpc-list-box_opened",".itpc-list-box_closed"),ref.style.width=`${refParent.current.offsetWidth}px`)}),[durationAnimation,refChildren,refParent]),(0,react.useEffect)((()=>{if(isOpen&&refParent?.current&&ref){const animationTransform=((refParent,refChildren,distanceBetweenElements)=>`center ${(0,CalculateStyle.ME)(refParent,refChildren,distanceBetweenElements)===types.B7.TOP?types.B7.BOTTOM:types.B7.TOP}`)(refParent,refChildren||localRef);setStyleAnimation({transformOrigin:animationTransform})}}),[isOpen,refParent?.current]),react.createElement("ul",{className:classnames_default()("itpc-list-box",isOpen&&"itpc-list-box_opened",!isOpen&&"itpc-list-box_closed"),ref:refChildren||localRef,style:styleAnimation},children)};ListBox.__docgenInfo={description:"",methods:[],displayName:"ListBox",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},durationAnimation:{required:!0,tsType:{name:"DurationAnimation"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},refChildren:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLUListElement>",elements:[{name:"HTMLUListElement"}]},description:""},refParent:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}}},"./src/components/inputs/MultiSelectField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MultiSelectField});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_elements=__webpack_require__("./src/components/_elements/index.ts"),ListBox=__webpack_require__("./src/components/_elements/ListBox/index.tsx"),enums=__webpack_require__("./src/enums/index.ts"),lab=__webpack_require__("./src/lab/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/inputs/MultiSelectField/styles.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;const MultiSelectField=({className,disabled=!1,durationAnimation={durationClose:200,durationOpen:300},items,onChange,placeholder="",selectedItems=[],...rest})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),{isClosing}=(0,lab.sM)(isOpen,durationAnimation),ref=(0,react.useRef)(null),refChildren=(0,react.useRef)(null),handleOpen=()=>{disabled||setIsOpen(!isOpen)},onChangeValue=value=>{if("function"==typeof onChange){const select=new Set(selectedItems);if(select.has(value))return select.delete(value),void onChange(Array.from(select));select.add(value),onChange(Array.from(select))}},{activeIndex,handleKeyUpAndDown,setActiveIndex}=(0,lab.JZ)(items);return(0,react.useEffect)((()=>{refChildren&&-1!==activeIndex&&(0,lab.Rs)(refChildren,activeIndex)}),[activeIndex,refChildren]),(0,react.useEffect)((()=>{selectedItems.length&&isOpen&&setActiveIndex(selectedItems?items.findIndex((({id})=>id===selectedItems[0])):items.findIndex((item=>!item.disabled))??0)}),[isOpen]),(0,lab.Wr)(ref,(()=>{setIsOpen(!1)}),isOpen,refChildren),react.createElement("div",{className:classnames_default()("itpc-multi-select",disabled&&" itpc-multi-select_disabled",!disabled&&" itpc-multi-select_hover",className),ref,...rest},react.createElement("button",{className:classnames_default()("itpc-multi-select__button",isOpen&&"itpc-multi-select__button_focused"),disabled,onClick:handleOpen,onKeyDown:event=>{if(isOpen)switch(event.key){case enums.DD.ARROW_UP:case enums.DD.ARROW_DOWN:handleKeyUpAndDown(event);break;case enums.DD.ENTER:(event=>{event.preventDefault(),onChangeValue(items[activeIndex]?.id)})(event)}},type:"button"},react.createElement(_elements.Or,{disabled,focused:isOpen||!!selectedItems?.length},placeholder),selectedItems?.length>1?`Выбрано ${selectedItems?.length} элементов`:1===selectedItems?.length?items.find((item=>item.id===selectedItems[0]))?.value??"":""),react.createElement(_elements.Pl,{disabled,onClick:handleOpen,orientation:isOpen?"top":"bottom"}),react.createElement(_elements.ZL,{element:document.body},react.createElement(_elements.jK,{isClosing,isOpen,refParent:ref},react.createElement(ListBox.q,{durationAnimation,isOpen:isOpen?!isClosing:isOpen,refChildren,refParent:ref},items.map(((item,itemIndex)=>react.createElement(_elements.eb,{activeIndex,disabled:item.disabled,id:item.id,isActive:selectedItems?.includes(item.id)??!1,itemIndex,key:item.id,onChange:onChangeValue},item.value)))))))};MultiSelectField.__docgenInfo={description:"",methods:[],displayName:"MultiSelectField",props:{className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс"},disabled:{required:!1,tsType:{name:"boolean"},description:"Отключение компонента",defaultValue:{value:"false",computed:!1}},durationAnimation:{required:!1,tsType:{name:"DurationAnimation"},description:"Задержка анимации",defaultValue:{value:"{\n  durationClose: 200,\n  durationOpen: 300,\n}",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"Список элементов"},placeholder:{required:!1,tsType:{name:"string"},description:"Подпись",defaultValue:{value:'""',computed:!1}},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Выбранные элементы",defaultValue:{value:"[]",computed:!1}}},composes:["Omit"]}}}]);