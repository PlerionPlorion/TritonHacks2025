<script>
    import tritonLogo from "./assets/triton.png";
    const nodeVersion = api.node();
    const chromeVersion = api.chrome();
    let switchUI = false;
    let switchUIInt = 0;
    let TritonMessage = ["Triton", "altTriton"];
    let firstQuestion = ["1. Prompt First Responders", "1. Select Store"];
    let filterQ = ["What type of assistance do you need? (Select Multiple)","Would you like to filter out stores without seasonal options?"];

    function altUI() {
        switchUI = !switchUI;
        if (switchUI) {
            switchUIInt = 1;
        } else {
            switchUIInt = 0;
        }
    }
</script>

<main class="min-h-screen bg-white text-black flex flex-col">
    <section
        class="w-screen h-5 pb-1 inline-flex flex-col justify-start items-right gap-5 bg-zinc-950"
        style="app-region: drag;"
    ></section>

    <section
        class="w-screen pt-3 pb-3 inline-flex flex-col bg-red-main justify-start items-center gap-5"
    >
        <div class="self-stretch px-9 inline-flex justify-between items-center">
            <input
                type="image"
                class="size-12 hover:drop-shadow-[0_0_0.8rem_#e85f24] transition-all duration-900"
                src={tritonLogo}
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

    <section class="flex flex-col items-center justify-center mt-1">
		<div class ="w-5/6 bg-black text-center">
        <div class="m-auto text-3xl font-IBM font-light text-white">
            {firstQuestion[switchUIInt]}
        </div>
		</div>

        <div class = "">
            
        </div>

        <div class ="flex flex-col items-center size-100 p-4 bg-offwhite">
            <div class="text-2xl font-IBM text-black">
                {filterQ[switchUIInt]}
            </div>
            <div class="self-stretch outline-[2px] outline-black">
            </div>
        </div>


            
    </section>

</main>
