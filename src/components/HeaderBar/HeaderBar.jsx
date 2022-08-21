import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ntstlogo from '../../assets/images/nettrainer_logo_64.png'
import './HeaderBar.css'

function HeaderBar() {
  return (
    <>
      <Navbar className='HBarBG'>
        <Container style={{justifyContent: 'end'}}>
          <Navbar.Brand href="/menu" className='HBar' >
            <img
              alt=""
              src={ntstlogo}
              width="30"
              height="30"
              margin-top="30px"
              style={{marginTop: "10px", marginRight: "10px"}}
              className="d-inline-block align-top"
            />
            <h1 className='HBar'> NET-TRAINER-ST</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderBar;