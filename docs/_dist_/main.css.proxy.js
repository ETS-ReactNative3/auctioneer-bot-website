// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.bg-blue-300{--bg-opacity:1;background-color:#90cdf4;background-color:rgba(144,205,244,var(--bg-opacity))}.bg-blue-600{--bg-opacity:1;background-color:#3182ce;background-color:rgba(49,130,206,var(--bg-opacity))}.bg-purple-400{--bg-opacity:1;background-color:#b794f4;background-color:rgba(183,148,244,var(--bg-opacity))}.bg-purple-500{--bg-opacity:1;background-color:#9f7aea;background-color:rgba(159,122,234,var(--bg-opacity))}.bg-purple-800{--bg-opacity:1;background-color:#553c9a;background-color:rgba(85,60,154,var(--bg-opacity))}.hover\\:bg-purple-600:hover{--bg-opacity:1;background-color:#805ad5;background-color:rgba(128,90,213,var(--bg-opacity))}.border-purple-500{--border-opacity:1;border-color:#9f7aea;border-color:rgba(159,122,234,var(--border-opacity))}.border-purple-600{--border-opacity:1;border-color:#805ad5;border-color:rgba(128,90,213,var(--border-opacity))}.hover\\:border-purple-300:hover{--border-opacity:1;border-color:#d6bcfa;border-color:rgba(214,188,250,var(--border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded-b-md{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.border-solid{border-style:solid}.border-0{border-width:0}.border-4{border-width:4px}.border{border-width:1px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.hidden{display:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.content-center{align-content:center}.justify-center{justify-content:center}.justify-around{justify-content:space-around}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.font-medium{font-weight:500}.font-bold{font-weight:700}.h-8{height:2rem}.h-12{height:3rem}.h-20{height:5rem}.h-24{height:6rem}.h-full{height:100%}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-5xl{font-size:3rem}.leading-relaxed{line-height:1.625}.my-auto{margin-top:auto;margin-bottom:auto}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mb-3{margin-bottom:.75rem}.ml-3{margin-left:.75rem}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.ml-4{margin-left:1rem}.mb-5{margin-bottom:1.25rem}.mt-6{margin-top:1.5rem}.mt-auto{margin-top:auto}.mb-auto{margin-bottom:auto}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.p-4{padding:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pb-2{padding-bottom:.5rem}.pl-2{padding-left:.5rem}.pt-5{padding-top:1.25rem}.pb-5{padding-bottom:1.25rem}.pb-6{padding-bottom:1.5rem}.pt-8{padding-top:2rem}.pb-8{padding-bottom:2rem}.pt-10{padding-top:2.5rem}.pb-10{padding-bottom:2.5rem}.pb-20{padding-bottom:5rem}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.shadow-2xl{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.text-center{text-align:center}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.text-purple-300{--text-opacity:1;color:#d6bcfa;color:rgba(214,188,250,var(--text-opacity))}.text-purple-400{--text-opacity:1;color:#b794f4;color:rgba(183,148,244,var(--text-opacity))}.text-purple-600{--text-opacity:1;color:#805ad5;color:rgba(128,90,213,var(--text-opacity))}.hover\\:text-purple-300:hover{--text-opacity:1;color:#d6bcfa;color:rgba(214,188,250,var(--text-opacity))}.italic{font-style:italic}.capitalize{text-transform:capitalize}.hover\\:underline:hover{text-decoration:underline}.w-1{width:.25rem}.w-6{width:1.5rem}.w-12{width:3rem}.w-24{width:6rem}.w-full{width:100%}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%;max-width:640px}@media (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:1280px){.sm\\:container{max-width:1280px}}.sm\\:border-gray-800{--border-opacity:1;border-color:#2d3748;border-color:rgba(45,55,72,var(--border-opacity))}.sm\\:border-l-2{border-left-width:2px}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:mt-0{margin-top:0}.sm\\:ml-4{margin-left:1rem}.sm\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.sm\\:pl-4{padding-left:1rem}.sm\\:pl-6{padding-left:1.5rem}}@media (min-width:768px){.md\\:container{width:100%}@media (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:1280px){.md\\:container{max-width:1280px}}.md\\:border-solid{border-style:solid}.md\\:border-none{border-style:none}.md\\:border-b{border-bottom-width:1px}.md\\:flex-row{flex-direction:row}.md\\:justify-start{justify-content:flex-start}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:mb-0{margin-bottom:0}.md\\:px-0{padding-left:0;padding-right:0}.md\\:pl-8{padding-left:2rem}.md\\:pl-10{padding-left:2.5rem}.md\\:w-2\\/3{width:66.666667%}.md\\:w-full{width:100%}}@media (min-width:1024px){.lg\\:container{width:100%}@media (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1280px){.lg\\:container{max-width:1280px}}.lg\\:flex{display:flex}.lg\\:items-start{align-items:flex-start}.lg\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.lg\\:pl-10{padding-left:2.5rem}}@media (min-width:1280px){.xl\\:container{width:100%}@media (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px){.xl\\:container{max-width:1280px}}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}