import React from 'react';

const BreakdownOfAccommodation = () => {
    return (
        <main className='w-sc'>
            <header>
                <img src="" alt="Soy un Logo" />
                <nav>
                    <input type="text" placeholder='Buscar' />
                    <i class="fa-solid fa-magnifying-glass"></i>

                </nav>
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
            </header>
            <section>
                <section>
                    <h1>Nombre de Vivienda</h1>
                    <h3><span></span>4,7. Evaluaciones</h3>
                    <h3><i class="fa-solid fa-location-dot"></i><span></span>Ubicación</h3>
                </section>

                <section className='d-grid'>
                    <div className='text[-gray]' ></div>
                    <div className='text[-gray]' ></div>
                    <div className='text[-gray]' ></div>
                    <div className='text[-gray]' ></div>
                    <div className='text[-gray]' ></div>
                    <div className='text[-gray]' ></div>
                    <div className='text[-gray]' ></div>
                    <div><i class="fa-solid fa-arrow-right"></i></div>
                </section>
            </section>
            <section>
                <section>
                    <div></div>
                    <div>
                        <h2>Description Alojamiento</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus praesentium rerum quae sed modi eum dolorem! Rem, iste ex? Voluptates magni modi libero. Ipsum impedit explicabo suscipit fuga aspernatur!asdas...</p>
                        <button className='w-25 p-2 bg-[blue] text-[white] rounded-full'>Leer más</button>
                    </div>
                </section>
                <section>
                    <card>

                    </card>
                </section>

            </section>
            <hr />
            <section>
                <h3>Acomodaciones</h3>

            </section>
            <hr />
            <section>
                <h3>Servicios</h3>
                <input type="checkbox" name="" id="" />
                <button>Mostrar más servicios</button>

            </section>
            <div>
                <ul>
                    <li>Fotos</li>
                    <li>Servicios</li>
                    <li>Evaluaciones</li>
                    <li>Cambiar Feachas</li>
                    <li></li>
                </ul>
            </div>

        </main>
    );
};

export default BreakdownOfAccommodation;