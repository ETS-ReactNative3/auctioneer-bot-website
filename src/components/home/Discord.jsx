import React from 'react';
import {Link} from 'react-router-dom';
import Feature from '../utility/Feature';
import Header from '../home/Header';
import { PAGE_NAMES } from '../../utils/constants';

/* Renders a hero section describing Buyer's Guide */
const Discord = () => {
    return (
        <div className="relative">
            
            <div className="absolute w-full flavor-container block xl:hidden">
                <div className="results-placeholder-container flex flex-col">
                    <div className="placeholder-flavor-head" />
                    <div className="placeholder-flavor w-full" />
                </div>
            </div>
            <section className="blob-container text-gray-400 body-font relative">
                <Header pageName={PAGE_NAMES.AUCTION_BOT} />
                <div className="hero-container container px-5 pt-5 pb-20 lg:pb-32 mx-auto flex flex-wrap lg:w-9/12 ">
                    <div className="flex flex-col flex-wrap py-6 text-center xl:text-left md:mx-auto xl:mx-16 xl:my-auto">
                        <div className="flex flex-col pb-8 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium xl:font-bold mb-3 capitalize text-3xl sm:text-4xl md:text-5xl xl:text-6xl xl:w-full">the best price every
                                    time</h2>
                                <div className="pb-5">
                                    <p className="leading-relaxed text-base text-lg md:text-xl lg:text-2xl xl:text-xl mb-3 xl:w-3/4">Make your gold go farther with convenient
                                        stats sent to you in Discord for every item on the auction house!</p>
                                </div>
                                <div className="hero-button-container flex flex-wrap justify-around xl:justify-start">
                                    <div className="mx-2">
                                        <a target="_blank" rel="noreferrer"
                                            className="w-full block text-white bg-purple-700 border-0 px-6 focus:outline-none focus:bg-purple-600 hover:bg-purple-600 rounded h-12 content-center flex justify-center"
                                            href="https://discord.com/api/oauth2/authorize?client_id=492451055632777228&permissions=0&scope=bot%20applications.commands"
                                        >
                                            <i className="fas fa-robot fa-lg mr-2 my-auto"></i>
                                            <p className="my-auto">Add to Discord</p>
                                        </a>
                                    </div>
                                    
                                    <Feature name="webTool">
                                        <div className="mx-2 xl:hidden">
                                            <Link to="/web-tool" className="hero-button-yellow focus:outline-none border-0 px-6 rounded h-12 content-center flex justify-center">
                                                <div className="my-auto">
                                                    <i className="fa fa-stream mr-2" />
                                                    Try the Web Tool
                                                </div>
                                            </Link>
                                        </div>
                                    </Feature>

                                    <div className="mx-2">
                                        <a target="_blank" rel="noreferrer"
                                            className="px-6 hero-button-discord focus:outline-none rounded h-12 content-center flex justify-center"
                                            href="https://discord.gg/Jv2DpfzXNC"
                                        >
                                            <svg className="h-full mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 245 240">
                                                <path className="discord-st0"
                                                    d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/>
                                                <path className="discord-st0"
                                                    d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
                                            </svg>
                                            <p className="mt-auto mb-auto">Join the Server</p>
                                        </a>
                                    </div>

                                    <div className="hidden xl:block break" />

                                    <Feature name="webTool">
                                        <div className="mx-2 hidden xl:block">
                                            <Link to="/web-tool" className="hero-button-yellow focus:outline-none border-0 px-6 rounded h-12 content-center flex justify-center">
                                                <div className="my-auto">
                                                    <i className="fa fa-stream mr-2" />
                                                    Try the Web Tool
                                                </div>
                                            </Link>
                                        </div>
                                    </Feature>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Discord;