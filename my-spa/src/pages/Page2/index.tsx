import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import { Helmet } from 'react-helmet';

export function Page2() {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }
  return (
    <Container>
      <Helmet>
        <title>Pagina 2</title>
      </Helmet>
      <h1>Page 2</h1>
      <button onClick={handleBack}>Back</button>
    </Container>
  );
}
