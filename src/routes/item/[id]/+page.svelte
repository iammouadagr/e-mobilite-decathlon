<script>
	import { fetchSuggestions } from '../../../profiling/suggestions';
    import { get } from 'svelte/store'
    import { items } from '../../../stores/items'
	import { recommendedItemsList } from '../../../stores/recommendedItemsList';

     /** @type {import('./$types').LayoutData} */
     export let data;
    let recommendedItems = fetchSuggestions(data.item,get(items));
    

</script>
<div class="flex flex-col ustify-center items-center">

    <div class="flex items-center justify-center p-8">
        <img class="rounded-t-lg" src={data.item.imageURL} alt="" />
    </div>
    <div class="flex items-center justify-center p-6">
        <button class="nline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Acheter</button>
    </div>

    <div class="flex items-center justify-center p-6">
        <h1 class="text-black font-bold">Vous aimerez aussi</h1>

    </div>

    <div class="flex items-center justify-center p-2">



            <!-- Carousel wrapper -->
            <div class=" overflow-hidden rounded-lg md:h-96">
                
               

            
            </div>
        
            <!-- Slider controls previous -->
            <button type="button" class="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>

            <!-- Items-->
            {#each recommendedItems as row}
                <a href={row.item.id} class="rounded-t-lg">
                    <img class="rounded-t-lg" src={row.item.imageURL} alt="" />
                </a>
            {/each}

           

            <!-- Slider controls next -->
            <button type="button" class="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>


     </div>
        

</div>




