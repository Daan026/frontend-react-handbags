import './App.css'
import Button from "./components/button/Button.jsx";
import Article from "./components/article/Article.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import React from "react";
import our_story from "./assets/our_story.png"
import brand from "./assets/brand.png"
import Tile from "./components/tile/Tile.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    Ondisabled={false}
                    type='button'
                    onClick={() => console.log('to the collection')}
                    text='to the collection'
                />

                <Button
                    Ondisabled={false}
                    type='button'
                    onClick={() => console.log('shop all bags')}
                    text='shop all bags'
                />

                <Button
                    Ondisabled={false}
                    type='button'
                    onClick={() => console.log('pre-orders')}
                    text='pre-orders'
                />
            </nav>

            <main>

                <Article
                    productName="The handy bag"
                    banner='best'
                    price='€400,-'
                    img={bag_1}
                    alt='picture The handy bag'
                />
                <Article
                    productName="The stylish bag"
                    banner='best'
                    price='€250,-'
                    img={bag_2}
                    alt='picture The stylish bag'
                />
                <Article
                    productName="The simple bag"
                    banner='new'
                    price='€300,-'
                    img={bag_3}
                    alt='picture The simple bag'
                />
                <Article
                    productName="The trendy bag"
                    banner='new'
                    price='€150,-'
                    img={bag_4}
                    alt='picture The trendy bag'
                />
            </main>

            <footer>

                <Tile>
                    <h2>The brand</h2>
                    <p>
                        Lorem ipsum dolor sit amet,consectetur adipisicing elit. blanditiis eligendi exercitationem
                        illo,labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                        laboriosam nisi rerum sunt. At repellendus tenetur veniam!
                        Lorem ipsum dolor sit amet,consectetur adipisicing elit. blanditiis eligendi exercitationem
                        illo,labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                        laboriosam nisi rerum sunt. At repellendus tenetur veniam!
                    </p>

                </Tile>

                <Tile>
                    <img src={brand} alt='Brand image'/>
                </Tile>


                <Tile>
                    <img src={our_story} alt='our_story'/>

                </Tile>
                <Tile>
                    <h2> Our story</h2>
                    <p>
                        Lorem ipsum dolor sit amet,consectetur adipisicing elit. blanditiis eligendi exercitationem
                        illo,labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                        laboriosam nisi rerum sunt. At repellendus tenetur veniam!
                    </p>

                </Tile>


            </footer>
        </>
    )
}

export default App