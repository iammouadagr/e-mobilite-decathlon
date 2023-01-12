<svelte:head>
	<title>Femmes</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
    // import Card from "src/components/Card.svelte";
    import { onMount } from "svelte";
    import { items } from "../../stores/items";

    const API_URL = "http://127.0.0.1:8080";
    const options = {
        method: 'GET'
    };

    let products = []

    onMount(async () => {
        console.log("Fetching ...");
        const response = await fetch(`${API_URL}/products`,options);
        const res = await response.json();
        console.log(res);
        products = res.products;
        items.update(items => products);
        products.sort((x, y) => y.profiles.female - x.profiles.female);    

    })
    

</script>


<div class="text-column">
	<h1>My list </h1>
    <div class="grid grid-cols-2 gap-4">
        {#each products as product}
		<!-- <button>{product.name}</button> -->
            <!-- <Card/> -->
            <a class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md" href={`/item/${product.id}`}>
                
                <img class="rounded-t-lg" src={product.imageURL} alt="" />
                
                <div class="p-5">
                    <a href={`/item/${product.id}`} >
                        <h5 class="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-black">{product.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price} €  </p>
                    <a href={`/item/${product.id}`} class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl w-28 p-2 ">
                        Acheter
                    </a>
                </div>
            </a>
	    {/each}
    </div>
	
</div>