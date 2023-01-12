import { error } from '@sveltejs/kit';
 
const API_URL = "http://127.0.0.1:8080"


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    console.log("Fetching ....");
    
    const res = await fetch(`${API_URL}/products/item/${params.id}`,{
        method: 'GET'
    });
 
    if (res) {
        console.log("Item loaded.")

        return res.json();
        
    }


    throw error(404, 'Not found');
    
  }


 
  