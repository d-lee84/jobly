import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Show CompanyCard
 * 
 * Prop:
 * - handle, name, description, numEmployees, logoUrl
 *    
 */

//  TODO: pass in handle, name, etc & destructure
function CompanyCard({ handle, name, description, numEmployees, logoUrl }) {
  // console.log('companyCard company prop is:', company);
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <div className="card text-left m-4">
          <div className="card-body">
            <h4>{name}
              {logoUrl && 
              <img src={logoUrl} alt={`${name}'s logo`} className="ml-5 float-right" />}
            </h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;