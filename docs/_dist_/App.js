/* src/App.svelte generated by Svelte v3.38.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../web_modules/svelte/internal.js";

import "./main.css.proxy.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Discord from "./Discord.js";
import CommandList from "./CommandList.js";
import News from "./News.js";

function create_fragment(ctx) {
	let div;
	let header;
	let t0;
	let news;
	let t1;
	let discord;
	let t2;
	let commandlist;
	let t3;
	let footer;
	let current;
	header = new Header({});
	news = new News({});
	discord = new Discord({});
	commandlist = new CommandList({});
	footer = new Footer({});

	return {
		c() {
			div = element("div");
			create_component(header.$$.fragment);
			t0 = space();
			create_component(news.$$.fragment);
			t1 = space();
			create_component(discord.$$.fragment);
			t2 = space();
			create_component(commandlist.$$.fragment);
			t3 = space();
			create_component(footer.$$.fragment);
			attr(div, "class", "w-full");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(header, div, null);
			append(div, t0);
			mount_component(news, div, null);
			append(div, t1);
			mount_component(discord, div, null);
			append(div, t2);
			mount_component(commandlist, div, null);
			append(div, t3);
			mount_component(footer, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(news.$$.fragment, local);
			transition_in(discord.$$.fragment, local);
			transition_in(commandlist.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(header.$$.fragment, local);
			transition_out(news.$$.fragment, local);
			transition_out(discord.$$.fragment, local);
			transition_out(commandlist.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(header);
			destroy_component(news);
			destroy_component(discord);
			destroy_component(commandlist);
			destroy_component(footer);
		}
	};
}

const logo = "logo.jpg";
const altText = "logo with pile of treasure";

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default App;