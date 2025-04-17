import React from "react";
import "./TariffPage.css";
import "../components/Main.css";

const TariffPage = () => {
  return (
    <div className="container">
      <div className="tariff-container">
        <h2 className="title">Тарифник на услуги на ФД Кредо Кард</h2>

        <section className="section">
          <h3 className="section-title">1.Трошоци за кредитот</h3>
          <table className="tariff-table">
            <thead>
              <tr>
                <th>Надоместок</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left-2" colSpan="2">Еднократен надоместок за обработка на барање за одобрување на кредит.</td>
              </tr>
              <tr>
                <td className="text-left-2" id="text-left-3" colSpan="2">Месечен надоместок за администрирање на кредит.</td>
              </tr>
              <tr>
                <td colSpan="2">Еднократна провизија за одобрување од 5% до 10% од одобрениот износ во зависност од пресметаниот ризик за пласираниот кредит.</td>
              </tr>
            </tbody>
          </table>
          <table className="tariff-table">
            <thead>
              <tr>
                <th className="section-title">2.Надоместоци на услуги по кредити</th>
                <th>Износ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Административен надоместок за писмено известување (30ти ден во доцнење)</td>
                <td className="left-mini-container">0,00 ден</td>
              </tr>
              <tr>
                <td>Административниот надомест за управување со кредит во доцнење над 60 дена</td>
                <td className="left-mini-container">до 5.000,00 ден</td>
              </tr>
              <tr>
                <td>Административен надоместок за раскинување на договор за доцнење над 75 дена</td>
                <td className="left-mini-container">до 10.000,00 ден</td>
              </tr>
            </tbody>
          </table>

          <table className="tariff-table">
            <thead>
              <tr>
                <th className="section-title">3.Трошоци во случај на доцнење (нередовна отплата на кредитот)</th>
                <th id="right-mini">Износ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Еднократен надомест на секои седум дена доцнење за секој ануитет</td>
                <td className="left-mini-container" id="right-mini-2">900,00 ден</td>
              </tr>
            </tbody>
          </table>
        </section>

        <p className="footer-note">
          Надоместоците од точките 2 и 3 не се вклучени во пресметката на СВТ. Овие надоместоци самостојно или во комбинација со кој било друг надоместок не може да надминат 60% од износот на одобрениот кредит во текот на целиот период на важност на договорот.
        </p>
      </div>
    </div>
  );
};

export default TariffPage;
