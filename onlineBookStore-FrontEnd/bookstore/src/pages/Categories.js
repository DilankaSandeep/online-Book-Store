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
                    <ListGroup defaultActiveKey="/Fiction">
                        <ListGroup.Item action href="/Fiction/ScienceFic">
                            Science Fiction
                        </ListGroup.Item>
                        <ListGroup.Item action href="/Fiction/NonScienceFic" >
                           Non Science Fiction
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="school" title="School Book" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/School/primary">
                        <ListGroup.Item action href="/School/primary">
                            Grade one to Five
                        </ListGroup.Item>
                        <ListGroup.Item action href="/School/OL" >
                           Grade six to Eleven(O/L)
                        </ListGroup.Item>
                        <ListGroup.Item action href="/School/AL" >
                           Grade Twevel to Thriteen (A/L)
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="childerns" title="Childeren's Book" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/ChildernsBook/Picture">
                        <ListGroup.Item action href="/ChildernsBook/Picture">
                            Picture Books
                        </ListGroup.Item>
                        <ListGroup.Item action href="/ChildernsBook/EarlyReaders" >
                           Eraly Readers
                        </ListGroup.Item>
                        <ListGroup.Item action href="/ChildernsBook/MiddleGrade" >
                           Middle Grade
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="science" title="Science and Tecnolgy" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/Science&Tec/Science">
                        <ListGroup.Item action href="/Science&Tec/Science">
                            Science
                        </ListGroup.Item>
                        <ListGroup.Item action href="/Science&Tec/Tecnology" >
                           Tecnolgy
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="religious" title="Religious and Spirituality" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/R&S/S">
                        <ListGroup.Item action href="/R&S/R">
                            Religious
                        </ListGroup.Item>
                        <ListGroup.Item action href="/R&S/S" >
                           Spiritual
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="cookBook" title="Cook Books and Foods" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/C&F/C">
                        <ListGroup.Item action href="/C&F/C">
                            Cook Books
                        </ListGroup.Item>
                        <ListGroup.Item action href="/C&F/F" >
                           Foods
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="health" title="Health and Fitness" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/H&F/H">
                        <ListGroup.Item action href="/H&F/H">
                            Health
                        </ListGroup.Item>
                        <ListGroup.Item action href="/H&F/F" >
                           Fitness and Sport
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="art" title="Art" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/Art/G">
                        <ListGroup.Item action href="/Art/G">
                            Art Guides
                        </ListGroup.Item>
                        <ListGroup.Item action href="/Art/P" >
                           Photography
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="novels" title="Novels" className='tab'>
            <div>
                    <ListGroup defaultActiveKey="/Novel/AT">
                        <ListGroup.Item action href="/Novel/AT">
                            Adventure and Travel
                        </ListGroup.Item>
                        <ListGroup.Item action href="/Novel/H" >
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