<script>
    import Logo from "./assets/n11logo.svg";
    import Map from "./lib/map.svelte";
    const nodeVersion = api.node();
    const chromeVersion = api.chrome();
    let switchUI = false;
    let switchUIInt = 0;
    let TritonMessage = ["Triton", "altTriton"];

    let firstSection = ["1. PROMPT FIRST RESPONDERS", "1. SELECT STORE"];
    let firstQuestion = [
        "What type of assistance do you need? (Select Multiple)",
        "Would you like to filter out stores without seasonal options?",
    ];
    let policeBtn = ["Police", "Yessir"];
    let medicalBtn = ["Medical", "No Sir :("];
    let secondQuestion = [
        "Where are you right now?",
        "Where are you right now?",
    ];
    let thirdQuestion = ["Are you being moved right now?", "Delivery Method"];
    let beingMovedYes = ["YES", "PICKUP"];
    let beingMovedNo = ["NO", "DELIVERY"];
    let beingMovedBox = [
        "Describe your surroundings or Vehicle",
        "Describe your vehicle or house",
    ];
    let streamStartBtn = ["BEGIN STREAMING WITH OPERATOR", "START ORDER"];

    let secondSection = [
        "2. DESCRIBE THE SITUATION",
        "2. CUSTOMIZE YOUR CHEESE",
    ];
    let firstQuestion2 = [
        "Are you being held hostage?",
        "Would you like cheese?",
    ];
    let secondQuestion2 = [
        "If yes, are they armed?",
        "Would you like to add N.11 style cheese?",
    ];
    let thirdQuestion2 = [
        "If yes, with what?",
        "How would you like your cheese?",
    ];
    let bladeBtn = ["BLADE", "SHREDDED"];
    let firearmBtn = ["FIREARM", "BLOCK"];
    let exlplosiveBtn = ["EXPLOSIVE", "HALF & HALF"];
    let fourthQuestion2 = ["Are you hurt?", "Add cheese dip?"];
    let fifthQuestion2 = [
        "How many hostiles in the room?",
        "How much cheese would you like?",
    ];
    let sixthQuestion2 = [
        "How many others are in the room?",
        "How spicy do you want your cheese?",
    ];

    let radioBtnSet = [
        ["0", "1", "2", "3", "4+"],
        ["1", "2", "3", "4", "5"],
    ];

    function altUI() {
        switchUI = !switchUI;
        if (switchUI) {
            switchUIInt = 1;
        } else {
            switchUIInt = 0;
        }
    }
</script>

