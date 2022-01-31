# Otimizando uma aplicação SPA sem SSR com Lambda@Edge e CloudFront

![flow chart](/.github/images/DynamicMeta-tags.png)

SPAs sem SSR tem um problema bem grande com SEO: o Javascript nao é executado em grande parte dos casos e não conseguimos mostrar conteúdos pra crawlers de empresas como facebook, google, bing, slack, entre outros;

Estrutura do projeto: CloudFront+S3 pra servir uma SPA, uma camada a mais (Lambda@Edge) pra servir os crawlers com o conteúdo dinâmico.
