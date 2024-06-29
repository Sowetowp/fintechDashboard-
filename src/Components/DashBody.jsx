import React, { useEffect, useReducer, useRef, useState } from 'react'
import card from "../assets/dual-dot.png"
import { BarChart, LineChart, PieChart, lineElementClasses, pieArcLabelClasses } from '@mui/x-charts'
import notif1 from "../assets/1.jpg"
import notif2 from "../assets/2.jpg"
import notif3 from "../assets/3.jpg"
import notif4 from "../assets/4.jpg"

const drops = {
    dashboard: false,
    cms: false,
    apps: false,
    charts: false,
    bootstrap: false,
    plugins: false,
    widget: false,
    form: false,
    table: false,
    pages: false
}

const dropReducer = (state, action) => {
    switch (action.type) {
        case "open":
            return Object.keys(state).reduce((acc, cuu) => {
                acc[cuu] = cuu === action.val
                return acc;
            }, {})
        case "close":
            return Object.keys(state).reduce((acc, cuu) => {
                acc[cuu] = false
                return acc;
            }, {})
        default:
            return state
    }
}

const DashBody = (prop) => {
    const [drop, dispatch] = useReducer(dropReducer, drops)
    const [height, setHeight] = useState("0px")
    const [day, setDay] = useState("month")
    const contentRef = useRef()
    const canvasRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        }
    }, []);

    const history = [
        {
            credit: true,
            name: "XYZ Store ID",
            price: "+$5,553",
            status: "Completed"
        },
        {
            credit: false,
            name: "XYZ Store ID",
            price: "-$167",
            status: "Pending"
        },
        {
            credit: true,
            name: "XYZ Store ID",
            price: "-$167",
            status: "Canceled"
        }
    ]

    const quickTransfer = [
        {
            image: notif1,
            name: "Samuel",
            handle: "@sam224"
        },
        {
            image: notif2,
            name: "Samuel",
            handle: "@sam224"
        },
        {
            image: notif3,
            name: "Samuel",
            handle: "@sam224"
        },
        {
            image: notif4,
            name: "Samuel",
            handle: "@sam224"
        },
        {
            image: notif1,
            name: "Samuel",
            handle: "@sam224"
        },
        {
            image: notif2,
            name: "Samuel",
            handle: "@sam224"
        },
        {
            image: notif3,
            name: "Samuel",
            handle: "@sam224"
        },
        {
            image: notif4,
            name: "Samuel",
            handle: "@sam224"
        }
    ]

    const images = [
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className='group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]' strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"></path> </g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" className='group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)]'></path> </g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"} group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)]`} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.527 1c.395 0 .59.456.398.764L21.93 6.757c-.34.566-1.16.01-.86-.514l2.997-4.994c.094-.164.272-.25.46-.25zM5.473 1c-.375.007-.59.455-.398.764L8.07 6.757c.338.563 1.174.01.86-.514L5.932 1.25C5.84 1.085 5.66.995 5.473 1zM19.5 13c-.822 0-1.5.678-1.5 1.5v2c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2c0-.822-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v2c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2c0-.286.214-.5.5-.5zm-9-1c-.822 0-1.5.678-1.5 1.5v2c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2c0-.822-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v2c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2c0-.286.214-.5.5-.5zm-9 8c-.822 0-1.5.678-1.5 1.5v4c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-4c0-.822-.678-1.5-1.5-1.5zm0 1h27c.286 0 .5.214.5.5v4c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-4c0-.286.214-.5.5-.5zM15 7C7.937 7.01 1.772 11.695.062 18.377l-.003.012s-.154.594.032 1.247c.093.326.284.685.63.95.347.263.825.413 1.42.413h25.712c.595 0 1.075-.15 1.42-.414.348-.264.54-.623.632-.95.187-.652.037-1.247.037-1.247l-.004-.013C28.23 11.694 22.064 7.007 15 7zm0 1c6.62.006 12.37 4.386 13.967 10.613 0 .002.078.403-.022.75-.05.174-.13.315-.275.426-.147.11-.383.21-.816.21H2.144c-.435 0-.67-.1-.816-.21-.146-.112-.224-.253-.273-.427-.098-.344-.023-.736-.022-.744C2.63 12.39 8.38 8.01 15 8z"></path></g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"} group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)]`} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><circle className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" cx="12" cy="20.59" r="1.91"></circle><circle className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" cx="18.68" cy="12" r="1.91"></circle><circle className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" cx="5.32" cy="3.41" r="1.91"></circle><line className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" x1="23.45" y1="3.41" x2="7.23" y2="3.41"></line><line className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" x1="3.41" y1="3.41" x2="0.55" y2="3.41"></line><line className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" x1="23.45" y1="12" x2="20.59" y2="12"></line><line className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" x1="16.77" y1="12" x2="0.55" y2="12"></line><line className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" x1="23.45" y1="20.59" x2="13.91" y2="20.59"></line><line className="cls-1 group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" fill="none" strokeMiterlimit="10" strokeWidth="1.91px" x1="10.09" y1="20.59" x2="0.55" y2="20.59"></line></g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" className='group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)]'></path> </g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"} group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)]`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M15,2 C15.5522847,2 16,2.44771525 16,3 L16,6 L17,6 C18.6568542,6 20,7.34314575 20,9 L20,12 C20,15.3137085 17.3137085,18 14,18 L13,18 L13,21 C13,21.5522847 12.5522847,22 12,22 C11.4477153,22 11,21.5522847 11,21 L11,18 L10,18 C6.6862915,18 4,15.3137085 4,12 L4,9 C4,7.34314575 5.34314575,6 7,6 L8,6 L8,3 C8,2.44771525 8.44771525,2 9,2 C9.55228475,2 10,2.44771525 10,3 L10,6 L14,6 L14,3 C14,2.44771525 14.4477153,2 15,2 Z M17,8 L7,8 C6.44771525,8 6,8.44771525 6,9 L6,12 C6,14.209139 7.790861,16 10,16 L14,16 C16.209139,16 18,14.209139 18,12 L18,9 C18,8.44771525 17.5522847,8 17,8 Z"></path> </g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 10.1308 2 9.19615 2.40192 8.5C2.66523 8.04394 3.04394 7.66523 3.5 7.40192C4.19615 7 5.13077 7 7 7H17C18.8692 7 19.8038 7 20.5 7.40192C20.9561 7.66523 21.3348 8.04394 21.5981 8.5C22 9.19615 22 10.1308 22 12C22 13.8692 22 14.8038 21.5981 15.5C21.3348 15.9561 20.9561 16.3348 20.5 16.5981C19.8038 17 18.8692 17 17 17H7C5.13077 17 4.19615 17 3.5 16.5981C3.04394 16.3348 2.66523 15.9561 2.40192 15.5C2 14.8038 2 13.8692 2 12Z" className='group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]'></path> <path d="M19 4C19 2.89543 18.1046 2 17 2H7C5.89543 2 5 2.89543 5 4" className='group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]'></path> <path d="M19 20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20" className='group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]'></path> <rect x="5.5" y="10.5" width="5" height="1" rx="0.5" className='group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]'></rect> </g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"} group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)]`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 15h12v1H10zm-4-3h2v-2H6zm4-1h12v-1H10zm-4 6h2v-2H6zm4 4h12v-1H10zm-4 1h2v-2H6zM23 3v3a1.001 1.001 0 0 1-1 1H2a1.001 1.001 0 0 1-1-1V3a1.001 1.001 0 0 1 1-1h20a1.001 1.001 0 0 1 1 1zm-.999 3H22V3H2v3h20.001z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"} group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)]`} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M225.882 0h1468.236C1818.692 0 1920 101.308 1920 225.882v1468.236c0 124.574-101.308 225.882-225.882 225.882H225.882C101.308 1920 0 1818.692 0 1694.118V225.882C0 101.308 101.308 0 225.882 0Zm854.462 1694.118h614v-614h-614v614ZM225.882 839.882h614v-614h-614v614Zm0 854.236h614v-614h-614v614Zm854.236-854.236h614v-614h-614v614Z" fillRule="evenodd"></path> </g></svg>,
        <svg className={`w-6 ${prop.prop ? "" : "hidden md:block"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 2L16.5 2L21 6.5V19" className="group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 20.5V6.5C3 5.67157 3.67157 5 4.5 5H14.2515C14.4106 5 14.5632 5.06321 14.6757 5.17574L17.8243 8.32426C17.9368 8.43679 18 8.5894 18 8.74853V20.5C18 21.3284 17.3284 22 16.5 22H4.5C3.67157 22 3 21.3284 3 20.5Z" className="group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 8.4V5.35355C14 5.15829 14.1583 5 14.3536 5C14.4473 5 14.5372 5.03725 14.6036 5.10355L17.8964 8.39645C17.9628 8.46275 18 8.55268 18 8.64645C18 8.84171 17.8417 9 17.6464 9H14.6C14.2686 9 14 8.73137 14 8.4Z" className="group-hover:stroke-[#0099FF] dark:group-hover:stroke-[white] stroke-[rgb(107,114,128)] dark:stroke-[rgb(209,213,219)]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    ]

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawChart(ctx);
    }, []);
    const drawChart = (ctx) => {
        // Example data
        const data = [10, 20, 10, 20, 10, 20, 10];

        // Chart dimensions
        const chartWidth = 600;
        const chartHeight = 980;
        const padding = 0;

        // Canvas dimensions
        ctx.canvas.width = chartWidth;
        ctx.canvas.height = chartHeight - 150;

        // Clear canvas
        ctx.clearRect(0, 0, chartWidth, chartHeight);

        // Calculate points
        const xStep = (chartWidth - 2 * padding) / (data.length - 1);
        const yMax = Math.max(...data);
        const yStep = (280 - 2 * padding) / yMax;

        const points = data.map((value, index) => ({
            x: padding + index * xStep,
            y: 280 - padding - value * yStep
        }));

        let animationProgress = 0; // Initial progress of the animation
        const animationDuration = 1000; // Duration of the animation in milliseconds
        const startTime = performance.now(); // Start time of the animation

        const animate = () => {
            const currentTime = performance.now();
            animationProgress = Math.min((currentTime - startTime) / animationDuration, 1); // Calculate animation progress

            // Clear canvas
            ctx.clearRect(0, 0, chartWidth, chartHeight);

            // Draw curves and fill areas
            ['#aedaf9', '#77c5fd', '#37a9fb'].forEach((color, index) => {
                drawCurveAndFill(ctx, points, xStep, chartHeight, padding, index * 125, color, animationProgress);
            });

            // If animation is not complete, request the next frame
            if (animationProgress < 1) {
                requestAnimationFrame(animate);
            }
        };

        const drawCurveAndFill = (ctx, points, xStep, chartHeight, padding, yOffset, color, progress) => {
            ctx.beginPath();
            ctx.moveTo(points[0].x, (chartHeight - padding) - (chartHeight - padding - points[0].y - yOffset) * progress);
            for (let i = 0; i < points.length - 1; i++) {
                const cp1x = points[i].x + xStep / 2;
                const cp1y = (chartHeight - padding) - (chartHeight - padding - points[i].y - yOffset) * progress;
                const cp2x = points[i + 1].x - xStep / 2;
                const cp2y = (chartHeight - padding) - (chartHeight - padding - points[i + 1].y - yOffset) * progress;
                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, points[i + 1].x, (chartHeight - padding) - (chartHeight - padding - points[i + 1].y - yOffset) * progress);
            }

            // Fill the area under the curve
            ctx.lineTo(points[points.length - 1].x, chartHeight - padding); // Line down to the x-axis
            ctx.lineTo(points[0].x, chartHeight - padding); // Line back to the starting point on the x-axis
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        };

        // Start the animation
        animate();
    };

    // const drawChart = (ctx) => {
    //     // Example data
    //     const data = [10, 20, 10, 20, 10, 20, 10];
    //     // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    //     // Chart dimensions
    //     const chartWidth = 600;
    //     const chartHeight = 980;
    //     const padding = 0;

    //     // Canvas dimensions
    //     ctx.canvas.width = chartWidth;
    //     ctx.canvas.height = chartHeight - 150;

    //     // Clear canvas
    //     ctx.clearRect(0, 0, chartWidth, chartHeight);

    //     // Calculate points
    //     const xStep = (chartWidth - 2 * padding) / (data.length - 1);
    //     const yMax = Math.max(...data);
    //     const yStep = (280 - 2 * padding) / yMax;

    //     const points = data.map((value, index) => ({
    //         x: padding + index * xStep,
    //         y: 280 - padding - value * yStep
    //     }));

    //     // Draw curve and fill
    //     ctx.beginPath();
    //     ctx.moveTo(points[0].x, points[0].y);
    //     for (let i = 0; i < points.length - 1; i++) {
    //         const cp1x = points[i].x + xStep / 2;
    //         const cp1y = points[i].y;
    //         const cp2x = points[i + 1].x - xStep / 2;
    //         const cp2y = points[i + 1].y;
    //         ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, points[i + 1].x, points[i + 1].y);
    //     }
    //     // Fill the area under the curve
    //     ctx.lineTo(points[points.length - 1].x, chartHeight - padding); // Line down to the x-axis
    //     ctx.lineTo(points[0].x, chartHeight - padding); // Line back to the starting point on the x-axis
    //     ctx.closePath();
    //     ctx.fillStyle = '#aedaf9';
    //     ctx.fill();

    //     // Draw curve and fill
    //     ctx.beginPath();
    //     ctx.moveTo(points[0].x, points[0].y + 125);
    //     for (let i = 0; i < points.length - 1; i++) {
    //         const cp1x = points[i].x + xStep / 2;
    //         const cp1y = points[i].y + 125;
    //         const cp2x = points[i + 1].x - xStep / 2;
    //         const cp2y = points[i + 1].y + 125;
    //         ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, points[i + 1].x, points[i + 1].y + 125);
    //     }

    //     // Fill the area under the curve
    //     ctx.lineTo(points[points.length - 1].x, chartHeight - padding); // Line down to the x-axis
    //     ctx.lineTo(points[0].x, chartHeight - padding); // Line back to the starting point on the x-axis
    //     ctx.closePath();
    //     ctx.fillStyle = '#77c5fd';
    //     ctx.fill();

    //     // Draw curve and fill
    //     ctx.beginPath();
    //     ctx.moveTo(points[0].x, points[0].y + 250);
    //     for (let i = 0; i < points.length - 1; i++) {
    //         const cp1x = points[i].x + xStep / 2;
    //         const cp1y = points[i].y + 250;
    //         const cp2x = points[i + 1].x - xStep / 2;
    //         const cp2y = points[i + 1].y + 250;
    //         ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, points[i + 1].x, points[i + 1].y + 250);
    //     }

    //     // Fill the area under the curve
    //     ctx.lineTo(points[points.length - 1].x, chartHeight - padding); // Line down to the x-axis
    //     ctx.lineTo(points[0].x, chartHeight - padding); // Line back to the starting point on the x-axis
    //     ctx.closePath();
    //     ctx.fillStyle = '#37a9fb';
    //     ctx.fill();

    //     // Draw the curve outline
    //     // ctx.strokeStyle = 'rgba(75, 192, 192, 1)';
    //     // ctx.lineWidth = 2;
    //     // ctx.stroke();

    //     // Draw points
    //     // ctx.fillStyle = 'rgba(75, 192, 192, 1)';
    //     // points.forEach(point => {
    //     //     ctx.beginPath();
    //     //     ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
    //     //     ctx.fill();
    //     // });

    //     // Draw labels
    //     // ctx.fillStyle = 'black';
    //     // ctx.textAlign = 'center';
    //     // ctx.textBaseline = 'middle';
    //     // points.forEach((point, index) => {
    //     //     ctx.fillText(labels[index], point.x, chartHeight - padding + 20);
    //     // });
    // };

    return (
        <>
            <main className='w-full min-h-screen bg-white dark:bg-blue-950'>
                <section className='max-w-7xl w-full mx-auto flex'>
                    <div className={`${prop.prop ? "w-[17rem]" : "w-[0rem] md:w-[5.5rem]"} z-40  md:sticky fixed top-[5.5rem] h-[83vh] overflow-y-auto bestSeller overflow-x-hidden bg-white dark:bg-blue-950`} style={{ transition: "width .5s ease" }}>
                        {Object.keys(drop).map((dr, index) => (
                            <div key={index} className='py-3'>
                                <a className='flex cursor-pointer justify-between px-8 flex-wrap items-center group' onClick={() => dispatch({ type: drop[dr] ? "close" : "open", val: dr })}>
                                    <span className="flex items-center gap-5">
                                        {images[index]}
                                        {true && <p style={{ transition: "opacity .4s ease" }} className={`${prop.prop ? "opacity-100" : "opacity-0"} text-slate-500 group-hover:text-[#0099FF] dark:group-hover:text-white dark:text-gray-300 font-semibold`}>{dr.charAt(0).toUpperCase() + dr.slice(1)}</p>}
                                    </span>
                                    {true && <svg style={{ transition: "opacity .4s ease" }} className={`${prop.prop ? "opacity-100" : "opacity-0"} w-3 group-hover:fill-[#0099FF] dark:group-hover:fill-[white] fill-[rgb(107,114,128)] dark:fill-[rgb(209,213,219)] ${drop[dr] ? "rotate-[450deg]" : ""}`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.413 223.413"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <polygon points="57.179,223.413 51.224,217.276 159.925,111.71 51.224,6.127 57.179,0 172.189,111.71 "></polygon> </g> </g> </g> </g></svg>}
                                </a>
                                <div ref={contentRef} className={`overflow-hidden transition-all duration-500 ease`} style={{ maxHeight: drop[dr] ? height : "0px" }}>
                                    <div className={`w-full py-2`}>
                                        <a className='block cursor-pointer hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md dark:hover:text-white dark:text-gray-300'>Profile</a>
                                        <a className='block cursor-pointer hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md dark:hover:text-white dark:text-gray-300'>Email</a>
                                        <a className='block cursor-pointer hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md dark:hover:text-white dark:text-gray-300'>Calendar</a>
                                        <a className='block cursor-pointer hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md dark:hover:text-white dark:text-gray-300'>Shop</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {prop.prop &&
                            <>
                                <p className='px-8 text-xs text-gray-500 font-bold pt-14'>Mophy Payment Admin</p>
                                <p className='px-8 text-xs text-gray-500'>Dashboard © 2023 All Rights Reserved</p>
                                <p className='px-8 text-xs pt-3 pb-8 text-gray-500'>Made with &#x2764; by AbdulMalik</p>
                            </>
                        }
                    </div>
                    <div className={`${prop.prop ? "md:w-[calc(100%-17rem)] w-full" : "w-full md:w-[calc(100%-5.5rem)]"} bg-gray-100 dark:bg-[rgb(17,26,56)] p-6`} style={{ transition: "width .5s ease" }}>
                        <div className='w-full'>
                            <h1 className='dark:text-white text-2xl font-semibold'>Dashboard</h1>
                            <div className='w-full mt-5 flex flex-wrap lg:flex-nowrap gap-8'>
                                <div className='lg:w-1/2 w-full'>
                                    <div className='w-full flex flex-wrap md:flex-nowrap gap-8'>
                                        <div className='md:w-2/3 w-full'>
                                            <div className='w-full cards py-10 rounded-xl px-8'>
                                                <p className='text-white text-lg'>Main Balance</p>
                                                <p className='text-white text-4xl font-semibold mt-2'>$673,412.66</p>
                                                <div className='flex justify-between flex-wrap items-center mt-9'>
                                                    <img className='w-14' src={card} alt="" />
                                                    <p className='text-white text-xl font-semibold'>**** **** **** 1234</p>
                                                </div>
                                                <div className='flex justify-between mt-10'>
                                                    <div>
                                                        <p className='text-[#ffffff8a] text-sm'>VALID THRU</p>
                                                        <p className='text-white text-lg'>08/21</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-[#ffffff8a] text-sm'>CARD HOLDER</p>
                                                        <p className='text-white text-lg'>Franklin Jr.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-center'>
                                                <div className='shadow mt-4 bg-white dark:bg-blue-950 rounded-full w-16 h-16 absolute z-[1] flex items-center justify-center'>
                                                    <svg className='w-4' fill="grey" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
                                                </div>
                                            </div>
                                            <div className='w-[80%] bg-white dark:bg-blue-950 m-auto shadow rounded-b-xl h-8 relative'></div>
                                            <div className='w-[60%] bg-white dark:bg-blue-950 m-auto shadow rounded-b-xl h-8'></div>
                                        </div>
                                        <div className='md:w-1/3 pt-5 rounded-xl w-full bg-[#d7edfd] dark:bg-blue-950 h-[fit-content] text-center overflow-hidden'>
                                            <p className='dark:text-white'>Limit</p>
                                            <p className='font-bold text-xl mt-1 dark:text-white'>$4,000</p>
                                            <p className='text-slate-500'>/$10,000</p>
                                            <div className='w-full mt-28 rounded-xl'>
                                                <canvas className='w-full rounded-b-xl' ref={canvasRef}></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white dark:bg-blue-950 mt-12 shadow p-6 rounded-lg'>
                                        <h2 className='dark:text-white text-xl font-medium'>Transaction Overview</h2>
                                        <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet, consectetur</p>
                                        <div className='mt-2 mb-7 flex items-center gap-3'>
                                            <button className='dark:text-white dark:border items-center px-4 py-2 rounded-xl bg-slate-100 flex gap-2 text-sm dark:bg-[rgba(45,53,81,0.37)] border-0 border-[rgb(71,80,109)]'>
                                                <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                                Download Report
                                            </button>
                                            <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" className='fill-black dark:fill-white'></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" className='fill-black dark:fill-white'></path> <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" className='fill-black dark:fill-white'></path> </g></svg>
                                        </div>
                                        <BarChart
                                            sx={(theme) => ({
                                                stroke: "grey",
                                                strokeWidth: "0.5",
                                            })}
                                            series={[
                                                { data: [35, 90, 24, 85, 15, 25, 80], id: 'run' },
                                                { data: [80, 6, 49, 95, 60, 50, 15], id: 'cyc' }
                                            ]}
                                            height={350}
                                            grid={{ horizontal: true }}
                                            borderRadius={50}
                                            colors={['rgb(215, 215, 215)', 'rgb(239, 239, 239)']}
                                            yAxis={[{ disableLine: true, disableTicks: true }]}
                                            xAxis={[{ data: ['Sun', 'Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat"], scaleType: 'band', categoryGapRatio: 0.6, barGapRatio: 0.3, disableLine: true }]}
                                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}

                                        />
                                        <div className='flex gap-5 items-center mt-2'>
                                            <p className='dark:text-white font-medium'>Number</p>
                                            <div class="cl-toggle-switch">
                                                <label class="cl-switch">
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                            <p className='dark:text-white font-medium'>Analytics</p>
                                            <div class="cl-toggle-switch">
                                                <label class="cl-switch">
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white dark:bg-blue-950 mt-12 shadow p-6 rounded-lg'>
                                        <div className='flex flex-wrap justify-between items-center'>
                                            <span>
                                                <h2 className='dark:text-white text-xl font-medium'>Quick Transfer</h2>
                                                <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet, consectetur</p>
                                            </span>
                                            <p className='dark:text-white text-xl font-bold'>$56,772.38</p>
                                        </div>
                                        <div className='mt-10 snap-x flex gap- overflow-x-scroll whitespace-nowrap scroll-smooth scrooler'>
                                            {quickTransfer.map((qt, index) => (
                                                <div key={index} className={`w-[fit-content] scroll-ml-14 snap-start hover:bg-[#0099ff2a] py-3 px-1 rounded-xl`}>
                                                    <img src={qt.image} alt="" className='md:min-w-24 w-full  rounded-xl' />
                                                    <p className='dark:text-white text-lg text-center mt-3 font-medium'>{qt.name}</p>
                                                    <p className='text-gray-500 text-xs text-center mt-1'>{qt.handle}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='mt-8 flex flex-wrap justify-between items-center'>
                                            <p className='dark:text-white mt-2 text-xl font-medium'>Amount</p>
                                            <div className='flex mt-2 justify-between items-center bg-gray-100 rounded-xl dark:bg-[rgb(17,26,56)]'>
                                                <input type="text" className='outline-none dark:text-white bg-transparent px-4 md:w-36 w-1/2' />
                                                <button className='bg-[#0099FF] py-3 px-4 text-xs font-medium text-white rounded-xl'>TRANSFER NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-1/2 w-full'>
                                    <div className="w-full flex gap-7 md:flex-nowrap flex-wrap">
                                        <div className='dark:bg-blue-950 bg-white shadow md:w-1/2 w-full rounded-xl pb-3'>
                                            <div className='pt-7 px-7 pb-2'>
                                                <p className='text-gray-500 text-sm'>Income</p>
                                                <p className='dark:text-white text-2xl font-bold mt-1'>$65,123</p>
                                                <p className='text-gray-500 text-xs mt-1 flex gap-3 items-center'>
                                                    <svg className='w-4 fill-green-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h-6v-6h6v6zm8-9h-6v9h6v-9zm8-4h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z" /></svg>
                                                    {"4% (30 days)"}
                                                </p>
                                            </div>
                                            <LineChart
                                                xAxis={[{ data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 21, 24, 27, 30], disableLine: true, disableTicks: true }]}
                                                series={[
                                                    {
                                                        data: [2, 4, 2.5, 6, 3, 5, 2, 4, 1, 7, 2, 8, 0.3, 5],
                                                        showMark: false
                                                    },
                                                ]}
                                                height={75}
                                                sx={{
                                                    [`& .${lineElementClasses.root}`]: {
                                                        stroke: "#0099FF",
                                                        strokeWidth: 4,
                                                    },
                                                    strokeWidth: 0,
                                                }}
                                                colors={["#0099FF"]}
                                                yAxis={[{ disableLine: true, disableTicks: true }]}
                                                margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                            />
                                        </div>
                                        <div className='dark:bg-blue-950 bg-white shadow md:w-1/2 w-full rounded-xl pb-3'>
                                            <div className='pt-7 px-7 pb-2'>
                                                <p className='text-gray-500 text-sm'>Outome</p>
                                                <p className='dark:text-white text-2xl font-bold mt-1'>$24,551</p>
                                                <p className='text-gray-500 text-xs mt-1 flex gap-3 items-center'>
                                                    <svg className='w-4 fill-red-700' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h-6v-6h6v6zm8-9h-6v9h6v-9zm8-4h-6v13h6v-13zm-21.976 4.875l6-1.221-1.716-1.708 4.183-4.108 3.001 3.002 10.508-10.422-1.41-1.418-9.094 9.015-2.991-2.993-5.613 5.512-1.667-1.66-1.201 6.001z" /></svg>
                                                    {"4% (30 days)"}
                                                </p>
                                            </div>
                                            <LineChart
                                                xAxis={[{ data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 21, 24, 27, 30], disableLine: true, disableTicks: true }]}
                                                series={[
                                                    {
                                                        data: [2, 4, 2.5, 6, 3, 4, 2, 4, 0.5, 5, 2, 9, 4.3, 5],
                                                        showMark: false
                                                    },
                                                ]}
                                                height={75}
                                                sx={{
                                                    [`& .${lineElementClasses.root}`]: {
                                                        stroke: "#0099FF",
                                                        strokeWidth: 4,
                                                    },
                                                    strokeWidth: 0,
                                                }}
                                                colors={["#0099FF"]}
                                                yAxis={[{ disableLine: true, disableTicks: true }]}
                                                margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                            />
                                        </div>
                                    </div>
                                    <div className='dark:bg-blue-950 bg-white overflow-hidden shadow mt-7 w-full rounded-xl'>
                                        <div className='flex justify-between flex-wrap items-center pt-7 pb-2 px-7'>
                                            <span>
                                                <p className='text-gray-500 text-sm'>Weekly Wallet Usage</p>
                                                <p className='text-gray-500 text-lg gap-2 flex items-center'>
                                                    <svg className='w-5 fill-green-600' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z" /></svg>
                                                    <span className='text-2xl dark:text-white text-black font-bold'>43%</span>
                                                    Than last week
                                                </p>
                                            </span>
                                            <p className='text-gray-500 text-xs mt-1 flex gap-3 items-center'>
                                                <svg className='w-4 fill-green-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h-6v-6h6v6zm8-9h-6v9h6v-9zm8-4h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z" /></svg>
                                                {"4% (30 days)"}
                                            </p>
                                        </div>
                                        <LineChart
                                            height={100}
                                            yAxis={[{ disableLine: true, disableTicks: true }]}
                                            series={[{ data: [2, 4, 2.5, 6, 3, 4, 2, 4, 0.5, 5, 2, 9, 4.3, 5], area: true, showMark: false }]}
                                            xAxis={[{ scaleType: 'point', data: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G', 'Page H', 'Page I', 'Page J', 'Page K', 'Page L', 'Page M', 'Page N'], disableLine: true, disableTicks: true }]}
                                            sx={{
                                                [`& .${lineElementClasses.root}`]: {
                                                    display: 'none',
                                                },
                                            }}
                                            colors={["#199dc9"]}
                                            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                        />
                                    </div>
                                    <div className='dark:bg-blue-950 bg-white shadow mt-7 p-7 w-full rounded-xl'>
                                        <h2 className='dark:text-white text-xl font-medium'>Spendings</h2>
                                        <div className='flex flex-wrap'>
                                            <div className='flex md:w-1/2 w-full mt-7 gap-4'>
                                                <div className='p-[0.45rem] bg-purple-500 rounded-xl inline-block'></div>
                                                <span>
                                                    <p className='text-gray-500 text-sm'>Investment</p>
                                                    <p className='dark:text-white text-xl font-medium mt-2'>$1,415 <span className='text-gray-500'>/$2,000</span></p>
                                                </span>
                                            </div>
                                            <div className='flex md:w-1/2 w-full mt-7 gap-4'>
                                                <div className='p-[0.45rem] bg-green-500 rounded-xl inline-block'></div>
                                                <span>
                                                    <p className='text-gray-500 text-sm'>Installment</p>
                                                    <p className='dark:text-white text-xl font-medium mt-2'>$1,567 <span className='text-gray-500'>/$5,000</span></p>
                                                </span>
                                            </div>
                                            <div className='flex md:w-1/2 w-full mt-7 gap-4'>
                                                <div className='p-[0.45rem] bg-[#0099FF] rounded-xl inline-block'></div>
                                                <span>
                                                    <p className='text-gray-500 text-sm'>Restaurant</p>
                                                    <p className='dark:text-white text-xl font-medium mt-2'>$487 <span className='text-gray-500'>/$10,000</span></p>
                                                </span>
                                            </div>
                                            <div className='flex md:w-1/2 w-full mt-7 gap-4'>
                                                <div className='p-[0.45rem] bg-indigo-700 rounded-xl inline-block'></div>
                                                <span>
                                                    <p className='text-gray-500 text-sm'>Property</p>
                                                    <p className='dark:text-white text-xl font-medium mt-2'>$3,890 <span className='text-gray-500'>/$4,000</span></p>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-wrap md:flex-nowrap mt-6 gap-3'>
                                                <div className='md:w-1/2 w-full rounded-xl bg-purple-500 p-4'>
                                                    <div className='flex justify-center items-center'>
                                                        <div className='absolute z-10 rounded-full w-16 h-16 m-auto bg-purple-500 flex items-center justify-center font-medium text-white text-md'>70%</div>
                                                        <PieChart
                                                            series={[
                                                                {
                                                                    data: [
                                                                        { id: 0, value: 70 },
                                                                        { id: 1, value: 30 },
                                                                    ],
                                                                },
                                                            ]}
                                                            height={85}
                                                            sx={{
                                                                strokeOpacity: "0",
                                                            }}
                                                            colors={["white", "rgba(243,232,255,0.27)"]}
                                                            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                                        />
                                                    </div>
                                                    <p className='text-white text-center mt-3'>Investment</p>
                                                </div>
                                                <div className='md:w-1/2 w-full rounded-xl bg-green-500 p-4'>
                                                    <div className='flex justify-center items-center'>
                                                        <div className='absolute z-10 rounded-full w-16 h-16 m-auto bg-green-500 flex items-center justify-center font-medium text-white text-md'>30%</div>
                                                        <PieChart
                                                            series={[
                                                                {
                                                                    data: [
                                                                        { id: 0, value: 30 },
                                                                        { id: 1, value: 70 },
                                                                    ],
                                                                },
                                                            ]}
                                                            height={85}
                                                            sx={{
                                                                strokeOpacity: "0",
                                                            }}
                                                            colors={["white", "rgba(243,232,255,0.27)"]}
                                                            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                                        />
                                                    </div>
                                                    <p className='text-white text-center mt-3'>Installment</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-wrap md:flex-nowrap mt-3 gap-3'>
                                                <div className='md:w-1/2 w-full rounded-xl border border-solid border-[#0099FF] dark:border-[rgb(230,230,230)] dark:bg-blue-950 p-4'>
                                                    <div className='flex justify-center items-center'>
                                                        <div className='absolute z-10 rounded-full w-16 h-16 m-auto bg-white dark:bg-blue-950 flex items-center justify-center font-medium dark:text-white text-md'>5%</div>
                                                        <PieChart
                                                            series={[
                                                                {
                                                                    data: [
                                                                        { id: 0, value: 95 },
                                                                        { id: 1, value: 5 },
                                                                    ],
                                                                },
                                                            ]}
                                                            height={85}
                                                            sx={{
                                                                strokeOpacity: "0",
                                                            }}
                                                            colors={["rgb(230, 230, 230)", "#0099FF"]}
                                                            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                                        />
                                                    </div>
                                                    <p className='dark:text-white text-center mt-3'>Restaurant</p>
                                                </div>
                                                <div className='md:w-1/2 w-full rounded-xl bg-indigo-700 p-4'>
                                                    <div className='flex justify-center items-center'>
                                                        <div className='absolute z-10 rounded-full w-16 h-16 m-auto bg-indigo-700 flex items-center justify-center font-medium text-white text-md'>96%</div>
                                                        <PieChart
                                                            series={[
                                                                {
                                                                    data: [
                                                                        { id: 0, value: 96 },
                                                                        { id: 1, value: 4 },
                                                                    ],
                                                                },
                                                            ]}
                                                            height={85}
                                                            sx={{
                                                                strokeOpacity: "0",
                                                            }}
                                                            colors={["white", "rgba(243,232,255,0.27)"]}
                                                            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                                        />
                                                    </div>
                                                    <p className='text-white text-center mt-3'>Property</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='dark:bg-blue-950 bg-white shadow mt-7 p-7 w-full rounded-xl'>
                                        <div className='flex mb-5 flex-wrap justify-between items-center'>
                                            <div className='w-fit xl:w-1/3'>
                                                <h2 className='dark:text-white text-xl font-medium'>Previous Transactions</h2>
                                                <p className='text-gray-500 text-xs mt-3 md:mt-0'>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className='rounded-full mt-3 md:mt-0 dark:bg-[#0099ff45] flex bg-gray-100 h-fit text-sm'>
                                                <a onClick={() => setDay("month")} className={`rounded-full dark:text-[#0099FF] pb-2 pt-1 inline-block px-4 cursor-pointer ${day === "month" ? "bg-[#0099FF] text-white dark:text-white" : ""}`}>monthly</a>
                                                <a onClick={() => setDay("week")} className={`rounded-full dark:text-[#0099FF] pb-2 pt-1 inline-block px-4 cursor-pointer ${day === "week" ? "bg-[#0099FF] text-white dark:text-white" : ""}`}>weekly</a>
                                                <a onClick={() => setDay("today")} className={`rounded-full dark:text-[#0099FF] pb-2 pt-1 inline-block px-4 cursor-pointer ${day === "today" ? "bg-[#0099FF] text-white dark:text-white" : ""}`}>today</a>
                                            </div>
                                        </div>
                                        {history.map((his, index) => (
                                            <div key={index} className='flex border-b py-5 justify-between items-center'>
                                                <span className='flex justify-between items-center gap-5'>
                                                    {his.credit ?
                                                        <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.8105 2C22.3973 8.57225 22.3973 15.4277 20.8105 22" className='stroke-green-500' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 12.05H16" className='stroke-green-500' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.8008 7.09985L15.4108 10.6199C15.5961 10.7998 15.7435 11.0153 15.8442 11.2532C15.9448 11.4911 15.9966 11.7466 15.9966 12.0049C15.9966 12.2632 15.9448 12.5189 15.8442 12.7568C15.7435 12.9947 15.5961 13.21 15.4108 13.3899L11.8008 16.8999" className='stroke-green-500' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                                        :
                                                        <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.8105 2C22.3973 8.57225 22.3973 15.4277 20.8105 22" className='stroke-red-500' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 11.95H2" className='stroke-red-500' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6.20081 16.8999L2.59082 13.3899C2.40292 13.2115 2.25331 12.9966 2.15106 12.7585C2.04881 12.5204 1.99609 12.264 1.99609 12.0049C1.99609 11.7458 2.04881 11.4893 2.15106 11.2512C2.25331 11.0131 2.40292 10.7983 2.59082 10.6199L6.20081 7.09985" className='stroke-red-500' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                                    }
                                                    <span>
                                                        <p className='font-medium dark:text-white'>{his.name}</p>
                                                        <p className='text-gray-500 text-xs mt-1'>June 4, 2020</p>
                                                        <p className='text-gray-500 text-xs'>05:34</p>
                                                    </span>
                                                </span>
                                                <span>
                                                    <p className='text-gray-500 text-xs'>{his.price}</p>
                                                    <p className={`font-medium text-sm ${his.status === "Completed" ? "text-green-500" : his.status === "Pending" ? "text-red-500" : "text-gray-500"}`}>{his.status}</p>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='w-full text-center pt-12'>
                                <p className='dark:text-white text-gray-600'>Copyright © Developed by <span className='text-[#0099FF] dark:hover:text-white'>Abdulmalik</span> 2023</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default DashBody