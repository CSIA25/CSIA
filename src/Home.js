import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './home.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <h1>IB Biology Resources</h1>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <Link to="/home">Home</Link>
          <Link to="/notes">Notes</Link> {/* Updated to use Link for routing */}

        </nav>
      </header>

      <section className="hero-section">
        <h2 className="fade-in">Welcome to Your Learning Hub</h2>
        <p className="fade-in-delay">Your one-stop platform for premium IB Biology resources.</p>
      </section>

      <section className="resources-section">
        <h2>Resources to Excel</h2>
        <div className="resources-grid">
          <div className="resource-card slide-in">
            <h3>Study Guides</h3>
            <p>Access detailed study guides and notes to enhance your IB Biology preparation.</p>
            <a href="https://static1.squarespace.com/static/5e1db2db7fbc921eae5c733f/t/64105bd1d13ca0579fa769b8/1678793699205/ib-academy.nl+Biology+HL.pdf" target="_blank" rel="noopener noreferrer">Guide 1</a><br />
            <a href="https://blog.prepscholar.com/the-best-ib-biology-study-guide-and-notes-for-sl-and-hl" target="_blank" rel="noopener noreferrer">Guide 2</a>
          </div>

          <div className="resource-card slide-in">
            <h3>Textbooks</h3>
            <p>Download IB Biology textbooks from trusted sources for in-depth learning.</p>
            <a href="https://ebooks.papacambridge.com/directories/IB/IB-ebooks/upload/biology%20-%20course%20companion%20-%20andrew%20allott%20and%20david%20mindorff%20-%20oxford%202014.pdf" target="_blank" rel="noopener noreferrer">Textbook 1</a><br />
            <a href="https://ebooks.papacambridge.com/directories/IB/IB-ebooks/upload/biology%20-%20brenda%20walpole%20-%20second%20edition%20-%20cambridge%202014%20.pdf" target="_blank" rel="noopener noreferrer">Textbook 2</a>
          </div>

          <div className="resource-card slide-in">
            <h3>Tutorial Videos</h3>
            <p>Watch high-quality tutorials covering all IB Biology topics.</p>
            <a href="https://youtube.com/playlist?list=PLEnRjfGdbEtKRMdp_x5ywmUCRd6vVJNwU" target="_blank" rel="noopener noreferrer">Playlist 1</a><br />
            <a href="https://youtube.com/playlist?list=PLU9wEyzVsaZVsL95m4hoEGNEz5SBGucgD" target="_blank" rel="noopener noreferrer">Playlist 2</a>
          </div>

          <div className="resource-card slide-in">
            <h3>Revision Village</h3>
            <p>Practice questions and solutions designed for SL and HL students.</p>
            <a href="https://www.revisionvillage.com/ib-biology/sl/questionbank/" target="_blank" rel="noopener noreferrer">SL Question Bank</a><br />
            <a href="https://www.revisionvillage.com/ib-biology/hl/questionbank/" target="_blank" rel="noopener noreferrer">HL Question Bank</a>
          </div>

          <div className="resource-card slide-in">
            <h3>Past Papers</h3>
            <p>Prepare using past exam papers to understand patterns and structure.</p>
            <a href="https://www.savemyexams.com/dp/biology/ib/23/hl/" target="_blank" rel="noopener noreferrer">Save My Exams</a><br />
            <a href="https://www.revisiondojo.com/collections/23625757-1671-4be2-9d67-976cce6f4e57" target="_blank" rel="noopener noreferrer">Revision Dojo</a>
          </div>

          <div className="resource-card slide-in">
            <h3>Flashcards</h3>
            <p>Use flashcards to quickly revise important concepts and definitions.</p>
            <a href="https://quizlet.com/se/72094767/ib-biology-topic-2-cells-hlsl-flash-cards/" target="_blank" rel="noopener noreferrer">Topic 2: Cells</a><br />
            <a href="https://quizlet.com/851125537/11-ib-biology-hl-b11-molecules-carbohydrates-and-lipids-flash-cards/" target="_blank" rel="noopener noreferrer">Molecules and Lipids</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 IB Biology Resources. All rights reserved.</p>
        <Link to="/contact">Contact Us</Link> | <Link to="/terms">Terms of Service</Link>
      </footer>
    </div>
  );
};

export default Home;
