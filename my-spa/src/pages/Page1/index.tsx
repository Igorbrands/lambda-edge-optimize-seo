import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

export function Page1() {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }
  return (
    <Container>
      <Helmet>
        <title>Pagina 1</title>
      </Helmet>
      <h1>Page 1</h1>

      <button onClick={handleBack}>Back</button>
    </Container>
  );
}
