import{SvelteComponent as n,attr as a,detach as r,element as d,init as c,insert as o,noop as l,safe_not_equal as m}from"../web_modules/svelte/internal.js";function f(s){let e;return{c(){e=d("section"),e.innerHTML=`<div class="md:w-2/3 w-full mx-auto"><div class="container px-3 pb-6 mx-auto flex flex-wrap"><div class="text-white text-2xl pb-2 md:w-full">Bot Commands</div> 
            <div class="flex relative pl-2 pt-10 pb-20 sm:items-center"><div class="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex"><div class="h-full w-1 bg-gray-800 pointer-events-none"></div></div> 
                <div class="flex-grow md:pl-8 flex sm:items-center items-start flex-col sm:flex-row"><div class=" text-2xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">!bghelp</div> 
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0"><h2 class="font-medium title-font text-white mb-1 text-xl">Quick Help</h2> 
                        <p class="leading-relaxed">Get all the info you could possibly need on all the other commands
                            the
                            Auction Bot can help you with.</p></div></div></div> 
            <div class="flex relative pl-2 pb-20 sm:items-center"><div class="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex"><div class="h-full w-1 bg-gray-800 pointer-events-none"></div></div> 
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"><div class="text-3xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">!r</div> 
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0"><h2 class="font-medium title-font text-white mb-1 text-xl">Pick a Realm, any Realm</h2> 
                        <p class="leading-relaxed">Simply type !r {realm} and hit enter. For example:
                            <code class="text-purple-300">!r arthas</code> or <code class="text-purple-300">!r
                                arthas-eu</code>.</p></div></div></div> 
            <div class="flex relative pl-2 pb-20 sm:items-center"><div class="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex"><div class="h-full w-1 bg-gray-800 pointer-events-none"></div></div> 
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"><div class="text-3xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">!p</div> 
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0"><h2 class="font-medium title-font text-white mb-1 text-xl">Item Stats Instantly</h2> 
                        <p class="leading-relaxed">Get key stats and information on any item on the Auction House.</p></div></div></div> 
            <div class="flex relative lg:pl-2 pb-20 sm:items-center w-full"><div class="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex"><div class="h-full w-1 bg-gray-800 pointer-events-none"></div></div> 
                <img src="!p.png" alt="example of !p call for akunda&#39;s bite to show the variety of information provided." class="md:pl-10 max-h-64"></div> 
            <div class="flex relative pl-2 pb-10 sm:items-center"><div class="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex"><div class="h-full w-1 bg-gray-800 pointer-events-none"></div></div> 
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"><div class="text-3xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">!bg+</div> 
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0"><h2 class="font-medium title-font text-white mb-1 text-xl">Master of the Craft</h2> 
                        <p class="leading-relaxed pb-2">Every item in a craftable item&#39;s recipe and item in the those
                            item&#39;s
                            recipes and so on.</p> 
                        <p class="italic">TLDR; know everything there is to know.</p></div></div></div> 
            <div class="flex relative lg:pl-2 pb-20 sm:items-center w-full"><div class="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex"><div class="h-full w-1 bg-gray-800 pointer-events-none"></div></div> 
                <img src="bg+.png" alt="Example of !bg+ call for bountiful captain&#39;s feast specifically showing multi-level recipe behavior." class="md:pl-10 max-h-64"></div></div></div>`,a(e,"class","text-gray-500 bg-gray-900 body-font pt-8")},m(t,i){o(t,e,i)},p:l,i:l,o:l,d(t){t&&r(e)}}}class x extends n{constructor(s){super();c(this,s,null,f,m,{})}}export default x;
