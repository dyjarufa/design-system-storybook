var a=Object.defineProperty;var i=(r,n)=>a(r,"name",{value:n,configurable:!0});import{a as t,j as e}from"./jsx-runtime.4da55e8e.js";function d({tokens:r,hasRemValue:n=!1}){return console.log(n),t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"name"}),e("th",{children:"value"}),n&&e("th",{children:"Pixel"})]})}),e("tbody",{children:Object.entries(r).map(([o,s])=>t("tr",{children:[e("td",{children:o}),e("td",{children:s}),n&&t("td",{children:[Number(s.replace("rem",""))*16,"px"]})]},o))})]})}i(d,"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=TokensGrid.c03ca32f.js.map
