
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardUser = ({el}) => {
    return(
        <Card as={Link} to={`/ProfilDesc/${el._id}`} style={{ textDecoration: 'none', width: '25%', transform: 'translateZ(1px)', opacity: '0.9', marginTop:'50px', marginLeft: '553px', textAlign:'center' }}>
        <Card.Body>
          <Card.Title ><span style={{fontWeight:'bold'}}>Name :</span>{el.name}</Card.Title>
          
          <Card.Text>
            <span style={{fontWeight:'bold'}}>Email : </span>{el.email}
          </Card.Text>

        </Card.Body>
      </Card>
    )
};

export default CardUser;