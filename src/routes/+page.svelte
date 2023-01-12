<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import menImage from '$lib/images/men.jpg';
	import womenImage from '$lib/images/women.jpg';
	import kidsImage from '$lib/images/kids.jpg';
	 


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex flex-col justify-items-center items-start w-full">
		<div class="flex justify-between bg-slate-200 p-6 w-full">
			<div class="relative mx-auto shadow-lg space-x-6">
				<img src={menImage} class="object-fill h-auto w-96 z-0 rounded-md" alt=""/>
				<div class="absolute z-10 top-1/2 ">
					<button class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-28 p-2 ">
						<a class="no-underline text-lg font-semibold text-white hover:no-underline hover:font-bold" href="/mens">Homme</a>
					</button>
				</div>
			</div>
			<div class="relative mx-auto shadow-lg  space-x-4">
				<img src={womenImage} class="object-fill h-full w-96 z-0 rounded-md" alt =""/>
				<div class="absolute z-10 top-1/2">
					<button class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-28 p-2 text-lg font-semibold">
						<a class="no-underline text-lg font-semibold text-white hover:no-underline hover:font-bold" href="/womens">Femme</a>
					</button>
				</div>
			</div>
		</div>
		
		<div class="flex justify-between bg-slate-200 p-6 w-full">

			<div class="relative mx-auto shadow-lg  space-x-4">
				<img src={kidsImage} class="object-fill h-auto w-96 z-0 rounded-md" alt=""/>
				<div class="absolute z-10 top-1/2 ">
					<button class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-28 p-2 text-lg font-semibold">
						<a class="no-underline text-lg font-semibold text-white hover:no-underline hover:font-bold" href="/kids">Enfants</a>
					</button>
				</div>
			</div>
			<div class="relative mx-auto shadow-lg  space-x-4">
				<img src={kidsImage} class="object-fill h-auto w-96 z-0 rounded-md" alt=""/>
				<div class="absolute z-10 top-1/2 ">
					<button class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-28 p-2 text-lg font-semibold">
						<a class="no-underline text-lg font-semibold text-white hover:no-underline hover:font-bold" href="/discount">Bon plan</a>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
