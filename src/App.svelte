<script>
  import Logo from "./assets/n11logo.svg";
  const nodeVersion = api.node();
  const chromeVersion = api.chrome();
  let switchUI = false;
  let switchUIInt = 0;
  let TritonMessage = ["Triton", "altTriton"];
  let firstSection = ["1. Prompt First Responders", "1. Select Store"];
  let firstQuestion = [
    "What type of assistance do you need? (Select Multiple)",
    "Would you like to filter out stores without seasonal options?",
  ];
  let policeBtn = ["Police", "Yessir"];
  let medicalBtn = ["Medical", "No Sir :("];
  let secondQuestion = ["Where are you right now?", "Where are you right now?"];

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

  <!-- First Section -->
  <section class="flex flex-col items-center justify-center mt-1">
    <div class="mx-4 w-fit">
      <!-- Question Header -->
      <div class="w-full bg-black text-center">
        <div class="m-auto text-3xl font-IBM font-light text-white">
          {firstSection[switchUIInt]}
        </div>
      </div>
      <!-- Cream Section -->
      <div class="w-full flex flex-col items-center size-100 p-4 bg-offwhite">
        <!-- What type of assistance do you need? -->
        <div class="text-2xl font-IBM text-black">
          {firstQuestion[switchUIInt]}
        </div>
        <!--Police Button-->
        <div class="mt-4 flex">
          <div
            class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
          >
            <div class="m-5 text-3xl font-IBM font-light text-white">
              {policeBtn[switchUIInt]}
            </div>
          </div>
          <!--Medical Button-->
          <div
            class="w-fit mx-2 bg-greyblue flex flex-box float-left rounded-lg"
          >
            <button class="m-5 text-3xl font-IBM font-light text-white">
              {medicalBtn[switchUIInt]}
            </button>
          </div>
        </div>
        <!-- Line break under buttons -->
        <div class="mt-4 self-stretch outline-[2px] outline-black"></div>

        <!-- Where are you right now? -->
        <div class="text-2xl font-IBM text-black">
          {secondQuestion[switchUIInt]}
        </div>

        <!--Where are you right now? text box-->
        <div class="items-center justify-center w-fit self-stretch box-border size-32 border-4 p-4">
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
