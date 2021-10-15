import img01 from '../image/01.jpg';
import img02 from '../image/02.jpg';
import img03 from '../image/03.jpg';
export default function Contant() {
  return (
    <div>
      <div className="three">
        <div className="row0">
          <div className="col-md-6">
            <p> <i className="fas fa-paw fa-1x i_color" width='50px'></i> Our Story</p>
          </div>
          <div className="col-md-10 text1">
            <p>Eden Cafe 的起因是場偶然。<br />一切的源頭來自一場邂逅，一場平凡的對話。當言語交錯，一句一語逐漸建構真實。<br />當邂逅來訪，靈動生氣填充平淡日常。於是，偶然成了必然。</p>
          </div>
        </div>

        <div className="row0">
          <div className="col-md-6">
            <p> <i className="fas fa-paw fa-1x i_color"></i> Concept</p>
          </div>
          <div className="row">
            <figure className="snip1190">
              <img src={img02} alt="sample64" />
              <figcaption>
                <div className="square">
                  <div></div>
                </div>
                <h2>Heal<span> ing</span></h2>
                <p>讓活潑可愛的毛小孩來治癒身心</p>
              </figcaption>
            </figure>
            <figure className="snip1190">
              <img src={img01} alt="sample62" />
              <figcaption>
                <div className="square">
                  <div></div>
                </div>
                <h2>Relax<span> ing</span></h2>
                <p>享受輕鬆的氣氛</p>
              </figcaption>
            </figure>
            <figure className="snip1190">
              <img src={img03} alt="sample62" />
              <figcaption>
                <div className="square">
                  <div></div>
                </div>
                <h2>Comfort<span> ing</span></h2>
                <p>來杯熱可可暖和吧!</p>
              </figcaption>
            </figure></div>
        </div>
      </div>
    </div>
  );
}