import React from 'react'
import { Roboto , Poppins  , Jockey_One} from 'next/font/google'
import localFont from "next/font/local"

// const roboto = Roboto({
//     weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
//     subsets:["latin"]
// })

// const poppins = Poppins({
//      weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
//     subsets:["latin"]
// })

// const jockey_one = Jockey_One({
//      weight:[ "400" ],
//     subsets:["latin"]
// })


const myFont = localFont({
    src : "../fonts/loveday.ttf"
})

const FontExample = () => {
  return (
    <div>
        <h1 className={`text-4xl ${myFont.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, autem!</h1>

        <p className={``}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi similique, perspiciatis velit iste explicabo maxime incidunt. Provident ipsa dolorum velit vitae veritatis necessitatibus totam? Eligendi sapiente doloremque, accusantium ratione quod fuga facere quas dolores mollitia odio, quos incidunt nobis? Accusantium labore vitae quis dolorum id corrupti, laborum numquam, earum consequuntur voluptatibus delectus dolor. Facere illo nulla aspernatur. Iste id cum sapiente atque ab vero adipisci cumque aspernatur distinctio dolores! Tempora facilis repellendus culpa quis alias labore, rem consequatur minus incidunt.  
        </p>
    </div>
  )
}

export default FontExample