<script>
	import tritonLogo from "./assets/triton.png";
	import Counter from "./lib/Counter.svelte";
    const nodeVersion = api.node();
    const chromeVersion = api.chrome();
    const electronVersion = api.electron();
</script>

<main class="min-h-screen bg-zinc-900 text-white flex flex-col">
	<section class="w-screen h-5 pb-1 inline-flex flex-col justify-start items-right gap-5 bg-zinc-950" style="app-region: drag;">

	</section>
	<section class="w-screen pt-3 pb-3 inline-flex flex-col justify-start items-center gap-5">
		<div class="self-stretch px-9 inline-flex justify-between items-center">
		  <img class="size-12 hover:drop-shadow-[0_0_0.8rem_#e85f24] transition-all duration-900" src={tritonLogo} alt="Triton Logo"/>
		  <div class="mt-4 w-24 h-12 justify-start hover:drop-shadow-[0_0_0.8rem_#e85f24] transition-all duration-900 text-white text-3xl font-extralight ">Home</div>
		</div>
		<div class="self-stretch outline-[2px] outline-gray-900"></div>
	</section>

	<section class="flex flex-col items-center justify-center mt-1">
		<div class="text-3xl font-extralight">Triton</div>
		<div class="text-2xl font-extralight">Version 0.0.1</div>
		<div class="text-2xl font-extralight">Node: {nodeVersion}</div>
		<div class="text-2xl font-extralight">Chrome: {chromeVersion}</div>
		<div class="text-2xl font-extralight">Electron: {electronVersion}</div>
		<div><Counter /></div>
	</section>

</main>
