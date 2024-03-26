import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp({src,title,content,btn,link}) {

  const btnClick = () => {
    window.open(link, '_blank');
  }
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={src} style={{ height: '500px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button  onClick={btnClick}>{btn}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;