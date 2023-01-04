import { PropsWithChildren } from "react";
import "./Card.scss";

type Props = {
  userIcon: string;
  count: number;
  label: string;
} & PropsWithChildren;

const Card = ({ userIcon, label, count }: Props) => {
  return (
    <div className="card dash-widget card_shadow">
      <div className="card-body">
        <span className="dashWidgetIcon">
          <img className="dashboard_placement" src={userIcon} alt="logo" />
        </span>
        <div className="dash-widget-info iconplacement">
          <span>
            <h3 className="dashboardcard_text_icon">{label}</h3>
          </span>
          <h4>
            <span className="dashboard_count">{count}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Card;
