import{d as at,G as ot,H as nt,o as rt,r as K,l as I,m as st,A as T,a as v,z as dt,c as g,b as r,F as U,e as A,g as h,h as u,B as he,j as p,D as _,s as S,k as w,i as O,I as it,J as ut,K as ct,t as L,p as pt,x as ft,L as ht,M as yt,T as vt,E as $,y as mt,N as W,O as gt,_ as bt}from"./index-BUVdxLJQ.js";const kt={class:"page p10"},_t={class:"actions"},xt={class:"left-actions"},Ct={key:0,class:"right-search"},wt={key:1},Vt={key:2},Kt={key:4},St={class:"upload center"},$t=["src"],Tt={key:7,class:"conversion-tip"},Ut={key:8,class:"price-table"},Et={class:"share-preview-container"},At={key:0,class:"image-preview"},Ot=["src"],Pt={key:1,class:"loading-container"},Ft=at({__name:"IndexEdit",props:{list:{type:Object,default:{url:""}},print:{type:Boolean,default:!0},columns:{type:Array,default:[]},edit:{type:Object,default:{url:"",id:"",fields:[{label:"名称",field:"field"}]}},del:{type:Object,default:{url:"",field:""}},searchFields:{type:Array,default:[]},customActions:{type:Object,default:null},customOperationButtons:{type:Array,default:()=>[]},summaryMethod:{type:Function,default:null},showSummary:{type:Boolean,default:!1},isTree:{type:Boolean,default:!1},treeKey:{type:String,default:"id"},treeParentKey:{type:String,default:"p_id"},treeChildrenKey:{type:String,default:"children"},defaultExpandAll:{type:Boolean,default:!1},maxLevel:{type:Number,default:0}},emits:["save"],setup(x,{emit:ye}){const V=ot(),ve=nt(),n=x;rt(()=>{xe(),_e(),E()});const D=K(!1),me=()=>{D.value=!0},ge=I(()=>n.columns.filter(t=>t.column===!0)),be=ye,ke=t=>{be("save",t),D.value=!1},J=K(!0),X=K(!1),M=K(!1),P=K(""),b=st({pager:{page:1,limit:15},total:0,list:[]}),E=()=>{J.value=!0;const t={...b.pager};n.list.extraParams&&Object.assign(t,n.list.extraParams),n.searchFields&&n.searchFields.length>0&&Object.keys(C.value).forEach(e=>{C.value[e]!==void 0&&C.value[e]!==""&&(t[e]=C.value[e])}),T.list(n.list.url,t).then(e=>{var o,s,c,f,y,m;let l=((s=(o=e==null?void 0:e.data)==null?void 0:o.list)==null?void 0:s.data)||((c=e==null?void 0:e.data)==null?void 0:c.data)||(e==null?void 0:e.data)||[];n.isTree&&(l.length>0&&l.some(oe=>oe[n.treeChildrenKey]!==void 0)||(l=Ye(l))),b.list=l,b.total=((y=(f=e==null?void 0:e.data)==null?void 0:f.list)==null?void 0:y.total)||(e==null?void 0:e.total)||((m=e==null?void 0:e.data)==null?void 0:m.total)||l.length,J.value=!1})},Y=K({}),N=K({}),C=K({}),_e=async()=>{n.edit.fields.forEach(t=>{if(t.type=="select")T.list(t.url,{page:1,limit:9999}).then(e=>{Y.value[t.field]=e.data});else if(t.type=="tree-select"){const e={page:1,limit:9999};t.extraParams&&Object.assign(e,t.extraParams),T.list(t.url,e).then(l=>{var f,y,m;let o=((y=(f=l==null?void 0:l.data)==null?void 0:f.list)==null?void 0:y.data)||((m=l==null?void 0:l.data)==null?void 0:m.data)||(l==null?void 0:l.data)||[];const s=t.treeChildrenKey||"children";o.length>0&&o.some(z=>z[s]!==void 0)||(o=de(o,t)),Y.value[t.field]=o})}})},xe=async()=>{n.searchFields&&n.searchFields.length>0&&n.searchFields.forEach(t=>{if(t.type=="select")t.url?T.list(t.url,{page:1,limit:9999}).then(e=>{N.value[t.field]=e.data}):t.list&&(N.value[t.field]=t.list);else if(t.type=="tree-select"){const e={page:1,limit:9999};t.extraParams&&Object.assign(e,t.extraParams),T.list(t.url,e).then(l=>{var c,f,y;let o=((f=(c=l==null?void 0:l.data)==null?void 0:c.list)==null?void 0:f.data)||((y=l==null?void 0:l.data)==null?void 0:y.data)||(l==null?void 0:l.data)||[];o.length>0&&o.some(m=>m[t.treeChildrenKey||"children"]!==void 0)||(o=de(o,t)),N.value[t.field]=o})}t.defaultValue!==void 0&&(C.value[t.field]=t.defaultValue)})},Ce=async()=>{if(n.edit.fields.find(e=>e.field==="number"))try{const e=we(n.edit.url),l=await T.getNumber({model_str:e});l&&l.data&&(i.value.number=l.data)}catch(e){console.error("获取编号失败:",e)}},we=t=>({brand:"P",customer:"KH",supplier:"G",goods_cate:"SF",customer_cate:"KF",supplier_cate:"GF",region:"K",cooperate:"H",otherUnit:"Q",staff:"Y",station:"GW",income_expenses:"S",bank_account:"X",origin:"C",unit:"J",sale:"XS",spec:"GG",goods:"SP",warehouse:"CK",deposit:"KZ"})[t]||t.toUpperCase(),j=()=>{b.pager.page=1,E()},Ve=()=>{C.value={},b.pager.page=1,E()},Ke=(t,e)=>{i.value[e]=t.data.path},Q=K(""),B=K(!1),i=K({}),H=K(null),Se=K({}),se=t=>{if(!t.showCondition)return!0;const e=i.value[t.showCondition];return t.field==="f_unit"?i.value.is_quan===0&&i.value.is_repeated===1:e===t.showValue},$e=t=>{const e=[];return t.required&&e.push({required:!0,message:`请输入${t.label}`,trigger:[]}),e},Te=t=>{let e=Y.value[t.field]||[];return t.options&&t.options.length>0&&(e=[...t.options,...e]),e},de=(t,e)=>{if(!t||t.length===0)return[];const l=e.treeKey||"id",o=e.treeParentKey||"p_id",s=e.treeChildrenKey||"children",c={},f=[];return t.forEach(y=>{c[y[l]]={...y,[s]:[]}}),t.forEach(y=>{const m=y[o];m&&m!==0&&c[m]?c[m][s].push(c[y[l]]):f.push(c[y[l]])}),f},Ue=t=>Y.value[t.field]||[],F=(t,e)=>{if(!e)return t;const l=e.split(".");let o=t;for(const s of l){if(o==null)return;o=o[s]}return o},q=(t,e)=>{const l=F(t,e.props);return(e.props==="unit"||e.props==="c_unit"||e.props==="b_unit"||e.props==="deposit")&&l===0?"-":l&&typeof l=="object"?l.name??"-":l??"-"},Ee=t=>t.fields.map(e=>({type:e.label,fields:e.fields})),Ae=t=>{if(!t.dynamic)return t.content;const e=Z(i.value.unit_id),l=Z(i.value.c_unit_id),o=Z(i.value.b_unit_id);return`换算关系：1${l}=${i.value.c_ratio||0}×${e}，1${o}=${i.value.b_ratio||0}×${e}`},Z=t=>{if(!t||t===0)return"单位";const l=(Y.value.unit_id||[]).find(o=>o.id===t);return l?l.name:"单位"},Oe=()=>{n.customActions&&n.customActions.add?n.customActions.add():ee(null,n.isTree?0:void 0)},Pe=t=>{n.customActions&&n.customActions.edit?n.customActions.edit(t):ee(t)},ee=async(t,e)=>{Q.value=t?"修改":"新增",t?i.value={...t}:(await Ce(),n.edit.fields.forEach(l=>{l.type=="select"?i.value[l.field]="":l.type=="radio"?i.value[l.field]=l.list[0].value:l.field!=="number"&&l.field!==n.treeParentKey&&(i.value[l.field]="")}),n.isTree&&e!==void 0&&(i.value[n.treeParentKey]=e),i.value.is_quan=0,i.value.is_oversell=0,i.value.status=1,i.value.deposit_id=0,i.value.is_repeated=0),B.value=!0},Fe=async()=>{if(!H.value)return;H.value.clearValidate();const t=n.edit.fields.filter(l=>se(l)),e=t.filter(l=>l.required);for(const l of e){const o=i.value[l.field];if(!o||o===""){$.error(`请输入${l.label}`);return}}try{let l={};if(t.forEach(o=>{o.type==="price_table"&&o.fields?o.fields.forEach(s=>{s.fields.forEach(c=>{l[c]=i.value[c]||""})}):l[o.field]=i.value[o.field]}),n.isTree&&i.value[n.treeParentKey]!==void 0){if(n.maxLevel>0){const o=i.value[n.treeParentKey];if(o&&o!==0){const s=ie(b.list),c=s.find(f=>f[n.treeKey]===o);if(c&&te(c,s)>=n.maxLevel){$.warning(`最多只能添加${n.maxLevel}级分类`);return}}}l[n.treeParentKey]=i.value[n.treeParentKey]}Q.value=="新增"?T.add(n.edit.url,l).then(o=>{console.log(o),B.value=!1,E()}):T.edit(n.edit.url,i.value[n.edit.id],l).then(o=>{console.log(o),B.value=!1,E()})}catch(l){console.log("提交失败:",l)}},ze=()=>{H.value&&H.value.clearValidate(),i.value={},B.value=!1},Be=t=>{mt.confirm("确认删除吗").then(()=>{T.del(n.del.url,t[n.del.field]).then(e=>{console.log(e),E()})})},Le=I(()=>{var f;const t=n.edit&&n.edit.url,e=n.del&&n.del.url,l=(f=V.meta)==null?void 0:f.actions,o=!l||l.indexOf("更新")>=0,s=!l||l.indexOf("删除")>=0,c=n.customOperationButtons&&n.customOperationButtons.length>0;return t&&o||e&&s||n.isTree||c}),De=I(()=>n.isTree?n.treeKey:void 0),Me=I(()=>n.isTree?{children:n.treeChildrenKey,hasChildren:"hasChildren"}:void 0),Ye=t=>{if(!t||t.length===0)return[];const e={},l=[];return t.forEach(o=>{e[o[n.treeKey]]={...o,[n.treeChildrenKey]:[]}}),t.forEach(o=>{const s=o[n.treeParentKey];s&&s!==0&&e[s]?e[s][n.treeChildrenKey].push(e[o[n.treeKey]]):l.push(e[o[n.treeKey]])}),l},te=(t,e=[])=>{if(!t||t[n.treeParentKey]===0||t[n.treeParentKey]===null||t[n.treeParentKey]===void 0)return 1;e.length===0&&(e=ie(b.list));const l=e.find(o=>o[n.treeKey]===t[n.treeParentKey]);return l?te(l,e)+1:1},ie=t=>{const e=[],l=o=>{o.forEach(s=>{e.push(s),s[n.treeChildrenKey]&&s[n.treeChildrenKey].length>0&&l(s[n.treeChildrenKey])})};return l(t),e},Ne=()=>({backgroundColor:"#f5f7fa",color:"#606266",textAlign:"center",fontWeight:"600"}),ue=t=>!n.isTree||n.maxLevel===0?!0:te(t)<n.maxLevel,je=t=>{if(!ue(t)){$.warning(`最多只能添加${n.maxLevel}级分类`);return}ee(null,t[n.treeKey])},He=async()=>{var t;try{if(!W.isAvailable()){$.warning("Lodop未安装，将使用浏览器打印"),le();return}if(!await W.init(((t=V.meta)==null?void 0:t.title)||"数据列表打印")){$.warning("Lodop初始化失败，将使用浏览器打印"),le();return}W.setPageSize(1,"A4","A4");const{htmlBody:l,htmlStyle:o}=ce();W.previewHtml(o,l,{top:10,left:10,width:190,height:277})}catch(e){console.error("打印失败:",e),$.error("打印失败："+e.message),le()}},le=()=>{const t=Re(),e=window.open("","_blank");e&&(e.document.write(t),e.document.close(),e.focus(),e.print(),e.close())},Re=()=>{var l;const t=n.columns.filter(o=>o.props!=="operation"&&o.props!=="img");let e=`
    <html>
    <head>
      <title>打印列表</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; font-size: 12px; }
        .print-header { text-align: center; margin-bottom: 20px; font-size: 16px; font-weight: bold; }
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin-top: 10px;
          table-layout: fixed;
          border: 1px solid #666;
        }
        th, td {
          border-right: 1px solid #666;
          border-bottom: 1px solid #666;
          padding: 6px;
          text-align: left;
          background-color: transparent !important;
          word-wrap: break-word;
          overflow-wrap: break-word;
          font-size: 11px;
          margin: 0;
        }
        th:last-child, td:last-child {
          border-right: none;
        }
        tr:last-child td {
          border-bottom: none;
        }
        th { font-weight: bold; }
        tr:nth-child(even) { background-color: transparent !important; }
        .print-time { text-align: right; margin-bottom: 10px; color: #666; font-size: 12px; }
        @media print {
          body { margin: 0; padding: 10px; }
          .print-time { display: none; }
          thead { display: table-header-group; }
          tfoot { display: table-footer-group; }
          table {
            width: 100% !important;
            max-width: 100% !important;
            border: 1px solid #666 !important;
            border-collapse: collapse !important;
          }
          tr, th, td { page-break-inside: avoid; break-inside: avoid; }
          th, td {
            border: 1px solid #666 !important;
            background-color: transparent !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            font-size: 11px !important;
            padding: 6px !important;
            margin: 0 !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="print-time">打印时间：${new Date().toLocaleString()}</div>
      <div class="print-header">${((l=V.meta)==null?void 0:l.title)||"数据列表"}</div>
      <table>
        <thead>
          <tr>
  `;return t.forEach(o=>{e+=`<th>${o.label}</th>`}),e+=`
          </tr>
        </thead>
        <tbody>
  `,n.isTree?e+=ae(b.list,t,0):b.list.forEach(o=>{e+="<tr>",t.forEach(s=>{const c=q(o,s);e+=`<td>${c}</td>`}),e+="</tr>"}),e+=`
        </tbody>
      </table>
    </body>
    </html>
  `,e},ae=(t,e,l=0)=>{let o="";const s=n.treeChildrenKey||"children";return t.forEach(c=>{o+="<tr>",e.forEach((f,y)=>{const m=q(c,f);if(y===0&&n.isTree&&l>0){const z=l*20;o+=`<td style="padding-left: ${z}px;">${m}</td>`}else o+=`<td>${m}</td>`}),o+="</tr>",n.isTree&&c[s]&&Array.isArray(c[s])&&c[s].length>0&&(o+=ae(c[s],e,l+1))}),o},ce=()=>{var o;const t=n.columns.filter(s=>s.props!=="operation"&&s.props!=="img"),e=`
    body {
      font-family: Arial, "Microsoft YaHei", sans-serif;
      padding: 10mm;
      font-size: 12px;
      margin: 0;
    }
    .print-header {
      text-align: center;
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
    .print-time {
      text-align: right;
      margin-bottom: 10px;
      color: #666;
      font-size: 11px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      table-layout: fixed;
      border: 1px solid #333;
    }
    th, td {
      border: 1px solid #333;
      padding: 6px;
      text-align: left;
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-size: 11px;
    }
    th {
      font-weight: bold;
      background-color: #f5f5f5;
    }
    tr:nth-child(even) td {
      background-color: #fafafa;
    }
  `;let l=`
    <div class="print-time">打印时间：${new Date().toLocaleString()}</div>
    <div class="print-header">${((o=V.meta)==null?void 0:o.title)||"数据列表"}</div>
    <table>
      <thead>
        <tr>
  `;return t.forEach(s=>{l+=`<th>${s.label}</th>`}),l+=`
        </tr>
      </thead>
      <tbody>
  `,n.isTree?l+=ae(b.list,t,0):b.list.forEach(s=>{l+="<tr>",t.forEach(c=>{const f=q(s,c);l+=`<td>${f}</td>`}),l+="</tr>"}),l+=`
      </tbody>
    </table>
  `,{htmlBody:l,htmlStyle:e}},qe=async()=>{if(!b.list||b.list.length===0){$.warning("没有数据可分享");return}X.value=!0,M.value=!0,P.value="";try{const{htmlBody:t,htmlStyle:e}=ce(),l=document.createElement("div");l.style.position="absolute",l.style.left="-9999px",l.style.top="-9999px",l.style.width="210mm",l.style.backgroundColor="#fff",l.style.padding="20px";const o=document.createElement("style");o.textContent=e,l.appendChild(o);const s=document.createElement("div");s.innerHTML=t,l.appendChild(s),document.body.appendChild(l);const c=await gt(l,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!1});P.value=c.toDataURL("image/png"),document.body.removeChild(l),$.success("图片生成成功")}catch(t){console.error("生成分享图片失败:",t),$.error("生成分享图片失败"),M.value=!1}finally{X.value=!1}},Ge=()=>{var e;if(!P.value)return;const t=document.createElement("a");t.href=P.value,t.download=`${((e=V.meta)==null?void 0:e.title)||"数据列表"}_${new Date().getTime()}.png`,document.body.appendChild(t),t.click(),document.body.removeChild(t),$.success("图片下载成功")};return(t,e)=>{const l=v("el-button"),o=v("el-input"),s=v("el-option"),c=v("el-select"),f=v("el-tree-select"),y=v("el-date-picker"),m=v("el-form-item"),z=v("el-form"),oe=v("MoreFilled"),ne=v("el-icon"),G=v("el-table-column"),Ie=v("el-image"),pe=v("el-table"),We=v("el-pagination"),Je=v("el-card"),Xe=v("el-radio"),Qe=v("el-radio-group"),Ze=v("el-upload"),et=v("el-alert"),fe=v("el-dialog"),tt=dt("loading");return r(),g(U,null,[A("div",kt,[h(Je,{shadow:"never"},{default:u(()=>[A("div",_t,[A("div",xt,[!S(V).meta.actions||S(V).meta.actions.indexOf("新增")>=0?(r(),p(l,{key:0,type:"primary",onClick:Oe},{default:u(()=>e[7]||(e[7]=[w("新增 ")])),_:1})):_("",!0),h(l,{onClick:E},{default:u(()=>e[8]||(e[8]=[w("刷新")])),_:1}),x.print?(r(),p(l,{key:1,onClick:He,type:"primary"},{default:u(()=>e[9]||(e[9]=[w("打印")])),_:1})):_("",!0),x.print?(r(),p(l,{key:2,onClick:qe,type:"success",loading:X.value},{default:u(()=>e[10]||(e[10]=[w("分享")])),_:1},8,["loading"])):_("",!0)]),x.searchFields&&x.searchFields.length>0?(r(),g("div",Ct,[h(z,{inline:!0,model:C.value,class:"demo-form-inline"},{default:u(()=>[(r(!0),g(U,null,O(x.searchFields,(a,R)=>(r(),p(m,{key:R},{default:u(()=>[a.type==="input"?(r(),p(o,{key:0,modelValue:C.value[a.field],"onUpdate:modelValue":d=>C.value[a.field]=d,placeholder:`请输入${a.label}`,clearable:"",onKeyup:it(j,["enter"])},{append:u(()=>[h(l,{onClick:j},{default:u(()=>e[11]||(e[11]=[w("搜索")])),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):a.type==="select"?(r(),p(c,{key:1,modelValue:C.value[a.field],"onUpdate:modelValue":d=>C.value[a.field]=d,placeholder:`请选择${a.label}`,clearable:"",onChange:j},{default:u(()=>[(r(!0),g(U,null,O(N.value[a.field],(d,k)=>(r(),p(s,{key:k,label:d[a.text||"name"],value:d[a.value||"id"]},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):a.type==="tree-select"?(r(),p(f,{key:2,modelValue:C.value[a.field],"onUpdate:modelValue":d=>C.value[a.field]=d,data:N.value[a.field]||[],props:{children:a.treeChildrenKey||"children",label:a.text||"name",value:a.value||"id"},"render-after-expand":!1,"check-strictly":a.checkStrictly!==void 0?a.checkStrictly:!0,placeholder:`请选择${a.label}`,clearable:"",onChange:j,style:{width:"200px"}},null,8,["modelValue","onUpdate:modelValue","data","props","check-strictly","placeholder"])):a.type==="date"?(r(),p(y,{key:3,modelValue:C.value[a.field],"onUpdate:modelValue":d=>C.value[a.field]=d,type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",placeholder:`请选择${a.label}`,onChange:j},null,8,["modelValue","onUpdate:modelValue","placeholder"])):_("",!0)]),_:2},1024))),128)),h(m,null,{default:u(()=>[h(l,{onClick:Ve},{default:u(()=>e[12]||(e[12]=[w("重置")])),_:1})]),_:1})]),_:1},8,["model"])])):_("",!0)]),he((r(),p(pe,{class:"mt20",data:b.list,border:"",stripe:"","row-key":De.value,"tree-props":Me.value,"default-expand-all":x.defaultExpandAll,"header-cell-style":Ne,"show-summary":x.showSummary,"summary-method":x.summaryMethod},{default:u(()=>[h(G,{type:"index",fixed:"left","min-width":"55",align:"center"},{header:u(()=>[A("div",{style:{cursor:"pointer",color:"red"},onClick:me},[h(ne,null,{default:u(()=>[h(oe,{size:30})]),_:1})])]),_:1}),(r(!0),g(U,null,O(ge.value,(a,R)=>(r(),p(G,{key:R,label:a.showName,prop:a.props,"min-width":a.width,sortable:a.sortable,align:a.align==="default"?"":a.align,fixed:S(ut)(a.flex)},ct({_:2},[a.label!="设置"?{name:"default",fn:u(({row:d})=>[a.type=="pic"?(r(),p(Ie,{key:0,class:"img",src:F(d,a.props),"preview-src-list":[F(d,a.props)]},null,8,["src","preview-src-list"])):a.type=="name"?(r(),g("div",wt,L(q(d,a)),1)):a.type=="switch"?(r(),g("div",Vt,L(F(d,a.props)==1?"开":"关"),1)):a.type=="switch1"?(r(),g("div",{key:3,class:pt(F(d,a.props)==1?"switch1-yes":"switch1-no")},L(F(d,a.props)==1?"是":"否"),3)):(r(),g("div",Kt,L(F(d,a.props)),1))]),key:"0"}:void 0,a.label=="设置"&&(Le.value||x.customOperationButtons&&x.customOperationButtons.length>0)?{name:"default",fn:u(({row:d})=>[x.isTree&&ue(d)&&(!S(V).meta.actions||S(V).meta.actions.indexOf("新增")>=0)?(r(),p(l,{key:0,type:"success",link:"",size:"small",onClick:k=>je(d)},{default:u(()=>e[13]||(e[13]=[w("新增 ")])),_:2},1032,["onClick"])):_("",!0),!S(V).meta.actions||S(V).meta.actions.indexOf("更新")>=0?(r(),p(l,{key:1,type:"primary",link:"",size:"small",onClick:k=>Pe(d)},{default:u(()=>e[14]||(e[14]=[w("修改 ")])),_:2},1032,["onClick"])):_("",!0),!S(V).meta.actions||S(V).meta.actions.indexOf("删除")>=0?(r(),p(l,{key:2,type:"danger",link:"",size:"small",onClick:k=>Be(d)},{default:u(()=>e[15]||(e[15]=[w("删除 ")])),_:2},1032,["onClick"])):_("",!0),(r(!0),g(U,null,O(x.customOperationButtons,k=>(r(),p(l,{key:k.label,type:k.type||"primary",link:"",size:"small",onClick:re=>k.handler&&k.handler(d)},{default:u(()=>[w(L(k.label),1)]),_:2},1032,["type","onClick"]))),128))]),key:"1"}:void 0]),1032,["label","prop","min-width","sortable","align","fixed"]))),128))]),_:1},8,["data","row-key","tree-props","default-expand-all","show-summary","summary-method"])),[[tt,J.value]]),x.isTree?_("",!0):(r(),p(We,{key:0,class:"mt10",background:"",layout:"prev, pager, next,jumper","current-page":b.pager.page,"onUpdate:currentPage":e[0]||(e[0]=a=>b.pager.page=a),"page-size":b.pager.limit,total:b.total,onCurrentChange:E},null,8,["current-page","page-size","total"]))]),_:1})]),h(fe,{class:"dialog",title:Q.value,draggable:"",modelValue:B.value,"onUpdate:modelValue":e[1]||(e[1]=a=>B.value=a),onClose:e[2]||(e[2]=a=>i.value={})},{footer:u(()=>[h(l,{onClick:ze},{default:u(()=>e[16]||(e[16]=[w("取消")])),_:1}),h(l,{type:"primary",onClick:Fe},{default:u(()=>e[17]||(e[17]=[w("提交")])),_:1})]),default:u(()=>[h(z,{class:"dialogForm p20","label-width":"125px",rules:Se.value,ref_key:"formRef",ref:H},{default:u(()=>[(r(!0),g(U,null,O(x.edit.fields,(a,R)=>he((r(),p(m,{key:R,label:a.label+"：",prop:a.field,rules:$e(a)},{default:u(()=>[a.type=="input"?(r(),p(o,{key:0,type:a.field=="mark"?"textarea":"",rows:4,modelValue:i.value[a.field],"onUpdate:modelValue":d=>i.value[a.field]=d,placeholder:a.placeholder||`请输入${a.label}`,readonly:a.field=="number"},null,8,["type","modelValue","onUpdate:modelValue","placeholder","readonly"])):_("",!0),a.type=="textarea"?(r(),p(o,{key:1,type:"textarea",rows:4,modelValue:i.value[a.field],"onUpdate:modelValue":d=>i.value[a.field]=d,placeholder:`请输入${a.label}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])):_("",!0),a.type=="select"?(r(),p(c,{key:2,modelValue:i.value[a.field],"onUpdate:modelValue":d=>i.value[a.field]=d,placeholder:`请选择${a.label}`},{default:u(()=>[(r(!0),g(U,null,O(Te(a),(d,k)=>(r(),p(s,{key:k,label:d[a.text||"name"],value:d[a.value||"id"]},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):_("",!0),a.type=="tree-select"?(r(),p(f,{key:3,modelValue:i.value[a.field],"onUpdate:modelValue":d=>i.value[a.field]=d,data:Ue(a),props:{children:a.treeChildrenKey||"children",label:a.text||"name",value:a.value||"id"},"render-after-expand":!1,"check-strictly":a.checkStrictly!==void 0?a.checkStrictly:!0,placeholder:`请选择${a.label}`,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","data","props","check-strictly","placeholder"])):_("",!0),a.type=="date"?(r(),p(y,{key:4,format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",modelValue:i.value[a.field],"onUpdate:modelValue":d=>i.value[a.field]=d,type:"date",placeholder:`请选择${a.label}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])):_("",!0),a.type=="radio"?(r(),p(Qe,{key:5,modelValue:i.value[a.field],"onUpdate:modelValue":d=>i.value[a.field]=d},{default:u(()=>[(r(!0),g(U,null,O(a.list,(d,k)=>(r(),p(Xe,{key:k,value:d.value},{default:u(()=>[w(L(d.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):_("",!0),a.type=="pic"?(r(),p(Ze,{key:6,name:"image",headers:{Authorization:`Bearer ${S(ve).token}`},action:"https://software.syn.tswm.club/api/upload/image","show-file-list":!1,"on-success":d=>Ke(d,a.field)},{default:u(()=>[A("div",St,[i.value[a.field]?(r(),g("img",{key:0,src:i.value[a.field]},null,8,$t)):(r(),p(ne,{key:1,size:"20"},{default:u(()=>[h(S(ft))]),_:1}))])]),_:2},1032,["headers","on-success"])):_("",!0),a.type=="tip"?(r(),g("div",Tt,[h(et,{title:Ae(a),type:"info",closable:!1,"show-icon":""},null,8,["title"])])):_("",!0),a.type=="price_table"?(r(),g("div",Ut,[h(pe,{data:Ee(a),border:""},{default:u(()=>[h(G,{prop:"type",label:"价格类型",width:"100",align:"center"}),(r(!0),g(U,null,O(a.columns,(d,k)=>(r(),p(G,{key:k,label:d,width:"150",align:"center"},{default:u(({row:re})=>[h(o,{modelValue:i.value[re.fields[k]],"onUpdate:modelValue":lt=>i.value[re.fields[k]]=lt,placeholder:`请输入${d}价格`,size:"small"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]))),128))]),_:2},1032,["data"])])):_("",!0)]),_:2},1032,["label","prop","rules"])),[[ht,se(a)]])),128))]),_:1},8,["rules"])]),_:1},8,["title","modelValue"]),h(fe,{modelValue:M.value,"onUpdate:modelValue":e[4]||(e[4]=a=>M.value=a),title:"单据分享",width:"80%",top:"1%","close-on-click-modal":!1},{footer:u(()=>[h(l,{onClick:e[3]||(e[3]=a=>M.value=!1)},{default:u(()=>e[19]||(e[19]=[w("关闭")])),_:1}),h(l,{type:"primary",onClick:Ge,disabled:!P.value},{default:u(()=>e[20]||(e[20]=[w("下载图片")])),_:1},8,["disabled"])]),default:u(()=>[A("div",Et,[P.value?(r(),g("div",At,[A("img",{src:P.value,alt:"打印内容预览",style:{height:"auto",width:"100%"}},null,8,Ot)])):(r(),g("div",Pt,[h(ne,{class:"is-loading",style:{"font-size":"24px"}},{default:u(()=>[h(S(yt))]),_:1}),e[18]||(e[18]=A("span",{style:{"margin-left":"8px"}},"正在生成图片...",-1))]))])]),_:1},8,["modelValue"]),h(vt,{modelValue:D.value,"onUpdate:modelValue":e[5]||(e[5]=a=>D.value=a),"header-title":n.columns,onSave:ke,onClose:e[6]||(e[6]=a=>D.value=!1)},null,8,["modelValue","header-title"])],64)}}}),Bt=bt(Ft,[["__scopeId","data-v-955c8bca"]]);export{Bt as p};
