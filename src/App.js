import {Nav,Navbar,OverlayTrigger,Popover,Pagination,Table,Tabs,Tab,Collapse,ProgressBar,Container,NavDropdown,Input,Button,Form ,FormControl,Breadcrumb,Row,Col
,Alert,Card,Overlay} from 'react-bootstrap';
import React,{Component} from 'react';



class App extends Component{

  constructor(props) {
   super(props);

         this.state = {
           open : true,
         };


      };

    render(){
      const pop =(
        <Popover title ='Informasi Website'>
        <Popover.Header>Informasi Website</Popover.Header>
        <Popover.Body>
        Website  ini dibuat untuk memudahkan dalam pencarian
        informasi terkini tentang berita Olahraga
        </Popover.Body>
        </Popover>
      )

      return(
        <div>
          <Navbar bg='dark' expand='lg' variant ='dark' style={{marginTop : '3px'}}>
            <Navbar.Brand href ='#home'  active style ={{color :'white',fontWeight :'bold',marginLeft : '25px'}}>Akses Sport</Navbar.Brand>
                <Nav className="me-auto" style ={{padding : '10px'}}>
                    <Nav.Link href ='/' >Home</Nav.Link>
                    <Nav.Link href ='/'>Berita</Nav.Link>
                    <Nav.Link href ='/'>Live Scores</Nav.Link>
                    <NavDropdown  title ='Piala & Liga'>
                      <NavDropdown .Item>Liga Inggris</NavDropdown.Item>
                      <NavDropdown .Item>Liga 1</NavDropdown.Item>
                      <NavDropdown .Item>Bundes Liga</NavDropdown.Item>
                    </NavDropdown >
                    <Nav.Link href ='/'>Transfer Pemain</Nav.Link>
                    <Nav.Link href ='/' >Tim</Nav.Link>
                </Nav>
                  <Form className ='d-flex' >
                    <FormControl className='w-20' style ={{marginRight : '15px'}}type = 'text' placeholder ='Search' />
                    <Button variant ='outline-info' style ={{marginRight : '15px'}} >Search</Button>{' '}
                  </Form>
          </Navbar>
          <Row >
            <Col md ={8}></Col>
            <Col md={2} style ={{marginTop :'0'}}>
              <Alert variant ='secondary' style={{height : '70%',width : '120%'}}>
                <Breadcrumb >
                  <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
                  <Breadcrumb.Item href='#'>Liga Inggris</Breadcrumb.Item>
                  <Breadcrumb.Item href='#' active >Transfer Pemain</Breadcrumb.Item>
                </Breadcrumb>
              </Alert>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col md ={6}>
                <h2>Rumor Transfer Pemain </h2>
              </Col>
              <Col md ={6}>
              </Col>
            </Row>
            <Tabs style ={{fontSize : '20px'}} defaultActiveKey ='Semua_Transfer' >
                <Tab eventKey ='Semua_Transfer' title = 'SemuaTransfer' active>
                  <Table style = {{paddingTop : '15px'}}>
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Nama Pemain </th>
                        <th> Tim </th>
                        <th> Transfer </th>
                        <th> Proses Transfer </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAROUANE FELLAINI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td><ProgressBar animated now={85} striped label= '85%' /> </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LOUIS NANI </td>
                        <td>SPORTING CP </td>
                        <td>ORLANDO CITY</td>
                        <td><ProgressBar animated now={55} striped label= '55%' /> </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MARIK HAMSIK </td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td><ProgressBar animated now={95} striped label= '95%' /> </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>SARDAR AZMOUN</td>
                        <td>RUBIN KAZAN</td>
                        <td>ZENIT ST PETERSBURG</td>
                        <td><ProgressBar animated now={100} striped label= '100%' /> </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>MICHY BATSHUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALACE</td>
                        <td><ProgressBar animated now={50} striped label= '50%' /> </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHIEVO</td>
                        <td><ProgressBar animated now={100}  striped label= '100%' /> </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventkey ='Liga Primer Inggris' title = 'Liga Primer Inggris' ></Tab>
                <Tab eventkey ='Serie A' title = 'Serie A' ></Tab>
                <Tab eventkey ='Divisi Primera' title = 'Divisi Primera' ></Tab>
                <Tab eventkey ='Bundesliga' title = 'Bundesliga' ></Tab>
                <Tab eventkey ='Liga 1 Indonesia' title = 'Liga 1 Indonesia' ></Tab>
            </Tabs>
            <br/> <br/>

            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item >{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item >{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
            <OverlayTrigger trigger='click' placement ='right' overlay ={pop}>
            <Button variant ='primary' size='lg'>Informasi </Button>
            </OverlayTrigger>{' '}
            <Button variant ='primary' size ='lg' onClick={() => this.setState ({open : ! this.state.open})} >Versi Website</Button>
            <Collapse in ={this.state.open} style ={{marginLeft : '125px'}}>
              <p>Akses Sport V1.0</p>
            </Collapse>

          </Container>


        </div>
      )
    }


  }



export default App;
