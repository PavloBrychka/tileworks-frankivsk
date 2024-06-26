import './Footer.css';

const footer = () =>{

    const copyToClipboard = () => {
        navigator.clipboard.writeText("+380960886331")
          .then(() => alert('Текст скопійовано до буферу обміну'))
          .catch(err => console.error('Помилка копіювання:', err));
      };

    return(
        <>
    <div className='footercontainer'>
        <p>Телефон:   <button onClick={copyToClipboard}>+380960886331</button></p>
        <p>Можете задати запитання тут</p>
        {/* <h1>Контакти</h1> */}
        <div>
            <p>
            <a href="https://t.me/+380960886331">
            <i><img src="/assets/icons/telegram.png" alt="" /></i>
           </a>
        <a href="viber://chat?number=+380960886331">
            <i><img src="/assets/icons/viber.png" alt="" /></i>
        </a>
        <a  href="https://m.me/100050481938663?hash=AbYEY43RGWRXKVqt">
            <i><img src="/assets/icons/messenger.png" alt="" /></i>
        </a>
            </p>
       


        </div>
    
         
           

            </div>
        </>
    );
}

export default footer;