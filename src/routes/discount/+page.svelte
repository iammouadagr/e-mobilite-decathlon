<svelte:head>
	<title>Vos matches</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import { recommendedItemsList } from "../../stores/recommendedItemsList";
    import { get } from 'svelte/store'
    import { onMount } from "svelte";

    const API_URL = "http://127.0.0.1:8080";
    const options = {
        method: 'GET'
    };

    let products = []

    onMount(async () => {
        console.log("Fetching ...");
        const response = await fetch(`${API_URL}/products`,options);
        const res = await response.json();
        products = res.products;
        recommendedItemsList.update(recommendedItemsList => products);

    })

    recommendedItemsList.subscribe(value => {
        console.log(value);
		products = value;
	});


    

</script>



<div class="text-column">
	<h1>My list </h1>
    <div class="grid grid-cols-2 gap-4">
        {#each products as product}
		<!-- <button>{product.name}</button> -->
            <!-- <Card/> -->
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md" >
                <a href={`/item/${product.id}`}>
                    <img class="rounded-t-lg" src={product.imageURL} alt="" />
                </a>
                <div class="p-5">
                    <a href={`/item/${product.id}`}>
                        <h5 class="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-black">{product.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price} €  </p>
                    <a href={`/item/${product.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Acheter
                    </a>
                </div>
            </div>
	    {/each}
    </div>
	
</div>