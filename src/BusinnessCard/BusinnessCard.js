import BusinnessCardS from "./BusinnessCardS.module.css";

function BusinnessCard() {
  return (
    <div className={BusinnessCardS.BusinnessCard}>
      <div class={BusinnessCardS.cardСontainer}>
        <div class={BusinnessCardS.businesscardWrapper}>
          <div class={BusinnessCardS.front}>
            <h1>Denis Kan</h1>
            <hr />
            <p>WEB developer</p>
          </div>
          <div class={BusinnessCardS.back}>
<<<<<<< HEAD
            <br />
            <p>Telephone: +7(929)-648-71-06</p>
            <p>Email: denblaze@mail.ru</p>
            <p>Telegram: @sakuraiiexe</p>
=======
            <p>
              Telephone:
              <br />
              +7(929)-648-71-06
            </p>
            <p>
              Email:
              <br />
              denblaze@mail.ru
            </p>
            <p>
              Telegram:
              <br />
              @sakuraiiexe
            </p>
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinnessCard;
