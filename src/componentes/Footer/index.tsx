import './Footer.css';

const Rodape: React.FC = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/imagens/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/imagens/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/imagens/instagram.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;