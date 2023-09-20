import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';

const Categories = () => {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
      };

    return (
        <>
        <div className='mb-4 category'>
            <h2>Search By Categories and Sub Categories</h2>
        </div>
        <Tabs
            defaultActiveKey="fiction"
            id="uncontrolled-tab-example"
            className="mb-3 tabs"
        >
            <Tab eventKey="fiction" title="Fiction" className='tab'>
                <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Science Fiction
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Non Science Fiction
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="school" title="School Book" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Grade one to Five
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Grade six to Eleven(O/L)
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" >
                           Grade Twevel to Thriteen (A/L)
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="childerns" title="Childeren's Book" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Picture Books
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Eraly Readers
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" >
                           Middle Grade
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="science" title="Science and Tecnolgy" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Science
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Tecnolgy
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="religious" title="Religious and Spirituality" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Religious
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Spiritual
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="cookBook" title="Cook Books and Foods" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Cook Books
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Foods
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="health" title="Health and Fitness" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Health
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Fitness and Sport
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="art" title="Art" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Art Guides
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Photography
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="novels" title="Novels" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Adventure and Travel
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" >
                           Horror
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
        </Tabs>
        </>
    );
}
export default Categories;