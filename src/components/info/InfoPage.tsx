import { useState } from 'react';
import './infoPage.css'
const InfoPage = () =>
{

    const [showText, setShowText] = useState(false);

    return(
        <>
      
                <div className="container">


                    <div className='card'>

                    <div className='block' style={{backgroundImage: `url('/assets/infoimage/1.jpg')`}}>
                        <div className='text'>
                            <h1>Викладання сходів плиткою</h1>
                            <div className='textContainer'> { (
                                // showText &&
                            <p>
                                Викладання сходів плиткою: Викладання плитки на сходах - це<br/>
                                важливий аспект архітектурного дизайну,<br/>
                                який поєднує в собі естетику та<br/>
                                функціональність. Професійно викладена плитка<br/>
                                забезпечує не<br/>
                                лише елегантний зовнішній вигляд,<br/>
                                але й стабільну та безпечну поверхню для руху.<br/>
                            </p>
                    )}</div>
                            {/* <input type="button" value="Детальніше..."  onChange={() => setShowText(true)} /> */}
                    </div>
                       
</div>


                    </div>

                    <div className='card'>
                        
                        <div className='block' style={{backgroundImage: `url('/assets/infoimage/2.jpg')`}}>
                        <div className='text'>
                            <h1>Різання плитки під 45 градусів:</h1>
                            <div className='textContainer'> { (
                                // showText &&
                            <p>
                               Різання плитки під кутом 45 градусів є методом,<br/>
                            який використовується для створення комплексних<br/>
                            геометричних рішень та дизайну. Цей підхід<br/>
                            дозволяє створювати вражаючі візуальні ефекти<br/>
                            та високоточні композиції, що додають унікальності<br/>
                            та елегантності приміщенню.
                            </p>
                    )}</div>
                            {/* <input type="button" value="Детальніше..."  onChange={() => setShowText(true)} /> */}
                    </div>
                        </div>

                    </div>

                    <div className='card'>
                        
                        <div className='block' style={{backgroundImage: `url('/assets/infoimage/3.jpg')`}}>
                        <div className='text'>
                            <h1>Великі площі плитки</h1>
                            <div className='textContainer'> { (
                                // showText &&
                            <p>
                               Використання великоформатної плитки -<br/>
                            це стратегічний підхід для оздоблення великих<br/>
                            областей, таких як житлові приміщення, торгові<br/>
                            центри та офіси. Цей метод надає приміщенню<br/>
                            сучасний вигляд та сприяє візуальному розширенню простору.
                            </p>
                    )}</div>
                            {/* <input type="button" value="Детальніше..."  onChange={() => setShowText(true)} /> */}
                    </div>
                        </div>

                    </div>

                    <div className='card'>
                        
                        <div className='block' style={{backgroundImage: `url('/assets/infoimage/4.jpg')`}}>
                        <div className='text'>
                            <h1>Викладання сходів плиткою</h1>
                            <div className='textContainer'> { (
                                // showText &&
                            <p>
                                Викладання сходів плиткою: Викладання плитки на сходах - це<br/>
                                важливий аспект архітектурного дизайну,<br/>
                                який поєднує в собі естетику та<br/>
                                функціональність. Професійно викладена плитка<br/>
                                забезпечує не<br/>
                                лише елегантний зовнішній вигляд,<br/>
                                але й стабільну та безпечну поверхню для руху.<br/>
                            </p>
                    )}</div>
                            {/* <input type="button" value="Детальніше..."  onChange={() => setShowText(true)} /> */}
                    </div>
                        </div>

                    </div>

                    <div className='card'>
                        
                        <div className='block' style={{backgroundImage: `url('/assets/infoimage/5.jpg')`}}>
                        <div className='text'>
                            <h1>Викладання плитки у санвузлі:</h1>
                            <div className='textContainer'> { (
                                // showText &&
                            <p>
                               Викладання плитки у санвузлі включає в себе<br/>
                            ретельне планування та вибір відповідних <br/>
                            матеріалів для створення гігієнічного та естетичного<br/>
                            середовища. Професійне виконання робіт<br/>
                            забезпечує стійкість до вологи та зносу,<br/>
                            а також відповідає найвищим стандартам якості.
                            </p>
                    )}</div>
                            {/* <input type="button" value="Детальніше..."  onChange={() => setShowText(true)} /> */}
                    </div>
                        </div>

                    </div>

                    <div className='card'>
                        
                        <div className='block' style={{backgroundImage: `url('/assets/infoimage/6.jpg')`}}>
                        <div className='text'>
                            <h1>Мозаїчна плитка:</h1>
                            <div className='textContainer'> { (
                                // showText &&
                            <p>
                                Мозаїчна плитка є унікальним матеріалом,<br/>
                                який використовується для створення художніх<br/>
                                композицій та декоративних рішень.<br/>
                                Вона надає безліч варіантів для індивідуалізації<br/>
                                приміщень та використання у різних стилях дизайну.
                            </p>
                    )}</div>
                            {/* <input type="button" value="Детальніше..."  onChange={() => setShowText(true)} /> */}
                    </div>
                        </div>

                    </div>
                
        

        
          </div>
         
        </>
    );
}
export default InfoPage;