<!-- Drag Bar -->
<main class="min-h-screen bg-white text-black flex flex-col">
    <section
        class="w-screen h-5 pb-1 inline-flex flex-col justify-start items-right gap-5 bg-zinc-950"
        style="app-region: drag;"
    ></section>

    <!-- Header -->
    <section
        class="w-screen pt-3 pb-3 inline-flex flex-col bg-red-dark justify-start items-center gap-5"
    >
        <div class="self-stretch px-9 inline-flex justify-between items-center">
            <input
                type="image"
                class="size-12 hover:drop-shadow-[0_0_0.8rem_#e85f24] transition-all duration-900"
                src={Logo}
                alt="Triton Logo"
                on:dblclick={altUI}
            />
            <div
                class="w-fit h-fit justify-start hover:drop-shadow-[0_0_0.8rem_#e85f24] transition-all duration-900 text-white text-4xl font-IBM font-bold"
            >
                N.11 PIZZA
            </div>
        </div>
    </section>

    <!-- <section class="flex flex-col items-center justify-center mt-1">
        <div class="text-3xl font-IBM">
            {TritonMessage[switchUIInt]}
        </div>
        <div class="text-2xl font-IBM">
            Version 0.0.1
        </div>
        <div class="text-2xl font-IBM">
            Node: {nodeVersion}
        </div>
        <div class="text-2xl font-IBM">
            Chrome: {chromeVersion}
        </div>
        <div class="w-screen"><Map /></div>
    </section> -->

    <!-- First Section: PROMPT FIRST RESPONDERS -->
    <section class="flex flex-col items-center justify-center mt-5 mx-9">
        <div class="mx-4 w-full">
            <!-- Question Header -->
            <div class="w-full bg-black text-center">
                <div class="m-auto text-3xl font-IBM font-light text-white">
                    {firstSection[switchUIInt]}
                </div>
            </div>
            <!-- Cream Section #1  -->
            <div class="w-full flex flex-col items-center p-4 bg-offwhite">
                <!-- What type of assistance do you need? -->
                <div class="text-2xl font-IBM text-black font-bold">
                    {firstQuestion[switchUIInt]}
                </div>
                <!--Police Button-->
                <div class="mt-4 flex">
                    <div
                        class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <button
                            class="m-5 text-xl font-IBM font-light text-white"
                        >
                            {policeBtn[switchUIInt]}
                        </button>
                    </div>
                    <!--Medical Button-->
                    <div
                        class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <button
                            class="m-5 text-xl font-IBM font-light text-white"
                        >
                            {medicalBtn[switchUIInt]}
                        </button>
                    </div>
                </div>
                <!-- Line break under buttons -->
                <div
                    class="mt-4 self-stretch outline-[2px] outline-black"
                ></div>

                <!-- Where are you right now? -->
                <div class="text-2xl font-IBM text-black font-bold">
                    {secondQuestion[switchUIInt]}
                </div>

                <!--Where are you right now? text box-->
                <div class="">
                    <input
                        type="address"
                        id="address"
                        name="address"
                        placeholder="ADDRESS BOX"
                        class="w-fit bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div class="mt-4 text-2xl font-IBM text-black font-bold">
                    OR
                </div>
                <!-- Google Maps Display-->
                <div class="w-full mx-0.5"><Map /></div>

                <!--Line Break-->
                <div
                    class="mt-4 self-stretch outline-[2px] outline-black"
                ></div>

                <!-- Are you being moved right now? -->
                <div class="mt-4 text-2xl font-IBM text-black font-bold">
                    {thirdQuestion[switchUIInt]}
                </div>
                <div class="mt-4 flex">
                    <div
                        class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <!-- Yes being Moved Button-->
                        <button
                            class="m-5 text-xl font-IBM font-normal text-white"
                        >
                            {beingMovedYes[switchUIInt]}
                        </button>
                    </div>
                    <!--NO being Moved Button-->
                    <div
                        class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <button
                            class="m-5 text-xl font-IBM font-normal text-white"
                        >
                            {beingMovedNo[switchUIInt]}
                        </button>
                    </div>
                </div>

                <!-- Describe your surroundings text box-->
                <div class="mt-4 mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={beingMovedBox[switchUIInt]}
                        class="w-fit bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>

                <!-- Line Break -->
                <div
                    class="mt-4 self-stretch outline-[2px] outline-black"
                ></div>

                <!-- Stream Button -->
                <div
                    class="w-fit mt-4 bg-greyblue flex flex-box float-left rounded-lg"
                >
                    <button class="m-5 text-xl font-IBM text-white font-normal">
                        {streamStartBtn[switchUIInt]}
                    </button>
                </div>
            </div>
        </div>
    </section>
    <!-- End Section #1 -->

    <!-- Second Section: DESCRIBE THE SITUATION -->
    <section class="flex flex-col items-center justify-center mt-10 mx-9">
        <div class="mx-4 w-full">
            <!-- Question Header -->
            <div class="w-full bg-black text-center">
                <div class="m-auto text-3xl font-IBM font-light text-white">
                    {secondSection[switchUIInt]}
                </div>
            </div>
            <!-- Cream Section #2  -->
            <div class="w-full flex flex-col items-center p-4 bg-offwhite">
                <div class="w-full text-left flex flex-col">
                    <div class="flex">
                        <!-- Are you being held hostage? -->
                        <div
                            class="text-left text-2xl font-IBM text-black font-bold float-left"
                        >
                            {firstQuestion2[switchUIInt]}
                        </div>
                        <input type="checkbox" value="" class="sr-only peer" />
                        
                        <!--If yes, are they armed?-->
                        <div
                            class="text-2xl font-IBM text-black font-bold float-left"
                        >
                            {secondQuestion2[switchUIInt]}
                        </div>

                        <!--If yes, with what?-->
                        <div class="text-2xl font-IBM text-black font-bold">
                            {thirdQuestion2[switchUIInt]}
                        </div>
                    </div>
                    <!--Blade Answer Button-->
                    <div class="mt-4 flex">
                        <div
                            class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                        >
                            <button
                                class="m-5 text-xl font-IBM font-light text-white"
                            >
                                {bladeBtn[switchUIInt]}
                            </button>
                        </div>
                        <!--Firearm Answer Button-->
                        <div
                            class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                        >
                            <button
                                class="m-5 text-xl font-IBM font-light text-white"
                            >
                                {firearmBtn[switchUIInt]}
                            </button>
                        </div>
                        <!--Explosive Answer Btn-->
                        <div
                            class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                        >
                            <button
                                class="m-5 text-xl font-IBM font-light text-white"
                            >
                                {exlplosiveBtn[switchUIInt]}
                            </button>
                        </div>
                    </div>

                    <!--Briefly Describe Weapon-->
                    <div class="mt-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="BRIEFLY DESCRIBE"
                            class="w-fit bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div class="w-full text-left flex flex-col">
                        <!--Are you hurt?-->
                        <div
                            class="mt-4 text-2xl font-IBM text-black font-bold"
                        >
                            {fourthQuestion2[switchUIInt]}
                        </div>
                        <!-- How many hostiles in the room? -->
                        <div
                            class="mt-4 text-2xl font-IBM text-black font-bold"
                        >
                            {fifthQuestion2[switchUIInt]}
                        </div>
                        <!-- Any minors in the room?-->
                         <div
                            class="mt-4 text-2xl font-IBM text-black font-bold"
                        >
                            {sixthQuestion2[switchUIInt]}
                        </div>
                        
                    </div>

                    <!-- Temporary Line break -->
                    <div
                        class="mt-4 self-stretch outline-[2px] outline-black"
                    ></div>

                    <!-- RADIO SET 1 (HOSTILES) -->
                    <div>
                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="hostiles" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][0]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="hostiles" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][1]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="hostiles" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][2]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="hostiles" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][3]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="hostiles" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][4]}</span
                                >
                            </div>
                        </div>
                    </div>

                    <!-- RADIO SET 2 (OTHERS) -->
                    <div>
                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="others" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][0]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="others" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][1]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="others" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][2]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="others" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][3]}</span
                                >
                            </div>
                        </div>

                        <div class="frame-5 mx-fit w-fit">
                            <div>
                                <label class="container">
                                    <input type="radio" name="others" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <span class="font-IBM text-redlight font-bold"
                                    >{radioBtnSet[switchUIInt][4]}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
