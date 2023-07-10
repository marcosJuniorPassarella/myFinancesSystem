import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BalanceProps } from "../../models/interfaces/BalanceProps/BalanceProps";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

const Balance = ({ emitMovement, currentBalance }: BalanceProps) => {
  return (
    <div className="balance_container">
      <div className="balance_card">
        <header className="balance_header">
                  <FontAwesomeIcon icon={faDollar} color="#7af1a7" size="2x" />
                  <h2>Saldo</h2>
              </header>
              <h3></h3>
      </div>
    </div>
  );
};

export default Balance;
