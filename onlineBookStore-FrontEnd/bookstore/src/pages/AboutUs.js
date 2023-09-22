import { Container } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';

const AboutUs = ()=>{
    return (<>
    <Container fluid className="mb-3" >
        <div>
            <h4 className="mb-4">Welcome to BookLand</h4>
            <p>Welcome to Book Land Online Book Store, where pages transform into adventures, and words weave the fabric of dreams. Mr. Dilanka, our visionary CEO and creator, embarked on a journey to bring the magic of books to your fingertips. We are more than just an online book store; we are your literary haven, your source of inspiration, and your gateway to new horizons.</p>
            <h5>Our Story</h5>
            <p>Every great tale has a beginning, and ours is a story of unwavering passion for books. Founded by Mr. Dilanka, a true bibliophile and a dreamer at heart, Book Land was born out of a deep love for the written word. Our team of dedicated book enthusiasts joined forces to make his dream a reality.</p>
            <h5>Our Mission</h5>
            <p>At Book Land, we are driven by a profound belief in the transformative power of books. They are not mere objects; they are vessels of knowledge, imagination, and wonder. Our mission is to share this magic with the world, one book at a time.</p>
            <h5>Discover, Engage, and Grow</h5>
            <p>We are not just a store; we are a community of book lovers. Dive into our blog, where we unravel the secrets of beloved authors, offer reading recommendations, and spark conversations around the books that move us. Join our book club, where literature comes to life through shared experiences. Connect with us on social media to be part of a vibrant and ever-evolving dialogue.</p>

            <h5>Together, We Write the Future</h5>
            <p>Our story continues to unfold, and we invite you to be a part of it. Explore the uncharted territories of literature, uncover hidden gems, and revel in the joy of reading. Together with Mr. Dilanka, we will script new adventures, breathe life into stories, and make Book Land Online Book Store your cherished literary companion.

Thank you for choosing us to be a part of your reading odyssey. Here's to the love of books, the joy of reading, and the limitless possibilities of the written word.</p>
<Figure className="Figure">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={require("../imges/CEO.jpeg")}
      />
      <Figure.Caption>
        <h5>Our Leader</h5>
        <h6>CEO</h6>
        <p>Mr.Dilank Wijesekara</p>
      </Figure.Caption>
    </Figure>
        </div>
    </Container>
    
    </>)
}

export default AboutUs;