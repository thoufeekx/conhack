import ContainerLayout from "../elements/ContainerLayout";
import Navbar from "../navbar/Navbar";
import Img from "../image/Img";
import MainLayout from "../elements/MainLayout";
import Footer from "../Footer/footer";

export default function Layout() {
  return (
    <ContainerLayout>
      <Navbar />
      <MainLayout>
        <MainLayout.Wrapper>
          <h1 className="title">Personalized Academic Support Chatbot</h1>
          <p>
            How it works ?  <br/>
            Upload the documents and click ok, AI does the rest

          
          </p>

          {/* <Img
            src="https://via.placeholder.com/600x300"
            title="Ejemplo de una imagen grande"
          /> */}

          
          

        </MainLayout.Wrapper>
        <Footer/>
      </MainLayout>
    </ContainerLayout>
  );
}
