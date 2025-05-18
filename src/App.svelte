<script>
    import { onMount } from "svelte";
    import Arrow from "./assets/arrow.svg";
    import Logo from "./assets/n11logo.svg";
    import Map from "./lib/map.svelte";
    let showDialog = false;
    let dialogStyle = "";
    let switchUI = false;
    let switchUIInt = 0;
    let TritonMessage = ["Triton", "altTriton"];

    // Tutorial
    onMount(() => {
        showDialog = true;
        dialogStyle = "animate__fade-in duration-300 ease-in-out opacity-100";
    });

    function closeModal() {
        showDialog = false;
        dialogStyle = "animate__fade-out duration-300 ease-in-out opacity-100";
        console.log("Modal closed");
    }

    // -- SECTION 1 --
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
        "Describe your surroundings or vehicle",
        "Describe your vehicle or house",
    ];
    let streamStartBtn = ["BEGIN STREAMING WITH OPERATOR", "START ORDER"];

    // -- SECTION 2 --
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
    let explosiveBtn = ["EXPLOSIVE", "HALF & HALF"];
    let fourthQuestion2 = ["Are you hurt?", "Add cheese dip?"];
    let fifthQuestion2 = [
        "How many hostiles in the room?",
        "How much cheese would you like?",
    ];
    let sixthQuestion2 = [
        "How many others are in the room?",
        "How spicy do you want your cheese?",
    ];

    let seventhQuestion2 = [
        "Are there any minors?",
        "Add cheese after baking?",
    ];

    let radioBtnSet = [
        ["0", "1", "2", "3", "4+"],
        ["1", "2", "3", "4", "5"],
    ];

    // -- SECTION 3 --
    let thirdSection = ["3. DESCRIBE THE CAPTOR", "3. CUSTOMIZE YOUR SAUCE"];

    let firstQuestion3 = ["Male or Female", "Add N.11 Dip? (+$0.99)"];

    let maleSliderDisplay = ["Male", "No"];

    let secondQuestion3 = ["Race", "Sauce Types"];

    let thridQuestion3 = ["Hair Color", "Sauce Amount"];

    // TODO: ADD BUTTONS HERE
    // TODO: Add Height (q3) and weight (q4)
    let whiteAnswerBtn = ["White", "Honey"];
    let blackAnswerBtn = ["Black", "Garlic"];
    let asianAnswerBtn = ["Asian", "Alfredo"];
    let hispanicAnswerBtn = ["Hispanic", "Ranch"];

    let blondHairAnswerBtn = ["Blond", "Light"];
    let blackHairAnswerBtn = ["Black", "Normal"];
    let brownHairAnswerBtn = ["Brown", "Extra"];
    let unknownHairAnswerBtn = ["Unknown", "None"];

    let blueEyeAnswerBtn = ["BLUE", "PEPPER"];
    let brownEyeAnswerBtn = ["BROWN", "OREGANO"];
    let greenEyeAnswerBtn = ["GREEN", "SALT"];
    let unknowonEyeAnswerBtn = ["UNKOWN", "ROSEMARY"];

    let fourthQuestion3 = ["Eye Color", "Sauce Seasoning"];

    let fifthQuestion3 = ["Clothing", "Special Sauce Request:"];
    // TODO: ADD BUTTONS HERE

    let sixthQuestion3 = ["Anything Else", "Any Allergies?"];
    // TODO: ADD BUTTONS HERE
    // TODO: ADD colothing (q7) and anything else (q8)

    // -- SECTION 4 --
    // TODO: just duplicate the above but make this after you make that one
    let fourthSection = ["4. DESCRIBE YOURSELF", "4. ADD YOUR TOPPINGS"];

    let firstQuestion4 = ["Male or Female", "Add N.11 Dip? (+$0.99)"];

    let maleUserSliderDisplay = ["Male", "No"];

    let secondQuestion4 = ["Race", "Sauce Types"];

    let thridQuestion4 = ["Hair Color", "Sauce Amount"];

    // TODO: ADD BUTTONS HERE
    // TODO: Add Height (q3) and weight (q4)
    let whiteUserAnswerBtn = ["White", "Honey"];
    let blackUserAnswerBtn = ["Black", "Garlic"];
    let asianUserAnswerBtn = ["Asian", "Alfredo"];
    let hispanicUserAnswerBtn = ["Hispanic", "Ranch"];

    let blondHairUserAnswerBtn = ["Blond", "Light"];
    let blackHairUserAnswerBtn = ["Black", "Normal"];
    let brownHairUserAnswerBtn = ["Brown", "Extra"];
    let unknownHairUserAnswerBtn = ["Unknown", "None"];

    let blueEyeUserAnswerBtn = ["BLUE", "PEPPER"];
    let brownEyeUserAnswerBtn = ["BROWN", "OREGANO"];
    let greenEyeUserAnswerBtn = ["GREEN", "SALT"];
    let unknowonEyeUserAnswerBtn = ["UNKOWN", "ROSEMARY"];

    let fourthQuestion4 = ["Eye Color", "Sauce Seasoning"];

    let fifthQuestion4 = ["Clothing", "Special Sauce Request:"];
 
    let sixthQuestion4 = ["Anything Else", "Any Allergies?"];

    // -- SECTION 5 --
    let fifthSection = ["5. ADDITIONAL INFORMATION", "3. CUSTOMIZE YOUR SAUCE"];

    // -- SECTION 6 --
    let sixthSection = ["ORDER SUBMITTED!", "ORDER SUBMITTED!"];
    let firstQuestion6 = [
        "If possible, keep the app open for updates. As the situation develops, please provide additional information in the chat if needed.",
        "Keep the app open for updates! If needed, contact your store using the chat. Remember to tip your driver and enjoy your pizza!",
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

    <!-- Dialog -->
    <dialog class="${dialogStyle}" open={showDialog}>
        <div
            class="flex flex-col justify-center pt-4 w-full h-[300px] bg-offwhite border-4 border-red-dark rounded-xl"
        >
        <div class="flex items-center">
        <img src={Arrow} alt="Arrow" class="ml-4 -mt-6 mr-auto">
        <p class="mx-4 -mt-20 font-IBM text-3xl font-bold">Double click the logo to swap between Pizza & 911 Interfaces at any time. 
Your responses will be broadcasted live to a 911 operator, regardless of your screen.</p>
        </div>
        <div class="flex flex-col mx-auto items-center justify-center">
            <button
                class="w-32 h-10 text-white text-2xl font-IBM -mt-15 bg-redlight outline-red-dark outline-8 rounded-xl"
                on:click={closeModal}>CLOSE</button
            >
            </div>
        </div>
    </dialog>

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
                <!--Police Answer Button-->
                <div class="mt-4 flex items-center w-full">
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="policeCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="policeCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {policeBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Medical Button-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="medicalCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="medicalCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {medicalBtn[switchUIInt]}
                        </label>
                    </div>
                </div>
                <!-- Line break under buttons -->
                <div
                    class="mt-8 mb-8 self-stretch outline-[2px] outline-black"
                ></div>

                <!-- Where are you right now? -->
                <div class="mb-3 text-2xl font-IBM text-black font-bold">
                    {secondQuestion[switchUIInt]}
                </div>

                <!--Where are you right now? text box-->
                <div class="flex items-center mt-4 w-full">
                    <input
                        type="address"
                        id="address"
                        name="address"
                        placeholder="ADDRESS BOX"
                        class="w-full mx-2 bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                <div class="mt-4 flex w-full items-center">
                    <!-- Yes being Moved Button-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="radio"
                            id="movedYesCheckbox"
                            class="hidden peer"
                            name="movedCheckbox"
                        />
                        <label
                            for="movedYesCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {beingMovedYes[switchUIInt]}
                        </label>
                    </div>
                    <!--NO being Moved Button-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="radio"
                            id="movedNoCheckbox"
                            class="hidden peer"
                            name="movedCheckbox"
                        />
                        <label
                            for="movedNoCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {beingMovedNo[switchUIInt]}
                        </label>
                    </div>
                </div>

                <!-- Describe your surroundings text box-->
                <div class="flex items-center mt-4 mb-4 w-full">
                    <input
                        type="surroundings"
                        id="surroundings"
                        name="surroundings"
                        placeholder={beingMovedBox[switchUIInt]}
                        class="w-full mx-2 bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>

                <!-- Line Break -->
                <div
                    class="mt-4 self-stretch outline-[2px] outline-black"
                ></div>

                <!-- Stream Button -->
                <div
                    class="mt-5 w-full mx-2 bg-redlight flex flex-box float-left rounded-lg outline-5 outline-red-dark"
                >
                    <input
                        type="checkbox"
                        id="beginStreamBtn"
                        class="hidden peer"
                    />
                    <label
                        for="beginStreamBtn"
                        class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-red-dark peer-checked:rounded-lg"
                    >
                        {streamStartBtn[switchUIInt]}
                    </label>
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
                    <div class="flex flex-col">
                        <!-- Are you being held hostage? -->
                        <div class="mb-7 flex items-center w-full">
                            <div
                                class="text-left text-2xl font-IBM text-black font-bold float-left"
                            >
                                {firstQuestion2[switchUIInt]}
                            </div>
                            <div
                                class="relative inline-block ml-auto mr-2 w-fit h-fit"
                            >
                                <input
                                    checked
                                    id="hostage-switch-component"
                                    type="checkbox"
                                    class="peer appearance-none outline-red-dark outline-7 w-[90px] h-[39px] bg-offwhite rounded-full checked:bg-offwhite cursor-pointer transition-colors duration-300"
                                />
                                <label
                                    for="hostage-switch-component"
                                    class="absolute mt-[3px] top-0 left-[3px] w-[33px] h-[33px] bg-redlight rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-12 peer-checked:bg-sliderchecked cursor-pointer"
                                >
                                </label>
                            </div>
                        </div>

                        <!--If yes, are they armed?-->
                        <div class="mb-4 flex items-center w-full">
                            <div
                                class="text-left text-2xl font-IBM text-black font-bold float-left"
                            >
                                {secondQuestion2[switchUIInt]}
                            </div>
                            <div
                                class="relative inline-block ml-auto mr-2 float-right w-fit h-fit"
                            >
                                <input
                                    checked
                                    id="armed-switch-component"
                                    type="checkbox"
                                    class="peer appearance-none outline-red-dark outline-7 w-[90px] h-[39px] bg-offwhite rounded-full checked:bg-offwhite cursor-pointer transition-colors duration-300"
                                />
                                <label
                                    for="armed-switch-component"
                                    class="absolute mt-[3px] top-0 left-[3px] w-[33px] h-[33px] bg-redlight rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-12 peer-checked:bg-sliderchecked cursor-pointer"
                                >
                                </label>
                            </div>
                        </div>

                        <!--If yes, with what?-->
                        <div class="text-2xl font-IBM text-black font-bold">
                            {thirdQuestion2[switchUIInt]}
                        </div>
                    </div>
                    <!--Blade Answer Button-->
                    <div class="mt-4 flex items-center w-full">
                        <div
                            class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                        >
                            <input
                                type="checkbox"
                                id="bladeCheckbox"
                                class="hidden peer"
                            />
                            <label
                                for="bladeCheckbox"
                                class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                            >
                                {bladeBtn[switchUIInt]}
                            </label>
                        </div>
                        <!--Firearm Answer Button-->
                        <div
                            class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                        >
                            <input
                                type="checkbox"
                                id="firearmCheckbox"
                                class="hidden peer"
                            />
                            <label
                                for="firearmCheckbox"
                                class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                            >
                                {firearmBtn[switchUIInt]}
                            </label>
                        </div>
                        <!--Explosive Answer Btn-->
                        <div
                            class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                        >
                            <input
                                type="checkbox"
                                id="explosiveCheckbox"
                                class="hidden peer"
                            />
                            <label
                                for="explosiveCheckbox"
                                class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                            >
                                {explosiveBtn[switchUIInt]}
                            </label>
                        </div>
                    </div>

                    <!--Briefly Describe Weapon-->
                    <div class="flex items-center mt-4 w-full">
                        <input
                            type="weaponDesc"
                            id="weaponDesc"
                            name="weaponDesc"
                            placeholder="BRIEFLY DESCRIBE"
                            class="w-full mx-2 bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div class="w-full text-left flex flex-col">
                        <!-- Are you hurt? -->
                        <div class="mb-4 mt-8 flex items-center w-full">
                            <div
                                class="text-left text-2xl font-IBM text-black font-bold float-left"
                            >
                                {fourthQuestion2[switchUIInt]}
                            </div>
                            <div
                                class="relative inline-block ml-auto mr-2 float-right w-fit h-fit"
                            >
                                <input
                                    checked
                                    id="hurt-switch-component"
                                    type="checkbox"
                                    class="peer appearance-none outline-red-dark outline-7 w-[90px] h-[39px] bg-offwhite rounded-full checked:bg-offwhite cursor-pointer transition-colors duration-300"
                                />
                                <label
                                    for="hurt-switch-component"
                                    class="absolute mt-[3px] top-0 left-[3px] w-[33px] h-[33px] bg-redlight rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-12 peer-checked:bg-sliderchecked cursor-pointer"
                                >
                                </label>
                            </div>
                        </div>
                        <!-- How many hostiles in the room? -->
                        <div
                            class="mt-4 text-2xl font-IBM text-black font-bold"
                        >
                            {fifthQuestion2[switchUIInt]}
                        </div>
                    </div>

                    <!-- RADIO SET 1 (HOSTILES) -->
                    <div class="flex items-center mx-auto w-full">
                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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
                    <div class="w-full text-left flex flex-col">
                        <!-- How many others are in the room?-->
                        <div
                            class="mt-4 text-2xl font-IBM text-black font-bold"
                        >
                            {sixthQuestion2[switchUIInt]}
                        </div>
                    </div>

                    <!-- RADIO SET 2 (OTHERS) -->
                    <div class="flex items-center w-full">
                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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

                        <div class="frame-5 mx-auto w-full">
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
                <!-- Are there any minors? -->
                <div class="mb-4 mt-8 flex items-center w-full">
                    <div
                        class="text-left text-2xl font-IBM text-black font-bold float-left"
                    >
                        {seventhQuestion2[switchUIInt]}
                    </div>
                    <div
                        class="relative inline-block ml-auto mr-2 float-right w-fit h-fit"
                    >
                        <input
                            checked
                            id="minors-switch-component"
                            type="checkbox"
                            class="peer appearance-none outline-red-dark outline-7 w-[90px] h-[39px] bg-offwhite rounded-full checked:bg-offwhite cursor-pointer transition-colors duration-300"
                        />
                        <label
                            for="minors-switch-component"
                            class="absolute mt-[3px] top-0 left-[3px] w-[33px] h-[33px] bg-redlight rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-12 peer-checked:bg-sliderchecked cursor-pointer"
                        >
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Section #2-->

    <!-- Section #3: Describe the Captor-->
    <section class="flex flex-col items-center justify-center mt-5 mx-9">
        <div class="mx-4 w-full">
            <!-- Question Header -->
            <div class="w-full bg-black text-center">
                <div class="m-auto text-3xl font-IBM font-light text-white">
                    {thirdSection[switchUIInt]}
                </div>
            </div>
            <!-- Cream Section #3  -->
            <div class="w-full flex flex-col items-center p-4 bg-offwhite">
                <!-- Describe the captor -->
                <div class="w-full">
                    <div class="mb-7 flex items-center w-full">
                        <!--Male or Female Slider-->
                        <div
                            class="text-left text-2xl font-IBM text-black font-bold float-left font-redlight"
                        >
                            {firstQuestion3[switchUIInt]}
                        </div>
                        <!--Slider Code-->
                        <div class="flex items-center ml-auto mr-0 float-right">
                            <div
                                class="relative inline-block ml-auto mr-2 float-right w-fit h-fit"
                            >
                                <div
                                    class="relative inline-block ml-auto w-fit h-fit"
                                >
                                    <input
                                        checked
                                        id="malefemale-switch-component"
                                        type="checkbox"
                                        class="peer appearance-none outline-red-dark outline-7 w-[90px] h-[39px] bg-offwhite rounded-full checked:bg-offwhite cursor-pointer transition-colors duration-300"
                                    />
                                    <label
                                        for="malefemale-switch-component"
                                        class="absolute mt-[3px] top-0 left-[3px] w-[33px] h-[33px] bg-redlight rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-12 peer-checked:bg-sliderchecked cursor-pointer"
                                    >
                                    </label>
                                </div>
                                <div class="float-left mr-3 mt-2 font-IBM font-light">
                                    {maleSliderDisplay[switchUIInt]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Race prompt -->
                <div class="mb-3 text-2xl font-IBM text-black font-bold flex-column text-left w-full">
                    {secondQuestion3[switchUIInt]}
                </div>

                <!--Race Answer Buttons-->
                <div class="mt-4 flex items-center w-full">
                    <!--White Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="whiteCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="whiteCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {whiteAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Black Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blackCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blackCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blackAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Asian Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="asianCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="asianCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {asianAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Hispanic Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="hispanicCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="hispanicCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {hispanicAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                </div>

                <!-- Hair Color -->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold flex-column text-left w-full">
                    {thridQuestion3[switchUIInt]}
                </div>

                <!--Hair Color Answer Buttons-->
                <div class="mt-4 flex items-center w-full">
                    <!--Blond Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blondHairCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blondHairCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blondHairAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Black Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blackHairCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blackHairCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blackHairAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Brown Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="brownHairCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="brownHairCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {brownHairAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Unkown Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="unknownHairCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="unknownHairCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {unknownHairAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                </div>

                <!-- Eye Color -->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold flex-column text-left w-full">
                    {fourthQuestion3[switchUIInt]}
                </div>

                <!--Eye Color Answer Buttons-->
                <div class="mt-4 flex items-center w-full">
                    <!--Blue Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blueEyeCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blueEyeCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blueEyeAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Brown Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="brownEyeCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="brownEyeCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {brownEyeAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Green Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="greenEyeCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="greenEyeCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {greenEyeAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Unknown Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="unknownEyeCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="unknownEyeCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {unknowonEyeAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                </div>

                <!--Clothing Desc / Special Sauce Request-->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold">
                    {fifthQuestion3[switchUIInt]}
                </div>

                <!--Where are you right now? text box-->
                <div class="flex items-center mt-4 w-full">
                    <input
                        type="clothingDesc"
                        id="clothingDesc"
                        name="clothingDesc"
                        placeholder="BRIEFLY DESCRIBE"
                        class="w-full mx-2 bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>

                <!--Anything Else txt box / Allergy Desc-->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold">
                    {sixthQuestion3[switchUIInt]}
                </div>

                <!--Anything else text box / Allergy Desc txt box-->
                <div class="flex items-center mt-4 w-full">
                    <input
                        type="etc"
                        id="etc"
                        name="etc"
                        placeholder="BREIFLY DESCRIBE"
                        class="w-full mx-2 bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
        </div>
    </section>
    <!-- End Section #3-->

    <!--Section #4: User Desc -->
    <section class="flex flex-col items-center justify-center mt-5 mx-9">
        <div class="mx-4 w-full">
            <!-- Question Header -->
            <div class="w-full bg-black text-center">
                <div class="m-auto text-3xl font-IBM font-light text-white">
                    {fourthSection[switchUIInt]}
                </div>
            </div>
            <!-- Cream Section #4  -->
            <div class="w-full flex flex-col items-center p-4 bg-offwhite">
                <!-- Describe the captor -->
                <div class="w-full">
                    <div class="mb-7 flex items-center w-full">
                        <!--Male or Female Slider USER-->
                        <div
                            class="text-left text-2xl font-IBM text-black font-bold float-left font-redlight"
                        >
                            {firstQuestion4[switchUIInt]}
                        </div>
                        <!--Slider Code For User Male or Female-->
                        <div class="flex items-center ml-auto mr-0 float-right">
                            <div
                                class="relative inline-block ml-auto mr-2 float-right w-fit h-fit"
                            >
                                <div
                                    class="relative inline-block ml-auto w-fit h-fit"
                                >
                                    <input
                                        checked
                                        id="malefemale-User-switch-component"
                                        type="checkbox"
                                        class="peer appearance-none outline-red-dark outline-7 w-[90px] h-[39px] bg-offwhite rounded-full checked:bg-offwhite cursor-pointer transition-colors duration-300"
                                    />
                                    <label
                                        for="malefemale-User-switch-component"
                                        class="absolute mt-[3px] top-0 left-[3px] w-[33px] h-[33px] bg-redlight rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-12 peer-checked:bg-sliderchecked cursor-pointer"
                                    >
                                    </label>
                                </div>
                                <div class="float-left mr-3 mt-2 font-IBM font-light">
                                    {maleUserSliderDisplay[switchUIInt]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Race prompt USER -->
                <div class="mb-3 text-2xl font-IBM text-black font-bold flex-column text-left w-full">
                    {secondQuestion4[switchUIInt]}
                </div>

                <!--Race Answer Buttons-->
                <div class="mt-4 flex items-center w-full">
                    <!--White Answer Btn USER-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="whiteUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="whiteUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {whiteUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Black Answer Btn USER -->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blackUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blackUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blackUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Asian Answer Btn USER -->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="asianUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="asianUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {asianUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Hispanic Answer Btn USER -->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="hispanicUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="hispanicUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {hispanicUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                </div>

                <!-- Hair Color USER -->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold flex-column text-left w-full">
                    {thridQuestion4[switchUIInt]}
                </div>

                <!--Hair Color USER Answer Buttons-->
                <div class="mt-4 flex items-center w-full">
                    <!--Blond Answer Btn USER -->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blondHairUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blondHairUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blondHairUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Black Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blackHairUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blackHairUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blackHairUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Brown Answer Btn USER-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="brownHairUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="brownHairUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {brownHairUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Other Answer Btn USER-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="unknownHairCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="unknownHairCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {unknownHairUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                </div>

                <!-- Eye Color User -->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold flex-column text-left w-full">
                    {fourthQuestion4[switchUIInt]}
                </div>

                <!--Eye Color Answer Buttons-->
                <div class="mt-4 flex items-center w-full">
                    <!--Blue Answer Btn-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="blueEyeUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="blueEyeUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {blueEyeUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Brown Answer Btn User-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="brownEyeUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="brownEyeUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {brownEyeUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Green Answer Btn USER-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="greenEyeUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="greenEyeUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {greenEyeUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                    <!--Unknown Answer Btn User-->
                    <div
                        class="w-full mx-2 bg-greyblue flex flex-box float-left rounded-lg"
                    >
                        <input
                            type="checkbox"
                            id="unknownEyeUserCheckbox"
                            class="hidden peer"
                        />
                        <label
                            for="unknownEyeUserCheckbox"
                            class="h-17 w-full text-xl font-IBM font-light text-white flex items-center justify-center cursor-pointer peer-checked:bg-btnclicked peer-checked:rounded-lg"
                        >
                            {unknowonEyeUserAnswerBtn[switchUIInt]}
                        </label>
                    </div>
                </div>

                <!--Clothing Desc / Special Sauce Request-->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold">
                    {fifthQuestion4[switchUIInt]}
                </div>

                <!--Where are you right now? text box-->
                <div class="flex items-center mt-4 w-full">
                    <input
                        type="clothingDescUSER"
                        id="clothingDescUSER"
                        name="clothingDescUSER"
                        placeholder="BRIEFLY DESCRIBE"
                        class="w-full mx-2 bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>

                <!--Anything Else txt box / Allergy Desc-->
                <div class="mb-3 mt-5 text-2xl font-IBM text-black font-bold">
                    {sixthQuestion4[switchUIInt]}
                </div>

                <!--Anything else text box / Allergy Desc txt box-->
                <div class="flex items-center mt-4 w-full">
                    <input
                        type="etcUSER"
                        id="etcUSER"
                        name="etcUSER"
                        placeholder="BREIFLY DESCRIBE"
                        class="w-full mx-2 bg-white rounded-xl border-4 border-red-dark border- focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
        </div>
    </section>
    <!--End Section #4-->

    
</main>
