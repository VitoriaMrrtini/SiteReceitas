import './SiteInicio.css';

const SiteInicio = () => {
    return (
        <>
            <div className="logo">
                <img src="src/assets/LogoConfeitaria.png" alt="logo" />
                <input type="text" />
                <button>Procurar</button>
            </div>
            <main>
                <section className="receitas">
                    <div className="receita">
                        <h2>Lasanha à Bolonhesa</h2>
                        <p>Uma deliciosa lasanha caseira com molho bolonhesa, queijo e massa fresca.</p>
                    </div>
                    <div className="receita">
                        <h2>Frango Assado com Batatas</h2>
                        <p>Uma refeição simples e reconfortante com frango suculento assado e batatas douradas.</p>
                    </div>
                    <div className="receita">
                        <h2>Sopa de Tomate e Manjericão</h2>
                        <p>Uma sopa clássica de tomate com um toque de manjericão fresco, perfeita para dias frios.</p>
                    </div>
                    <div className="receita">
                        <h2>Bolo de Chocolate</h2>
                        <p>Um bolo de chocolate incrivelmente rico e úmido, feito com cacau em pó de alta qualidade e coberto com uma generosa camada de ganache de chocolate.</p>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Sobre Nós</h4>
                            <p>Explore uma variedade de receitas deliciosas e inspire-se na cozinha com o nosso site. Descubra novas maneiras de preparar pratos incríveis e compartilhe suas próprias criações culinárias.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Links Úteis</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Receitas</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Conecte-se Conosco</h4>
                            <ul className="list-inline">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    &copy; 2024 Nome do Site. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
};

export default SiteInicio;
