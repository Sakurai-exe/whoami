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
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinnessCard;
