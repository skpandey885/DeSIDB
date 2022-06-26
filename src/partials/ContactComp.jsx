import React from 'react'
import { AiFillHome, AiFillPhone, AiTwotoneMail } from 'react-icons/ai'

const ContactComp = () => {
    return (
        <div>
            <>
                {/* ====== Contact Section Start */}
                <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
                    <div className="container">
                        <div className="flex flex-wrap lg:justify-between -mx-4">
                            <div className="w-full ml-10 lg:w-1/2 xl:w-6/12 px-4">
                                <div className="max-w-[570px] mb-12 lg:mb-0">
                                    <span className="block mb-4 text-4xl text-primary font-semibold">
                                        Contact Us
                                    </span>
                                    <h2
                                        className="
                                        text-dark
                                        mb-6
                                        uppercase
                                        font-bold
                                        text-[32px]
                                        sm:text-[40px]
                                        lg:text-[36px]
                                        xl:text-[40px]
                                        "
                                    >
                                        GET IN TOUCH WITH US
                                    </h2>
                                    <p className="text-base text-body-color leading-relaxed mb-9">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        adiqua minim veniam quis nostrud exercitation ullamco
                                    </p>
                                    <div className="flex mb-8 max-w-[370px] w-full">
                                        <div
                                            className="
                                        max-w-[60px]
                                        sm:max-w-[70px]
                                        w-full
                                        h-[60px]
                                        sm:h-[70px]
                                        flex
                                        items-center
                                        justify-center
                                        mr-6
                                        overflow-hidden
                                        bg-primary bg-opacity-5
                                        text-primary
                                        rounded
                                        "
                                        >
                                            <AiFillHome size={40} />
                                        </div>

                                        <div className="w-full">
                                            <h4 className="font-bold text-dark text-xl mb-1">
                                                Our Location
                                            </h4>
                                            <p className="text-base text-body-color">
                                                99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-8 max-w-[370px] w-full">
                                        <div
                                            className="
                                        max-w-[60px]
                                        sm:max-w-[70px]
                                        w-full
                                        h-[60px]
                                        sm:h-[70px]
                                        flex
                                        items-center
                                        justify-center
                                        mr-6
                                        overflow-hidden
                                        bg-primary bg-opacity-5
                                        text-primary
                                        rounded
                                        "
                                        >
                                            <AiFillPhone size={40} />
                                        </div>
                                        <div className="w-full">
                                            <h4 className="font-bold text-dark text-xl mb-1">
                                                Phone Number
                                            </h4>
                                            <p className="text-base text-body-color">
                                                (+62)81 414 257 9980
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-8 max-w-[370px] w-full">
                                        <div
                                            className="
                                        max-w-[60px]
                                        sm:max-w-[70px]
                                        w-full
                                        h-[60px]
                                        sm:h-[70px]
                                        flex
                                        items-center
                                        justify-center
                                        mr-6
                                        overflow-hidden
                                        bg-primary bg-opacity-5
                                        text-primary
                                        rounded
                                        "
                                        >
                                            <AiTwotoneMail size={40} />
                                        </div>
                                        <div className="w-full">
                                            <h4 className="font-bold text-dark text-xl mb-1">
                                                Email Address
                                            </h4>
                                            <p className="text-base text-body-color">info@yourdomain.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 xl:w-5/12 px-4 mr-10">
                                <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                                    <form>
                                        <div className="mb-6">
                                            <label
                                                className="block mb-2 text-2xl font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="
                                                w-full
                                                rounded
                                                py-3
                                                px-[14px]
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-primary
                                                "
                                            />
                                        </div>
                                        <div className="mb-6">
                                        <label
                                                className="block mb-2 text-2xl font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="
                                                w-full
                                                rounded
                                                py-3
                                                px-[14px]
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-primary
                                                "
                                            />
                                        </div>
                                        <div className="mb-6">
                                        <label
                                                className="block mb-2 text-2xl font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                Your Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Phone"
                                                className="
                                                w-full
                                                rounded
                                                py-3
                                                px-[14px]
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-primary
                                                "
                                            />
                                        </div>
                                        <div className="mb-6">
                                        <label
                                                className="block mb-2 text-2xl font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                Your Feedback/ Query
                                            </label>
                                            <textarea
                                                rows={6}
                                                placeholder="Your Message"
                                                className="
                                                    w-full
                                                    rounded
                                                    py-3
                                                    px-[14px]
                                                    text-body-color text-base
                                                    border border-[f0f0f0]
                                                    resize-none
                                                    outline-none
                                                    focus-visible:shadow-none
                                                    focus:border-primary
                                                    "
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="
                                                w-full
                                                text-indigo-500
                                                
                                                bg-primary
                                                rounded
                                                border border-primary
                                                p-3
                                                transition
                                                hover:bg-opacity-90
                                                "
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                    <div>
                                        <span className="absolute -top-10 -right-9 z-[-1]">
                                            <svg
                                                width={100}
                                                height={100}
                                                viewBox="0 0 100 100"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                        <span className="absolute -right-10 top-[90px] z-[-1]">
                                            <svg
                                                width={34}
                                                height={134}
                                                viewBox="0 0 34 134"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="31.9993"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 1.66665)"
                                                    fill="#13C296"
                                                />
                                            </svg>
                                        </span>
                                        <span className="absolute -left-7 -bottom-7 z-[-1]">
                                            <svg
                                                width={107}
                                                height={134}
                                                viewBox="0 0 107 134"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="104.999"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="104.999"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 104.999 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="90.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 90.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="75.6654"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 75.6654 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="31.9993"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 31.9993 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="60.9993"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 60.9993 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="17.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 17.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={132}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 132)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="117.333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 117.333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="102.667"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 102.667)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={88}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 88)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="73.3333"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 73.3333)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={45}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 45)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={16}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 16)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy={59}
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 59)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="30.6666"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 30.6666)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="46.3333"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 46.3333 1.66665)"
                                                    fill="#13C296"
                                                />
                                                <circle
                                                    cx="2.66536"
                                                    cy="1.66665"
                                                    r="1.66667"
                                                    transform="rotate(180 2.66536 1.66665)"
                                                    fill="#13C296"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    )
}

export default ContactComp