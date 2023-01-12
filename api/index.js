const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const data = [
    {
        "name": "VESTE LÉGÈRE IMPERMÉABLE DE RANDONNÉE",
        "brand": "QUECHUA",
        "id": "1",
        "imageURL":"https://contents.mediadecathlon.com/p2240773/k$55fc02e39206f4e006d0477be35dd41c/sq/veste-legere-impermeable-de-randonnee-mh100-homme.jpg?format=auto&f=969x969",
        "size": ["S","L","M","XL"],
        "profiles": {
            "male": 9,
            "female": 4,
            "kids": 0
        },
        "price": 18
        
    },
    {
        "name": "PANTALON DE FOOTBALL SERNO SLIM 3 BANDE NOIR",
        "brand": "ADIDADS",
        "id": "2",
        "imageURL":"https://contents.mediadecathlon.com/p2179528/k$4b4b62df84f7b9f799bc8c02401c42ac/sq/pantalon-de-football-sereno-slim-3-bandes-noir.jpg?format=auto&f=969x969",
        "size": ["S","L","M","XL"],
        "profiles": {
            "male": 9,
            "female": 6,
            "kids": 0
        },
        "price": 25

    },
    {
        "name": "POLAIRE DE RANDONNÉE ",
        "brand": "QUECHUA",
        "id": "3",
        "imageURL":"https://contents.mediadecathlon.com/p2310521/k$0e1eed615a1505e6dc5ae26ffb98a282/sq/polaire-de-randonnee-mh100-homme.jpg?format=auto&f=969x969",
        "size": ["S","L","M","XL"],
        "profiles": {
            "male": 9,
            "female": 7,
            "kids": 0
        },
        "price": 15

    },
    {
            "name": "MAILLOT DE BAIN GAINANT NATATION FEMME 1 PIÈCE KAIPEARL TRIKI MIPY NOIR",
            "brand": "NABAIJI",
            "id": "4",
            "imageURL":"https://contents.mediadecathlon.com/p1889829/k$e81f8e151772281e0ac24bd0c3844ce1/sq/maillot-de-bain-gainant-natation-femme-1-piece-kaipearl-triki-mipy-noir.jpg?format=auto&f=969x969",
            "size": ["S","L","M","XL"],
            "profiles": {
                "male": 1,
                "female": 9,
                "kids": 0
            },
            "price": 17

    },
    {
        "name": "LEGGING COURT AVEC POCHE TÉLÉPHONE FITNESS CARDIO FEMME BORDEAUX",
        "brand": "DOMYOS",
        "id": "5",
        "imageURL":"https://contents.mediadecathlon.com/p2310011/k$e2c4c75bb8f778c365a135dd6e6ad151/sq/legging-court-avec-poche-telephone-fitness-cardio-femme-bordeaux.jpg?format=auto&f=969x969",
        "size": ["S","L","M","XL"],
        "profiles": {
            "male": 1,
            "female": 9,
            "kids": 0
        },
        "price": 25

    },
    {
            "name": "SWEAT-SHIRT À CAPUCHE FITNESS",
            "brand": "DOMYOS",
            "id": "6",
            "imageURL":"https://contents.mediadecathlon.com/p2304204/k$88d9cce972b24ebc09903fd9a43545ee/sq/sweat-shirt-a-capuche-fitness-femme-520-gris-abysses.jpg?format=auto&f=969x969",
            "size": ["S","L","M","XL"],
            "profiles": {
                "male": 1,
                "female": 9,
                "kids": 0
            },
            "price": 22

    },
    {
        "name": "SNEAKERS ADIDAS BREAKNET FEMME BLANCHES",
        "brand": "ADIDAS",
        "id": "7",
        "imageURL":"https://contents.mediadecathlon.com/p2155745/k$736cb678f8171ebf106b9fe2bcd04d39/sq/sneakers-adidas-breaknet-femme-blanches.jpg?format=auto&f=969x969",
        "size": ["S","L","M","XL"],
        "profiles": {
            "male": 3,
            "female": 8,
            "kids": 0
        },
        "price": 45

    },
    {
        "name": "SAC À DOS DE BASKETBALL 25L GOLDEN STATE WARRIORS - NBA 500 BLEU",
        "brand": "TARMAK",
        "id": "8",
        "imageURL":"https://contents.mediadecathlon.com/p2138276/k$1539925b86b24f467be3d5c8fdda4cfe/sq/sac-a-dos-de-basketball-25l-golden-state-warriors-nba-500-bleu.jpg?format=auto&f=969x969",
        "size": ["unix",],
        "profiles": {
            "male": 8,
            "female": 7,
            "kids": 3
        },
        "price": 40

    },
    {
        "name": "SURVÊTEMENT REGULAR CHAUD ENFANT - BASIQUE GRIS",
        "brand": "DOMYOS",
        "id": "9",
        "imageURL":"https://contents.mediadecathlon.com/p2080332/k$17466d0cb30b10df9baadaf4303954c9/sq/survetement-regular-chaud-enfant-basique-gris.jpg?format=auto&f=969x969",
        "size":"",
        "profiles": {
            "male": 2,
            "female": 2,
            "kids": 9
        },
        "price": 9

    },
    {
        "name": "SWEAT À CAPUCHE CHAUD ENFANT - 500 NOIR",
        "brand": "DOMYOS",
        "id": "10",
        "imageURL":"https://contents.mediadecathlon.com/p2114450/k$6f76e8c850aa8b42c12ce0a5e9336fbf/sq/sweat-a-capuche-chaud-enfant-500-noir.jpg?format=auto&f=969x969",
        "size":"",
        "profiles": {
            "male": 2,
            "female": 2,
            "kids": 9
        },
        "price": 9

    },
    {
        "name": "SWEAT DE BASKETBALL A CAPUCHE ENFANT - H100 GRIS",
        "brand": "TARMAK",
        "id": "11",
        "imageURL":"https://contents.mediadecathlon.com/p2310298/k$3a189e67b7ece6278d4f4626e7caf78f/sq/sweat-de-basketball-a-capuche-enfant-h100-gris.jpg?format=auto&f=969x969",
        "size":"",
        "profiles": {
            "male": 2,
            "female": 2,
            "kids": 9
        },
        "price": 16

    }
    

];

app.get('/products',(req,res)=> {

   

    const response = {
        "success": true,
        "products" : data
    }

        res.json(response);


    });

app.get('/products/item/:itemId',(req,res)=> {
    
    const item = data.find(element => element.id == req.params.itemId);

    const response = {
        "success": true,
        "item" : item
    }

        res.json(response);


});

const server = app.listen(port, () =>
  console.log("Running on port : ", port)
);